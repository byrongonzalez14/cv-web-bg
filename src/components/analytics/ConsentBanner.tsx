"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/i18n/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(value: "granted" | "denied") {
  try {
    localStorage.setItem("analytics-consent", value);
  } catch {
    // storage unavailable — consent still applied for this session
  }
  // The gtag shim is defined by the consent-default inline script
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: value });
  }
}

export function ConsentBanner() {
  const t = useTranslations("consent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("analytics-consent");
    } catch {
      // ignore
    }
    if (!stored) {
      const timeout = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timeout);
    }
  }, []);

  const choose = (value: "granted" | "denied") => {
    updateConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-sm rounded-card border border-line bg-surface-2 p-5 shadow-2xl sm:right-auto"
          role="dialog"
          aria-live="polite"
        >
          <p className="text-sm leading-relaxed text-fg">{t("message")}</p>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-fg"
            >
              {t("accept")}
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {t("reject")}
            </button>
            <Link
              href="/privacidad"
              className="ml-auto text-xs text-muted underline hover:text-accent"
            >
              {t("privacyLink")}
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
