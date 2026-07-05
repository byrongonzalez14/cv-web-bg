import type { CVContent } from "@/models/content";

export const cvDataEs: CVContent = {
  profile: {
    name: "Byron González",
    headline: "Consultor de Soluciones de IA",
    tagline: "Analista de Negocio Técnico e Integración de Sistemas",
    summary:
      "Consultor de soluciones de IA y Analista de Negocio Técnico con más de 5 años traduciendo necesidades de negocio en requerimientos funcionales y técnicos claros, en entornos bancarios, corporativos y de automatización con IA. Especializado en BPMN, UML y diseño de flujos de integración de sistemas. Diseño, documento y valido soluciones de automatización (agentes de voz y SMS con IA, workflows y APIs) que reducen tareas manuales, trabajando de cerca con equipos de desarrollo, QA y arquitectura a lo largo de todo el ciclo de vida del software (SDLC).",
    email: "byrongonzalezing@gmail.com",
    phone: "+57 315 039 7431",
    whatsapp: "573150397431",
    location: "Cali, Colombia",
    remote: "Disponible para trabajo remoto en todo el mundo",
    linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
    github: "https://github.com/byrongonzalez14",
    website: "https://byrongonzalez.com.co",
  },

  experience: [
    {
      slug: "lato-ai",
      company: "DOCUEASE (Reino Unido) para LATO AI",
      role: "Consultor de TI y Analista de Negocio · Automatización con IA",
      period: "Abril 2026 – Presente",
      mode: "Remoto",
      bullets: [
        "Diseño arquitecturas de solución de automatización para una cartera de clientes recurrentes, documentando los flujos que luego se construyen como diagramas de proceso.",
        "Entreno y ejecuto QA sobre agentes de voz y SMS con IA, iterando prompts y validando flujos de conversación, transferencia y creación de tickets hasta su aprobación.",
        "Realizo research de APIs para integraciones de clientes y redacto documentos de scope técnico y propuestas de solución.",
        "Traduzco requerimientos de negocio en documentación funcional lista para desarrollo, coordinando con el desarrollador y el líder de producto.",
      ],
      tags: ["Agentes IA", "ElevenLabs", "n8n", "Prompt Engineering", "QA", "APIs"],
      logo: "/images/experiences/docuease-logo.webp",
    },
    {
      slug: "freelance",
      company: "Freelance",
      role: "Analista de Negocio · Proyectos Cloud y Automatización",
      period: "Mayo 2024 – Marzo 2026",
      bullets: [
        "Desarrollé soluciones end-to-end (front-end, back-end, automatizaciones low-code y despliegues cloud en AWS, Vercel y Supabase) para proyectos independientes.",
        "Definí requerimientos funcionales y técnicos con BPMN, UML e historias de usuario, apoyando revisiones de diseño y preparación de UAT.",
      ],
      tags: ["AWS", "Vercel", "Supabase", "BPMN", "UML", "Low-code"],
    },
    {
      slug: "banco-union",
      company: "Q-VISION TECHNOLOGIES",
      client: "BANCO UNIÓN S.A.",
      role: "Líder Técnico · Analista de Desarrollo",
      period: "Junio 2022 – Mayo 2024",
      bullets: [
        "Lideré el requerimiento funcional de la migración de la pasarela de pagos del portal transaccional (de PayU a PSE Hosting ACH), abarcando 12 requerimientos funcionales sobre pagos de créditos, tarjetas, seguros y giros nacionales e internacionales, con aprobación a nivel de Subdirección de Canales Digitales.",
        "Diseñé el requerimiento técnico de apificación de un servicio SOAP a REST para habilitar tarjetas débito Mastercard en compras no presenciales, incluyendo diagrama de componentes, cifrado vía HSM y auditoría, aprobado por el Comité de Arquitectura.",
        "Documenté la herramienta de generación automática de certificados bancarios (deuda, paz y salvo, giros), definiendo 9 módulos funcionales con login, administración de perfiles y mapeo de datos desde la bodega de datos.",
        "Coordiné con Arquitectura, Seguridad e Infraestructura la revisión de flujos de integración y modelos de datos sobre sistemas core bancarios.",
      ],
      tags: ["Banca", "BPMN", "REST", "SOAP", "SQL", "Arquitectura"],
      logo: "/images/experiences/banco-union-logo.svg",
    },
    {
      slug: "colgate",
      company: "COLGATE-PALMOLIVE",
      role: "Analista de Contenido Web · QA y SEO",
      period: "Marzo 2018 – Junio 2022",
      bullets: [
        "Gestioné actualizaciones y publicaciones web de más de 60 sitios globales de marcas del grupo (Palmolive, Protex, Suavitel, Ajax, entre otras) en múltiples países, usando Adobe Experience Manager (AEM).",
        "Participé en automatizaciones del proceso de publicación que redujeron el tiempo por página de 3–4 minutos a cerca de 30 segundos.",
        "Ejecuté auditorías de QA, accesibilidad y validación SEO, generando reportes técnicos y funcionales claros.",
        "Documenté flujos de contenido y procesos operativos con BPMN, apoyando la consistencia entre equipos globales.",
      ],
      tags: ["AEM", "SEO", "QA", "Accesibilidad", "BPMN"],
      logo: "/images/experiences/colgate-palmolive-logo.png",
    },
    {
      slug: "comfenalco",
      company: "COMFENALCO VALLE DELAGENTE",
      role: "Diseñador Web (Práctica Profesional)",
      period: "Enero 2017 – Junio 2017",
      bullets: [
        "Actualicé contenidos y mejoré la experiencia de usuario de la intranet corporativa.",
        "Realicé ajustes en HTML y CSS según los lineamientos de marca.",
        "Apoyé ceremonias Scrum (dailies, planificación y revisiones de sprint).",
      ],
      tags: ["HTML", "CSS", "Scrum"],
      logo: "/images/experiences/comfenalco-logo.svg",
    },
  ],

  skillCategories: [
    {
      title: "Análisis de Negocio y Procesos",
      items: [
        "BPMN",
        "UML",
        "Levantamiento de requerimientos",
        "Historias de usuario",
        "Criterios de aceptación",
        "Mapeo y modelado de procesos",
        "Discovery con clientes",
      ],
    },
    {
      title: "Automatización e IA",
      items: [
        "Arquitecturas de automatización",
        "Agentes de voz y SMS con IA (ElevenLabs)",
        "Ingeniería de prompts",
        "QA de agentes conversacionales",
        "Workflows low-code (n8n)",
        "Prototipado asistido por IA",
      ],
    },
    {
      title: "Integración de Sistemas y APIs",
      items: [
        "Research y evaluación de APIs",
        "Diseño de integraciones",
        "Documentación REST y SOAP",
        "Telefonía (Twilio, SIP)",
      ],
    },
    {
      title: "QA y Aseguramiento de Calidad",
      items: [
        "Diseño de casos de prueba",
        "QA funcional y conversacional",
        "Validación de backend",
        "Reportes técnicos",
        "Accesibilidad y SEO",
      ],
    },
    {
      title: "Consultoría y Herramientas",
      items: [
        "Scope técnico y propuestas",
        "Dashboards de capacidades",
        "Comunicación con stakeholders",
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
      name: "Arquitectura de Software y Sistemas a Gran Escala",
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
      institution: "Universidad de San Buenaventura, Cali",
      degree: "Ingeniería Multimedia",
      period: "2012 – 2018",
    },
    {
      institution: "Universidad de San Buenaventura, Cali",
      degree: "Diplomado en Diseño y Construcción de Proyectos Multimedia",
      period: "2017",
    },
  ],

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1 · Avanzado" },
  ],

  results: [
    {
      metric: "12",
      title: "requerimientos funcionales aprobados",
      description:
        "Lideré la migración de la pasarela de pagos del portal transaccional de Banco Unión (PayU → PSE Hosting ACH), aprobada a nivel de Subdirección de Canales Digitales.",
    },
    {
      metric: "3 min → 30 s",
      title: "por página publicada",
      description:
        "Contribuí a automatizaciones del proceso de publicación en Colgate-Palmolive sobre 60+ sitios globales gestionados con AEM.",
    },
    {
      metric: "Voz + SMS",
      title: "agentes de IA en producción",
      description:
        "Diseño, entreno y valido agentes conversacionales con IA para una cartera de clientes recurrentes en LATO AI, desde el prompt hasta la aprobación.",
    },
  ],
};
