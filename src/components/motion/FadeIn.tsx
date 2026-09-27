"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll reveal without hiding content from the server-rendered HTML.
 *
 * The markup ships visible and gets a short CSS entrance (see `.reveal` in
 * globals.css), so the page paints before any JavaScript runs. After
 * hydration, only the elements that are still below the fold are hidden and
 * revealed when they scroll into view.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "wait";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "in";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function revealStyle(delay?: number, y?: number): CSSProperties | undefined {
  if (!delay && y === undefined) return undefined;
  return {
    ...(delay ? { "--reveal-delay": `${Math.round(delay * 1000)}ms` } : {}),
    ...(y !== undefined ? { "--reveal-y": `${y}px` } : {}),
  } as CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  y,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={revealStyle(delay, y)}
    >
      {children}
    </div>
  );
}

/** Container whose StaggerItem children enter one after another. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-stagger="" className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
