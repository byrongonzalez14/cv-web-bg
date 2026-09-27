"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  LoaderCircle,
  Send,
} from "lucide-react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/lib/actions/contact";
import {
  COUNTRIES,
  OTHER_COUNTRY,
  defaultCountry,
  findCountry,
} from "@/lib/contact/countries";
import {
  EMPTY_VALUES,
  LIMITS,
  SERVICE_OPTIONS,
  validateContact,
  validateField,
  type ContactField,
  type ContactValues,
} from "@/lib/contact/validation";
import { track } from "@/lib/analytics";
import { Link } from "@/i18n/navigation";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Turnstile } from "./Turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

/** Order used to move focus to the first field with an error. */
const FOCUS_ORDER: ContactField[] = [
  "name",
  "email",
  "phone",
  "company",
  "message",
];

const SERVICE_LABEL_KEYS: Record<(typeof SERVICE_OPTIONS)[number], string> = {
  "ai-automation": "ai",
  "business-analysis": "analysis",
  integration: "integration",
  "web-development": "web",
  other: "other",
};

// 16px on phones (iOS zooms into smaller inputs), 14px from md up.
const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-fg placeholder:text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 md:text-sm";
const inputErrorClass =
  "border-red-400/70 focus:border-red-400 focus:ring-red-400/20";

type ResponseState = ContactFormState & { responses: number };

const initialState: ResponseState = { status: "idle", responses: 0 };

async function submitAction(
  prev: ResponseState,
  formData: FormData,
): Promise<ResponseState> {
  const result = await sendContactMessage(prev, formData);
  return { ...result, responses: prev.responses + 1 };
}

