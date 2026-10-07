"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Muted clip that plays only while it is on screen and loops. It downloads
 * nothing until it is near the viewport, and with "reduce motion" it stays
 * on its poster frame.
 */
export function AutoVideo({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster: string;
  /** Short description for assistive technology. */
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be refused (data saver, battery); the poster stays.
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={cn("block h-auto w-full", className)}
    />
  );
}
