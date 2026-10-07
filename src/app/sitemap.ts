import type { MetadataRoute } from "next";
import { CASE_SLUGS } from "@/content/cases";
import { getPathname } from "@/i18n/navigation";
import { routing, type StaticPathname } from "@/i18n/routing";
import { BASE_URL, type MetadataHref } from "@/lib/metadata";

// Date of the last meaningful content change of each page. Update it when
// the page changes; a date that moves on every deploy teaches crawlers to
// ignore it.
const LAST_MODIFIED: Record<StaticPathname, string> = {
  "/": "2026-09-27",
  "/quien-soy": "2026-07-04",
  "/servicios": "2026-10-07",
  "/experiencia": "2026-09-27",
  "/contacto": "2026-09-27",
  "/privacidad": "2026-09-27",
  "/proyectos": "2026-10-07",
};

const CASES_MODIFIED: Record<string, string> = {
  deoccidente: "2026-10-07",
};

function entry(
  href: MetadataHref,
  lastModified: string,
  priority: number,
  changeFrequency: "weekly" | "monthly",
): MetadataRoute.Sitemap[number] {
  return {
    url: BASE_URL + getPathname({ locale: routing.defaultLocale, href }),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, BASE_URL + getPathname({ locale, href })]),
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = (Object.keys(LAST_MODIFIED) as StaticPathname[]).map((href) =>
    entry(
      href,
      LAST_MODIFIED[href],
      href === "/" ? 1 : href === "/privacidad" ? 0.2 : 0.8,
      href === "/" ? "weekly" : "monthly",
    ),
  );

  const cases = CASE_SLUGS.map((slug) =>
    entry(
      { pathname: "/proyectos/[slug]", params: { slug } },
      CASES_MODIFIED[slug] ?? "2026-10-07",
      0.8,
      "monthly",
    ),
  );

  return [...staticPages, ...cases];
}
