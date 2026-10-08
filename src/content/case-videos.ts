import type { CaseVideo, ProjectMedia } from "@/models/cases";

type Locale = "es" | "en";

/**
 * Clips of the De Occidente case. They carry no interface text, so both
 * locales share them, except the before/after one: its figures need labels
 * and it is rendered once per language.
 */
export function deoccidenteVideos(locale: Locale): Record<string, CaseVideo> {
  return {
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
      src: `/videos/deoccidente/antes-despues-${locale}.mp4`,
      poster: `/videos/deoccidente/antes-despues-${locale}.jpg`,
    },
  };
}

const MEDIA_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    buscador: "Buscador de rutas",
    mapa: "Mapa de la red y trasbordos",
    asistente: "Asistente de rutas",
    antesDespues: "Antes y después",
  },
  en: {
    buscador: "Route finder",
    mapa: "Network map and transfers",
    asistente: "Route assistant",
    antesDespues: "Before and after",
  },
};

/** The same clips, in the order the projects stage shows them, with their captions. */
export function deoccidenteMedia(locale: Locale): ProjectMedia[] {
  return Object.entries(deoccidenteVideos(locale)).map(([key, video]) => ({
    type: "video",
    ...video,
    label: MEDIA_LABELS[locale][key],
  }));
}
