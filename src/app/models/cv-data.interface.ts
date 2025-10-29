export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
  keyProjects?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
  logos?: string[]; // Array of logo paths (max 4)
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  previewImage?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  certificateUrl?: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    summary: string;
    contact: ContactInfo;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
  certifications?: Certification[];
}
