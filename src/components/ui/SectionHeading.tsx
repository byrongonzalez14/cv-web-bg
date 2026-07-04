import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-sm text-accent mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
