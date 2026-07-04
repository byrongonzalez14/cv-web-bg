import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonClass } from "@/components/ui/Button";
import { HeroCanvas } from "@/components/hero/HeroCanvas";
import { DecryptedText } from "@/components/motion/DecryptedText";
import { FadeIn } from "@/components/motion/FadeIn";

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.hero" });

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      {/* Static gradient fallback — paints before any JS loads */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.08),transparent_50%)]"
      />
      <HeroCanvas />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 md:px-6">
        <FadeIn y={16}>
          <p className="font-mono text-sm text-accent md:text-base">
            {t("eyebrow")}
          </p>
        </FadeIn>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
          <DecryptedText text={t("titleLine1")} />
          <br />
          <span className="text-accent">
            <DecryptedText text={t("titleLine2")} delay={0.6} />
          </span>
        </h1>
        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t("subtitle")}
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/servicios" className={buttonClass("primary")}>
              {t("ctaPrimary")}
              <ArrowRight size={18} />
            </Link>
            <Link href="/contacto" className={buttonClass("ghost")}>
              {t("ctaSecondary")}
            </Link>
          </div>
        </FadeIn>

        <div className="mt-20 hidden items-center gap-3 md:flex">
          <span className="h-px w-10 bg-line" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t("scroll")}
          </span>
        </div>
      </div>
    </section>
  );
}
