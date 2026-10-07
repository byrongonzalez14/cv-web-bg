import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { CASE_SLUGS, getCase, getCvData } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { AutoVideo } from "@/components/ui/AutoVideo";
import { Tag } from "@/components/ui/Tag";
import { CtaBand } from "@/components/sections/CtaBand";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CASE_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const cs = getCase(locale, slug);
  if (!cs) return {};
  return buildMetadata(locale, {
    title: cs.meta.title,
    description: cs.meta.description,
    href: { pathname: "/proyectos/[slug]", params: { slug } },
    image: cs.videos[cs.cover].poster,
  });
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const cs = getCase(locale, slug);
  if (!cs) notFound();

  const t = await getTranslations({ locale, namespace: "work.case" });
  const { profile } = getCvData(locale);
  const cover = cs.videos[cs.cover];

  return (
    <>
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 pt-32 md:px-6 md:pt-40">
        <FadeIn y={16}>
          <Link
            href="/proyectos"
            className="inline-flex min-h-9 items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            {t("back")}
          </Link>
          <p className="mt-8 font-mono text-sm text-accent md:text-base">
            {"// "}
            {cs.name}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            {cs.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {cs.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </FadeIn>

        {/* Key numbers */}
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="h-full rounded-card border border-line bg-surface p-5">
                <p className="font-display text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Cover clip */}
        <FadeIn className="mt-12">
          <div className="overflow-hidden rounded-card border border-line bg-surface">
            <AutoVideo src={cover.src} poster={cover.poster} label={cs.title} />
          </div>
        </FadeIn>
      </div>

      {/* Starting point */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <FadeIn>
            <SectionTitle eyebrow={t("startEyebrow")} title={cs.startingPoint.title} />
            <p className="mt-5 leading-relaxed text-muted">{cs.startingPoint.intro}</p>
          </FadeIn>
          <Stagger className="space-y-3">
            {cs.startingPoint.items.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex gap-4 rounded-card border border-line bg-surface p-5">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Problems → what I did */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionTitle eyebrow={t("problemsEyebrow")} title={cs.problems.title} />
          </FadeIn>
          <div className="mt-12 overflow-hidden rounded-card border border-line bg-bg">
            <div className="hidden grid-cols-2 gap-8 border-b border-line px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted md:grid md:px-8">
              <span>{cs.problems.foundLabel}</span>
              <span className="text-accent">{cs.problems.didLabel}</span>
            </div>
            {cs.problems.rows.map((row, i) => (
              <div
                key={row.found}
                className={cn(
                  "grid gap-3 px-6 py-6 md:grid-cols-2 md:gap-8 md:px-8",
                  i > 0 && "border-t border-line",
                )}
              >
                <p className="text-sm leading-relaxed text-muted">
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-muted/70 md:hidden">
                    {cs.problems.foundLabel}
                  </span>
                  {row.found}
                </p>
                <p className="flex gap-3 text-sm leading-relaxed">
                  <Check size={16} className="mt-1 shrink-0 text-accent" />
                  <span>{row.did}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I built: text next to the clip, alternating sides */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <FadeIn>
          <SectionTitle eyebrow={t("builtEyebrow")} title={cs.built.title} />
        </FadeIn>
        <div className="mt-14 space-y-20 md:space-y-28">
          {cs.built.blocks.map((block, i) => {
            const video = block.video ? cs.videos[block.video] : undefined;
            const text = (
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {block.title}
                </h3>
                {block.paragraphs.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {block.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
            if (!video) {
              return <FadeIn key={block.title}>{text}</FadeIn>;
            }
            return (
              <FadeIn key={block.title}>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  <div className={cn(i % 2 === 1 && "md:order-2")}>{text}</div>
                  <div className="overflow-hidden rounded-card border border-line bg-surface">
                    <AutoVideo src={video.src} poster={video.poster} label={block.title} />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Decisions */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionTitle eyebrow={t("decisionsEyebrow")} title={cs.decisions.title} />
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {cs.decisions.items.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-card border border-line bg-bg p-6">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Next steps, stack, notice */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <FadeIn>
            <SectionTitle eyebrow={t("nextEyebrow")} title={cs.nextSteps.title} />
            <p className="mt-5 leading-relaxed text-muted">{cs.nextSteps.intro}</p>
            <ol className="mt-6 space-y-3">
              {cs.nextSteps.items.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-card border border-line bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{cs.stack.title}</p>
                <p className="mt-3 text-sm leading-relaxed">{cs.stack.text}</p>
              </div>
              <div className="rounded-card border border-line bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{cs.notice.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{cs.notice.text}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={cs.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("primary", "text-sm")}
                >
                  {cs.links.liveLabel}
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={cs.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("ghost", "text-sm")}
                >
                  {cs.links.codeLabel}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand title={cs.closing.question} text={t("closingText")} cta={cs.closing.cta} href={profile.calendar} />
    </>
  );
}
