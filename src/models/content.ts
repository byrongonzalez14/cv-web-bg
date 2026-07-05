export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  remote: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Experience {
  slug: string;
  company: string;
  client?: string;
  role: string;
  period: string;
  mode?: string;
  bullets: string[];
  tags: string[];
  logo?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url: string;
  badge?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface Result {
  metric: string;
  title: string;
  description: string;
}

export interface CVContent {
  profile: Profile;
  experience: Experience[];
  skillCategories: SkillCategory[];
  tools: Tool[];
  certifications: Certification[];
  education: Education[];
  languages: LanguageSkill[];
  results: Result[];
}

export interface ServiceExample {
  name: string;
  url: string;
}

export interface Service {
  slug: string;
  title: string;
  problem: string;
  includes: string[];
  tools: Tool[];
  engagement: string;
  examples?: ServiceExample[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  sector: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  tags: string[];
}

export interface ServicesContent {
  services: Service[];
  caseStudies: CaseStudy[];
  process: ProcessStep[];
  faqs: Faq[];
}
