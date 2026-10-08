"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonClass } from "@/components/ui/Button";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getLenis, onLenis } from "@/components/motion/lenis-store";
import type { ProjectCard } from "@/models/cases";
import { CurveSwipe, curvePath } from "./CurveSwipe";
import { MediaStack } from "./MediaStack";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

/*
 * The stage is one timeline scrubbed by the scroll. Its clock, in "units":
 *
 *   INTRO   the page title travels across the screen, right to left
 *   SWAP    whatever is on stage leaves, the curtain closes in the next
 *           project's color, holds while its logo shows, then opens and that
 *           project lands
 *   REST    a clip or screenshot of the project sits on screen
 *   SHIFT   it dashes out to the left and the next one dashes in from the right
 *   OUTRO   after one last swap, the closing question stays on screen
 */
const INTRO = 1.6;
/** Extra time the curtain stays closed so the project's logo can be seen on it. */
const LOGO_HOLD = 0.9;
const SWAP = 1 + LOGO_HOLD;
const REST = 0.35;
const SHIFT = 0.75;
const OUTRO = 0.6;
/** Inside a swap: the moment the curtain fully covers and the scenes trade places. */
const COVERED = 0.6;
/** Screens of scroll per unit of the clock. */
const SCREENS_PER_UNIT = 0.6;
/** Same on phones, where a full swipe covers more of the screen. */
const SCREENS_PER_UNIT_PHONE = 0.42;
/** Color of the curtain that brings in the closing question (the site accent). */
const OUTRO_COLOR = "#22d3ee";
/** Letters of the title already on screen at the start; the rest tumble in on the way. */
const SETTLED_CHARS = 3;

/** When every beat starts, given how many media each project has. */
function buildClock(mediaCounts: number[]) {
  /** swap[i]: the swap that brings project i on stage. */
  const swap: number[] = [];
  const rest: number[][] = [];
  const shift: number[][] = [];
  let time = INTRO;
  mediaCounts.forEach((media, project) => {
    swap.push(time);
    time += SWAP;
    rest.push([]);
    shift.push([]);
    for (let k = 0; k < media; k += 1) {
      rest[project].push(time);
      time += REST;
      if (k < media - 1) {
        shift[project].push(time);
        time += SHIFT;
      }
    }
  });
  /** The swap that takes the last project away and brings the closing question. */
  const outro = time;
  time += 1 + OUTRO;
  return { swap, rest, shift, outro, total: time };
}

const LIVE_QUERY = "(prefers-reduced-motion: no-preference)";
/** Phones get the stacked composition (media on top) and a shorter scroll. */
const isPhone = () => window.innerWidth < 768;

