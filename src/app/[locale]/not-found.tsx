import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonClass } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="mx-auto flex min-h-[70svh] max-w-6xl flex-col items-start justify-center px-4 md:px-6">
      <p className="font-mono text-sm text-accent">// 404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-muted">{t("text")}</p>
      <Link href="/" className={buttonClass("primary", "mt-8")}>
        {t("cta")}
      </Link>
    </section>
  );
}
