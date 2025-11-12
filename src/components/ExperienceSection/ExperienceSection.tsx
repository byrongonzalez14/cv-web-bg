import { useEffect, useRef, useState } from 'react';

interface Experience {
  company: string;
  logo: string;
  borderColor: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "G-Vision",
    logo: "/img/g-vision-logo.png",
    borderColor: "border-green-500",
    description: [
      "Multimedia Engineer and Technical Business Analyst with a strong technical background focused on managing and coordinating development, automation, and system integration projects.",
      "I have experience gathering and analyzing requirements, creating functional and technical documentation, and modeling business processes using BPMN and UML to ensure clear traceability between business needs and technical solutions.",
    ]
  },
  {
    company: "Banco Unión",
    logo: "/img/banco-union-logo.png",
    borderColor: "border-purple-500",
    description: [
      "Led digital transformation initiatives for banking systems, focusing on API development and integration with third-party services.",
      "Implemented automated testing frameworks that reduced deployment time by 40% and improved code quality across multiple teams.",
    ]
  },
  {
    company: "Colgate-Palmolive",
    logo: "/img/colgate-logo.png",
    borderColor: "border-yellow-500",
    description: [
      "Developed and maintained enterprise resource planning (ERP) solutions for supply chain management across Latin America.",
      "Collaborated with cross-functional teams to optimize business processes, resulting in 25% improvement in operational efficiency.",
    ]
  },
  {
    company: "Comfenalco Valle & Delagente",
    logo: "/img/comfenalco-logo.png",
    borderColor: "border-red-500",
    description: [
      "Designed and implemented customer relationship management (CRM) systems for social service organizations.",
      "Created data analytics dashboards that provided real-time insights into service delivery and customer satisfaction metrics.",
    ]
  },
];

export const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full py-20 px-8 md:px-[120px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Título de la sección */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-[#d9ff6c] mx-auto"></div>
      </div>

      {/* Lista de experiencias */}
      <div className="max-w-7xl mx-auto space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`
              flex flex-col md:flex-row items-center gap-8 md:gap-12
              transition-all duration-1000 ease-out
              ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-20'
              }
            `}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Logo de la empresa */}
            <div
              className={`
                relative flex-shrink-0 w-64 h-40
                bg-white/10 backdrop-blur-md rounded-2xl
                border-4 ${exp.borderColor}
                shadow-2xl
                flex items-center justify-center
                overflow-hidden
                group
                hover:scale-105 transition-transform duration-300
              `}
            >
              {/* Placeholder para el logo */}
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-white mb-2">
                  {exp.company}
                </div>
                <div className="text-sm text-gray-300">Company Logo</div>
              </div>
              
              {/* Efecto parallax en hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>

            {/* Descripción */}
            <div 
              className={`
                flex-1 space-y-4
                transition-all duration-1000 ease-out
                ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }
              `}
              style={{
                transitionDelay: `${index * 100 + 200}ms`
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {exp.company}
              </h3>
              
              {exp.description.map((paragraph, pIndex) => (
                <p 
                  key={pIndex}
                  className="text-gray-300 text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
