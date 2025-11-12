import { useEffect, useRef, useState } from 'react';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  keyProjects: string[];
  skills: string[];
  logo?: string;
  logoText: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Comfenalco Valle & Delagente",
    logoText: "Comfenalco Valle\n🦅 Delagente",
    role: "Web Designer (Internship)",
    period: "January 2017 - June 2017",
    description: [
      "Updated content and improved the user experience of the corporate intranet.",
      "Made adjustments in HTML and CSS according to corporate brand guidelines.",
      "Delivered to Scrum stakeholders (daily meetings, sprint planning, and reviews).",
    ],
    keyProjects: [
      "Partial redesign of the corporate intranet, improving navigation and page load times.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "LESS", "Scrum"],
  },
  {
    id: 2,
    company: "Freelancer",
    logoText: "Freelancer",
    role: "Cloud & Automation Engineer",
    period: "May 2014 - Present",
    description: [
      "Analyze business and technical requirements, proposing functional, technical, and automation solutions.",
      "Design and implement AWS infrastructures, including BPMN process diagrams, use cases, data models, and data diagrams to accurately capture business needs and technical solutions.",
      "Provide ongoing support for AWS Cloud and serverless solutions using Angular, Vue, Spring Boot, and Node.js, ensuring code quality, documentation, and testing.",
      "Design system and service integration flows using n8n and REST APIs, connecting business and operational processes, and improving operational efficiency.",
      "Manage AWS resources such as EC2, ECS, Lambda, S3, RDS, API Gateway, Step Functions, EventBridge, Amplify, CodePipeline, App Runner, DynamoDB, DocumentDB, AWS Glue, Superset, Railway, and Vercel, ensuring stable environments for development, QA, and production.",
      "Led projects such as Clouds, Gemini, Riask, and ChapterFY to exchange policies, documentation, and development processes, achieving faster, more accurate, and business-aligned results.",
    ],
    keyProjects: [],
    skills: ["Serverless (8 Chatbots, Gemini, Gis.c)", "Clouds", "Copper", "Wincloud", "n8n", "Superset", "Ballepy", "Verbal", "AWS (Solutions Architect Fundamentals)", "Cloud Architecture Design"],
  },
  {
    id: 3,
    company: "Colgate-Palmolive",
    logoText: "💙 Colgate-Palmolive",
    role: "Web Content Analyst - QA & SEO Specialist",
    period: "March 2018 - June 2022",
    description: [
      "Coordinated international web projects in ABM, making sure global brand guidelines were applied to each region's sites.",
      "Prepared web pages and created clear reports on site quality, using internal checklists and KPIs personally outlined.",
      "Led SEO practices and brand standards on global websites, running crawl analyses and reporting issues.",
      "Implemented tracking codes, tags, and data collection forms in LATAM, improving marketing team insights.",
    ],
    keyProjects: [
      "SEO Audit and migration of 50 Colgate websites to ABM, ensuring SEO and accessibility compliance.",
      "Global standardization of SEO and QA practices, improving brand visibility and consistency across different markets.",
      "Implementation of analytics reports and data capture forms for LATAM, supporting data-driven marketing decisions.",
    ],
    skills: ["Adobe Experience Manager (AEM)", "SEO (Google Analytics/Google Search Console)", "Google Tag Manager", "QA Testing", "Accessibility Standards", "JIRA", "Agile (Documentation)", "Figma", "Jira", "Confluence"],
  },
  {
    id: 4,
    company: "Banco Unión & Q-Vision",
    logoText: "BANCO\nUNIÓN\n+\nQ-Vision",
    role: "Technical Lead - Development Analyst",
    period: "June 2022 - May 2024",
    description: [
      "Coordinated between business teams and external vendors, producing and validating requirements (architectures, integrations, data flows) and modeling processes.",
      "Collaborated with teams in Agile methodologies, ensuring quality delivery.",
      "Eliminated efforts and supported project planning, ensuring realistic timelines and effective delivery tracking.",
      "Participated in QA and UAT, running smoke, functional, non-functional, and integration tests to validate acceptance criteria and ensure product quality.",
      "Led business analysis across various banking projects, generating reports to improve decision-making across different bank areas.",
    ],
    keyProjects: [
      "Added new features to the bank's transactional portal, improving the customer experience.",
      "Migration and improvement of core banking service integrations, reducing errors and response times.",
      "Supported critical deployments in production with no major incidents.",
    ],
    skills: ["Spring Boot", "REST APIs", "SQL", "PostgreSQL", "Oracle Databases", "ETL", "BPMN", "QA Testing", "Agile (Scrum, Kanban)", "Swagger", "Jira"],
  },
];

export const StickyExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px',
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const activeExperience = experiences[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full bg-gray-900">
      {/* Contenedor sticky que se queda fijo */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-8 md:px-[120px] py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LADO IZQUIERDO - Logo de la empresa */}
          <div className="flex items-center justify-center">
            <div
              key={`logo-${activeExperience.id}`}
              className="
                relative w-full max-w-md h-64
                bg-gradient-to-br from-gray-800 to-gray-900
                rounded-2xl border-4 border-white/20
                shadow-2xl
                flex items-center justify-center
                animate-fade-in
              "
            >
              <div className="text-center p-8">
                <h3 
                  className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line"
                  style={{ lineHeight: '1.2' }}
                >
                  {activeExperience.logoText}
                </h3>
              </div>
              
              {/* Indicador de progreso */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {experiences.map((_, index) => (
                  <div
                    key={index}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${index === activeIndex ? 'bg-[#d9ff6c] w-8' : 'bg-white/30'}
                    `}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO - Descripción de la experiencia */}
          <div
            key={`content-${activeExperience.id}`}
            className="
              bg-black/40 backdrop-blur-sm
              rounded-2xl p-8
              border border-white/10
              animate-fade-in
              max-h-[80vh] overflow-y-auto
              custom-scrollbar
            "
          >
            {/* Título y período */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                {activeExperience.role}
              </h2>
              <p className="text-[#d9ff6c] text-sm font-semibold">
                {activeExperience.period}
              </p>
            </div>

            {/* Descripción */}
            <div className="space-y-3 mb-6">
              {activeExperience.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  • {paragraph}
                </p>
              ))}
            </div>

            {/* Key Projects */}
            {activeExperience.keyProjects.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-3">Key Projects</h3>
                <div className="space-y-2">
                  {activeExperience.keyProjects.map((project, index) => (
                    <p key={index} className="text-gray-300 text-sm leading-relaxed">
                      ✦ {project}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3">Technologies & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 
                      bg-white/10 
                      rounded-full 
                      text-xs text-gray-300
                      border border-white/20
                      hover:bg-white/20 transition-colors
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones invisibles que actúan como triggers para el scroll */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-screen w-full"
            style={{
              marginTop: index === 0 ? '0' : '0',
            }}
          />
        ))}
      </div>
    </div>
  );
};
