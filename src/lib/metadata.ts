import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";

export const BASE_URL = "https://byrongonzalez.com.co";

const HREFLANG: Record<string, string> = { es: "es-CO", en: "en" };

function absoluteUrl(locale: (typeof routing.locales)[number], href: AppPathname) {
  return BASE_URL + getPathname({ locale, href });
}

export async function buildPageMetadata(
  locale: string,
  page: "home" | "about" | "services" | "experience" | "contact" | "privacy",
  pathname: AppPathname,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[HREFLANG[l]] = absoluteUrl(l, pathname);
  }
  languages["x-default"] = absoluteUrl(routing.defaultLocale, pathname);

  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(locale as (typeof routing.locales)[number], pathname),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      title,
      description,
      url: absoluteUrl(locale as (typeof routing.locales)[number], pathname),
      locale: locale === "es" ? "es_CO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
