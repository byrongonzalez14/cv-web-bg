"use client";

import { useActionState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Send } from "lucide-react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/lib/actions/contact";
import { track } from "@/lib/analytics";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const trackedRef = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !trackedRef.current) {
      trackedRef.current = true;
      track("generate_lead", { method: "contact_form" });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-card border border-accent/30 bg-surface p-8 text-center">
        <CheckCircle2 size={40} className="text-accent" />
        <p className="max-w-sm text-fg">{t("success")}</p>
      </div>
    );
  }

  const fieldError = (field: string) =>
    state.status === "error" && state.fieldErrors?.[field]
      ? t(`validation.${state.fieldErrors[field]}`)
      : null;

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t("namePlaceholder")}
            className={cn(inputClass, fieldError("name") && "border-red-400")}
          />
          {fieldError("name") ? (
            <p className="mt-1 text-xs text-red-400">{fieldError("name")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className={cn(inputClass, fieldError("email") && "border-red-400")}
          />
          {fieldError("email") ? (
            <p className="mt-1 text-xs text-red-400">{fieldError("email")}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm text-muted">
            {t("company")}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder={t("companyPlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm text-muted">
            {t("service")}
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              {t("servicePlaceholder")}
            </option>
            <option value="ai-automation">{t("serviceOptions.ai")}</option>
            <option value="business-analysis">
              {t("serviceOptions.analysis")}
            </option>
            <option value="integration">
              {t("serviceOptions.integration")}
            </option>
            <option value="web-development">{t("serviceOptions.web")}</option>
            <option value="other">{t("serviceOptions.other")}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("messagePlaceholder")}
          className={cn(
            inputClass,
            "resize-y",
            fieldError("message") && "border-red-400",
          )}
        />
        {fieldError("message") ? (
          <p className="mt-1 text-xs text-red-400">{fieldError("message")}</p>
        ) : null}
      </div>

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

      {state.status === "error" && !state.fieldErrors ? (
        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {t("error")}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={buttonClass("primary", "w-full disabled:opacity-60")}
      >
        <Send size={16} />
        {pending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
