import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale, type StaticPathname } from "@/i18n/routing";

// Public origin of the site. Override with NEXT_PUBLIC_SITE_URL (e.g. after
// renaming the Vercel project or adding a custom domain); no trailing slash.
export const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-web-bg.vercel.app"
).replace(/\/$/, "");

/** Host without protocol, for display purposes. */
export const SITE_HOST = BASE_URL.replace(/^https?:\/\//, "");

const HREFLANG: Record<string, string> = { es: "es-CO", en: "en" };

/** A static pathname, or a dynamic one with its params (e.g. a case study). */
export type MetadataHref = Parameters<typeof getPathname>[0]["href"];

export function absoluteUrl(locale: AppLocale, href: MetadataHref) {
  return BASE_URL + getPathname({ locale, href });
}

export async function buildMetadata(
  locale: string,
  {
    title,
    description,
    href,
    image,
  }: { title: string; description: string; href: MetadataHref; image?: string },
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[HREFLANG[l]] = absoluteUrl(l, href);
  }
  languages["x-default"] = absoluteUrl(routing.defaultLocale, href);

  const url = absoluteUrl(locale as AppLocale, href);

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      title,
      description,
      url,
      locale: locale === "es" ? "es_CO" : "en_US",
      ...(image ? { images: [{ url: BASE_URL + image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [BASE_URL + image] } : {}),
    },
  };
}

/** Metadata for the fixed pages, with texts from `meta.<page>` in messages. */
export async function buildPageMetadata(
  locale: string,
  page: "home" | "about" | "services" | "experience" | "contact" | "privacy" | "work",
  pathname: StaticPathname,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata(locale, {
    title: t(`${page}.title`),
    description: t(`${page}.description`),
    href: pathname,
  });
}
