import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";
import { BASE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const pathnames = Object.keys(routing.pathnames) as AppPathname[];

  return pathnames.map((href) => ({
    url: BASE_URL + getPathname({ locale: routing.defaultLocale, href }),
    lastModified: new Date(),
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
