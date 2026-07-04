import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConsentBanner } from "./ConsentBanner";

// EEA + UK + CH: analytics denied by default until the user opts in.
// Everywhere else (CO/LATAM/US): granted by default; the banner still
// lets the user opt out. Ads signals are denied globally (none are used).
const RESTRICTED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

const CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500,
  region: ${JSON.stringify(RESTRICTED_REGIONS)}
});
var stored = null;
try { stored = localStorage.getItem('analytics-consent'); } catch (e) {}
if (stored === 'granted' || stored === 'denied') {
  gtag('consent', 'update', { analytics_storage: stored });
}
`;

export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      {gtmId ? (
        <>
          <Script id="consent-default" strategy="beforeInteractive">
            {CONSENT_DEFAULT_SCRIPT}
          </Script>
          <GoogleTagManager gtmId={gtmId} />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <ConsentBanner />
        </>
      ) : null}
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}
