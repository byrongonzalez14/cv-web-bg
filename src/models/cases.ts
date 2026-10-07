// Case study content model. Kept apart from the data so the per-language
// files and the accessors do not import each other in a circle.

export interface CaseVideo {
  /** Muted 720p clip, autoplayed while it is on screen. */
  src: string;
  poster: string;
}

export interface CaseStat {
  value: string;
  label: string;
}

export interface CaseBlock {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** Key of CaseStudyPage.videos shown next to the block. */
  video?: string;
}

export interface CaseStudyPage {
  slug: string;
  /** Short name for cards and breadcrumbs. */
  name: string;
  title: string;
  summary: string;
  /** Chips under the title: scope, stack, hosting. */
  tags: string[];
  stats: CaseStat[];
  videos: Record<string, CaseVideo>;
  /** Clip used on the project card. */
  cover: string;
  startingPoint: { title: string; intro: string; items: string[] };
  problems: { title: string; foundLabel: string; didLabel: string; rows: { found: string; did: string }[] };
  built: { title: string; blocks: CaseBlock[] };
  decisions: { title: string; items: { title: string; text: string }[] };
  nextSteps: { title: string; intro: string; items: string[] };
  stack: { title: string; text: string };
  notice: { title: string; text: string };
  links: { live: string; code: string; liveLabel: string; codeLabel: string };
  closing: { question: string; cta: string };
  meta: { title: string; description: string };
}

export interface OtherProject {
  name: string;
  kind: string;
  url: string;
}

export interface UpcomingProject {
  name: string;
  kind: string;
}

export interface WorkContent {
  cases: CaseStudyPage[];
  others: OtherProject[];
  upcoming: UpcomingProject[];
}
