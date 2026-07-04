import type { CVContent, ServicesContent } from "@/models/content";
import { cvDataEn } from "./cv-data.en";
import { cvDataEs } from "./cv-data.es";
import { servicesEn } from "./services.en";
import { servicesEs } from "./services.es";

export function getCvData(locale: string): CVContent {
  return locale === "en" ? cvDataEn : cvDataEs;
}

export function getServices(locale: string): ServicesContent {
  return locale === "en" ? servicesEn : servicesEs;
}
