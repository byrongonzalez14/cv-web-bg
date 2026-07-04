import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getServices } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { faqJsonLd, JsonLd, professionalServiceJsonLd } from "@/lib/jsonld";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { buttonClass } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "services", "/servicios");
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "services" });
  const tHome = await getTranslations({ locale, namespace: "home.ctaBand" });
  const { services, caseStudies, process, faqs } = getServices(locale);

  return (
    <>
      <JsonLd data={professionalServiceJsonLd(locale)} />
      <JsonLd data={faqJsonLd(locale)} />

      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Service blocks */}
      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-24 md:px-6">
        {services.map((service, i) => (
          <FadeIn key={service.slug}>
            <article
              id={service.slug}
              className="scroll-mt-24 rounded-card border border-line bg-surface p-6 md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                <div>
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                    {t("problemLabel")}
                  </p>
                  <p className="mt-2 leading-relaxed text-muted">
                    {service.problem}
                  </p>

                  <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
                    {t("includesLabel")}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6 lg:border-l lg:border-line lg:pl-8">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                      {t("toolsLabel")}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {service.tools.map((tool) =>
                        tool.icon ? (
                          <span
                            key={tool.name}
                            title={tool.name}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg p-1.5"
                          >
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              width={24}
                              height={24}
                              className="h-full w-auto"
                            />
                          </span>
                        ) : (
                          <Tag key={tool.name}>{tool.name}</Tag>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                      {t("engagementLabel")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.engagement}
                    </p>
                  </div>

                  {service.examples?.length ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">
                        {t("examplesLabel")}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {service.examples.map((example) => (
                          <li key={example.url}>
                            <a
                              href={example.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                            >
                              {example.name}
                              <ExternalLink size={13} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <Link
                    href="/contacto"
                    className={buttonClass("ghost", "mt-auto w-full text-sm")}
                  >
                    {t("cta")}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </section>

      {/* Case studies */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow={t("cases.eyebrow")}
              title={t("cases.title")}
              subtitle={t("cases.subtitle")}
            />
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug}>
                <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {cs.sector}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {cs.title}
                  </h3>

                  <div className="mt-5 border-y border-line py-4">
                    <p className="font-display text-3xl font-bold text-accent">
                      {cs.metric}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                      {cs.metricLabel}
                    </p>
                  </div>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-accent">
                        {t("cases.challengeLabel")}
                      </p>
                      <p className="mt-1 text-muted">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-accent">
                        {t("cases.solutionLabel")}
                      </p>
                      <p className="mt-1 text-muted">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-accent">
                        {t("cases.outcomeLabel")}
                      </p>
                      <p className="mt-1 text-muted">{cs.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {cs.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow={t("process.eyebrow")}
              title={t("process.title")}
            />
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-card border border-line bg-bg p-6">
                  <span className="font-display text-4xl font-bold text-accent/20">
                    {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-24 md:px-6 md:py-32">
        <FadeIn>
          <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        </FadeIn>
        <FadeIn delay={0.15} className="mt-10">
          <Accordion items={faqs} />
        </FadeIn>
      </section>

      <CtaBand
        title={tHome("title")}
        text={tHome("text")}
        cta={tHome("cta")}
      />
    </>
  );
}
