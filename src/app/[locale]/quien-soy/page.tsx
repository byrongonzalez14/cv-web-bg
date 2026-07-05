import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Globe, MapPin, Wifi } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getCvData } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { buttonClass } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "about", "/quien-soy");
}

interface Principle {
  title: string;
  text: string;
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "about" });
  const { profile, experience, languages } = getCvData(locale);
  const principles = t.raw("how.principles") as Principle[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} />

      {/* Narrative + portrait */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <FadeIn className="md:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line">
              <Image
                src="/images/hero/hero-portrait.png"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent"
              />
            </div>
          </FadeIn>
          <div className="space-y-6 text-base leading-relaxed text-muted md:col-span-3 md:text-lg">
            <FadeIn delay={0.1}>
              <p>{t("intro1")}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>{t("intro2")}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-fg">{t("intro3")}</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-card border border-line bg-surface p-4">
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                    <MapPin size={14} className="text-accent" />
                    {t("info.location")}
                  </p>
                  <p className="mt-2 text-sm text-fg">{profile.location}</p>
                </div>
                <div className="rounded-card border border-line bg-surface p-4">
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                    <Globe size={14} className="text-accent" />
                    {t("info.languages")}
                  </p>
                  <p className="mt-2 text-sm text-fg">
                    {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
                  </p>
                </div>
                <div className="rounded-card border border-line bg-surface p-4">
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                    <Wifi size={14} className="text-accent" />
                    {t("info.availability")}
                  </p>
                  <p className="mt-2 text-sm text-fg">{profile.remote}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Working principles */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionHeading eyebrow={t("how.eyebrow")} title={t("how.title")} />
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <StaggerItem key={principle.title}>
                <div className="h-full rounded-card border border-line bg-bg p-6">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {principle.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Condensed journey */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <FadeIn>
          <SectionHeading
            eyebrow={t("journey.eyebrow")}
            title={t("journey.title")}
          />
        </FadeIn>
        <Stagger className="mt-12 space-y-0">
          {experience.map((exp) => (
            <StaggerItem key={exp.slug}>
              <div className="group grid gap-2 border-l border-line py-6 pl-6 transition-colors hover:border-accent md:grid-cols-[220px_1fr] md:gap-8">
                <p className="font-mono text-xs text-muted">{exp.period}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">
                    {exp.company}
                    {exp.client ? ` — ${exp.client}` : ""}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn>
          <Link href="/experiencia" className={buttonClass("ghost", "mt-10")}>
            {t("journey.cta")}
            <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </section>

      <CtaBand
        title={t("ctaBand.title")}
        text={t("ctaBand.text")}
        cta={t("ctaBand.cta")}
      />
    </>
  );
}
