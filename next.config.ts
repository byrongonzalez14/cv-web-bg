import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isDev = process.env.NODE_ENV === "development";

// Content Security Policy.
// 'unsafe-inline' for scripts is required: the site is fully static (no
// per-request nonces) and GTM injects inline tags (Clarity is a Custom HTML
// tag). Everything else is an explicit allowlist:
//  - Google Tag Manager, GA4 and Tag Assistant (preview mode)
//  - Microsoft Clarity (loaded from inside GTM)
//  - Vercel Analytics and Speed Insights
//  - Cloudflare Turnstile (contact form)
// When adding a third party, add its domains here first.
const GOOGLE_SCRIPTS =
  "https://*.googletagmanager.com https://tagassistant.google.com https://*.google-analytics.com https://*.analytics.google.com";
const GOOGLE_CONNECT =
  "https://*.googletagmanager.com https://tagassistant.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.google.com";
const CLARITY = "https://www.clarity.ms https://*.clarity.ms https://c.bing.com";
const VERCEL = "https://va.vercel-scripts.com https://vitals.vercel-insights.com";
// Turnstile (contact form bot check): script + the iframe it renders.
const TURNSTILE = "https://challenges.cloudflare.com";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}${GOOGLE_SCRIPTS} ${CLARITY} ${VERCEL} ${TURNSTILE}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `img-src 'self' data: blob: ${GOOGLE_CONNECT} ${CLARITY}`,
  `connect-src 'self' ${isDev ? "ws://localhost:* http://localhost:* " : ""}${GOOGLE_CONNECT} ${CLARITY} ${VERCEL} ${TURNSTILE}`,
  `frame-src https://www.googletagmanager.com https://tagassistant.google.com ${TURNSTILE}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  isDev ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
