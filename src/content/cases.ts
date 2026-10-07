import type { CaseStudyPage, WorkContent } from "@/models/cases";
import { casesEn } from "./cases.en";
import { casesEs } from "./cases.es";

export function getWork(locale: string): WorkContent {
  return locale === "en" ? casesEn : casesEs;
}

export function getCase(locale: string, slug: string): CaseStudyPage | undefined {
  return getWork(locale).cases.find((c) => c.slug === slug);
}

export const CASE_SLUGS = casesEs.cases.map((c) => c.slug);
