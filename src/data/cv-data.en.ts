import { CVData } from '../models/cv-data.interface';

export const cvDataEn: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "Technical Business Analyst | Automation & Systems Integration",
    summary:
      "Technical Business Analyst with experience in banking, fintech, and enterprise environments. Specialized in translating business needs into clear functional and technical requirements using BPMN, UML, and data-flow analysis. I work closely with development, QA, architecture, and vendor teams across the full SDLC, supporting automation and system integration initiatives through documentation, API requirements definition, and validation of low-code solutions. My background in cloud environments and system architectures allows me to act as a reliable bridge between business and technical teams, ensuring scalable and well-aligned solutions.",
    contact: {
      email: "byrongonzalezing@gmail.com",
      phone: "(+57) 315 039 7431",
      location: "Cali, Colombia",
      linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
      github: "https://github.com/byrongonzalez14",
      website: "https://byrongonzalez.com.co/"
    }
  },

  skills: [
    { name: "Business Analysis", level: 4, category: "Business", logos: [] },
    { name: "BPMN", level: 4, category: "Business", logos: [] },
    { name: "UML", level: 4, category: "Business", logos: [] },
    { name: "n8n", level: 4, category: "Automation", logos: [] },
    { name: "REST APIs", level: 4, category: "APIs", logos: [] },
    { name: "AWS", level: 4, category: "Cloud", logos: [] },
    { name: "Supabase", level: 4, category: "Cloud", logos: [] },
    { name: "Railway", level: 4, category: "Cloud", logos: [] },
    { name: "Vercel", level: 4, category: "Cloud", logos: [] },
    { name: "Generative AI", level: 4, category: "AI", logos: [] },
    { name: "Systems Integration", level: 4, category: "Integration", logos: [] },
    { name: "SQL", level: 4, category: "Database", logos: [] },
    { name: "PostgreSQL", level: 4, category: "Database", logos: [] },
    { name: "Oracle Database", level: 4, category: "Database", logos: [] },
    { name: "ETL", level: 4, category: "Data", logos: [] },
    { name: "QA / UAT", level: 4, category: "Testing", logos: [] },
    { name: "Agile (Scrum, Kanban)", level: 4, category: "Methodologies", logos: [] },
    { name: "Jira", level: 4, category: "Tools", logos: [] },
    { name: "AEM", level: 4, category: "CMS", logos: [] },
    { name: "SEO", level: 4, category: "Marketing", logos: [] },
    { name: "Accessibility", level: 4, category: "Web Development", logos: [] },
    { name: "Google Analytics", level: 4, category: "Analytics", logos: [] },
    { name: "Google Tag Manager", level: 4, category: "Analytics", logos: [] }
  ],

  projects: [
    {
      name: "encárgate app",
      description: "Development of a mobile application for task management and automation.",
      technologies: ["Business Analysis", "n8n", "REST APIs"],
      link: "#",
      github: "#",
      previewImage: "/img/projects/encargate-app.webp"
    }
  ],

  experience: [
    {
      company: "Freelancer",
      position: "Business Analyst – Cloud & Automation Projects",
      period: "May 2024 – Present",
      description:
        "• Define and analyze functional and technical requirements using BPMN, UML (component and sequence diagrams), data flows, and user stories, ensuring traceability between business needs and technical solutions.\n" +
        "• Support automation initiatives by documenting workflows, defining API requirements, and validating low-code automation flows (n8n) during proof-of-concept and requirement validation stages.\n" +
        "• Collaborate with development and QA teams throughout the SDLC, supporting design reviews, UAT preparation, and production readiness activities.\n" +
        "• Participate in solution discussions involving AWS, Supabase, Railway, and Vercel environments, focusing on process alignment, system integration, and deployment considerations.\n" +
        "• Leverage AI-assisted tools to improve analysis, documentation quality, and delivery efficiency, ensuring business-aligned outcomes.",
      technologies: [
        "Business Analysis",
        "BPMN",
        "UML",
        "n8n",
        "REST APIs",
        "AWS",
        "Supabase",
        "Railway",
        "Vercel",
        "Generative AI"
      ]
    },

    {
      company: "Q-VISION TECHNOLOGIES for BANCO UNION S.A.",
      position: "Technical Lead – Development Analyst",
      period: "June 2022 – May 2024",
      description:
        "• Led requirements definition and process analysis using BPMN, acting as a bridge between business stakeholders and IT teams.\n" +
        "• Reviewed system architectures, integration flows, and data models in collaboration with internal teams and external vendors.\n" +
        "• Supported project planning and effort estimation, contributing to realistic timelines and delivery tracking.\n" +
        "• Coordinated QA and UAT activities and provided support during critical production deployments.\n" +
        "• Contributed to improvements in core banking system integrations, helping reduce operational errors and improve response times.",
      technologies: [
        "BPMN",
        "Systems Integration",
        "REST APIs",
        "SQL",
        "PostgreSQL",
        "Oracle Database",
        "ETL",
        "QA / UAT",
        "Agile (Scrum, Kanban)",
        "Jira"
      ],
      keyProjects: [
        "Implementation of new features in the bank’s transactional portal.",
        "Improvement and migration of core banking service integrations.",
        "Support for high-criticality production deployments with no major incidents."
      ]
    },

    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst – QA & SEO",
      period: "March 2018 – June 2022",
      description:
        "• Coordinated global web updates using Adobe Experience Manager (AEM), validating requirements and ensuring compliance with global brand standards and timelines.\n" +
        "• Performed QA, accessibility audits, and SEO validations, producing clear technical and functional quality reports.\n" +
        "• Verified SEO practices and brand consistency across global websites through crawl analysis and issue reporting.\n" +
        "• Documented content workflows and operational processes using BPMN, supporting consistency across international teams.",
      technologies: [
        "AEM",
        "SEO",
        "Accessibility",
        "QA",
        "Google Analytics",
        "Google Tag Manager",
        "BPMN",
        "Jira",
        "Confluence"
      ],
      keyProjects: [
        "Migration of 50+ global websites to AEM with SEO and accessibility compliance.",
        "Standardization of QA and SEO practices across multiple regions.",
        "Implementation of analytics and tracking solutions for LATAM."
      ]
    },

    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (Internship)",
      period: "January 2017 – June 2017",
      description:
        "• Updated content and improved user experience for the corporate intranet.\n" +
        "• Applied HTML and CSS adjustments according to corporate brand guidelines.\n" +
        "• Supported Scrum ceremonies, including daily meetings, sprint planning, and reviews.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Scrum"
      ],
      keyProjects: [
        "Partial redesign of the corporate intranet, improving navigation and load times."
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

  languages: [
    { name: "English", level: "Advanced (CEFR C1)", logos: [] },
    { name: "Spanish", level: "Native", logos: [] }
  ],

  certifications: [
    {
      name: "Scrum Master Professional Certificate – CertiProf",
      certificateUrl: "https://www.credly.com/badges/52311806-1a13-4ac3-ad98-2bb9c0b8b7fd"
    },
    {
      name: "Scrum Foundation Professional Certificate – CertiProf",
      certificateUrl: "https://www.credly.com/badges/25bc1630-1712-435b-951d-826a67547259"
    },
    {
      name: "BPMN 2.0 Business Process Modelling – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-a9a4f333-338f-45fa-983d-7a0e11937b4b/"
    },
    {
      name: "Software Architecture and Large-Scale Systems – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-572a3e50-a17d-4fca-9fd1-678e0f1f2bc1/"
    },
    {
      name: "EF SET English Certificate – EF Education First (C1)",
      certificateUrl: "https://cert.efset.org/Exe5JG"
    }
  ]
};