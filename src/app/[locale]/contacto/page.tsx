import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail } from "lucide-react";
import { getCvData } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "contact", "/contacto");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contact" });
  const { profile } = getCvData(locale);

  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    t("direct.whatsappMessage"),
  )}`;

  const channelClass =
    "group flex items-center gap-4 rounded-card border border-line bg-surface p-5 transition-colors hover:border-accent/50";

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* Direct channels */}
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("direct.title")}
            </h2>
            <div className="mt-5 space-y-3">
              <TrackedLink
                href={`mailto:${profile.email}`}
                event="click_email"
                className={channelClass}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-sm font-medium group-hover:text-accent">
                    {t("direct.email")}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs text-muted">
                    {profile.email}
                  </span>
                </span>
              </TrackedLink>

              <TrackedLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                event="click_whatsapp"
                className={channelClass}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent">
                  <WhatsAppIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-medium group-hover:text-accent">
                    {t("direct.whatsapp")}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs text-muted">
                    {profile.phone}
                  </span>
                </span>
              </TrackedLink>

              <TrackedLink
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                event="click_linkedin"
                className={channelClass}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent">
                  <LinkedInIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-medium group-hover:text-accent">
                    {t("direct.linkedin")}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs text-muted">
                    linkedin.com/in/byrongonzalezing
                  </span>
                </span>
              </TrackedLink>
            </div>

            <p className="mt-6 font-mono text-xs leading-relaxed text-muted">
              {t("availability")}
            </p>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-card border border-line bg-surface p-6 md:p-8">
              <h2 className="mb-6 font-display text-lg font-semibold">
                {t("form.title")}
              </h2>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
