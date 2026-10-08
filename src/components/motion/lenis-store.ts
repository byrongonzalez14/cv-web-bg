import type Lenis from "lenis";

// The smooth-scroll instance lives in the layout; scroll-driven scenes need
// it to stay in step with it and to jump to a position. A tiny store avoids
// loading the animation library on every page just to share it.
let current: Lenis | null = null;
const listeners = new Set<(lenis: Lenis | null) => void>();

export function setLenis(lenis: Lenis | null) {
  current = lenis;
  listeners.forEach((listener) => listener(lenis));
}

export function getLenis() {
  return current;
}

/** Calls back now if smooth scroll is running, and again whenever it changes. */
export function onLenis(listener: (lenis: Lenis | null) => void) {
  listeners.add(listener);
  if (current) listener(current);
  return () => {
    listeners.delete(listener);
  };
}
