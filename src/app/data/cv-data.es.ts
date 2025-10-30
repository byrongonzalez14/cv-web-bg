import { CVData } from '../models/cv-data.interface';

export const cvDataEs: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "<span class='gradient-text'>Analista de Negocios</span> <span class='text-white'>|</span> <span class='gradient-text'>Líder Técnico</span>",
    summary: "Ingeniero Multimedia y Analista de Negocios Tecnológicos con un perfil técnico orientado a la gestión y coordinación de proyectos de desarrollo, automatización e integración de sistemas. Tengo experiencia en el levantamiento y análisis de requerimientos, documentación funcional y técnica, y modelado de procesos de negocio con BPMN y UML, garantizando la trazabilidad entre las necesidades del negocio y las soluciones tecnológicas. Participo activamente en todo el ciclo de vida del desarrollo de software (SDLC), incluyendo la definición de requerimientos, pruebas funcionales y no funcionales, pruebas UAT y soporte en despliegues. Mi formación y conocimiento en arquitecturas de software, entornos cloud (AWS), bases de datos SQL y tecnologías frontend y backend me permiten comunicarme eficazmente con equipos técnicos y no técnicos, asegurando soluciones de calidad, escalables y alineadas con los objetivos del negocio.",
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
      position: "Ingeniero Cloud y de Automatización",
      period: "Mayo 2024 – Presente",
      description: "• Experto en plataformas low-code y de AI-powered coding como Claude, Cursor y Windsurf, y en la creación de procesos de automatización con n8n. Con experiencia en el uso de herramientas de IA generativa, aplicando conceptos clave como ventanas de contexto, tokens y LLMs para acelerar el desarrollo y el prototipado ágil.\n• Realización de despliegues en la nube con Supabase, Railway y Vercel, además de la gestión de dominios y entornos productivos.\n• Diseño e implementación de soluciones de automatización con n8n, integrando servicios y optimizando procesos empresariales.\n• Sólidos conocimientos en AWS Solutions Architect, con habilidades en diseño de arquitecturas en la nube, administración de servicios y roles, y despliegue de entornos escalables.",
      technologies: ["Generative AI (ChatGPT, Gemini, Grok)","Claude","Cursor","Windsurf","n8n","Supabase","Railway","Vercel","AWS (fundamentos de Solutions Architect)","Diseño de Arquitecturas Cloud"]
    },
    {
      company: "Q-VISION TECHNOLOGIES para BANCO UNION S.A.",
      position: "Líder Técnico - Analista de desarrollo",
      period: "Junio 2022 – Mayo 2024",
      description: "• Coordiné entre equipos de negocio y proveedores externos, elaborando y validando documentación técnica (arquitecturas, integraciones, flujos de datos) y modelando procesos con BPMN.\n• Estimé esfuerzos y apoyé la planificación de proyectos, asegurando cronogramas realistas y un seguimiento efectivo de las entregas.\n• Participé en procesos de QA y UAT, ejecutando pruebas de humo, funcionales, no funcionales e integración, para validar criterios de aceptación y garantizar la calidad del producto.\n• Brindé soporte en despliegues críticos a producción y trabajé en proyectos de ETL, generando reportes que fortalecieron la toma de decisiones en distintas áreas del banco.",
      technologies: ["Spring Boot","REST APIs","SQL","PostgreSQL","Oracle Database","ETL","BPMN","QA Testing","Agile (Scrum, Kanban)","Jira"],
      keyProjects: [
        "Implementación de nuevas funcionalidades en el portal transaccional.",
        "Migración y optimización de integraciones con sistemas core banking.",
        "Acompañamiento en despliegues de alta criticidad con cero incidentes mayores."
      ]
    },
    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst",
      period: "Marzo 2018 – Junio 2022",
      description: "• Coordiné proyectos web internacionales en AEM, asegurando el cumplimiento de los lineamientos globales de marca y el cumplimiento de los plazos establecidos.\n• Realicé auditorías de QA y generé reportes claros sobre la calidad de los sitios, aplicando listas de verificación internas y criterios de SEO y accesibilidad.\n• Verifiqué prácticas de SEO y estándares de marca en sitios globales, ejecutando análisis de rastreo y reportando incidencias.\n• Implementé códigos de seguimiento, etiquetas y formularios de recolección de datos en LATAM, mejorando la trazabilidad de las campañas digitales.",
      technologies: ["Adobe Experience Manager (AEM)","SEO (Google Analytics,Google Search Console)","Google Tag Manager","QA Testing","Accessibility Standards","BPMN","Agile (Scrum,Kanban)","Figma","Jira","Confluence"],
      keyProjects: [
        "Migración de 50+ sitios web de Colgate a AEM, garantizando su calidad en SEO y accesibilidad.",
        "Estandarización global de prácticas SEO y QA, mejorando la visibilidad y consistencia de la marca en múltiples mercados.",
        "Implementación de reportes analíticos y formularios de captura de datos para LATAM, apoyando decisiones de marketing digital basadas en datos."
      ]
    },
    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (práctica profesional)",
      period: "Enero 2017 – Junio 2017",
      description: "• Actualización de contenidos y mejora de la experiencia de usuario en la intranet corporativa.\n• Ajustes en HTML y CSS según lineamientos de marca.\n• Apoyo en ceremonias Scrum (daily, sprint planning y reviews).",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "SASS", "Scrum"],
      keyProjects: [
        "Rediseño parcial de la intranet corporativa, mejorando la navegación y tiempos de carga."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad de San Buenaventura – Cali, Colombia",
      degree: "Ingeniería Multimedia",
      period: "2012–2018",
      description: "Ingeniero multimedia"
    },
    {
      institution: "Universidad de San Buenaventura – Cali, Colombia",
      degree: "Diplomado en Diseño y Construcción de Proyectos Multimedia",
      period: "2017",
      description: "Programa intensivo cubriendo prácticas modernas de desarrollo web y frameworks"
    }
  ],
