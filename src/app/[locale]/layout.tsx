import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Analytics, ConsentDefaults } from "@/components/analytics/Analytics";
import { JsonLd, personJsonLd } from "@/lib/jsonld";
import { BASE_URL } from "@/lib/metadata";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(BASE_URL),
    // Default title: every page overrides it, so in practice it is used by
    // not-found.tsx (which cannot export metadata of its own).
    title: t("siteName"),
    // Google Search Console ownership for the cv-web-bg.vercel.app property.
    // Keep it: removing the tag un-verifies the property.
    verification: { google: "pwysJOqTvJgGdLFNxlgBledpFaYvKe3zX93qZS5hEIM" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <ConsentDefaults />
        <JsonLd data={personJsonLd(locale)} />
      </head>
      <body className="bg-bg text-fg min-h-screen flex flex-col">
        <a href="#contenido" className="skip-link">
          {t("skip")}
        </a>
        <NextIntlClientProvider>
          <SmoothScroll>
            <Header />
            <main id="contenido" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
