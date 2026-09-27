import { Link } from "@/i18n/navigation";
import { buttonClass } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function CtaBand({
  title,
  text,
  cta,
  href,
}: {
  title: string;
  text: string;
  cta: string;
  /**
   * External booking URL (Google Calendar). When set, the button opens it in
   * a new tab and tracks `book_call`; otherwise it links to the contact page.
   */
  href?: string;
}) {
  const buttonClassName = buttonClass("primary", "shrink-0");

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6 md:pb-32">
      <FadeIn>
        <div className="relative overflow-hidden rounded-card border border-line bg-surface p-8 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-violet/10 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl text-balance">
                {title}
              </h2>
              <p className="mt-3 text-muted">{text}</p>
            </div>
            {href ? (
              <TrackedLink
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                event="book_call"
                eventParams={{ method: "google_calendar" }}
                className={buttonClassName}
              >
                {cta}
              </TrackedLink>
            ) : (
              <Link href="/contacto" className={buttonClassName}>
                {cta}
              </Link>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
