import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getCvData, getServices } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { buttonClass } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "home", "/");
}

const TRUST_LOGOS = [
  { src: "/images/experiences/docuease-logo.webp", alt: "DocuEase" },
  {
    src: "/images/experiences/colgate-palmolive-logo.png",
    alt: "Colgate-Palmolive",
  },
  { src: "/images/experiences/banco-union-logo.svg", alt: "Banco Unión" },
  { src: "/images/experiences/logo-qvision.png", alt: "Q-Vision Technologies" },
  { src: "/images/experiences/comfenalco-logo.svg", alt: "Comfenalco Valle" },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const { profile, results } = getCvData(locale);
  const { services } = getServices(locale);

  return (
    <>
      <Hero locale={locale} />

      {/* Trust strip */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
            {t("trust.label")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {TRUST_LOGOS.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={40}
                className="h-8 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <FadeIn>
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
          />
        </FadeIn>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <StaggerItem key={service.slug}>
              <Link
                href="/servicios"
                className="group flex h-full flex-col justify-between rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:bg-surface-2 md:p-8"
              >
                <div>
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.problem}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
                  {t("services.viewAll")}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Results */}
      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow={t("results.eyebrow")}
              title={t("results.title")}
            />
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {results.map((result) => (
              <StaggerItem key={result.title}>
                <div className="h-full rounded-card border border-line bg-bg p-6 md:p-8">
                  <p className="font-display text-3xl font-bold text-accent md:text-4xl">
                    {result.metric}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                    {result.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {result.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-card border border-line">
              <Image
                src="/images/about/profile.png"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
            />
            <p className="mt-4 leading-relaxed text-muted">{t("about.text")}</p>
            <Link
              href="/quien-soy"
              className={buttonClass("ghost", "mt-8")}
            >
              {t("about.cta")}
              <ArrowRight size={18} />
            </Link>
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
