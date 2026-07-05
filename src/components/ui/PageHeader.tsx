import { FadeIn } from "@/components/motion/FadeIn";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-36 pb-16 md:px-6 md:pt-44 md:pb-20">
      <FadeIn y={16}>
        <p className="font-mono text-sm text-accent md:text-base">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </FadeIn>
    </div>
  );
}
