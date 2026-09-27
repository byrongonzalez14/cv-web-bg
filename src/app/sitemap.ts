import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";
import { BASE_URL } from "@/lib/metadata";

// Date of the last meaningful content change of each page. Update it when
// the page changes; a date that moves on every deploy teaches crawlers to
// ignore it.
const LAST_MODIFIED: Record<AppPathname, string> = {
  "/": "2026-09-27",
  "/quien-soy": "2026-07-04",
  "/servicios": "2026-09-27",
  "/experiencia": "2026-09-27",
  "/contacto": "2026-09-27",
  "/privacidad": "2026-09-27",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pathnames = Object.keys(routing.pathnames) as AppPathname[];

  return pathnames.map((href) => ({
    url: BASE_URL + getPathname({ locale: routing.defaultLocale, href }),
    lastModified: LAST_MODIFIED[href],
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href === "/privacidad" ? 0.2 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          BASE_URL + getPathname({ locale, href }),
        ]),
      ),
    },
  }));
}
