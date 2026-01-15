import { CVData } from '../models/cv-data.interface';

export const cvDataEs: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "Analista de Negocio Técnico | Automatización e Integración de Sistemas",
    summary: "Analista de Negocio Técnico con experiencia en entornos bancarios, fintech y corporativos. Especializado en traducir necesidades de negocio en requerimientos funcionales y técnicos claros, utilizando BPMN, UML y análisis de flujos de datos. Trabajo de forma cercana con equipos de desarrollo, QA, arquitectura y proveedores para asegurar la alineación durante todo el ciclo de vida del software (SDLC). He apoyado iniciativas de automatización e integración de sistemas mediante la documentación de procesos, definición de requerimientos de APIs y validación de soluciones low-code como n8n, contribuyendo a la reducción de tareas manuales y a una entrega más eficiente.",
    contact: {
      email: "byrongonzalezing@gmail.com",
      phone: "+57 315 039 7431",
      location: "Cali, Colombia",
      linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
      github: "https://github.com/byrongonzalez14",
      website: "https://byrongonzalez.com.co/"
    }
  },

  skills: [
    { 
      name: "Diseño de Arquitectura Cloud", 
      level: 4, 
      category: "Cloud",
      logos: ["assets/skills/aws.svg", "assets/skills/gcp.svg"]
    },
    { 
      name: "Ingeniería DevOps", 
      level: 4, 
      category: "DevOps",
      logos: ["assets/skills/docker.svg", "assets/skills/kubernetes.svg"]
    },
    { 
      name: "Modelos de IA Generativa", 
      level: 5, 
      category: "Inteligencia Artificial",
      logos: ["assets/skills/chatgpt.svg", "assets/skills/gemini.svg"]
    },
    { 
      name: "Herramientas de Codificación con IA", 
      level: 4, 
      category: "Herramientas IA",
      logos: ["assets/skills/claude.svg", "assets/skills/cursor.svg", "assets/skills/windsurf.svg"]
    },
    { 
      name: "Soluciones de Automatización", 
      level: 3, 
      category: "Automatización",
      logos: ["assets/skills/n8n.svg", "assets/skills/zapier.svg"]
    },
    { 
      name: "Microservicios e Integración de APIs", 
      level: 4, 
      category: "Arquitectura",
      logos: ["assets/skills/soapui.svg", "assets/skills/postman.svg"]
    },
    { 
      name: "Bases de Datos SQL", 
      level: 5, 
      category: "Bases de Datos",
      logos: ["assets/skills/oracle.svg", "assets/skills/postgresql.svg"]
    },
    { 
      name: "Bases de Datos NoSQL", 
      level: 3, 
      category: "Bases de Datos",
      logos: ["assets/skills/mongodb.svg", "assets/skills/firebase.svg"]
    },
    { 
      name: "Desarrollo Backend", 
      level: 4, 
      category: "Desarrollo",
      logos: ["assets/skills/java.svg", "assets/skills/spring-boot.svg", "assets/skills/nodejs.svg", "assets/skills/typescript.svg"]
    },
    { 
      name: "Desarrollo Frontend", 
      level: 5, 
      category: "Desarrollo",
      logos: ["assets/skills/angular.svg", "assets/skills/vuejs.svg", "assets/skills/reactjs.svg", "assets/skills/tailwind.svg"]
    },
    { 
      name: "Optimización SEO y Accesibilidad", 
      level: 4, 
      category: "Optimización Web",
      logos: ["assets/skills/google-analytics.svg", "assets/skills/gtm.svg"]
    },
    { 
      name: "Administración de CMS", 
      level: 5, 
      category: "Gestión Web",
      logos: ["assets/skills/aem.svg", "assets/skills/wordpress.svg"]
    },
    { 
      name: "Inteligencia de Negocios (BI)", 
      level: 4, 
      category: "Análisis",
      logos: ["assets/skills/powerbi.svg"]
    },
    { 
      name: "Modelado de Procesos de Negocio", 
      level: 5, 
      category: "Análisis",
      logos: ["assets/skills/bizagi.svg", "assets/skills/lucidchart.svg"]
    },
    { 
      name: "Herramientas de Gestión de Proyectos", 
      level: 5, 
      category: "Gestión",
      logos: ["assets/skills/jira.svg", "assets/skills/confluence.svg", "assets/skills/trello.svg"]
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

  experience: [
    {
      company: "Freelancer",
      position: "Analista de Negocio – Proyectos Cloud y Automatización",
      period: "Mayo 2024 – Presente",
      description: "• Definición de requerimientos funcionales y técnicos utilizando BPMN, UML (diagramas de componentes y secuencia), flujos de datos e historias de usuario.\n• Soporte a iniciativas de automatización mediante la documentación de procesos, definición de requerimientos de APIs y validación de flujos low-code (n8n) como parte de pruebas de concepto.\n• Colaboración con equipos de desarrollo y QA a lo largo del SDLC, apoyando revisiones de diseño, preparación de UAT y alistamiento para producción.\n• Participación en discusiones de solución en entornos AWS, Supabase y Vercel, con enfoque en alineación de procesos e integración de sistemas.",
      technologies: [
        "BPMN",
        "UML",
        "n8n",
        "APIs REST",
        "AWS",
        "Supabase",
        "Vercel",
        "SDLC"
      ]
    },

    {
      company: "Q-VISION TECHNOLOGIES para BANCO UNION S.A.",
      position: "Líder Técnico - Analista de Desarrollo",
      period: "Junio 2022 – Mayo 2024",
      description: "• Lideré la definición de requerimientos y el análisis de procesos utilizando BPMN, actuando como puente entre las áreas de negocio y los equipos de TI.\n• Revisé arquitecturas de sistemas, flujos de integración y modelos de datos en conjunto con equipos internos y proveedores externos.\n• Apoyé la planificación, estimación de esfuerzos, coordinación de QA y UAT, así como despliegues a producción.\n• Contribuí a la mejora de integraciones con sistemas core bancarios, reduciendo errores operativos y mejorando los tiempos de respuesta.",
      technologies: [
        "BPMN",
        "APIs REST",
        "SQL",
        "PostgreSQL",
        "Oracle Database",
        "QA",
        "UAT",
        "Jira",
        "Agile"
      ],
      keyProjects: [
        "Mejora de integraciones con sistemas core bancarios.",
        "Soporte a despliegues productivos de alta criticidad.",
        "Optimización de procesos de QA y validación funcional."
      ]
    },

    {
      company: "COLGATE - PALMOLIVE",
      position: "Analista de Contenido Web – QA & SEO",
      period: "Marzo 2018 – Junio 2022",
      description: "• Coordiné actualizaciones web globales utilizando Adobe Experience Manager (AEM), validando requerimientos y asegurando el cumplimiento de estándares de contenido, accesibilidad y SEO.\n• Realicé auditorías de QA, accesibilidad y validación SEO, generando reportes técnicos y funcionales claros.\n• Documenté flujos de contenido y procesos operativos utilizando BPMN, apoyando la estandarización y consistencia entre equipos globales.",
      technologies: [
        "Adobe Experience Manager (AEM)",
        "SEO",
        "Google Analytics",
        "Google Search Console",
        "QA",
        "Accesibilidad Web",
        "BPMN",
        "Jira",
        "Confluence"
      ],
      keyProjects: [
        "Coordinación de actualizaciones web globales para múltiples mercados.",
        "Auditorías de QA y SEO para sitios corporativos.",
        "Estandarización de procesos de contenido y calidad."
      ]
    },

    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (Práctica Profesional)",
      period: "Enero 2017 – Junio 2017",
      description: "• Actualización de contenidos y mejora de la experiencia de usuario en la intranet corporativa.\n• Ajustes en HTML y CSS conforme a los lineamientos de marca.\n• Apoyo en ceremonias Scrum (dailys, planificación de sprint y revisiones).",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Scrum"
      ],
      keyProjects: [
        "Mejora de usabilidad y estructura de la intranet corporativa."
      ]
    }
  ],

  education: [
    {
      institution: "Universidad de San Buenaventura – Cali, Colombia",
      degree: "Ingeniería Multimedia",
      period: "2012–2018",
      description: "Ingeniería Multimedia"
    },
    {
      institution: "Universidad de San Buenaventura – Cali, Colombia",
      degree: "Diplomado en Diseño y Construcción de Proyectos Multimedia",
      period: "2017",
      description: "Diplomado profesional"
    }
  ],

  languages: [
    { name: "Español", level: "Nativo", logos: [] },
    { name: "Inglés", level: "Avanzado (C1 – MCER)", logos: [] }
  ],

  certifications: [
    {
      name: "Scrum Master Professional Certificate – CertiProf",
      certificateUrl: ""
    },
    {
      name: "Scrum Foundation Professional Certificate – CertiProf",
      certificateUrl: ""
    },
    {
      name: "BPMN 2.0 Business Process Modelling – Udemy",
      certificateUrl: ""
    },
    {
      name: "Arquitectura de Software y Sistemas a Gran Escala – Udemy",
      certificateUrl: ""
    },
    {
      name: "EF SET English Certificate – EF Education First (C1)",
      certificateUrl: ""
    }
  ]
};
