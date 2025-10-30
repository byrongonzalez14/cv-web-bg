import { CVData } from '../models/cv-data.interface';

export const cvDataEn: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "<span class='gradient-text'>Technical Lead & Business Analyst</span> <span class='text-white'>|</span> <span class='gradient-text'>Cloud & AI Solutions</span>",
    summary: "Multimedia Engineer with a focus on Cloud, AI, and Automation, bringing strong experience in generative AI, cloud deployments, and workflow optimization. Skilled at applying core AI concepts such as context windows, tokens, and LLMs, while designing and implementing automation solutions that integrate services and improve operational efficiency. Solid knowledge in AWS Solutions Architect, with the ability to design cloud architectures, manage services and roles, and deploy scalable environments.\n With over five years of experience leading technology projects in the banking and corporate sectors, I bring expertise in technical documentation, effort estimation, QA and UAT processes, and production rollouts. My mix of cloud knowledge, AI proficiency, and technical leadership enables me to deliver well-structured, practical solutions while ensuring quality and alignment with business goals.",
    contact: {
      email: "byrongonzalez14@gmail.com",
      phone: "(+57) 322 584 8613",
      location: "Cali, Colombia",
      linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
      github: "https://github.com/byrongonzalez14",
      website: "https://byrongonzalez.com.co/"
    }
  },
  experience: [
    {
      company: "Freelancer",
      position: "Cloud & Automation Engineer",
      period: "May 2024 – Present",
      description: "• Skilled in low-code and AI-powered coding platforms such as Claude, Cursor, and Windsurf, and in creating automation processes with n8n. Experienced in the use of generative AI tools, applying core concepts such as context windows, tokens, and LLMs to accelerate development and agile prototyping.\n• Cloud deployments with Supabase, Railway, and Vercel, along with domain management and production environments.\n• Designed and implemented automation solutions with n8n, integrating services and streamlining business processes.\n• Strong foundational knowledge in AWS Solutions Architect, with skills in cloud architecture design, service and role management, and deployment of scalable cloud environments.",
      technologies: ["Generative AI (ChatGPT, Gemini, Grok)","Claude","Cursor","Windsurf","n8n","Supabase","Railway","Vercel","AWS (Solutions Architect fundamentals)","Cloud Architecture Design"]
    },
    {
      company: "Q-VISION TECHNOLOGIES for BANCO UNION S.A.",
      position: "Technical Lead - Development Analyst",
      period: "June 2022 – May 2024",
      description: "• Coordinated between business teams and external vendors, producing and validating technical documentation (architectures, integrations, data flows) and modeling processes with BPMN.\n• Estimated efforts and supported project planning, ensuring realistic timelines and effective delivery tracking.\n• Participated in QA and UAT, running smoke, functional, non-functional, and integration tests to validate acceptance criteria and ensure product quality.\n• Supported critical production rollouts and worked on ETL projects, generating reports to improve decision-making across different bank areas.",
      technologies: ["Spring Boot","REST APIs","SQL","PostgreSQL","Oracle Database","ETL","BPMN","QA Testing","Agile (Scrum, Kanban)","Jira"],
      keyProjects: [
        "Added new features to the bank's transactional portal, improving the customer experience.",
        "Migration and improvement of core banking service integrations, reducing errors and response times.",
        "Supported critical deployments in production with no major incidents."
      ]
    },
    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst - QA & SEO Specialist",
      period: "March 2018 – June 2022",
      description: "• Coordinated international web projects in AEM, making sure global brand guidelines were followed and deadlines were met.\n• Performed QA audits and created clear reports on site quality, using internal checklists and SEO/accessibility criteria.\n• Verified SEO practices and brand standards on global websites, running crawl analysis and reporting issues.\n• Implemented tracking codes, tags, and data collection forms in LATAM, improving traceability of digital campaigns.",
      technologies: ["Adobe Experience Manager (AEM)","SEO (Google Analytics,Google Search Console)","Google Tag Manager","QA Testing","Accessibility Standards","BPMN","Agile (Scrum,Kanban)","Figma","Jira","Confluence"],
      keyProjects: [
        "Migration of 50+ Colgate websites to AEM, ensuring SEO and accessibility compliance.",
        "Global standardization of SEO and QA practices, improving brand visibility and consistency across different markets.",
        "Implementation of analytics reports and data capture forms for LATAM, supporting data-driven marketing decisions."
      ]
    },
    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (Internship)",
      period: "January 2017 – June 2017",
      description: "• Updated content and improved the user experience of the corporate intranet.\n• Made adjustments in HTML and CSS according to corporate brand guidelines.\n• Assisted in Scrum ceremonies (daily meetings, sprint planning, and reviews).",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "SASS", "Scrum"],
      keyProjects: [
        "Partial redesign of the corporate intranet, improving navigation and page load times."
      ]
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
  { 
    name: "Cloud Architecture Design", 
    level: 4, 
    category: "Cloud",
    logos: ["assets/logos-skills/aws.svg", "assets/logos-skills/gcp.svg"]
  },
  { 
    name: "DevOps Engineering", 
    level: 4, 
    category: "DevOps",
    logos: ["assets/logos-skills/docker.svg", "assets/logos-skills/kubernetes.svg"]
  },
  { 
    name: "Generative AI Models", 
    level: 5, 
    category: "Artificial Intelligence",
    logos: ["assets/logos-skills/chatgpt.svg", "assets/logos-skills/gemini.svg"]
  },
  { 
    name: "AI-Powered Coding Tools", 
    level: 4, 
    category: "AI Tools",
    logos: ["assets/logos-skills/claude.svg", "assets/logos-skills/cursor.svg", "assets/logos-skills/windsurf.svg"]
  },
  { 
    name: "Automation Solutions", 
    level: 3, 
    category: "Automation",
    logos: ["assets/logos-skills/n8n.svg", "assets/logos-skills/zapier.svg"]
  },
  { 
    name: "Microservices & API Integration", 
    level: 4, 
    category: "Architecture",
    logos: ["assets/logos-skills/soapui.svg", "assets/logos-skills/postman.svg"]
  },
  { 
    name: "SQL Databases", 
    level: 5, 
    category: "Databases",
    logos: ["assets/logos-skills/oracle.svg", "assets/logos-skills/postgresql.svg"]
  },
  { 
    name: "NoSQL Databases", 
    level: 3, 
    category: "Databases",
    logos: ["assets/logos-skills/mongodb.svg", "assets/logos-skills/firebase.svg"]
  },
  { 
    name: "Backend Development", 
    level: 4, 
    category: "Development",
    logos: ["assets/logos-skills/java.svg", "assets/logos-skills/spring-boot.svg", "assets/logos-skills/nodejs.svg", "assets/logos-skills/typescript.svg"]
  },
  { 
    name: "Frontend Development", 
    level: 5, 
    category: "Development",
    logos: ["assets/logos-skills/angular.svg", "assets/logos-skills/vuejs.svg", "assets/logos-skills/reactjs.svg", "assets/logos-skills/tailwind.svg"]
  },
  { 
    name: "SEO & Accessibility Optimization", 
    level: 4, 
    category: "Web Optimization",
    logos: ["assets/logos-skills/google-analytics.svg", "assets/logos-skills/gtm.svg"]
  },
  { 
    name: "CMS Administration", 
    level: 5, 
    category: "Web Management",
    logos: ["assets/logos-skills/aem.svg", "assets/logos-skills/wordpress.svg"]
  },
  { 
    name: "Business Intelligence (BI)", 
    level: 4, 
    category: "Analytics",
    logos: ["assets/logos-skills/powerbi.svg"]
  },
  { 
    name: "Business Process Modeling", 
    level: 5, 
    category: "Analysis",
    logos: ["assets/logos-skills/bizagi.svg", "assets/logos-skills/lucidchart.svg"]
  },
  { 
    name: "Project Management Tools", 
    level: 5, 
    category: "Management",
    logos: ["assets/logos-skills/jira.svg", "assets/logos-skills/confluence.svg", "assets/logos-skills/trello.svg"]
  }
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
    { name: "English", level: "Advanced (CEFR C1)" },
    { name: "Spanish", level: "Native" },
  ],
  certifications: [
    {
      name: "EF SET English Certificate (C1) – EF Education First",
      certificateUrl: "https://cert.efset.org/Exe5JG"
    },
    {
      name: "Exam Prep Plan Overview: AWS Certified Solutions Architect - Associate – AWS Training and Certification",
      certificateUrl: "assets/certificacion-aws.pdf"
    }
    ,
    {
      name: "Software Architecture & Design of Modern Large Scale Systems - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-572a3e50-a17d-4fca-9fd1-678e0f1f2bc1/"
    },
    {
      name: "BPMN 2.0 Business Process Modelling for Business Analysts - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-a9a4f333-338f-45fa-983d-7a0e11937b4b/"
    },
    {
      name: "Frontend development with Angular and backend Spring Boot 3, RESTFul, JPA, Spring Security JWT, Redux - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-44e88d6a-501d-4753-aab5-6a9bf61a1b4e/"
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
      name: "Programming Logic: Learn to Program in Any Language – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-4113573a-6a7d-4aef-a0e7-64c454afd342/"
    }
  ]
};
