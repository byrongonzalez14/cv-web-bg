import { findCountry, OTHER_COUNTRY } from "./countries";

/**
 * Contact form rules. This module is the single source of truth: the form
 * runs it in the browser for instant feedback and the server action runs it
 * again before sending anything (never trust the client).
 */

export const SERVICE_OPTIONS = [
  "ai-automation",
  "business-analysis",
  "integration",
  "web-development",
  "other",
] as const;

export const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  companyMax: 120,
  messageMin: 10,
  messageMax: 2000,
} as const;

export interface ContactValues {
  name: string;
  email: string;
  phoneCountry: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export type ContactField = keyof ContactValues;

/** Keys of `contact.form.validation` in messages/{es,en}.json. */
export type ContactErrorKey =
  | "nameRequired"
  | "nameInvalid"
  | "emailRequired"
  | "emailInvalid"
  | "phoneInvalid"
  | "phoneIntl"
  | "companyLong"
  | "serviceInvalid"
  | "messageRequired"
  | "messageShort"
  | "messageLong";

export type ContactErrors = Partial<Record<ContactField, ContactErrorKey>>;

export const EMPTY_VALUES: ContactValues = {
  name: "",
  email: "",
  phoneCountry: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

// Letters of any alphabet plus the separators real names use.
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s'’.-]*$/u;
// Pragmatic email check: one @, a dotted domain, a 2+ letter TLD.
const EMAIL_RE =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

const digitsOf = (value: string) => value.replace(/\D/g, "");

export function normalize(values: ContactValues): ContactValues {
  return {
    name: values.name.trim().replace(/\s+/g, " "),
    email: values.email.trim().toLowerCase(),
    phoneCountry: values.phoneCountry.trim(),
    phone: values.phone.trim(),
    company: values.company.trim().replace(/\s+/g, " "),
    service: values.service.trim(),
    message: values.message.trim(),
  };
}

export function validateField(
  field: ContactField,
  raw: ContactValues,
): ContactErrorKey | undefined {
  const v = normalize(raw);

  switch (field) {
    case "name":
      if (!v.name) return "nameRequired";
      if (
        v.name.length < LIMITS.nameMin ||
        v.name.length > LIMITS.nameMax ||
        !NAME_RE.test(v.name)
      ) {
        return "nameInvalid";
      }
      return undefined;

    case "email":
      if (!v.email) return "emailRequired";
      if (
        v.email.length > LIMITS.emailMax ||
        v.email.includes("..") ||
        !EMAIL_RE.test(v.email)
      ) {
        return "emailInvalid";
      }
      return undefined;

    case "phone": {
      // Optional: only checked when the visitor typed something.
      if (!v.phone) return undefined;
      const digits = digitsOf(v.phone);
      if (v.phoneCountry === OTHER_COUNTRY) {
        return /^\+/.test(v.phone) && digits.length >= 8 && digits.length <= 15
          ? undefined
          : "phoneIntl";
      }
      const country = findCountry(v.phoneCountry);
      if (!country) return "phoneInvalid";
      if (/[^\d\s().-]/.test(v.phone)) return "phoneInvalid";
      return digits.length >= country.min && digits.length <= country.max
        ? undefined
        : "phoneInvalid";
    }

    case "company":
      return v.company.length > LIMITS.companyMax ? "companyLong" : undefined;

    case "service":
      if (!v.service) return undefined;
      return (SERVICE_OPTIONS as readonly string[]).includes(v.service)
        ? undefined
        : "serviceInvalid";

    case "message":
      if (!v.message) return "messageRequired";
      if (v.message.length < LIMITS.messageMin) return "messageShort";
      if (v.message.length > LIMITS.messageMax) return "messageLong";
      return undefined;

    default:
      return undefined;
  }
}

const FIELDS: ContactField[] = [
  "name",
  "email",
  "phone",
  "company",
  "service",
  "message",
];

export function validateContact(raw: ContactValues): {
  values: ContactValues;
  errors: ContactErrors;
  valid: boolean;
} {
  const errors: ContactErrors = {};
  for (const field of FIELDS) {
    const error = validateField(field, raw);
    if (error) errors[field] = error;
  }
  return {
    values: normalize(raw),
    errors,
    valid: Object.keys(errors).length === 0,
  };
}

/** "+57 3150397431", or "" when no phone was given. */
export function formatPhone(values: ContactValues): string {
  const v = normalize(values);
  if (!v.phone) return "";
  if (v.phoneCountry === OTHER_COUNTRY) return `+${digitsOf(v.phone)}`;
  const country = findCountry(v.phoneCountry);
  return country ? `+${country.dial} ${digitsOf(v.phone)}` : "";
}
