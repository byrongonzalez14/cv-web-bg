import type { WorkContent } from "@/models/cases";
import { deoccidenteMedia, deoccidenteVideos } from "./case-videos";

export const casesEn: WorkContent = {
  cases: [
    {
      slug: "deoccidente",
      name: "De Occidente",
      title: "A route finder that actually finds your route",
      summary:
        "Concept redesign of the website of a passenger transport cooperative in Valle del Cauca, Colombia. Fewer platforms to maintain, a core service that makes sense at first glance, and a far simpler infrastructure: from a WordPress with 9 plugins to a static site with no server of its own, no database and no AI APIs.",
      tags: ["Unofficial concept", "React · TypeScript · Vite · Tailwind", "Deployed from GitHub to Vercel"],
      stats: [
        { value: "114 → 22", label: "requests to load the home page, current site vs. the concept" },
        { value: "185", label: "routes across 46 towns, with fares, intermediate stops and transfers" },
        { value: "0", label: "servers or databases to maintain" },
        { value: "1", label: "single data source: routes, timetables and offices feed every screen" },
      ],
      videos: deoccidenteVideos("en"),
      cover: "buscador",
      startingPoint: {
        title: "Where it started",
        intro:
          "Cooperativa de Transportadores de Occidente connects some 46 towns across Valle del Cauca and Colombia's coffee region. Reviewing their current site (October 2026), this is what I found:",
        items: [
          "The core service is hard to look up. To learn what a trip costs you type the origin into a text box and open one page per route (101 pages, each edited separately). You cannot pick origin and destination, nor find out what to do when there is no direct route.",
          "Two platforms to maintain. The blog's last post is from August 2022, while the cooperative's social media is updated often. Keeping the same content in two places is costly, and the website is the one left behind.",
          "Visual problems. In the footer, the logo, the Supertransporte seal and the developer credit fail to load, and the contact page logs at least 6 broken resources.",
          "Heavy infrastructure. WordPress with a Divi-based theme and 9 plugins. Loading the home page takes 114 requests and 67 scripts. Every plugin is something to update and watch.",
          "The contact form gets stuck on “loading” when submitted, with no confirmation and no error.",
        ],
      },
      problems: {
        title: "Problems I solved",
        foundLabel: "What I found",
        didLabel: "What I did",
        rows: [
          {
            found: "Two platforms to maintain. The blog has not been updated since 2022; social media has.",
            did: "Replaced the blog with a “Latest from our social media” section pulling live Facebook posts: it updates itself whenever the cooperative posts, with nobody editing the site.",
          },
          {
            found: "Broken images, stray icons and a dated style.",
            did: "A clean, modern design. Every referenced image exists and loads; photos and videos are optimized.",
          },
          {
            found: "WordPress, 9 plugins, 114 requests and 67 scripts for the home page.",
            did: "Static site: 22 requests and 1 script. No database or plugins to update; it deploys from GitHub to Vercel in minutes.",
          },
          {
            found: "Fares spread across 101 pages, edited one by one.",
            did: "A single data source. Change one fare and it updates in the finder, the tables, the “from” cards, the map and the assistant.",
          },
          {
            found: "The core service, travelling, was the hardest thing to look up.",
            did: "An origin–destination finder that only offers reachable places, an interactive network map and a fare calculator with transfers.",
          },
          {
            found: "Phone numbers and offices scattered around.",
            did: "A directory of 20 service points with search and filters, cross-checked against the “Offices” stories on their Instagram.",
          },
          {
            found: "A form that gets stuck on “loading”.",
            did: "A working form, with confirmation on submit.",
          },
        ],
      },
      built: {
        title: "What I built",
        blocks: [
          {
            title: "A finder that thinks like the passenger",
            video: "buscador",
            paragraphs: [],
            bullets: [
              "Once you pick an origin, the destination only offers reachable places, split into “direct route” and “with transfer”.",
              "Tolerates accents and typos: “tulua”, “la union”, “roldanilo” all work.",
              "Three-stop routes are treated as one route that also serves its intermediate stop.",
              "Every search lives in the URL, so it can be shared.",
            ],
          },
          {
            title: "A network map and fares with transfers",
            video: "mapa",
            paragraphs: [
              "Tap a town and the map highlights the places you can reach directly and those that need a transfer. When there is no direct route, the engine finds the best combination (up to two transfers) and adds up the fares.",
            ],
          },
          {
            title: "A route assistant, without generative AI",
            video: "asistente",
            paragraphs: [
              "A chat that runs entirely in the browser. It recognizes towns inside a sentence, remembers context (“and the way back?”) and answers with routes, fares, timetables and office phone numbers. When it does not understand, it offers suggestion buttons instead of making things up.",
            ],
          },
          {
            title: "Timetables you can actually check",
            paragraphs: [
              "I transcribed 19 timetable blocks from the cooperative's Instagram stories, and each route card shows the “next departure” based on Colombia's local time.",
            ],
          },
          {
            title: "Performance and detail",
            video: "antesDespues",
            paragraphs: [
              "Compared with the current site, the concept's home page goes from 114 to 22 requests, from 67 scripts to 1, from 101 fare pages to a single data source and from 9 plugins to none. My first version of the redesign weighed 58 MB in images and video; today it weighs 4 MB. Entrance animations respect the “reduce motion” setting.",
            ],
          },
        ],
      },
      decisions: {
        title: "The decisions that matter most",
        items: [
          {
            title: "Rules instead of a language model",
            text: "The universe is small and every question has exactly one correct answer. A model would have added cost per query, latency and the risk of inventing a fare. With rules, the answer is the same every time, works without any API and costs nothing per use. Not every problem calls for AI, and knowing when not to use it is part of the job.",
          },
          {
            title: "Honesty with the data",
            text: "I reconciled my fare survey with the public pages: 74 routes had different fares, and I found errors such as a misspelled town and a route with two contradictory prices. Of the 185 routes, 99 are confirmed against the official site and 86 are not. The interface says so: “Fare to be confirmed at the ticket office”. I would rather have a site that admits what it does not know than one that fakes certainty.",
          },
          {
            title: "Simple infrastructure",
            text: "A WordPress needs a server with PHP and a database, and lives off updating plugins and themes. A static site is just files: deployed from GitHub to Vercel, with nothing to patch. And the route engine is independent of the interface, so the same code could power a WhatsApp bot or an app tomorrow.",
          },
        ],
      },
      nextSteps: {
        title: "What I would do with real access",
        intro: "This concept was built from public information. With the cooperative as a client, I would continue here:",
        items: [
          "An admin panel so the cooperative can edit fares and timetables without touching code.",
          "Real SEO: pre-render every route as its own page (“bus Cali Cartago fare”), with title, description and share image.",
          "Integrated parcel tracking, using the provider's API with their authorization.",
          "Personal-data consent and a working complaints channel, as Colombian regulation requires.",
          "The same assistant on WhatsApp, reusing the route engine.",
        ],
      },
      stack: {
        title: "Stack",
        text: "React 18, TypeScript, Vite, Tailwind CSS, Motion. Code on GitHub, deployed on Vercel. The contact form uses EmailJS.",
      },
      notice: {
        title: "Disclaimer",
        text: "This project is a redesign concept I made on my own initiative. It is not the official website and has no affiliation with Cooperativa de Transportadores de Occidente; their brand and content belong to their owners. The information comes from their public pages and social media. The contact form works, but messages reach me, not the cooperative.",
      },
      links: {
        live: "https://de-occidente-website.vercel.app",
        code: "https://github.com/byrongonzalez14/de-occidente-website",
        liveLabel: "See the live concept",
        codeLabel: "Code on GitHub",
      },
      closing: {
        question: "Are your customers looking for information that already lives in your own data?",
        cta: "Let's talk",
      },
      meta: {
        title: "De Occidente: a route finder that actually finds your route — Byron González",
        description:
          "Case study: concept redesign of a transport cooperative's website. A finder with transfers, a network map and a rules-based route assistant, on a static site with no server.",
      },
    },
  ],
  projects: [
    {
      name: "De Occidente",
      kind: "Case study · Concept redesign",
      summary: "A route finder with transfers, a network map and a rules-based assistant for a transport cooperative.",
      stack: ["React", "TypeScript", "Vite", "Tailwind"],
      accent: "#c01e27",
      logo: "/images/projects/logos/deoccidente.svg",
      media: deoccidenteMedia("en"),
      caseSlug: "deoccidente",
    },
    {
      name: "Encárgate",
      kind: "Web app",
      summary: "Landing page for an app that connects people with trusted service providers near them.",
      stack: ["Vue", "Vercel"],
      accent: "#f2601c",
      logo: "/images/projects/logos/encargate.svg",
      media: [
        { type: "image", src: "/images/projects/encargate.jpg", label: "Home" },
        { type: "image", src: "/images/projects/encargate-2.jpg", label: "Benefits" },
        { type: "image", src: "/images/projects/encargate-3.jpg", label: "FAQ" },
      ],
      url: "https://encargate-app.vercel.app/",
    },
    {
      name: "Vidrios Bedoya",
      kind: "Website",
      summary: "Catalog and WhatsApp contact for a glass, mirror and framing workshop in Cali.",
      stack: ["Angular", "Bulma", "Vercel"],
      accent: "#5f8ba6",
      media: [
        { type: "image", src: "/images/projects/vidrios-bedoya.jpg", label: "Home" },
        { type: "image", src: "/images/projects/vidrios-bedoya-2.jpg", label: "Services" },
        { type: "image", src: "/images/projects/vidrios-bedoya-3.jpg", label: "Why choose us" },
      ],
      url: "https://vidrios-bedoya.vercel.app/",
    },
    {
      name: "La Rivera",
      kind: "Website",
      summary: "Website for a country house: spaces, nearby places and bookings.",
      stack: ["Angular", "Vercel"],
      accent: "#3aa76d",
      media: [
        { type: "image", src: "/images/projects/la-rivera.jpg", label: "Home" },
        { type: "image", src: "/images/projects/la-rivera-2.jpg", label: "Spaces" },
      ],
      url: "https://la-rivera.vercel.app/",
    },
  ],
};
