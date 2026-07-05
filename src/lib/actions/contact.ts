"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().trim().min(2, "name"),
  email: z.string().trim().email("email"),
  company: z.string().trim().max(200).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "message").max(5000),
  // Honeypot: real users never fill this
  website: z.string().max(0).optional().or(z.literal("")),
});

export interface ContactFormState {
  status: "idle" | "success" | "error";
  /** Field-level validation error keys (name | email | message) */
  fieldErrors?: Record<string, string>;
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    service: String(formData.get("service") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot triggered → pretend success, send nothing
  if (raw.website) {
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "");
      if (field && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return { status: "error", fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return { status: "error" };
  }

  const { name, email, company, service, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Web <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "byrongonzalezing@gmail.com",
      replyTo: email,
      subject: `[Web] ${name}${service ? ` — ${service}` : ""}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        company ? `Empresa: ${company}` : null,
        service ? `Servicio: ${service}` : null,
        "",
        message,
      ]
        .filter((line): line is string => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error" };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form error:", err);
    return { status: "error" };
  }
}
