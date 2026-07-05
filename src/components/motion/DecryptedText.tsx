"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]#$%&";

/**
 * Renders the final text on the server (SEO/LCP-safe) and runs a
 * scramble-decrypt animation once after hydration.
 */
export function DecryptedText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let iteration = 0;
    let rafId: number;
    let last = 0;
    const start = performance.now() + delay * 1000;

    const tick = (now: number) => {
      if (now < start) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      if (now - last > 35) {
        last = now;
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );
        iteration += text.length / 30;
        if (iteration >= text.length) {
          setDisplay(text);
          return;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
