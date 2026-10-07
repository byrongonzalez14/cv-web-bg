"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import type { StaticPathname } from "@/i18n/routing";
import { buttonClass } from "@/components/ui/Button";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { href: StaticPathname; key: "about" | "services" | "work" | "experience" }[] = [
  { href: "/quien-soy", key: "about" },
  { href: "/servicios", key: "services" },
  { href: "/proyectos", key: "work" },
  { href: "/experiencia", key: "experience" },
];

const MOBILE_NAV_ID = "mobile-nav";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // While the mobile menu is open: Esc closes it and the page behind it
  // does not scroll.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/brand/logo-white.png"
            alt="Byron González"
            width={28}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-wide hidden sm:block">
            BYRON GONZÁLEZ
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-accent",
                pathname === item.href ? "text-accent" : "text-muted",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher />
          <Link href="/contacto" className={buttonClass("primary", "px-5 py-2 text-sm")}>
            {t("cta")}
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("menu")}
            aria-expanded={open}
            aria-controls={MOBILE_NAV_ID}
            onClick={() => setOpen(!open)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-fg"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={MOBILE_NAV_ID}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base transition-colors",
                    pathname === item.href
                      ? "bg-surface text-accent"
                      : "text-fg hover:bg-surface",
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className={buttonClass("primary", "mt-3 w-full")}
              >
                {t("cta")}
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
