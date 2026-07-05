import type { ServicesContent } from "@/models/content";

export const servicesEs: ServicesContent = {
  services: [
    {
      slug: "consultoria-ia",
      title: "Consultoría de IA y Automatización",
      problem:
        "Tu operación depende de tareas manuales repetitivas — llamadas, seguimientos, tickets, agendamiento — que consumen horas de tu equipo y se escapan cuando hay volumen.",
      includes: [
        "Diseño de la arquitectura de solución de automatización de punta a punta",
        "Agentes de voz y SMS con IA (ElevenLabs): diseño, prompts, entrenamiento y QA hasta aprobación",
        "Workflows low-code con n8n conectados a tus sistemas",
        "Documentación de flujos como diagramas de proceso listos para construir",
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
        "Por proyecto o acompañamiento mensual. Empieza con una llamada de discovery sin costo.",
    },
    {
      slug: "analisis-negocio",
      title: "Análisis de Negocio y Documentación",
      problem:
        "Los proyectos se atrasan o fallan porque nadie tradujo lo que el negocio necesita a requerimientos que desarrollo pueda construir sin ambigüedad.",
      includes: [
        "Levantamiento de requerimientos funcionales y técnicos",
        "Modelado de procesos con BPMN y UML",
        "Historias de usuario con criterios de aceptación",
        "Documentos de scope técnico y propuestas de solución",
        "Acompañamiento en revisiones de diseño y UAT",
      ],
      tools: [
        { name: "Miro", icon: "/images/skills/miro.svg" },
        { name: "Jira", icon: "/images/skills/jira.svg" },
        { name: "Confluence", icon: "/images/skills/confluence.svg" },
        { name: "BPMN", icon: "" },
        { name: "UML", icon: "" },
      ],
      engagement:
        "Por entregable (documento de requerimientos, scope, propuesta) o por sprint como analista embebido en tu equipo.",
    },
    {
      slug: "integraciones",
      title: "Integración de Sistemas y APIs",
      problem:
        "Tus sistemas no se hablan entre sí: datos duplicados, procesos que mueren en un Excel intermedio y decisiones sin información completa.",
      includes: [
        "Research y evaluación de APIs de terceros (viabilidad, límites, costos)",
        "Diseño de flujos de integración entre sistemas",
        "Documentación de servicios REST y SOAP",
        "Validación funcional de integraciones (Postman, SoapUI)",
      ],
      tools: [
        { name: "Postman", icon: "/images/skills/postman.svg" },
        { name: "SoapUI", icon: "/images/skills/soapui.svg" },
        { name: "AWS", icon: "/images/skills/aws.svg" },
        { name: "Supabase", icon: "" },
      ],
      engagement:
        "Ideal como fase previa a un desarrollo: recibes un mapa claro de qué es posible integrar y cómo, antes de invertir en construcción.",
    },
    {
      slug: "desarrollo-web",
      title: "Desarrollo Web End-to-End",
      problem:
        "Necesitas presencia digital o una herramienta interna funcionando rápido, sin contratar un equipo completo de desarrollo.",
      includes: [
        "Sitios y aplicaciones web con React, Next.js y Tailwind",
        "Back-end y bases de datos (Supabase, PostgreSQL)",
        "Despliegue cloud en Vercel o AWS con dominio y analytics",
        "SEO técnico y medición desde el día uno",
      ],
      tools: [
        { name: "React", icon: "/images/skills/reactjs.svg" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "Tailwind", icon: "/images/skills/tailwind.svg" },
        { name: "Node.js", icon: "/images/skills/nodejs.svg" },
        { name: "Google Analytics", icon: "/images/skills/google-analytics.svg" },
      ],
      engagement: "Por proyecto, con alcance y entregables definidos por escrito.",
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
      sector: "Automatización con IA · Reino Unido",
      title: "Agentes de voz y SMS que atienden y hacen seguimiento a clientes",
      challenge:
        "Una cartera de negocios de servicios perdía leads porque las llamadas entraban fuera de horario y el seguimiento dependía de que alguien se acordara de hacerlo.",
      solution:
        "Diseñé la arquitectura de la solución: agentes de voz y SMS con IA (ElevenLabs) conectados a la operación, con flujos de conversación, transferencia a humanos y creación de tickets documentados en diagramas de proceso. Entrené los prompts e iteré con QA hasta la aprobación del cliente.",
      outcome:
        "Atención automatizada 24/7: el agente contesta, agenda y persigue leads solo, y el equipo humano solo interviene cuando aporta valor.",
      metric: "24/7",
      metricLabel: "atención sin intervención humana",
      tags: ["ElevenLabs", "Agentes IA", "n8n", "QA conversacional"],
    },
    {
      slug: "pasarela-banco-union",
      sector: "Banca digital · Colombia",
      title: "Migración de la pasarela de pagos del portal transaccional",
      challenge:
        "Banco Unión necesitaba migrar los pagos de su portal (créditos, tarjetas, seguros y giros nacionales e internacionales) de PayU a PSE Hosting ACH sin interrumpir el servicio.",
      solution:
        "Lideré la definición funcional completa: 12 requerimientos documentados con BPMN y UML, coordinando con Arquitectura, Seguridad e Infraestructura la revisión de flujos de integración sobre los sistemas core.",
      outcome:
        "Requerimientos aprobados a nivel de Subdirección de Canales Digitales y migración construida sobre documentación sin ambigüedades.",
      metric: "12",
      metricLabel: "requerimientos funcionales aprobados",
      tags: ["Banca", "BPMN", "Integraciones", "PSE"],
    },
    {
      slug: "automatizacion-colgate",
      sector: "Consumo masivo · Global",
      title: "Automatización del proceso de publicación web global",
      challenge:
        "Publicar cambios en más de 60 sitios de marca en múltiples países tomaba 3–4 minutos por página, multiplicado por miles de páginas al año.",
      solution:
        "Participé en las automatizaciones del flujo de publicación sobre Adobe Experience Manager y documenté el proceso con BPMN para que todos los equipos globales operaran igual.",
      outcome:
        "El tiempo por página bajó a cerca de 30 segundos — alrededor de 7 veces más rápido — con QA, accesibilidad y SEO auditados.",
      metric: "7×",
      metricLabel: "más rápido por página publicada",
      tags: ["AEM", "Automatización", "BPMN", "SEO"],
    },
  ],

  process: [
    {
      title: "Descubrimiento",
      description:
        "Una llamada para entender tu operación, tus sistemas y dónde está el cuello de botella real.",
    },
    {
      title: "Diseño",
      description:
        "Documento la solución: flujos, integraciones, alcance y propuesta con entregables claros.",
    },
    {
      title: "Implementación",
      description:
        "Construcción de la solución con validación continua — tú ves avances, no sorpresas.",
    },
    {
      title: "Iteración",
      description:
        "QA, ajustes con datos reales y acompañamiento hasta que la solución opere sola.",
    },
  ],

  faqs: [
    {
      question: "¿Trabajas con clientes fuera de Colombia?",
      answer:
        "Sí. Trabajo 100% remoto con clientes en Estados Unidos, Reino Unido y Latinoamérica, en español e inglés (C1).",
    },
    {
      question: "¿Qué tamaño de empresa atiendes?",
      answer:
        "Desde negocios independientes que necesitan su primera automatización hasta banca enterprise. El proceso se adapta al tamaño del problema, no al revés.",
    },
    {
      question: "¿Cómo cotizas un proyecto?",
      answer:
        "Después de la llamada de discovery preparo una propuesta con alcance, entregables, tiempos y precio cerrado. Sin costos ocultos ni horas abiertas.",
    },
    {
      question: "¿Puedes trabajar con mi equipo de desarrollo actual?",
      answer:
        "Es mi escenario más común: yo aporto el análisis, la documentación y el QA; tu equipo construye sobre requerimientos claros y validados.",
    },
    {
      question: "¿Qué pasa si no sé qué necesito exactamente?",
      answer:
        "Para eso existe el discovery. Llegas con un dolor operativo, salimos con un diagnóstico del proceso y opciones concretas de solución priorizadas por impacto.",
    },
  ],
};
