export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  keyProjects?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  logos: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  previewImage: string;
}

export interface Language {
  name: string;
  level: string;
  logos: string[];
}

export interface Certification {
  name: string;
  certificateUrl: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
  certifications: Certification[];
}
