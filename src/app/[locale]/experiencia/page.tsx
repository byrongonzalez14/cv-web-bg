import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Award, Download, GraduationCap } from "lucide-react";
import { getCvData } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { buttonClass } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { TrackedLink } from "@/components/ui/TrackedLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "experience", "/experiencia");
}

const CV_FILES = {
  es: "/cv/CV-ES-TBA-BYRON-GONZALEZ-2026.pdf",
  en: "/cv/CV-EN-TBA-BYRON-GONZALEZ-2026.pdf",
};

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "experience" });
  const { experience, skillCategories, tools, certifications, education, languages } =
    getCvData(locale);

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* CV downloads */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <FadeIn>
          <div className="flex flex-wrap gap-4">
            <TrackedLink
              href={CV_FILES.es}
              download
              event="file_download"
              eventParams={{ file_name: "CV-ES", file_extension: "pdf" }}
              className={buttonClass("primary")}
            >
              <Download size={18} />
              {t("downloadEs")}
            </TrackedLink>
            <TrackedLink
              href={CV_FILES.en}
              download
              event="file_download"
              eventParams={{ file_name: "CV-EN", file_extension: "pdf" }}
              className={buttonClass("ghost")}
            >
              <Download size={18} />
              {t("downloadEn")}
            </TrackedLink>
          </div>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <div className="space-y-0">
          {experience.map((exp) => (
            <FadeIn key={exp.slug}>
              <article className="relative border-l border-line py-8 pl-8 md:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg"
                />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-muted">
                      {exp.period}
                      {exp.mode ? ` · ${exp.mode}` : ""}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                      {exp.role}
                    </h2>
                    <p className="mt-1 text-sm text-accent">
                      {exp.company}
                      {exp.client ? ` — ${exp.client}` : ""}
                    </p>
                  </div>
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={exp.client ?? exp.company}
                      width={240}
                      height={36}
                      className="h-8 w-auto opacity-60 grayscale"
                    />
                  ) : null}
                </div>
                <ul className="mt-4 max-w-3xl space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow={t("skills.eyebrow")}
              title={t("skills.title")}
            />
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <div className="h-full rounded-card border border-line bg-bg p-6">
                  <h3 className="font-display text-base font-semibold">
                    {category.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mt-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("toolsTitle")}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  title={tool.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg p-2 transition-colors hover:border-accent/50"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={28}
                    height={28}
                    className="h-full w-auto"
                  />
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education & certifications */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <FadeIn>
          <SectionHeading
            eyebrow={t("education.eyebrow")}
            title={t("education.title")}
          />
        </FadeIn>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <FadeIn>
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <GraduationCap size={20} className="text-accent" />
              {t("education.educationTitle")}
            </h3>
            <div className="mt-4 space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-card border border-line bg-surface p-5"
                >
                  <p className="font-medium">{edu.degree}</p>
                  <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 flex items-center gap-2 font-display text-lg font-semibold">
              <Award size={20} className="text-accent" />
              {t("languagesTitle")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Tag key={lang.name} className="px-4 py-2 text-sm">
                  {lang.name} · {lang.level}
                </Tag>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <Award size={20} className="text-accent" />
              {t("education.certificationsTitle")}
            </h3>
            <div className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-card border border-line bg-surface p-4 transition-colors hover:border-accent/50"
                >
                  {cert.badge ? (
                    <Image
                      src={cert.badge}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 object-contain"
                    />
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line font-mono text-xs text-accent">
                      {cert.year}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium group-hover:text-accent">
                      {cert.name}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        title={t("ctaBand.title")}
        text={t("ctaBand.text")}
        cta={t("ctaBand.cta")}
      />
    </>
  );
}
