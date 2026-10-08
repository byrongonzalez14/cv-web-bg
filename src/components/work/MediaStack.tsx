"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/models/cases";
import { cn } from "@/lib/utils";

/**
 * Clips and screenshots of one project, one card each, all in the same spot.
 * The stage moves the cards (`data-card`) with the scroll so only one is on
 * screen at a time; `current` says which, and its clip plays in a loop.
 * Each card carries a short caption saying what it shows, and travels with it.
 * Off stage ("reduce motion", no JavaScript) only the first shows.
 */
export function MediaStack({
  media,
  current,
  priority = false,
}: {
  media: ProjectMedia[];
  /** Index of the card on screen, or -1 when the project is not showing. */
  current: number;
  priority?: boolean;
}) {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videos.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Autoplay can be refused (data saver, battery); the poster stays.
        });
      } else {
        video.pause();
      }
    });
  }, [current]);

  return (
    <div className="relative aspect-[16/10]">
      {media.map((item, i) => (
        <figure
          key={item.src}
          data-card=""
          className={cn(
            "absolute inset-0",
            i > 0 && "hidden group-data-[live]:block",
          )}
        >
          <figcaption className="absolute inset-x-1 bottom-full mb-3 flex items-baseline justify-between gap-4 font-mono text-xs tracking-wider text-muted uppercase md:group-data-[live]:text-[clamp(0.75rem,0.85vw,0.95rem)]">
            <span className="flex items-center gap-3 text-fg">
              <span className="block h-px w-6 bg-[var(--accent)]" />
              {item.label}
            </span>
            {media.length > 1 ? (
              <span className="hidden group-data-[live]:inline">
                {i + 1} / {media.length}
              </span>
            ) : null}
          </figcaption>

          <div className="relative h-full overflow-hidden rounded-card border border-line bg-surface shadow-2xl shadow-black/50">
            {item.type === "video" ? (
              <video
                ref={(node) => {
                  videos.current[i] = node;
                }}
                src={item.src}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                priority={priority && i === 0}
                // Cards wait off to the side: lazy loading would show them blank on arrival.
                loading={priority && i === 0 ? undefined : "eager"}
                className="object-cover object-top"
              />
            )}
          </div>
        </figure>
      ))}
    </div>
  );
}