function ProjectLink({
  project,
  className,
  children,
}: {
  project: ProjectCard;
  className?: string;
  children: ReactNode;
}) {
  if (project.caseSlug) {
    return (
      <Link
        href={{
          pathname: "/proyectos/[slug]",
          params: { slug: project.caseSlug },
        }}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/**
 * The projects page as one pinned stage. Without JavaScript and with
 * "reduce motion" the same markup is a plain page: a heading and a stacked
 * list. Phones run the stage too, with the media above the texts. When the stage goes live (`data-live`) the scroll plays it:
 * the title crosses the screen letter by letter, a curved curtain brings in
 * each project, its clips and screenshots dash through one at a time, the
 * texts leave with a wind-up before the next curtain, and a last curtain
 * lands the closing question and its call to action.
 */
export function ProjectsStage({
  eyebrow,
  title,
  subtitle,
  scrollHint,
  projects,
  caseCta,
  siteCta,
  closing,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  scrollHint: string;
  projects: ProjectCard[];
  caseCta: string;
  siteCta: string;
  /** Closing question; `href` is the booking link its button opens. */
  closing: { title: string; text: string; cta: string; href: string };
}) {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [live, setLive] = useState(false);
  /** Project on stage, or -1 while the title is still crossing. */
  const [active, setActive] = useState(-1);
  const [activeMedia, setActiveMedia] = useState(0);

  const count = projects.length;
  const { swap, rest, shift, outro, total } = buildClock(
    projects.map((project) => project.media.length),
  );
  const mediaKey = projects.map((project) => project.media.length).join("-");

  // Keep the scroll-driven timeline in step with the smooth scroll.
  useEffect(() => {
    let detach: (() => void) | undefined;
    const unsubscribe = onLenis((lenis) => {
      detach?.();
      detach = lenis ? lenis.on("scroll", ScrollTrigger.update) : undefined;
    });
    return () => {
      unsubscribe();
      detach?.();
    };
  }, []);

  useGSAP(
    () => {
      const root = rootRef.current;
      const pin = pinRef.current;
      if (!root || !pin) return;

      const mm = gsap.matchMedia();
      mm.add(LIVE_QUERY, () => {
        root.dataset.live = "";
        setLive(true);

        const intro = root.querySelector<HTMLElement>("[data-intro]");
        const introTitle =
          root.querySelector<HTMLElement>("[data-intro-title]");
        const introChars = gsap.utils.toArray<HTMLElement>("[data-char]", root);
        const introMeta = gsap.utils.toArray<HTMLElement>(
          "[data-intro-meta]",
          root,
        );
        const fills = gsap.utils.toArray<HTMLElement>("[data-fill]", root);
        const curtainLogos = gsap.utils.toArray<HTMLElement>(
          "[data-curtain-logo]",
          root,
        );
        const curtains = gsap.utils.toArray<SVGPathElement>(
          "[data-curtain]",
          root,
        );
        const scenes = gsap.utils
          .toArray<HTMLElement>("[data-scene]", root)
          .map((scene) => ({
            scene,
            ghost: scene.querySelector("[data-ghost]"),
            words: scene.querySelectorAll("[data-word]"),
            meta: scene.querySelectorAll("[data-meta]"),
            cards: gsap.utils.toArray<HTMLElement>("[data-card]", scene),
            drift: scene.querySelector("[data-drift]"),
          }));
        const closingScene = root.querySelector<HTMLElement>("[data-outro]");
        if (!intro || !introTitle || !closingScene) return;

        // On phones texts and cards span the screen, so they need the whole width to clear it.
        const offLeft = () => -window.innerWidth * (isPhone() ? 1.1 : 0.55);
        // Cards come from beyond the right edge and leave past their own left side.
        const cardIn = () => window.innerWidth * (isPhone() ? 1.15 : 0.6);
        const cardOut = (_: number, card: HTMLElement) =>
          -card.offsetWidth * 1.45;

        gsap.set([...scenes.map((item) => item.scene), closingScene], {
          visibility: "hidden",
        });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () =>
              `+=${total * (isPhone() ? SCREENS_PER_UNIT_PHONE : SCREENS_PER_UNIT) * window.innerHeight}`,
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const time = self.progress * total;
              let project = -1;
              swap.forEach((start, i) => {
                // A project counts as on stage once its curtain starts to open.
                if (time >= start + COVERED + LOGO_HOLD) project = i;
              });
              let media = 0;
              if (project >= 0) {
                shift[project].forEach((start, k) => {
                  if (time >= start + SHIFT / 2) media = k + 1;
                });
              }
              // During the closing question no project is on stage.
              if (time >= outro + COVERED) project = -1;
              setActive(project);
              setActiveMedia(media);
            },
          },
        });
        triggerRef.current = timeline.scrollTrigger ?? null;

        const cardEnters = (card: HTMLElement, at: number, duration: number) =>
          timeline.fromTo(
            card,
            { x: cardIn, rotate: 8, skewX: 12, scale: 0.9 },
            {
              x: 0,
              rotate: 0,
              skewX: 0,
              scale: 1,
              duration,
              ease: "back.out(1.4)",
            },
            at,
          );
        const cardLeaves = (card: HTMLElement, at: number, duration: number) =>
          timeline.fromTo(
            card,
            { x: 0, rotate: 0, skewX: 0, scale: 1 },
            {
              x: cardOut,
              rotate: -8,
              skewX: 12,
              scale: 0.9,
              duration,
              ease: "back.in(1.4)",
              immediateRender: false,
            },
            at,
          );

        // The title crosses the screen; its letters tumble into place on the way.
        timeline.fromTo(
          introTitle,
          { x: () => window.innerWidth * 0.06 },
          {
            x: () => -(introTitle.offsetWidth - window.innerWidth * 0.7),
            duration: INTRO + COVERED,
          },
          0,
        );
        const tumbling = introChars.slice(SETTLED_CHARS);
        tumbling.forEach((char, i) => {
          const side = i % 2 === 0 ? 1 : -1;
          timeline.fromTo(
            char,
            // They wait above the line: below it they would sit on top of the subtitle.
            { yPercent: -(55 + (i % 2) * 30), rotate: side * -22 },
            {
              yPercent: 0,
              rotate: 0,
              duration: INTRO * 0.26,
              ease: "back.out(2.2)",
            },
            INTRO * (0.03 + (i / Math.max(tumbling.length - 1, 1)) * 0.58),
          );
        });
        // The small texts ride slower than the title, then get out of the way.
        timeline
          .fromTo(
            introMeta,
            { x: 0 },
            { x: () => -window.innerWidth * 0.08, duration: INTRO },
            0,
          )
          .fromTo(
            introMeta,
            { x: () => -window.innerWidth * 0.08 },
            {
              x: offLeft,
              duration: 0.3,
              ease: "back.in(1.2)",
              stagger: 0.04,
              immediateRender: false,
            },
            swap[0],
          );

        // A project leaves: its texts wind up and go, and its last card dashes out.
        const sceneLeaves = (item: (typeof scenes)[number], at: number) => {
          timeline
            .fromTo(
              item.words,
              { yPercent: 0, rotate: 0 },
              {
                yPercent: -120,
                rotate: -7,
                duration: 0.3,
                ease: "back.in(1.7)",
                stagger: 0.04,
                immediateRender: false,
              },
              at,
            )
            .fromTo(
              item.meta,
              { x: 0 },
              {
                x: offLeft,
                duration: 0.32,
                ease: "back.in(1.2)",
                stagger: 0.03,
                immediateRender: false,
              },
              at + 0.02,
            );
          cardLeaves(item.cards[item.cards.length - 1], at, 0.36);
        };

        scenes.forEach((item, i) => {
          const t = swap[i];
          const enters = t + COVERED;
          /** The curtain starts to open, once the logo has had its moment. */
          const opens = enters + LOGO_HOLD;
          const gone = (i === count - 1 ? outro : swap[i + 1]) + COVERED;
          const previous = i === 0 ? null : scenes[i - 1];

          // 1. The previous project leaves.
          if (previous) sceneLeaves(previous, t);

          // 2. The curtain crosses in this project's color.
          const shape = { cover: 0, leave: 0 };
          const draw = () =>
            curtains[i].setAttribute("d", curvePath(shape.cover, shape.leave));
          timeline
            .to(
              shape,
              { cover: 1, duration: 0.4, ease: "power2.inOut", onUpdate: draw },
              t + 0.2,
            )
            .set(
              previous ? previous.scene : intro,
              { visibility: "hidden" },
              enters,
            )
            .set(item.scene, { visibility: "visible" }, enters)
            .to(
              shape,
              { leave: 1, duration: 0.4, ease: "power2.inOut", onUpdate: draw },
              opens,
            );

          // While the curtain is closed, the project's logo pops up on it,
          // sits there drifting slowly, and pops out just before it opens.
          timeline
            .fromTo(
              curtainLogos[i],
              { scale: 0, rotate: -12 },
              { scale: 1, rotate: 0, duration: 0.28, ease: "back.out(2.2)" },
              t + 0.46,
            )
            .fromTo(
              curtainLogos[i],
              { yPercent: 14 },
              { yPercent: -14, duration: opens + 0.14 - (t + 0.46) },
              t + 0.46,
            )
            .fromTo(
              curtainLogos[i],
              { scale: 1, rotate: 0 },
              {
                scale: 0,
                rotate: 12,
                duration: 0.2,
                ease: "back.in(2.2)",
                immediateRender: false,
              },
              opens - 0.06,
            );

          // 3. This project lands with overshoot.
          timeline
            .fromTo(
              item.words,
              { yPercent: 120, rotate: 7 },
              {
                yPercent: 0,
                rotate: 0,
                duration: 0.3,
                ease: "back.out(1.7)",
                stagger: 0.04,
              },
              opens + 0.06,
            )
            .fromTo(
              item.meta,
              { x: offLeft },
              { x: 0, duration: 0.3, ease: "back.out(1.2)", stagger: 0.03 },
              opens + 0.08,
            );
          cardEnters(item.cards[0], opens + 0.02, 0.36);

          // Its media take turns: one dashes out to the left, the next one in from the right.
          shift[i].forEach((start, k) => {
            // One at a time: the card leaving is fully gone before the next one shows up.
            cardLeaves(item.cards[k], start, SHIFT * 0.42);
            cardEnters(item.cards[k + 1], start + SHIFT * 0.42, SHIFT * 0.58);
          });

          // Far and near layers keep drifting the whole time the scene is up.
          timeline.fromTo(
            item.ghost,
            { yPercent: 28 },
            { yPercent: -28, duration: gone - enters },
            enters,
          );
          // Its segment of the bar fills while the project is on stage.
          timeline.fromTo(
            fills[i],
            { scaleX: 0 },
            { scaleX: 1, duration: gone - enters },
            enters,
          );
          timeline.fromTo(
            item.drift,
            { yPercent: 3 },
            { yPercent: -3, duration: gone - enters },
            enters,
          );
        });

        // After the last project: one more curtain, and the closing question lands.
        const last = scenes[count - 1];
        sceneLeaves(last, outro);
        const closingShape = { cover: 0, leave: 0 };
        const drawClosing = () =>
          curtains[count].setAttribute(
            "d",
            curvePath(closingShape.cover, closingShape.leave),
          );
        timeline
          .to(
            closingShape,
            {
              cover: 1,
              duration: 0.4,
              ease: "power2.inOut",
              onUpdate: drawClosing,
            },
            outro + 0.2,
          )
          .set(last.scene, { visibility: "hidden" }, outro + COVERED)
          .set(closingScene, { visibility: "visible" }, outro + COVERED)
          .to(
            closingShape,
            {
              leave: 1,
              duration: 0.4,
              ease: "power2.inOut",
              onUpdate: drawClosing,
            },
            outro + COVERED,
          )
          .fromTo(
            closingScene.querySelector("[data-outro-line]"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.3, ease: "power2.out" },
            outro + 0.64,
          )
          .fromTo(
            closingScene.querySelectorAll("[data-outro-word]"),
            { yPercent: 125, rotate: 6 },
            {
              yPercent: 0,
              rotate: 0,
              duration: 0.26,
              ease: "back.out(1.7)",
              stagger: 0.022,
            },
            outro + 0.66,
          )
          .fromTo(
            closingScene.querySelector("[data-outro-text]"),
            { x: offLeft },
            { x: 0, duration: 0.3, ease: "back.out(1.2)" },
            outro + 0.86,
          )
          // The button pops in last, overshooting like a spring.
          .fromTo(
            closingScene.querySelector("[data-outro-button]"),
            { scale: 0, rotate: -14 },
            { scale: 1, rotate: 0, duration: 0.3, ease: "back.out(2.6)" },
            outro + 0.98,
          )
          .fromTo(
            closingScene.querySelector("[data-outro-ghost]"),
            { yPercent: 22, rotate: 10 },
            { yPercent: -12, rotate: -6, duration: total - outro - COVERED },
            outro + COVERED,
          );

        return () => {
          triggerRef.current = null;
          curtains.forEach((curtain) =>
            curtain.setAttribute("d", curvePath(0, 0)),
          );
          delete root.dataset.live;
          setLive(false);
          setActive(-1);
          setActiveMedia(0);
        };
      });
    },
    { scope: rootRef, dependencies: [mediaKey] },
  );

  const goTo = (index: number) => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const landed = rest[index][0] + REST / 2;
    const top =
      trigger.start + ((trigger.end - trigger.start) * landed) / total;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(top);
    else window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section ref={rootRef} className="group relative">
      <div
        ref={pinRef}
        className="relative group-data-[live]:h-svh group-data-[live]:overflow-hidden"
      >
        <header
          data-intro=""
          className="mx-auto max-w-6xl bg-bg px-4 pt-36 pb-6 group-data-[live]:absolute group-data-[live]:inset-0 group-data-[live]:flex group-data-[live]:max-w-none group-data-[live]:flex-col group-data-[live]:justify-center group-data-[live]:p-0 md:px-6 md:pt-44"
        >
          <p className="font-mono text-sm text-accent group-data-[live]:hidden md:text-base">
            {eyebrow}
          </p>
          {/* One span per letter so each can tumble on its own; read aloud as one word */}
          <h1
            data-intro-title=""
            aria-label={title}
            className="mt-4 font-display text-4xl font-bold tracking-tight group-data-[live]:mt-0 group-data-[live]:w-max md:group-data-[live]:text-[25vw] max-md:group-data-[live]:text-[38vw] group-data-[live]:leading-[1.05] group-data-[live]:whitespace-nowrap group-data-[live]:uppercase md:text-6xl"
          >
            {Array.from(title).map((char, i) => (
              <span
                key={i}
                data-char=""
                aria-hidden="true"
                className="inline-block"
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </h1>
          <p
            data-intro-meta=""
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted group-data-[live]:mt-2 group-data-[live]:px-[6vw] md:text-lg"
          >
            {subtitle}
          </p>
          <p
            data-intro-meta=""
            className="mt-10 hidden items-center gap-2 px-[6vw] font-mono text-xs tracking-wider text-muted uppercase group-data-[live]:flex"
          >
            {scrollHint}
            <ArrowDown size={14} />
          </p>
        </header>

        {projects.map((project, i) => {
          const Arrow = project.caseSlug ? ArrowRight : ArrowUpRight;
          const number = String(i + 1).padStart(2, "0");
          return (
            <article
              key={project.name}
              data-scene=""
              style={{ "--accent": project.accent } as CSSProperties}
              className="relative bg-bg py-12 group-data-[live]:absolute group-data-[live]:inset-0 group-data-[live]:flex group-data-[live]:items-center group-data-[live]:pt-16 group-data-[live]:pb-16"
            >
              <span
                data-ghost=""
                aria-hidden="true"
                className="pointer-events-none absolute top-[-6%] left-[22%] hidden font-display text-[108vh] leading-none font-bold text-transparent select-none [-webkit-text-stroke:1.5px_color-mix(in_srgb,var(--accent)_38%,transparent)] group-data-[live]:block"
              >
                {number}
              </span>

              <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 group-data-[live]:max-w-none md:group-data-[live]:grid-cols-[40vw_minmax(0,1fr)] md:group-data-[live]:gap-[4vw] md:group-data-[live]:pr-0 md:group-data-[live]:pl-[5vw] max-md:group-data-[live]:gap-[3.5vh] max-md:group-data-[live]:px-[6vw] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-12 md:px-6">
                <div className="order-2 md:order-1">
                  <p
                    data-meta=""
                    className="flex items-center gap-3 font-mono text-sm text-muted md:group-data-[live]:text-[clamp(0.875rem,1.1vw,1.25rem)]"
                  >
                    <span className="block h-px w-8 bg-[var(--accent)]" />
                    <span>
                      <span className="text-fg">{number}</span> /{" "}
                      {String(count).padStart(2, "0")}
                    </span>
                  </p>
                  <p
                    data-meta=""
                    className="mt-5 font-mono text-xs tracking-wider text-muted uppercase md:group-data-[live]:text-[clamp(0.8125rem,0.95vw,1.05rem)] max-md:group-data-[live]:mt-3"
                  >
                    {project.kind}
                  </p>
                  <h2 className="mt-3 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase md:group-data-[live]:text-[min(7.4vw,14vh)] max-md:group-data-[live]:mt-2 max-md:group-data-[live]:text-[min(13vw,7.5vh)] md:text-5xl lg:text-7xl">
                    {project.name.split(" ").map((word, w) => (
                      <span key={w}>
                        {/* The mask lets each word rise from behind its own line */}
                        <span className="-my-[0.14em] inline-block overflow-hidden py-[0.14em] align-top">
                          <span data-word="" className="inline-block">
                            {word}
                          </span>
                        </span>{" "}
                      </span>
                    ))}
                  </h2>
                  <p
                    data-meta=""
                    className="mt-6 max-w-sm leading-relaxed text-muted md:group-data-[live]:max-w-[32vw] md:group-data-[live]:text-[clamp(1rem,1.3vw,1.5rem)] max-md:group-data-[live]:mt-3 max-md:group-data-[live]:line-clamp-3 max-md:group-data-[live]:max-w-none max-md:group-data-[live]:text-sm"
                  >
                    {project.summary}
                  </p>
                  <ul
                    data-meta=""
                    className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted/80 md:group-data-[live]:text-[clamp(0.8125rem,0.9vw,1rem)] max-md:group-data-[live]:hidden"
                  >
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div
                    data-meta=""
                    className="mt-8 max-md:group-data-[live]:mt-5"
                  >
                    <ProjectLink
                      project={project}
                      className="group/cta inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-[var(--accent)] md:group-data-[live]:px-[1.8vw] md:group-data-[live]:py-[0.9vw] md:group-data-[live]:text-[clamp(0.875rem,1.05vw,1.2rem)]"
                    >
                      {project.caseSlug ? caseCta : siteCta}
                      <Arrow
                        size={15}
                        className="transition-transform duration-300 group-hover/cta:translate-x-0.5"
                      />
                    </ProjectLink>
                  </div>
                </div>

                {/* The clip only cuts the left side: a card leaving slips out of sight there instead of covering the text */}
                <div className="order-1 md:group-data-[live]:mr-[5vw] group-data-[live]:[clip-path:inset(-40%_-100vw_-40%_-2%)] md:order-2">
                  <div data-drift="">
                    <MediaStack
                      media={project.media}
                      current={live && i === active ? activeMedia : -1}
                      priority={i === 0}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <section
          data-outro=""
          className="relative bg-bg px-4 py-20 group-data-[live]:absolute group-data-[live]:inset-0 group-data-[live]:flex group-data-[live]:items-center group-data-[live]:overflow-hidden group-data-[live]:p-0 md:px-6"
        >
          <span
            data-outro-ghost=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[2%] right-[8%] hidden font-display text-[86vh] leading-none font-bold text-transparent select-none [-webkit-text-stroke:1.5px_color-mix(in_srgb,var(--color-accent)_34%,transparent)] group-data-[live]:block"
          >
            ?
          </span>

          <div className="relative mx-auto w-full max-w-6xl group-data-[live]:max-w-none md:group-data-[live]:px-[5vw] max-md:group-data-[live]:px-[6vw]">
            <span
              data-outro-line=""
              className="block h-px w-24 origin-left bg-accent"
            />
            <h2 className="mt-6 max-w-4xl font-display text-3xl leading-[1.04] font-bold tracking-tight md:group-data-[live]:max-w-[74vw] md:group-data-[live]:text-[min(5.8vw,12.5vh)] max-md:group-data-[live]:max-w-none max-md:group-data-[live]:text-[9.5vw] md:text-5xl lg:text-7xl">
              {closing.title.split(" ").map((word, w) => (
                <span key={w}>
                  <span className="-my-[0.14em] inline-block overflow-hidden py-[0.14em] align-top">
                    <span data-outro-word="" className="inline-block">
                      {word}
                    </span>
                  </span>{" "}
                </span>
              ))}
            </h2>
            <p
              data-outro-text=""
              className="mt-6 max-w-xl text-lg text-muted md:group-data-[live]:max-w-[40vw] md:group-data-[live]:text-[clamp(1.125rem,1.4vw,1.6rem)] max-md:group-data-[live]:max-w-none max-md:group-data-[live]:text-base"
            >
              {closing.text}
            </p>
            <div data-outro-button="" className="mt-10 inline-block">
              <TrackedLink
                href={closing.href}
                target="_blank"
                rel="noopener noreferrer"
                event="book_call"
                eventParams={{ method: "google_calendar" }}
                className={buttonClass("primary", "gap-2 px-8 py-4 text-base")}
              >
                {closing.cta}
                <ArrowUpRight size={18} />
              </TrackedLink>
            </div>
          </div>
        </section>

        <CurveSwipe
          colors={[...projects.map((project) => project.accent), OUTRO_COLOR]}
          className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full group-data-[live]:block"
        />

        {/* What rides on each curtain: the project's logo, or its name until there is one */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 hidden items-center justify-center group-data-[live]:flex"
        >
          {projects.map((project) => (
            <div
              key={project.name}
              data-curtain-logo=""
              className="absolute flex h-[16vh] w-[46vw] items-center max-md:w-[78vw] justify-center"
            >
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  fill
                  sizes="46vw"
                  // Hidden until its curtain closes: lazy loading could leave it blank then.
                  loading="eager"
                  className="object-contain"
                />
              ) : (
                <span className="font-display text-[min(7vw,13vh)] leading-none max-md:text-[9vw] font-bold tracking-tight whitespace-nowrap text-white uppercase">
                  {project.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Progress: one segment per project; it fills while the project is on stage and jumps on click */}
        <nav
          aria-label={title}
          className="absolute inset-x-0 bottom-0 z-10 hidden justify-center pb-6 group-data-[live]:flex"
        >
          <ol className="flex w-[min(28rem,60vw)] gap-2">
            {projects.map((project, i) => (
              <li key={project.name} className="flex-1">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={project.name}
                  aria-current={i === active ? "true" : undefined}
                  className="group/segment block w-full py-3"
                >
                  <span className="block h-1 overflow-hidden rounded-full bg-fg/20 transition-colors duration-300 group-hover/segment:bg-fg/35">
                    <span
                      data-fill=""
                      className="block h-full origin-left rounded-full bg-fg"
                    />
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
