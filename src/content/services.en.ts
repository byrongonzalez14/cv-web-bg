import type { ServicesContent } from "@/models/content";

export const servicesEn: ServicesContent = {
  services: [
    {
      slug: "consultoria-ia",
      title: "AI & Automation Consulting",
      problem:
        "Your operation depends on repetitive manual tasks — calls, follow-ups, tickets, scheduling — that eat your team's hours and slip through the cracks at volume.",
      includes: [
        "End-to-end automation solution architecture design",
        "AI voice and SMS agents (ElevenLabs): design, prompts, training, and QA through approval",
        "Low-code workflows with n8n connected to your systems",
        "Workflow documentation as build-ready process diagrams",
      ],
      tools: [
        { name: "ElevenLabs", icon: "" },
        { name: "n8n", icon: "/images/skills/n8n.svg" },
        { name: "Claude", icon: "/images/skills/claude.svg" },
        { name: "ChatGPT", icon: "/images/skills/chatgpt.svg" },
        { name: "Zapier", icon: "/images/skills/zapier.svg" },
        { name: "Twilio", icon: "" },
      ],
      engagement:
        "Per project or monthly engagement. Starts with a free discovery call.",
    },
    {
      slug: "analisis-negocio",
      title: "Business Analysis & Documentation",
      problem:
        "Projects slip or fail because nobody translated what the business needs into requirements that developers can build without ambiguity.",
      includes: [
        "Functional and technical requirements gathering",
        "Process modeling with BPMN and UML",
        "User stories with acceptance criteria",
        "Technical scope documents and solution proposals",
        "Support through design reviews and UAT",
      ],
      tools: [
        { name: "Miro", icon: "/images/skills/miro.svg" },
        { name: "Jira", icon: "/images/skills/jira.svg" },
        { name: "Confluence", icon: "/images/skills/confluence.svg" },
        { name: "BPMN", icon: "" },
        { name: "UML", icon: "" },
      ],
      engagement:
        "Per deliverable (requirements document, scope, proposal) or per sprint as an embedded analyst on your team.",
    },
    {
      slug: "integraciones",
      title: "Systems & API Integration",
      problem:
        "Your systems don't talk to each other: duplicated data, processes that die in an intermediate spreadsheet, and decisions made with incomplete information.",
      includes: [
        "Third-party API research and evaluation (viability, limits, costs)",
        "Integration flow design between systems",
        "REST and SOAP service documentation",
        "Functional validation of integrations (Postman, SoapUI)",
      ],
      tools: [
        { name: "Postman", icon: "/images/skills/postman.svg" },
        { name: "SoapUI", icon: "/images/skills/soapui.svg" },
        { name: "AWS", icon: "/images/skills/aws.svg" },
        { name: "Supabase", icon: "" },
      ],
      engagement:
        "Ideal as a pre-development phase: you get a clear map of what can be integrated and how, before investing in construction.",
    },
    {
      slug: "desarrollo-web",
      title: "End-to-End Web Development",
      problem:
        "You need a digital presence or an internal tool working fast, without hiring a full development team.",
      includes: [
        "Websites and web applications with React, Next.js, and Tailwind",
        "Back-end and databases (Supabase, PostgreSQL)",
        "Cloud deployment on Vercel or AWS with domain and analytics",
        "Technical SEO and measurement from day one",
      ],
      tools: [
        { name: "React", icon: "/images/skills/reactjs.svg" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "Tailwind", icon: "/images/skills/tailwind.svg" },
        { name: "Node.js", icon: "/images/skills/nodejs.svg" },
        { name: "Google Analytics", icon: "/images/skills/google-analytics.svg" },
      ],
      engagement: "Per project, with scope and deliverables defined in writing.",
      examples: [
        { name: "Encárgate", url: "https://encargate-app.vercel.app/" },
        { name: "Vidrios Bedoya", url: "https://vidrios-bedoya.vercel.app/" },
        { name: "La Rivera", url: "https://la-rivera.vercel.app/" },
      ],
    },
  ],

  caseStudies: [
    {
      slug: "agentes-ia-lato",
      sector: "AI Automation · United Kingdom",
      title: "Voice and SMS agents that answer and follow up with customers",
      challenge:
        "A portfolio of service businesses was losing leads because calls came in after hours and follow-up depended on someone remembering to do it.",
      solution:
        "I designed the solution architecture: AI voice and SMS agents (ElevenLabs) connected to the operation, with conversation, human-transfer, and ticket-creation flows documented as process diagrams. I trained the prompts and iterated through QA until client approval.",
      outcome:
        "24/7 automated service: the agent answers, books, and chases leads on its own, and the human team only steps in where it adds value.",
      metric: "24/7",
      metricLabel: "service without human intervention",
      tags: ["ElevenLabs", "AI Agents", "n8n", "Conversational QA"],
    },
    {
      slug: "pasarela-banco-union",
      sector: "Digital Banking · Colombia",
      title: "Transactional portal payment gateway migration",
      challenge:
        "Banco Unión needed to migrate its portal payments (credit, cards, insurance, and domestic and international remittances) from PayU to PSE Hosting ACH without interrupting service.",
      solution:
        "I led the full functional definition: 12 requirements documented with BPMN and UML, coordinating integration-flow reviews over core systems with Architecture, Security, and Infrastructure.",
      outcome:
        "Requirements approved at the Digital Channels Deputy Director level and a migration built on unambiguous documentation.",
      metric: "12",
      metricLabel: "functional requirements approved",
      tags: ["Banking", "BPMN", "Integrations", "PSE"],
    },
    {
      slug: "automatizacion-colgate",
      sector: "Consumer Goods · Global",
      title: "Global web publishing process automation",
      challenge:
        "Publishing changes across 60+ brand sites in multiple countries took 3–4 minutes per page, multiplied by thousands of pages a year.",
      solution:
        "I contributed to publishing-flow automations on Adobe Experience Manager and documented the process with BPMN so every global team operated the same way.",
      outcome:
        "Time per page dropped to about 30 seconds — roughly 7 times faster — with QA, accessibility, and SEO audited.",
      metric: "7×",
      metricLabel: "faster per published page",
      tags: ["AEM", "Automation", "BPMN", "SEO"],
    },
  ],

  process: [
    {
      title: "Discovery",
      description:
        "A call to understand your operation, your systems, and where the real bottleneck is.",
    },
    {
      title: "Design",
      description:
        "I document the solution: workflows, integrations, scope, and a proposal with clear deliverables.",
    },
    {
      title: "Implementation",
      description:
        "The solution gets built with continuous validation — you see progress, not surprises.",
    },
    {
      title: "Iteration",
      description:
        "QA, adjustments with real data, and support until the solution runs on its own.",
    },
  ],

  faqs: [
    {
      question: "Do you work with clients outside Colombia?",
      answer:
        "Yes. I work 100% remotely with clients in the United States, the United Kingdom, and Latin America, in Spanish and English (C1).",
    },
    {
      question: "What company sizes do you work with?",
      answer:
        "From independent businesses needing their first automation to enterprise banking. The process adapts to the size of the problem, not the other way around.",
    },
    {
      question: "How do you quote a project?",
      answer:
        "After the discovery call I prepare a proposal with scope, deliverables, timeline, and a fixed price. No hidden costs or open-ended hours.",
    },
    {
      question: "Can you work with my existing development team?",
      answer:
        "That's my most common scenario: I bring the analysis, documentation, and QA; your team builds on top of clear, validated requirements.",
    },
    {
      question: "What if I don't know exactly what I need?",
      answer:
        "That's what discovery is for. You arrive with an operational pain point; we leave with a process diagnosis and concrete solution options prioritized by impact.",
    },
  ],
};
