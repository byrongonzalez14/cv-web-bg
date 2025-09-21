import { CVData } from '../models/cv-data.interface';

export const cvDataEn: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "Technical Lead in Service Integration",
    summary: "Multimedia Engineer with over five years of experience leading technology projects, primarily in the banking and corporate sectors. I specialize in bridging the gap between business needs and technical teams, working closely with external development providers and internal stakeholders. My background includes drafting technical documentation, estimating project timelines, integrating third-party services (APIs, databases), and managing production deployments. I’ve led projects through their full lifecycle (from planning and technical scoping to QA and go-live) ensuring deliverables meet quality standards and business goals. I’m focused on practical, well-documented solutions and clear communication between functional and technical areas.",
    contact: {
      email: "byrongonzalez14@gmail.com",
      phone: "(+57) 322 584 8613",
      location: "Cali, Colombia",
      linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
      github: "https://github.com/byrongonzalez14",
      website: "https://byron-Gonzalez.dev"
    }
  },
  experience: [
    {
      company: "Q-VISION TECHNOLOGIES for BANCO UNION S.A.",
      position: "Technical Lead - Development Analyst",
      period: "June 2022 – May 2024",
      description: "Served as the main point of contact between business teams and external development vendors, ensuring alignment across all phases of the project. Created and validated technical documentation, including architectural diagrams, integration flows, and data usage guidelines. Estimated timelines and technical effort for each project phase, helping define realistic development plans. Led daily meetings with providers, tracked progress, addressed technical blockers, and kept deliveries on schedule. Worked alongside QA teams to validate functionality and resolve issues throughout the testing process. Participated in production rollouts, providing support and validation to ensure systems launched smoothly.",
      technologies: ["Angular","Vue.js 3","JavaScript","TypeScript","HTML5","CSS3","Node.js","Express.js","Spring Boot","REST APIs","SQL","PostgreSQL","Oracle Database","GoAnywhere MFT","Docker","Kubernetes","AWS","Azure","CI/CD","GitHub","Agile (Scrum, Kanban)","Jira","Confluence","Lucidchart","Figma","Microservices Architecture","API Gateway"]
    },
    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst",
      period: "March 2018 – June 2022",
      description: "Coordinated global web projects through the AEM platform, ensuring adherence to brand and technical guidelines. Worked closely with development, marketing, and design teams across regions to keep delivery timelines on track. Reviewed and tested website updates for SEO, accessibility, and user experience compliance. Implemented tracking codes and created reports based on user behavior and analytics insights.",
      technologies: ["HTML5","CSS3","JavaScript","Adobe Experience Manager (AEM)","SEO (Google Analytics, Google Search Console)","Jira","Confluence","Google Workspace","Figma","Adobe Creative Suite (Photoshop, Illustrator)","User Experience (UX)","WordPress","Google Tag Manager","Version Control (Git, GitHub)","Agile (Scrum, Kanban)"]
    },
    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (Internship)",
      period: "January 2017 – June 2017",
      description: "Maintained and updated content on the organization's internal portal, enhancing user experience. Made front-end updates using HTML and CSS to align the interface with corporate branding.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "SASS"]
    }
  ],
  education: [
    {
      institution: "San Buenaventura University – Cali, Colombia",
      degree: "Multimedia Engineering",
      period: "2012–2018",
      description: "Multimedia Engineering"
    },
    {
      institution: "San Buenaventura University – Cali, Colombia",
      degree: "Diploma in Multimedia Project Design and Construction",
      period: "2017",
      description: "Diploma in Multimedia Project Design and Construction"
    }
  ],
  skills: [
    { name: "JavaScript/TypeScript", level: 5, category: "Programming Languages" },
    { name: "Angular", level: 5, category: "Frontend Frameworks" },
    { name: "Vue 3", level: 4, category: "Frontend Frameworks" },
    { name: "Java / Spring Boot", level: 5, category: "Backend Technologies" },
    { name: "SQL (Oracle, PostgreSQL, MySQL)", level: 5, category: "Databases" },
    { name: "Microservices & REST APIs", level: 4, category: "Software Architecture" },
    { name: "Docker", level: 4, category: "DevOps" },
    { name: "Kubernetes", level: 3, category: "DevOps" },
    { name: "Git / GitHub", level: 5, category: "Version Control" },
    { name: "Jenkins (CI/CD)", level: 4, category: "DevOps" },
    { name: "Postman / SoapUI", level: 4, category: "API Testing" },
    { name: "Jira / Confluence", level: 5, category: "Project Management" },
    { name: "Agile Methodologies (Scrum, Kanban)", level: 5, category: "Methodologies" },
    { name: "Scalable & High Availability Architectures", level: 4, category: "Software Architecture" },
    { name: "Figma", level: 4, category: "Design & Prototyping" },
    { name: "AEM (Adobe Experience Manager)", level: 3, category: "Content Management" }
  ],
  
  projects: [
    {
      name: "encárgate app",
      description: "Landing page project for Encárgate, a TaskRabbit-style platform focused on connecting people with home services quickly and reliably.",
      technologies: ["Vue.js 3", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Git"],
      link: "https://encargate-app.vercel.app/",
      github: "https://github.com/byrongonzalez14/encargate-app.git",
      previewImage: "assets/encargate-thumbnail.PNG"
    },
    {
      name: "VIDRIOS BEDOYA",
      description: "Corporate website for Vidrios Bedoya. Developed with Angular and Bulma, it features a modern and responsive design.",
      technologies: ["Angular","Bulma","TypeScript","HTML5","SCSS","Git","GitHub","UI/UX Design"],
      link: "https://vidrios-bedoya.vercel.app/",
      github: "https://github.com/byrongonzalez14/vidrios-bedoya.git",
      previewImage: "assets/vidrios-bedoya-thumbnail.png"
    },
    {
      name: "La Rivera",
      description: "Website developed in Angular to showcase facilities and services, with a real-time price calculator and integrated bookings. Optimized for mobile and desktop.",
      technologies: ["Angular","Bulma","TypeScript","HTML5","SCSS/SASS","Git","Vercel"],
      link: "https://la-rivera.vercel.app/",
      github: "https://github.com/byrongonzalez14/la-rivera-landing.git",
      previewImage: "assets/la-rivera-thumbnail.png"
    }
  ],
  languages: [
    { name: "English", level: "C1 - Advance" },
    { name: "Spanish", level: "Native" },
  ],
  certifications: [
    {
      name: "EF SET English Certificate (C1) – EF Education First",
      certificateUrl: "https://cert.efset.org/Exe5JG"
    },
    {
      name: "Software Architecture & Design of Modern Large Scale Systems - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-572a3e50-a17d-4fca-9fd1-678e0f1f2bc1/"
    },
    {
      name: "Frontend development with Angular and backend Spring Boot 3, RESTFul, JPA, Spring Security JWT, Redux - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/your-certificate-id"
    },
    {
      name: "BPMN 2.0 Business Process Modelling for Business Analysts - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-a9a4f333-338f-45fa-983d-7a0e11937b4b/"
    },
    {
      name: "Scrum Master Professional Certificate – CertiProf",
      certificateUrl: "https://www.credly.com/badges/52311806-1a13-4ac3-ad98-2bb9c0b8b7fd"
    },
    {
      name: "Scrum Foundation Professional Certificate – CertiProf",
      certificateUrl: "https://www.credly.com/badges/25bc1630-1712-435b-951d-826a67547259"
    },
    {
      name: "Web Development and Digital Content – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/your-certificate-id"
    },
    {
      name: "Exam Prep Plan Overview: AWS Certified Solutions Architect - Associate – AWS Training and Certification",
      certificateUrl: "assets/certificacion-aws.pdf"
    }
  ]
};
