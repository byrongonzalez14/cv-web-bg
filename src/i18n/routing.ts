import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/quien-soy": { es: "/quien-soy", en: "/about" },
    "/servicios": { es: "/servicios", en: "/services" },
    "/experiencia": { es: "/experiencia", en: "/experience" },
    "/contacto": { es: "/contacto", en: "/contact" },
    "/privacidad": { es: "/privacidad", en: "/privacy" },
  },
});

export type AppLocale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
