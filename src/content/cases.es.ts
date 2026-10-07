import type { WorkContent } from "@/models/cases";
import { DEOCCIDENTE_VIDEOS } from "./case-videos";

export const casesEs: WorkContent = {
  cases: [
    {
      slug: "deoccidente",
      name: "De Occidente",
      title: "Un buscador de rutas que sí encuentra tu ruta",
      summary:
        "Rediseño conceptual del sitio de una cooperativa de transporte de pasajeros en el Valle del Cauca. Menos plataformas que mantener, un servicio principal que se entiende a la primera y una infraestructura mucho más simple: de un WordPress con 9 plugins a un sitio estático, sin servidor propio, sin base de datos y sin APIs de IA.",
      tags: ["Concepto no oficial", "React · TypeScript · Vite · Tailwind", "Publicado desde GitHub en Vercel"],
      stats: [
        { value: "114 → 22", label: "solicitudes para cargar la portada, sitio actual frente al concepto" },
        { value: "185", label: "rutas y 46 poblaciones, con tarifas, paradas intermedias y trasbordos" },
        { value: "0", label: "servidores y bases de datos que mantener" },
        { value: "1", label: "sola fuente de datos: rutas, horarios y oficinas alimentan todas las pantallas" },
      ],
      videos: DEOCCIDENTE_VIDEOS,
      cover: "buscador",
      startingPoint: {
        title: "El punto de partida",
        intro:
          "La Cooperativa de Transportadores de Occidente conecta unas 46 poblaciones del Valle del Cauca y el Eje Cafetero. Al revisar su sitio actual (octubre de 2026) encontré lo siguiente:",
        items: [
          "El servicio principal es difícil de consultar. Para saber cuánto cuesta un viaje hay que escribir el origen en una caja de texto y abrir una página por ruta (101 páginas, cada una se edita por separado). No se puede elegir origen y destino, ni saber qué hacer cuando no hay ruta directa.",
          "Dos plataformas que mantener. El blog tiene su última entrada en agosto de 2022, mientras las redes sociales se actualizan con frecuencia. Mantener el mismo contenido en dos lugares es costoso, y el sitio es el que se queda atrás.",
          "Problemas visuales. En el pie de página, el logotipo, el sello de Supertransporte y el crédito del desarrollador no cargan, y en la página de contacto el navegador registra al menos 6 recursos con error.",
          "Infraestructura pesada. WordPress con un tema basado en Divi y 9 plugins. Cargar la portada requiere 114 solicitudes y 67 scripts. Cada plugin es algo que actualizar y vigilar.",
          "El formulario de contacto se queda en «cargando» al enviar, sin confirmar el envío ni mostrar un error.",
        ],
      },
      problems: {
        title: "Problemas que resolví",
        foundLabel: "Lo que encontré",
        didLabel: "Lo que hice",
        rows: [
          {
            found: "Dos plataformas que mantener. El blog no se actualiza desde 2022; las redes sí.",
            did: "Reemplacé el blog por una sección «Lo último en nuestras redes» con las publicaciones de Facebook en vivo: se actualiza sola cuando la cooperativa publica, sin que nadie edite el sitio.",
          },
          {
            found: "Imágenes que no cargan, íconos sueltos y un estilo anticuado.",
            did: "Diseño limpio y moderno. Todas las imágenes referenciadas existen y cargan; fotos y videos optimizados.",
          },
          {
            found: "WordPress, 9 plugins, 114 solicitudes y 67 scripts para la portada.",
            did: "Sitio estático: 22 solicitudes y 1 script. Sin base de datos ni plugins que actualizar; se publica desde GitHub en Vercel en minutos.",
          },
          {
            found: "Tarifas repartidas en 101 páginas que se editan una por una.",
            did: "Una sola fuente de datos. Se cambia una tarifa y se actualiza en el buscador, las tablas, las tarjetas «desde», el mapa y el asistente.",
          },
          {
            found: "El servicio principal, viajar, era lo más difícil de consultar.",
            did: "Buscador de origen y destino que solo ofrece lugares alcanzables, mapa interactivo de la red y calculador de tarifa con trasbordos.",
          },
          {
            found: "Teléfonos y oficinas dispersos.",
            did: "Directorio de 20 puntos de atención con búsqueda y filtros, contrastado con las historias «Oficinas» de su Instagram.",
          },
          {
            found: "Formulario que se queda «cargando» al enviar.",
            did: "Formulario funcional, con confirmación al enviar.",
          },
        ],
      },
      built: {
        title: "Lo que construí",
        blocks: [
          {
            title: "Un buscador que piensa como el pasajero",
            video: "buscador",
            paragraphs: [],
            bullets: [
              "Al elegir el origen, el destino solo ofrece lugares alcanzables, separados en «ruta directa» y «con trasbordo».",
              "Tolera tildes y errores de escritura: «tulua», «la union», «roldanilo» funcionan.",
              "Las rutas de tres paradas se tratan como una sola ruta que sirve a su parada intermedia.",
              "Cada búsqueda queda en el enlace, para compartirla.",
            ],
          },
          {
            title: "Un mapa de la red y tarifas con trasbordo",
            video: "mapa",
            paragraphs: [
              "Se toca una ciudad y se resaltan los lugares a los que se llega directo y los que requieren trasbordo. Si no hay ruta directa, el motor calcula la mejor combinación (hasta dos trasbordos) y suma las tarifas.",
            ],
          },
          {
            title: "Un asistente de rutas, sin IA generativa",
            video: "asistente",
            paragraphs: [
              "Un chat que corre completo en el navegador. Reconoce ciudades dentro de una frase, recuerda el contexto («¿y de regreso?») y responde rutas, precios, horarios y teléfonos de oficinas. Cuando no entiende, ofrece botones con sugerencias en vez de inventar.",
            ],
          },
          {
            title: "Horarios que se pueden consultar",
            paragraphs: [
              "Transcribí 19 bloques de horario de las historias de Instagram de la cooperativa, y la ficha de cada ruta muestra la «próxima salida» según la hora de Colombia.",
            ],
          },
          {
            title: "Rendimiento y detalle",
            video: "antesDespues",
            paragraphs: [
              "Frente al sitio actual, la portada del concepto pasa de 114 a 22 solicitudes, de 67 scripts a 1, de 101 páginas de tarifas a una sola fuente de datos y de 9 plugins a ninguno. Mi primera versión del rediseño pesaba 58 MB en imágenes y videos; hoy pesa 4 MB. Las animaciones de entrada respetan la opción «reducir movimiento».",
            ],
          },
        ],
      },
      decisions: {
        title: "Las decisiones que más importan",
        items: [
          {
            title: "Reglas en lugar de un modelo de lenguaje",
            text: "El universo es pequeño y cada pregunta tiene una única respuesta correcta. Un modelo habría agregado costo por consulta, latencia y el riesgo de inventar un precio. Con reglas, la respuesta es la misma cada vez, funciona sin conexión a ninguna API y no cuesta por uso. No todo problema pide IA, y saber cuándo no usarla es parte del trabajo.",
          },
          {
            title: "Honestidad con los datos",
            text: "Reconcilié mi levantamiento de precios con las páginas públicas: 74 rutas tenían tarifas distintas y encontré errores como un municipio mal escrito y una ruta con dos precios contradictorios. De las 185 rutas, 99 están confirmadas con el sitio oficial y 86 no. La interfaz lo dice: «Precio por confirmar en taquilla». Prefiero un sitio que admite lo que no sabe a uno que aparenta certeza.",
          },
          {
            title: "Infraestructura simple",
            text: "Un WordPress necesita un servidor con PHP y base de datos, y vive de actualizar plugins y tema. Un sitio estático son archivos: se publican desde GitHub en Vercel y no hay nada que parchar. Además, el motor de rutas es independiente de la interfaz, así que el mismo código podría alimentar mañana un bot de WhatsApp o una app.",
          },
        ],
      },
      nextSteps: {
        title: "Lo que haría con acceso real",
        intro: "Este concepto se construyó con información pública. Con la cooperativa como cliente, seguiría por aquí:",
        items: [
          "Un panel para que la cooperativa edite tarifas y horarios sin tocar código.",
          "SEO de verdad: pre-renderizar cada ruta como su propia página («bus Cali Cartago precio»), con título, descripción e imagen para compartir.",
          "Rastreo de encomiendas integrado, con la API del proveedor y su autorización.",
          "Autorización de tratamiento de datos y un canal de PQRS funcional, como exige la normativa colombiana.",
          "El mismo asistente por WhatsApp, reutilizando el motor de rutas.",
        ],
      },
      stack: {
        title: "Stack",
        text: "React 18, TypeScript, Vite, Tailwind CSS, Motion. Código en GitHub, publicado en Vercel. El formulario de contacto usa EmailJS.",
      },
      notice: {
        title: "Aviso",
        text: "Este proyecto es un concepto de rediseño que hice por iniciativa propia. No es el sitio oficial ni tiene vínculo con la Cooperativa de Transportadores de Occidente; sus marcas y contenidos pertenecen a sus dueños. La información sale de sus páginas y redes públicas. El formulario de contacto funciona, pero el mensaje me llega a mí, no a la cooperativa.",
      },
      links: {
        live: "https://de-occidente-website.vercel.app",
        code: "https://github.com/byrongonzalez14/de-occidente-website",
        liveLabel: "Ver el concepto en vivo",
        codeLabel: "Código en GitHub",
      },
      closing: {
        question: "¿Tus clientes buscan información que ya está en tus propios datos?",
        cta: "Hablemos",
      },
      meta: {
        title: "De Occidente: un buscador de rutas que sí encuentra tu ruta — Byron González",
        description:
          "Caso de estudio: rediseño conceptual del sitio de una cooperativa de transporte. Buscador con trasbordos, mapa de la red y asistente de rutas sin IA, en un sitio estático sin servidor.",
      },
    },
  ],
  others: [
    { name: "Encárgate", kind: "Aplicación web", url: "https://encargate-app.vercel.app/" },
    { name: "Vidrios Bedoya", kind: "Sitio web", url: "https://vidrios-bedoya.vercel.app/" },
    { name: "La Rivera", kind: "Sitio web", url: "https://la-rivera.vercel.app/" },
  ],
  upcoming: [
    { name: "Asistente de descubrimiento por Telegram", kind: "Bot con traspaso a humano" },
    { name: "Onboarding automatizado", kind: "Automatización de procesos" },
  ],
};
