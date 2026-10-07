"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LANGUAGE_NAMES: Record<string, string> = {
  es: "Español",
  en: "English",
};

export function LocaleSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-line p-1 font-mono text-xs"
      role="group"
      aria-label={t("language")}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-label={LANGUAGE_NAMES[l]}
          aria-pressed={l === locale}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- next-intl validates params per pathname; here they come from the current route.
              { pathname, params },
              { locale: l },
            )
          }
          className={cn(
            "flex h-9 min-w-10 items-center justify-center rounded-full px-2.5 uppercase transition-colors",
            l === locale
              ? "bg-accent text-bg font-semibold"
              : "text-muted hover:text-fg",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
