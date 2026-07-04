import type { CVContent } from "@/models/content";

export const cvDataEn: CVContent = {
  profile: {
    name: "Byron González",
    headline: "AI Solutions Consultant",
    tagline: "Technical Business Analyst & Systems Integration",
    summary:
      "AI solutions consultant and Technical Business Analyst with over 5 years translating business needs into clear functional and technical requirements across banking, enterprise, and AI automation environments. Specialized in BPMN, UML, and systems integration design. I design, document, and validate automation solutions (AI voice and SMS agents, workflows, and APIs) that reduce manual effort, working closely with development, QA, and architecture teams throughout the full software development life cycle (SDLC).",
    email: "byrongonzalezing@gmail.com",
    phone: "+57 315 039 7431",
    whatsapp: "573150397431",
    location: "Cali, Colombia",
    remote: "Available for remote work worldwide",
    linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
    github: "https://github.com/byrongonzalez14",
    website: "https://byrongonzalez.com.co",
  },

  experience: [
    {
      slug: "lato-ai",
      company: "DOCUEASE (United Kingdom) for LATO AI",
      role: "IT Consultant & Business Analyst · AI Automation",
      period: "April 2026 – Present",
      mode: "Remote",
      bullets: [
        "Design automation solution architectures for a portfolio of recurring clients, documenting the workflows later built as process diagrams.",
        "Train and run QA on AI voice and SMS agents, iterating prompts and validating conversation, transfer, and ticket-creation flows through to approval.",
        "Conduct API research for client integrations and write technical scope documents and solution proposals.",
        "Translate business requirements into development-ready functional documentation, coordinating with the developer and product lead.",
      ],
      tags: ["AI Agents", "ElevenLabs", "n8n", "Prompt Engineering", "QA", "APIs"],
      logo: "/images/experiences/docuease-logo.webp",
    },
    {
      slug: "freelance",
      company: "Freelance",
      role: "Business Analyst · Cloud & Automation Projects",
      period: "May 2024 – March 2026",
      bullets: [
        "Built end-to-end solutions (front-end, back-end, low-code automations, and cloud deployments on AWS, Vercel, and Supabase) for independent projects.",
        "Defined functional and technical requirements using BPMN, UML, and user stories, supporting design reviews and UAT preparation.",
      ],
      tags: ["AWS", "Vercel", "Supabase", "BPMN", "UML", "Low-code"],
    },
    {
      slug: "banco-union",
      company: "Q-VISION TECHNOLOGIES",
      client: "BANCO UNIÓN S.A.",
      role: "Technical Lead · Development Analyst",
      period: "June 2022 – May 2024",
      bullets: [
        "Led the functional requirements for migrating the transactional portal payment gateway (from PayU to PSE Hosting ACH), covering 12 functional requirements across credit, card, insurance, and domestic and international remittance payments, approved at the Digital Channels Deputy Director level.",
        "Designed the technical requirement to apify a SOAP service into REST, enabling Mastercard debit cards for card-not-present purchases, including component diagram, HSM-based encryption, and auditing, approved by the Architecture Committee.",
        "Documented the automated banking certificate generation tool (debt, clearance, remittances), defining 9 functional modules with login, profile management, and data mapping from the data warehouse.",
        "Coordinated with Architecture, Security, and Infrastructure to review integration flows and data models across core banking systems.",
      ],
      tags: ["Banking", "BPMN", "REST", "SOAP", "SQL", "Architecture"],
      logo: "/images/experiences/banco-union-logo.svg",
    },
    {
      slug: "colgate",
      company: "COLGATE-PALMOLIVE",
      role: "Web Content Analyst · QA & SEO",
      period: "March 2018 – June 2022",
      bullets: [
        "Managed web updates and publishing for 60+ global brand sites (Palmolive, Protex, Suavitel, Ajax, and others) across multiple countries using Adobe Experience Manager (AEM).",
        "Contributed to publishing-process automations that cut per-page publishing time from 3–4 minutes down to around 30 seconds.",
        "Ran QA, accessibility, and SEO audits, producing clear technical and functional reports.",
        "Documented content workflows and operational processes using BPMN, supporting consistency across global teams.",
      ],
      tags: ["AEM", "SEO", "QA", "Accessibility", "BPMN"],
      logo: "/images/experiences/colgate-palmolive-logo.png",
    },
    {
      slug: "comfenalco",
      company: "COMFENALCO VALLE DELAGENTE",
      role: "Web Designer (Internship)",
      period: "January 2017 – June 2017",
      bullets: [
        "Updated content and improved the user experience of the corporate intranet.",
        "Made HTML and CSS adjustments according to brand guidelines.",
        "Supported Scrum ceremonies (dailies, sprint planning, and reviews).",
      ],
      tags: ["HTML", "CSS", "Scrum"],
      logo: "/images/experiences/comfenalco-logo.svg",
    },
  ],

  skillCategories: [
    {
      title: "Business & Process Analysis",
      items: [
        "BPMN",
        "UML",
        "Requirements gathering & documentation",
        "User stories",
        "Acceptance criteria",
        "Process mapping & modeling",
        "Client discovery",
      ],
    },
    {
      title: "Automation & AI",
      items: [
        "Automation solution architecture",
        "AI voice & SMS agents (ElevenLabs)",
        "Prompt engineering",
        "Conversational-agent QA",
        "Low-code workflows (n8n)",
        "AI-assisted prototyping",
      ],
    },
    {
      title: "Systems Integration & APIs",
      items: [
        "API research & evaluation",
        "Systems integration design",
        "REST & SOAP documentation",
        "Telephony (Twilio, SIP)",
      ],
    },
    {
      title: "QA & Quality Assurance",
      items: [
        "Test case design",
        "Functional & conversational QA",
        "Backend validation",
        "Technical reporting",
        "Accessibility & SEO",
      ],
    },
    {
      title: "Consulting & Tools",
      items: [
        "Technical scope & proposals",
        "Capability dashboards",
        "Stakeholder communication",
        "Jira · Confluence · Miro · Notion",
        "AEM · Postman · Supabase · Vercel",
      ],
    },
  ],

  tools: [
    { name: "n8n", icon: "/images/skills/n8n.svg" },
    { name: "Claude", icon: "/images/skills/claude.svg" },
    { name: "ChatGPT", icon: "/images/skills/chatgpt.svg" },
    { name: "Gemini", icon: "/images/skills/gemini.svg" },
    { name: "Zapier", icon: "/images/skills/zapier.svg" },
    { name: "Postman", icon: "/images/skills/postman.svg" },
    { name: "SoapUI", icon: "/images/skills/soapui.svg" },
    { name: "Jira", icon: "/images/skills/jira.svg" },
    { name: "Confluence", icon: "/images/skills/confluence.svg" },
    { name: "Miro", icon: "/images/skills/miro.svg" },
    { name: "AWS", icon: "/images/skills/aws.svg" },
    { name: "AEM", icon: "/images/skills/aem.svg" },
    { name: "React", icon: "/images/skills/reactjs.svg" },
    { name: "TypeScript", icon: "/images/skills/typescript.svg" },
    { name: "Google Analytics", icon: "/images/skills/google-analytics.svg" },
    { name: "Google Tag Manager", icon: "/images/skills/gtm.svg" },
  ],

  certifications: [
    {
      name: "Scrum Master Professional Certificate",
      issuer: "CertiProf",
      year: "2022",
      url: "https://www.credly.com/badges/52311806-1a13-4ac3-ad98-2bb9c0b8b7fd",
      badge: "/images/certifications/certiprof-scrum-master-badge.png",
    },
    {
      name: "Scrum Foundation Professional Certificate",
      issuer: "CertiProf",
      year: "2022",
      url: "https://www.credly.com/badges/25bc1630-1712-435b-951d-826a67547259",
      badge: "/images/certifications/certiprof-scrum-foundation-badge.png",
    },
    {
      name: "BPMN 2.0 Business Process Modelling",
      issuer: "Udemy",
      year: "2025",
      url: "https://www.udemy.com/certificate/UC-a9a4f333-338f-45fa-983d-7a0e11937b4b/",
    },
    {
      name: "Software Architecture & Large-Scale Systems",
      issuer: "Udemy",
      year: "2025",
      url: "https://www.udemy.com/certificate/UC-572a3e50-a17d-4fca-9fd1-678e0f1f2bc1/",
    },
    {
      name: "EF SET English Certificate (C1)",
      issuer: "EF Education First",
      year: "2025",
      url: "https://cert.efset.org/Exe5JG",
    },
  ],

  education: [
    {
      institution: "San Buenaventura University, Cali",
      degree: "Multimedia Engineering",
      period: "2012 – 2018",
    },
    {
      institution: "San Buenaventura University, Cali",
      degree: "Diploma in Multimedia Project Design and Construction",
      period: "2017",
    },
  ],

  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1 · Advanced" },
  ],

  results: [
    {
      metric: "12",
      title: "functional requirements approved",
      description:
        "Led the migration of Banco Unión's transactional payment gateway (PayU → PSE Hosting ACH), approved at the Digital Channels Deputy Director level.",
    },
    {
      metric: "3 min → 30 s",
      title: "per published page",
      description:
        "Contributed to publishing-process automations at Colgate-Palmolive across 60+ global sites managed with AEM.",
    },
    {
      metric: "Voice + SMS",
      title: "AI agents in production",
      description:
        "I design, train, and validate conversational AI agents for a portfolio of recurring clients at LATO AI — from prompt to approval.",
    },
  ],
};
