import type { CaseVideo } from "@/models/cases";

/** Videos are language-neutral (no interface text), so both locales share them. */
export const DEOCCIDENTE_VIDEOS: Record<string, CaseVideo> = {
  buscador: {
    src: "/videos/deoccidente/buscador.mp4",
    poster: "/videos/deoccidente/buscador.jpg",
  },
  mapa: {
    src: "/videos/deoccidente/mapa.mp4",
    poster: "/videos/deoccidente/mapa.jpg",
  },
  asistente: {
    src: "/videos/deoccidente/asistente.mp4",
    poster: "/videos/deoccidente/asistente.jpg",
  },
  antesDespues: {
    src: "/videos/deoccidente/antes-despues.mp4",
    poster: "/videos/deoccidente/antes-despues.jpg",
  },
};
