"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-line p-1 font-mono text-xs"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            l === locale
              ? "bg-accent text-bg font-semibold"
              : "text-muted hover:text-fg",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
