import { cn } from "@/lib/utils";

export const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base px-6 py-3",
  primary:
    "bg-accent text-bg hover:bg-fg hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]",
  ghost:
    "border border-line text-fg hover:border-accent hover:text-accent",
};

export function buttonClass(variant: "primary" | "ghost" = "primary", className?: string) {
  return cn(buttonStyles.base, buttonStyles[variant], className);
}
