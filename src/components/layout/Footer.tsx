import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import { getCvData } from "@/content";

const NAV_ITEMS: { href: AppPathname; key: "about" | "services" | "experience" | "contact" }[] = [
  { href: "/quien-soy", key: "about" },
  { href: "/servicios", key: "services" },
  { href: "/experiencia", key: "experience" },
  { href: "/contacto", key: "contact" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const { profile } = getCvData(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/brand/logo-white.png"
              alt="Byron González"
              width={24}
              height={34}
              className="h-7 w-auto"
            />
            <span className="font-display text-sm font-semibold tracking-wide">
              BYRON GONZÁLEZ
            </span>
          </div>
          <p className="mt-4 text-sm text-muted">{t("tagline")}</p>
          <p className="mt-2 font-mono text-xs text-muted">{profile.location}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {t("navTitle")}
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-fg transition-colors hover:text-accent"
                >
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {t("contactTitle")}
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent"
              >
                <Mail size={16} /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent"
              >
                <LinkedInIcon size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent"
              >
                <GitHubIcon size={16} /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted md:flex-row md:px-6">
          <p>
            © {year} Byron González. {t("rights")}
          </p>
          <Link href="/privacidad" className="transition-colors hover:text-accent">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
