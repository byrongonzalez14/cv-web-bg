import { CVData } from '../models/cv-data.interface';

export const cvDataEs: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "Líder Técnico en Integración de Servicios",
    summary: "Ingeniero Multimedia con más de cinco años de experiencia liderando proyectos de tecnología, principalmente en el sector bancario. Me he especializado en conectar las necesidades del negocio con las soluciones técnicas, trabajando de la mano con proveedores de desarrollo y distintos equipos internos. Tengo experiencia en la definición técnica de proyectos, documentación, estimación de esfuerzos, integración de servicios (como APIs y bases de datos) y despliegues en ambientes productivos. He acompañado todas las etapas del ciclo de vida de los proyectos, desde la planificación hasta su implementación final, asegurando que cada entrega cumpla con los estándares de calidad y los objetivos del negocio. Me enfoco en generar soluciones prácticas, bien documentadas y que permitan una comunicación fluida entre las áreas técnicas y funcionales.",
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
      company: "Q-VISION TECHNOLOGIES para BANCO UNION S.A.",
      position: "Analista de desarrollo - Líder Técnico",
      period: " Junio 2022 – Mayo 2024",
      description: "Servía como punto de contacto entre las áreas del negocio y los proveedores externos de desarrollo, facilitando la coordinación técnica de los proyectos. Me encargué de crear y revisar la documentación técnica, incluyendo arquitecturas, integraciones, uso de bases de datos y consumo de servicios. Estimé tiempos y recursos necesarios para cada etapa del proyecto, ayudando a definir cronogramas realistas y alcanzables. Participé en reuniones diarias con proveedores, haciendo seguimiento a los avances, resolviendo bloqueos técnicos y asegurando que se cumplieran los tiempos. Colaboré con el equipo de QA para verificar pruebas funcionales y técnicas, y me aseguré de que los cambios fueran correctamente implementados. Estuve presente durante las salidas a producción para validar el correcto funcionamiento de los desarrollos y dar soporte ante cualquier incidente.",
      technologies: ["Angular", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "PostgreSQL"]
    },
    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst",
      period: "Marzo 2018 – Junio 2022",
      description: "Coordiné proyectos web internacionales a través de la plataforma AEM, siguiendo las pautas de marca y estándares técnicos. Colaboré con equipos de desarrollo, diseño y marketing, facilitando la comunicación entre áreas y asegurando entregas coherentes. Verifiqué el cumplimiento de estándares de calidad y SEO, además de realizar pruebas y ajustes en entornos QA y producción. Implementé códigos de seguimiento para análisis de tráfico y creé reportes con base en datos de comportamiento de usuarios.",
      technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Redis", "Docker"]
    },
    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (práctica profesional)",
      period: "Enero 2017 – Junio 2017",
      description: "Actualicé contenidos y mejoré la estructura visual de la intranet corporativa, facilitando la navegación y la experiencia de usuario. Realicé modificaciones en HTML y CSS para adaptar la interfaz a los lineamientos de marca de la institución.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "SASS"]
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
    { name: "JavaScript/TypeScript", level: 5, category: "Lenguajes de Programación" },
    { name: "Angular", level: 5, category: "Frameworks Frontend" },
    { name: "React", level: 4, category: "Frameworks Frontend" },
    { name: "Node.js", level: 4, category: "Tecnologías Backend" },
    { name: "Python", level: 3, category: "Lenguajes de Programación" },
    { name: "AWS", level: 4, category: "Plataformas en la Nube" },
    { name: "Docker", level: 4, category: "DevOps" },
    { name: "PostgreSQL", level: 4, category: "Bases de Datos" },
    { name: "Git", level: 5, category: "Control de Versiones" },
    { name: "Agile/Scrum", level: 4, category: "Metodologías" }
  ],
  projects: [
    {
      name: "encárgate app - Landing Page",
      description: "Proyecto de landing page para Encárgate, una plataforma estilo TaskRabbit enfocada en conectar personas con servicios caseros de manera rápida y confiable.",
      technologies: ["Vue.js 3", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Git"],
      link: "https://encargate-app.vercel.app/",
      github: "https://github.com/byrongonzalez14/encargate-app.git"
    },
    {
      name: "App Notes",
      description: "Herramienta de gestión de proyectos colaborativa con actualizaciones en tiempo real, compartir archivos y características de comunicación en equipo.",
      technologies: ["React", "Socket.io", "Express.js", "PostgreSQL", "Redis"],
      link: "https://taskmanager.byron-Gonzalez.dev",
      github: "https://github.com/byron-Gonzalez/task-manager"
    },
    {
      name: "Dashboard del Clima",
      description: "Dashboard de monitoreo del clima en tiempo real con mapas interactivos y visualización de datos.",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      link: "https://weather.byron-Gonzalez.dev",
      github: "https://github.com/byron-Gonzalez/weather-dashboard"
    }
  ],
  languages: [
    { name: "Inglés", level: "C1 – Avanzado" },
    { name: "Español", level: "Nativo" },
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
      name: "Desarrollo frontend con Angular y backend Spring Boot 3, RESTFul, JPA, Spring Security JWT, Redux - Udemy",
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
      name: "Curso de desarrollo web y contenido digital – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/your-certificate-id"
    }
  ]
};
