import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getWork } from "@/content/cases";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { AutoVideo } from "@/components/ui/AutoVideo";
import { Tag } from "@/components/ui/Tag";
import { CtaBand } from "@/components/sections/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "work", "/proyectos");
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "work" });
  const { cases, others, upcoming } = getWork(locale);

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      {/* Case studies: one large card each, the clip plays as it scrolls into view */}
      <section className="mx-auto max-w-6xl space-y-8 px-4 pb-24 md:px-6">
        {cases.map((cs) => {
          const cover = cs.videos[cs.cover];
          return (
            <FadeIn key={cs.slug}>
              <Link
                href={{ pathname: "/proyectos/[slug]", params: { slug: cs.slug } }}
                className="group block overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-accent/50"
              >
                <div className="relative aspect-video overflow-hidden border-b border-line bg-bg">
                  <AutoVideo src={cover.src} poster={cover.poster} label={cs.title} />
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-10">
                  <div className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {cs.name}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-4xl">
                      {cs.title}
                    </h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    {t("viewCase")}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </section>

      {/* Smaller work and what is being built */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("othersTitle")}
            </p>
            <Stagger className="mt-5 space-y-3">
              {others.map((project) => (
                <StaggerItem key={project.url}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-card border border-line bg-bg px-5 py-4 transition-colors hover:border-accent/50"
                  >
                    <span>
                      <span className="block font-medium group-hover:text-accent">
                        {project.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-xs text-muted">
                        {project.kind}
                      </span>
                    </span>
                    <ArrowUpRight size={18} className="shrink-0 text-muted group-hover:text-accent" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("upcomingTitle")}
            </p>
            <Stagger className="mt-5 space-y-3">
              {upcoming.map((project) => (
                <StaggerItem key={project.name}>
                  <div className="flex items-center justify-between gap-4 rounded-card border border-dashed border-line px-5 py-4">
                    <span>
                      <span className="block font-medium text-muted">{project.name}</span>
                      <span className="mt-0.5 block font-mono text-xs text-muted/70">
                        {project.kind}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {t("upcomingBadge")}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand title={t("ctaBand.title")} text={t("ctaBand.text")} cta={t("ctaBand.cta")} />
    </>
  );
}
