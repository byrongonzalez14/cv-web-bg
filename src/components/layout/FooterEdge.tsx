"use client";

import { useEffect, useRef } from "react";

/** Shape of the footer's top edge in a 100x100 box; `bulge` lifts its middle. */
function edge(bulge: number) {
  const peak = 100 - bulge * 2;
  return {
    fill: `M0 100 Q50 ${peak} 100 100 Z`,
    line: `M0 100 Q50 ${peak} 100 100`,
  };
}

const FLAT = edge(0);

// Spring that settles the edge: stiff enough to wobble a few times.
const STIFFNESS = 170;
const DAMPING = 8;

/**
 * Top edge of the footer. When the footer scrolls into view it arrives
 * bulging, as if carrying the momentum of the scroll, and bounces until it
 * lies flat. With "reduce motion" or without JavaScript it is a straight line.
 */
export function FooterEdge() {
  const fillRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const line = lineRef.current;
    const footer = fill?.closest("footer");
    if (!fill || !line || !footer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let speed = 0;

    const draw = (bulge: number) => {
      const shape = edge(bulge);
      fill.setAttribute("d", shape.fill);
      line.setAttribute("d", shape.line);
    };

    const onScroll = () => {
      const now = performance.now();
      const elapsed = Math.max(now - lastTime, 1);
      speed = (window.scrollY - lastY) / elapsed;
      lastY = window.scrollY;
      lastTime = now;
    };

    const bounce = () => {
      cancelAnimationFrame(frame);
      // The faster the arrival, the taller the first bulge (px/ms → % of the strip).
      let position = Math.min(50, Math.max(16, speed * 14));
      let velocity = 0;
      let previous = performance.now();

      const step = (now: number) => {
        const dt = Math.min((now - previous) / 1000, 0.032);
        previous = now;
        velocity += (-STIFFNESS * position - DAMPING * velocity) * dt;
        position += velocity * dt;
        // The edge cannot dip into the footer, so the way back reads as a bounce.
        draw(Math.abs(position));
        if (Math.abs(position) > 0.2 || Math.abs(velocity) > 2) {
          frame = requestAnimationFrame(step);
        } else {
          draw(0);
        }
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && speed > 0) bounce();
    });
    observer.observe(footer);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-full h-28 w-full overflow-visible"
    >
      <path
        ref={fillRef}
        d={FLAT.fill}
        fill="color-mix(in srgb, var(--color-surface) 40%, var(--color-bg))"
      />
      <path
        ref={lineRef}
        d={FLAT.line}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
