"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { findCountry } from "@/lib/contact/countries";
import {
  formatPhone,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact/validation";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  /** Field-level validation errors (keys of contact.form.validation). */
  fieldErrors?: ContactErrors;
  /** Form-level failure: bot check rejected or the email could not be sent. */
  formError?: "captcha" | "send";
}

const SERVICE_LABELS: Record<string, string> = {
  "ai-automation": "IA y automatización",
  "business-analysis": "Análisis de negocio",
  integration: "Integración de sistemas",
  "web-development": "Desarrollo web",
  other: "Otro / No está seguro",
};

/**
 * Cloudflare Turnstile server-side check. When TURNSTILE_SECRET_KEY is not
 * configured the check is skipped, so the form keeps working (protected only
 * by the honeypot) until the keys are added.
 */
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const forwardedFor = (await headers()).get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim();

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body, cache: "no-store" },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification failed:", err);
    return false;
  }
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const field = (name: string) => String(formData.get(name) ?? "");

  // Honeypot triggered → pretend success, send nothing
  if (field("website")) {
    return { status: "success" };
  }

  const raw: ContactValues = {
    name: field("name"),
    email: field("email"),
    phoneCountry: field("phoneCountry"),
    phone: field("phone"),
    company: field("company"),
    service: field("service"),
    message: field("message"),
  };

  const { values, errors, valid } = validateContact(raw);
  if (!valid) {
    return { status: "error", fieldErrors: errors };
  }

  if (!(await verifyTurnstile(field("cf-turnstile-response")))) {
    return { status: "error", formError: "captcha" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return { status: "error", formError: "send" };
  }

  const phone = formatPhone(values);
  const country = findCountry(values.phoneCountry);
  const service = SERVICE_LABELS[values.service];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Web <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "byrongonzalezing@gmail.com",
      replyTo: values.email,
      subject: `[Web] ${values.name}${service ? ` — ${service}` : ""}`,
      text: [
        `Nombre: ${values.name}`,
        `Email: ${values.email}`,
        phone ? `Teléfono: ${phone}${country ? ` (${country.es})` : ""}` : null,
        values.company ? `Empresa: ${values.company}` : null,
        service ? `Servicio: ${service}` : null,
        "",
        values.message,
      ]
        .filter((line): line is string => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", formError: "send" };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form error:", err);
    return { status: "error", formError: "send" };
  }
}