skills: [
  { 
    name: "Diseño de Arquitectura Cloud", 
    level: 4, 
    category: "Cloud",
    logos: ["assets/logos-skills/aws.svg", "assets/logos-skills/gcp.svg"]
  },
  { 
    name: "Ingeniería DevOps", 
    level: 4, 
    category: "DevOps",
    logos: ["assets/logos-skills/docker.svg", "assets/logos-skills/kubernetes.svg"]
  },
  { 
    name: "Modelos de IA Generativa", 
    level: 5, 
    category: "Inteligencia Artificial",
    logos: ["assets/logos-skills/chatgpt.svg", "assets/logos-skills/gemini.svg"]
  },
  { 
    name: "Herramientas de Codificación con IA", 
    level: 4, 
    category: "Herramientas IA",
    logos: ["assets/logos-skills/claude.svg", "assets/logos-skills/cursor.svg", "assets/logos-skills/windsurf.svg"]
  },
  { 
    name: "Soluciones de Automatización", 
    level: 3, 
    category: "Automatización",
    logos: ["assets/logos-skills/n8n.svg", "assets/logos-skills/zapier.svg"]
  },
  { 
    name: "Microservicios e Integración de APIs", 
    level: 4, 
    category: "Arquitectura",
    logos: ["assets/logos-skills/soapui.svg", "assets/logos-skills/postman.svg"]
  },
  { 
    name: "Bases de Datos SQL", 
    level: 5, 
    category: "Bases de Datos",
    logos: ["assets/logos-skills/oracle.svg", "assets/logos-skills/postgresql.svg"]
  },
  { 
    name: "Bases de Datos NoSQL", 
    level: 3, 
    category: "Bases de Datos",
    logos: ["assets/logos-skills/mongodb.svg", "assets/logos-skills/firebase.svg"]
  },
  { 
    name: "Desarrollo Backend", 
    level: 4, 
    category: "Desarrollo",
    logos: ["assets/logos-skills/java.svg", "assets/logos-skills/spring-boot.svg", "assets/logos-skills/nodejs.svg", "assets/logos-skills/typescript.svg"]
  },
  { 
    name: "Desarrollo Frontend", 
    level: 5, 
    category: "Desarrollo",
    logos: ["assets/logos-skills/angular.svg", "assets/logos-skills/vuejs.svg", "assets/logos-skills/reactjs.svg", "assets/logos-skills/tailwind.svg"]
  },
  { 
    name: "Optimización SEO y Accesibilidad", 
    level: 4, 
    category: "Optimización Web",
    logos: ["assets/logos-skills/google-analytics.svg", "assets/logos-skills/gtm.svg"]
  },
  { 
    name: "Administración de CMS", 
    level: 5, 
    category: "Gestión Web",
    logos: ["assets/logos-skills/aem.svg", "assets/logos-skills/wordpress.svg"]
  },
  { 
    name: "Inteligencia de Negocios (BI)", 
    level: 4, 
    category: "Análisis",
    logos: ["assets/logos-skills/powerbi.svg"]
  },
  { 
    name: "Modelado de Procesos de Negocio", 
    level: 5, 
    category: "Análisis",
    logos: ["assets/logos-skills/bizagi.svg", "assets/logos-skills/lucidchart.svg"]
  },
  { 
    name: "Herramientas de Gestión de Proyectos", 
    level: 5, 
    category: "Gestión",
    logos: ["assets/logos-skills/jira.svg", "assets/logos-skills/confluence.svg", "assets/logos-skills/trello.svg"]
  }
], 
  projects: [
    {
      name: "encárgate app - Landing Page",
      description: "Proyecto de landing page para Encárgate, una plataforma estilo TaskRabbit enfocada en conectar personas con servicios caseros de manera rápida y confiable.",
      technologies: ["Vue.js 3", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Git"],
      link: "https://encargate-app.vercel.app/",
      github: "https://github.com/byrongonzalez14/encargate-app.git",
      previewImage: "assets/encargate-thumbnail.PNG"
    },
    {
      name: "VIDRIOS BEDOYA",
      description: "Sitio web corporativo para Vidrios Bedoya. Desarrollado con Angular y Bulma, presenta un diseño moderno y adaptable.",
      technologies: ["Angular","Bulma","TypeScript","HTML5","SCSS","Git","GitHub","Diseño UI/UX"],
      link: "https://vidrios-bedoya.vercel.app/",
      github: "https://github.com/byrongonzalez14/vidrios-bedoya.git",
      previewImage: "assets/vidrios-bedoya-thumbnail.png"
    },
    {
      name: "La Rivera",
      description: "Sitio web en desarrollado en Angular para mostrar instalaciones y servicios, cotizador en tiempo real y reservas integradas. Optimizado para móviles y escritorio.",
      technologies: ["Angular","Bulma","TypeScript","HTML5","SCSS/SASS","Git","Vercel"],
      link: "https://la-rivera.vercel.app/",
      github: "https://github.com/byrongonzalez14/la-rivera-landing.git",
      previewImage: "assets/la-rivera-thumbnail.png"
    }
  ],
  languages: [
    { name: "Inglés", level: "Avanzado (CEFR C1)" },
    { name: "Español", level: "Nativo" },
  ],
  certifications: [
    {
      name: "EF SET English Certificado (C1) – EF Education First",
      certificateUrl: "https://cert.efset.org/Exe5JG"
    },
    {
      name: "Preparación General para el examen: Arquitecto de soluciones certificado por AWS - Asociado - AWS Training and Certification",
      certificateUrl: "assets/certificacion-aws.pdf"
    }
    ,
    {
      name: "Arquitectura de software y diseño de sistemas modernos a gran escala - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-572a3e50-a17d-4fca-9fd1-678e0f1f2bc1/"
    },
    {
      name: "Modelado de procesos de negocio BPMN 2.0 para analistas de negocio - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-a9a4f333-338f-45fa-983d-7a0e11937b4b/"
    },
    {
      name: "Desarrollo frontend con Angular y backend Spring Boot 3, RESTFul, JPA, Spring Security JWT, Redux - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-44e88d6a-501d-4753-aab5-6a9bf61a1b4e/"
    },
    {
      name: "Certificado Profesional Scrum Master – CertiProf",
      certificateUrl: "https://www.credly.com/badges/52311806-1a13-4ac3-ad98-2bb9c0b8b7fd"
    },
    {
      name: "Certificado Profesional de Scrum Foundation – CertiProf",
      certificateUrl: "https://www.credly.com/badges/25bc1630-1712-435b-951d-826a67547259"
    },
    {
      name: "Lógica Programación: Aprende a Programar en Cualquier Lenguaje – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-4113573a-6a7d-4aef-a0e7-64c454afd342/"
    }
  ]
};