function Field({
  id,
  label,
  hint,
  error,
  counter,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string | null;
  counter?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-muted">
          {label}
          {hint ? <span className="text-muted/60"> · {hint}</span> : null}
        </label>
        {counter ? (
          <span className="font-mono text-xs text-muted/60" aria-hidden="true">
            {counter}
          </span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-start gap-1.5 text-xs text-red-300"
        >
          <CircleAlert size={14} className="mt-px shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactFormFields({ onSendAnother }: { onSendAnother: () => void }) {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [state, formAction, pending] = useActionState(
    submitAction,
    initialState,
  );

  const [values, setValues] = useState<ContactValues>(() => ({
    ...EMPTY_VALUES,
    phoneCountry: defaultCountry(locale),
  }));
  const [touched, setTouched] = useState<ReadonlySet<ContactField>>(new Set());
  // Fields edited after the last server response: their server error is stale.
  const [edited, setEdited] = useState<ReadonlySet<ContactField>>(new Set());
  const [captchaPending, setCaptchaPending] = useState(false);
  const trackedRef = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !trackedRef.current) {
      trackedRef.current = true;
      track("generate_lead", { method: "contact_form" });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-80 flex-col items-center justify-center gap-4 rounded-card border border-accent/30 bg-bg/40 p-8 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 size={30} />
        </span>
        <p className="font-display text-xl font-semibold">
          {t("successTitle")}
        </p>
        <p className="max-w-sm text-sm text-muted">{t("success")}</p>
        <button
          type="button"
          onClick={onSendAnother}
          className={buttonClass("ghost", "mt-2 px-5 py-2.5 text-sm")}
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  const set = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setEdited((current) => new Set(current).add(field));
    setCaptchaPending(false);
  };

  const touch = (field: ContactField) =>
    setTouched((current) => new Set(current).add(field));

  const errorFor = (field: ContactField): string | null => {
    const clientError = touched.has(field)
      ? validateField(field, values)
      : undefined;
    const serverError = edited.has(field)
      ? undefined
      : state.fieldErrors?.[field];
    const key = clientError ?? serverError;
    return key ? t(`validation.${key}`) : null;
  };

  const fieldProps = (field: ContactField) => {
    const error = errorFor(field);
    return {
      id: field,
      name: field,
      value: values[field],
      onBlur: () => touch(field),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${field}-error` : undefined,
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;

    setTouched(new Set(FOCUS_ORDER));
    const { errors, valid } = validateContact(values);
    if (!valid) {
      const first = FOCUS_ORDER.find((field) => errors[field]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    const formData = new FormData(event.currentTarget);
    if (TURNSTILE_SITE_KEY && !formData.get("cf-turnstile-response")) {
      setCaptchaPending(true);
      return;
    }

    setEdited(new Set());
    startTransition(() => formAction(formData));
  };

  const country = findCountry(values.phoneCountry);
  const isOtherCountry = values.phoneCountry === OTHER_COUNTRY;
  const countryName = (iso: string) => {
    const match = findCountry(iso);
    return match ? (locale === "en" ? match.en : match.es) : "";
  };

  const formError = captchaPending
    ? t("captchaPending")
    : state.status === "error" && state.formError === "captcha"
      ? t("errorCaptcha")
      : state.status === "error" && state.formError === "send"
        ? t("error")
        : null;

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={t("name")} error={errorFor("name")}>
          <input
            {...fieldProps("name")}
            type="text"
            required
            autoComplete="name"
            maxLength={LIMITS.nameMax}
            placeholder={t("namePlaceholder")}
            onChange={(e) => set("name", e.target.value)}
            className={cn(inputClass, errorFor("name") && inputErrorClass)}
          />
        </Field>

        <Field id="email" label={t("email")} error={errorFor("email")}>
          <input
            {...fieldProps("email")}
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            maxLength={LIMITS.emailMax}
            placeholder={t("emailPlaceholder")}
            onChange={(e) => set("email", e.target.value)}
            className={cn(inputClass, errorFor("email") && inputErrorClass)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="phone"
          label={t("phone")}
          hint={t("optional")}
          error={errorFor("phone")}
        >
          <div
            className={cn(
              "flex rounded-xl border border-line bg-bg transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20",
              errorFor("phone") &&
                "border-red-400/70 focus-within:border-red-400 focus-within:ring-red-400/20",
            )}
          >
            {/* Compact label on top of a native select: the OS picker does
                the heavy lifting (search, scrolling, accessibility). */}
            <div className="relative flex shrink-0 items-center gap-1.5 border-r border-line pl-4 pr-3 font-mono text-sm text-fg">
              <span aria-hidden="true">
                {isOtherCountry
                  ? t("otherCountryShort")
                  : `${country?.iso ?? ""} +${country?.dial ?? ""}`}
              </span>
              <ChevronDown
                size={14}
                className="text-muted"
                aria-hidden="true"
              />
              <select
                name="phoneCountry"
                aria-label={t("phoneCountry")}
                autoComplete="country"
                value={values.phoneCountry}
                onChange={(e) => set("phoneCountry", e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.iso} value={c.iso}>
                    {countryName(c.iso)} (+{c.dial})
                  </option>
                ))}
                <option value={OTHER_COUNTRY}>{t("otherCountry")}</option>
              </select>
            </div>
            <input
              {...fieldProps("phone")}
              type="tel"
              inputMode="tel"
              autoComplete={isOtherCountry ? "tel" : "tel-national"}
              maxLength={20}
              placeholder={
                isOtherCountry
                  ? t("phoneOtherPlaceholder")
                  : t("phonePlaceholder")
              }
              onChange={(e) =>
                set("phone", e.target.value.replace(/[^\d\s()+.-]/g, ""))
              }
              className="w-full min-w-0 rounded-r-xl bg-transparent px-4 py-3 text-base text-fg placeholder:text-muted/50 focus:outline-none md:text-sm"
            />
          </div>
        </Field>

        <Field
          id="company"
          label={t("company")}
          hint={t("optional")}
          error={errorFor("company")}
        >
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            maxLength={LIMITS.companyMax}
            placeholder={t("companyPlaceholder")}
            onChange={(e) => set("company", e.target.value)}
            className={cn(inputClass, errorFor("company") && inputErrorClass)}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm text-muted">
          {t("service")}
          <span className="text-muted/60"> · {t("optional")}</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name="service"
                value={option}
                checked={values.service === option}
                onChange={() => set("service", option)}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {t(`serviceOptions.${SERVICE_LABEL_KEYS[option]}`)}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        id="message"
        label={t("message")}
        error={errorFor("message")}
        counter={`${values.message.length}/${LIMITS.messageMax}`}
      >
        <textarea
          {...fieldProps("message")}
          rows={5}
          required
          maxLength={LIMITS.messageMax}
          placeholder={t("messagePlaceholder")}
          onChange={(e) => set("message", e.target.value)}
          className={cn(
            inputClass,
            "min-h-32 resize-y",
            errorFor("message") && inputErrorClass,
          )}
        />
      </Field>

      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {TURNSTILE_SITE_KEY ? (
        <Turnstile
          siteKey={TURNSTILE_SITE_KEY}
          locale={locale}
          resetSignal={state.responses}
        />
      ) : null}

      {formError ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          <CircleAlert size={16} className="mt-0.5 shrink-0" />
          {formError}
        </p>
      ) : null}

      <div className="space-y-3">
        <button
          type="submit"
          disabled={pending}
          className={buttonClass(
            "primary",
            "w-full disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {pending ? (
            <LoaderCircle size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {pending ? t("sending") : t("submit")}
        </button>
        <p className="text-center text-xs text-muted/70">
          {t.rich("privacyNote", {
            link: (chunks) => (
              <Link
                href="/privacidad"
                className="underline underline-offset-2 hover:text-accent"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  // Remounting is the way to reset the action state for "send another".
  const [formKey, setFormKey] = useState(0);
  return (
    <ContactFormFields
      key={formKey}
      onSendAnother={() => setFormKey((key) => key + 1)}
    />
  );
}
