import { Briefcase, Calendar, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceTimeline = () => {
  const { language, data } = useLanguage();

  const titles = {
    main: language === 'en' ? 'Professional Journey' : 'Trayectoria Profesional',
    subtitle: language === 'en' 
      ? 'Building innovative solutions across different industries'
      : 'Construyendo soluciones innovadoras en diferentes industrias',
    responsibilities: language === 'en' ? 'Key Responsibilities' : 'Responsabilidades Clave',
    projects: language === 'en' ? 'Notable Projects' : 'Proyectos Destacados',
    technologies: language === 'en' ? 'Technologies Used' : 'Tecnologías Utilizadas',
  };

  return (
    <section className="w-full bg-[#161616] px-8 md:px-[120px] py-20">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d9ff6c]/10 rounded-full border border-[#d9ff6c]/20 mb-6">
            <Briefcase className="w-5 h-5 text-[#d9ff6c]" />
            <span className="text-[#d9ff6c] text-sm font-medium [font-family:'Poppins',Helvetica]">
              {language === 'en' ? 'Career Path' : 'Camino Profesional'}
            </span>
          </div>
          

          {/* titulo principal
          <h2 className="text-5xl md:text-6xl font-bold text-white [font-family:'Slackey',Helvetica] mb-4">
            {titles.main}
          </h2>
          */}
          <p className="text-white/70 text-lg [font-family:'Poppins',Helvetica] max-w-2xl mx-auto">
            {titles.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d9ff6c] via-[#d9ff6c]/50 to-transparent" />

          {/* Experiencias */}
          <div className="space-y-12">
            {data.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Punto en el timeline */}
                  <div className="absolute left-[-6px] lg:left-1/2 lg:ml-[-6px] top-8 w-3 h-3 bg-[#d9ff6c] rounded-full border-4 border-[#161616] z-10" />

                  {/* Empresa y Fecha - Arriba en mobile/tablet, lateral en desktop */}
                  <div className={`lg:hidden pl-8 mb-4`}>
                    <p className="text-3xl font-bold text-white [font-family:'Slackey',Helvetica] mb-1">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-white/60 text-sm [font-family:'Poppins',Helvetica]">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Empresa y Fecha en el lado opuesto - Solo desktop */}
                  <div className={`hidden lg:flex lg:w-1/2 items-center justify-center ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <div className="text-center">
                      <p className="text-5xl lg:text-6xl font-bold text-white/10 [font-family:'Slackey',Helvetica] mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-white/40 text-sm [font-family:'Poppins',Helvetica]">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Card de experiencia */}
                  <div className={`lg:w-1/2 pl-8 lg:pl-0 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 hover:border-[#d9ff6c]/30 transition-all duration-300 hover:transform hover:scale-[1.02] group">
                      
                      {/* Header de la card - Solo posición */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#d9ff6c]/10 flex items-center justify-center group-hover:bg-[#d9ff6c]/20 transition-colors">
                          <Briefcase className="w-6 h-6 text-[#d9ff6c]" />
                        </div>
                        <h3 className="text-xl font-bold text-white [font-family:'Poppins',Helvetica]">
                          {exp.position}
                        </h3>
                      </div>

                      {/* Responsabilidades */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-3 [font-family:'Poppins',Helvetica] flex items-center gap-2">
                          <Rocket className="w-4 h-4 text-[#d9ff6c]" />
                          {titles.responsibilities}
                        </h4>
                        <div className="space-y-2">
                          {exp.description.split('\n').map((item, idx) => {
                            const cleanItem = item.replace(/^•\s*/, '').trim();
                            if (!cleanItem) return null;
                            return (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-[#d9ff6c] mt-1 text-xs">▸</span>
                                <p className="text-white/80 text-sm leading-relaxed [font-family:'Poppins',Helvetica]">
                                  {cleanItem}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Key Projects (si existen) */}
                      {exp.keyProjects && exp.keyProjects.length > 0 && (
                        <div className="mb-6 p-4 bg-[#0d0d0d] rounded-xl border border-white/5">
                          <h4 className="text-white font-semibold text-sm mb-3 [font-family:'Poppins',Helvetica]">
                            {titles.projects}
                          </h4>
                          <div className="space-y-2">
                            {exp.keyProjects.map((project, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-[#d9ff6c]/60 mt-1 text-xs">★</span>
                                <p className="text-white/70 text-sm leading-relaxed [font-family:'Poppins',Helvetica]">
                                  {project}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tecnologías */}
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-3 [font-family:'Poppins',Helvetica] flex items-center gap-2">
                          <Code className="w-4 h-4 text-[#d9ff6c]" />
                          {titles.technologies}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-[#0d0d0d] border border-white/10 rounded-lg text-xs text-white/80 hover:border-[#d9ff6c]/40 hover:text-[#d9ff6c] transition-all [font-family:'Poppins',Helvetica]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Punto final del timeline */}
          <div className="absolute left-[-8px] md:left-1/2 md:ml-[-8px] bottom-0 w-4 h-4 bg-[#d9ff6c] rounded-full border-4 border-[#161616] animate-pulse" />
        </div>

      </div>
    </section>
  );
};
