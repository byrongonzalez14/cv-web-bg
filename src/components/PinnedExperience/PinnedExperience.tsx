import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// Import company logos
import freelancerLogo from '../../assets/logos-experience/logo-freelancer.svg';
import qvisionLogo from '../../assets/logos-experience/logo-QVision.png';
import bancoUnionLogo from '../../assets/logos-experience/banco-union-logo.svg';
import colgateLogo from '../../assets/logos-experience/colgate-palmolive-logo.png';
import comfenalcoLogo from '../../assets/logos-experience/comfenalco-logo.svg';

const getCompanyLogos = (company: string): string[] => {
  if (company.includes('Freelancer')) return [freelancerLogo];
  if (company.includes('Q-VISION') && company.includes('BANCO UNION')) {
    return [qvisionLogo, bancoUnionLogo]; // Dos logos para Q-Vision + Banco Unión
  }
  if (company.includes('COLGATE')) return [colgateLogo];
  if (company.includes('COMFENALCO')) return [comfenalcoLogo];
  return [];
};

export const PinnedExperience = () => {
  const { data } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Transform data to match component structure
  const experiences = data.experience.map((exp, index) => ({
    id: index + 1,
    company: exp.company,
    logos: getCompanyLogos(exp.company),
    role: exp.position,
    period: exp.period,
    description: exp.description.split('\n').filter(d => d.trim()),
    keyProjects: exp.keyProjects || [],
    skills: exp.technologies
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calcular el progreso del scroll dentro de este contenedor
      // Cuando top = 0, estamos al inicio (progress = 0)
      // Cuando top = -(containerHeight - windowHeight), estamos al final (progress = 1)
      const progress = Math.max(0, Math.min(1, -rect.top / (containerHeight - windowHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar qué experiencia mostrar basado en el progreso
  const totalExperiences = experiences.length;
  
  // Ajustar cálculo para que cada experiencia tenga su rango completo
  const adjustedProgress = Math.min(scrollProgress * totalExperiences, totalExperiences - 0.001);
  const currentIndex = Math.floor(adjustedProgress);
  
  // Progreso dentro de la experiencia actual (0 a 1)
  const experienceProgress = adjustedProgress - currentIndex;

  const currentExperience = experiences[currentIndex];
  const nextExperience = experiences[currentIndex + 1];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${100 + (totalExperiences - 1) * 25}vh` }} // Base 100vh + 25vh por experiencia adicional
    >
      {/* Contenedor STICKY que se queda pegado */}
      <div className="sticky top-0 min-h-screen w-full bg-[#161616] flex items-start justify-center overflow-y-auto overflow-x-hidden py-12">
        <div className="w-full px-8 md:px-[120px]">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[350px_1fr] gap-12 items-start">
            
            {/* LADO IZQUIERDO - Logo */}
            <div 
              className="relative overflow-hidden"
              style={{ minHeight: nextExperience ? '280px' : 'auto' }}
            >
              {/* Logo actual */}
              <div
                className="flex flex-col items-center gap-4"
                style={{
                  transform: nextExperience ? `translateX(${experienceProgress * -100}%)` : 'none',
                  transition: 'none',
                  position: nextExperience ? 'absolute' : 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}
              >
                {currentExperience.logos.length > 0 ? currentExperience.logos.map((logo, idx) => (
                  <div key={idx} className="w-full max-w-[300px] h-32 bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center p-6">
                    <img 
                      src={logo} 
                      alt={`${currentExperience.company} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )) : (
                  <div className="w-full max-w-[300px] h-32 bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center p-6">
                    <div className="text-white/50 text-center text-sm">
                      {currentExperience.company}
                    </div>
                  </div>
                )}
              </div>

              {/* Logo siguiente (si existe) */}
              {nextExperience && (
                <div
                  className="absolute top-0 left-0 w-full flex flex-col items-center gap-4"
                  style={{
                    transform: `translateX(${(1 - experienceProgress) * 100}%)`,
                    transition: 'none',
                  }}
                >
                  {nextExperience.logos.length > 0 ? nextExperience.logos.map((logo, idx) => (
                    <div key={idx} className="w-full max-w-[300px] h-32 bg-[#1a1a1a] rounded-2xl border border-[#d9ff6c]/20 flex items-center justify-center p-6">
                      <img 
                        src={logo} 
                        alt={`${nextExperience.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )) : (
                    <div className="w-full max-w-[300px] h-32 bg-[#1a1a1a] rounded-2xl border border-[#d9ff6c]/20 flex items-center justify-center p-6">
                      <div className="text-white/50 text-center text-sm">
                        {nextExperience.company}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* LADO DERECHO - Descripción */}
            <div 
              className="relative w-full overflow-hidden"
              style={{ minHeight: nextExperience ? '600px' : 'auto' }}
            >
              {/* Descripción actual */}
              <div
                className="w-full p-8"
                style={{
                  transform: nextExperience ? `translateX(${experienceProgress * -100}%)` : 'none',
                  transition: 'none',
                  pointerEvents: experienceProgress > 0.5 ? 'none' : 'auto',
                  position: nextExperience ? 'absolute' : 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {currentExperience.role}
                  </h2>
                  <p className="text-[#d9ff6c] text-sm font-semibold">
                    {currentExperience.period}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {currentExperience.description.map((paragraph, index) => (
                    <p key={index} className="text-white/80 text-sm leading-relaxed">
                      • {paragraph.replace(/^•\s*/, '')}
                    </p>
                  ))}
                </div>

                {currentExperience.keyProjects.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-base mb-3">Key Projects</h3>
                    <div className="space-y-2">
                      {currentExperience.keyProjects.map((project, index) => (
                        <p key={index} className="text-white/80 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-[#d9ff6c] mt-1">•</span>
                          <span>{project}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-white font-bold text-base mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentExperience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#1e1e1e] rounded-lg text-xs text-white border border-white/10 hover:border-[#d9ff6c]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Descripción siguiente (si existe) */}
              {nextExperience && (
                <div
                  className="absolute top-0 left-0 w-full p-8"
                  style={{
                    transform: `translateX(${(1 - experienceProgress) * 100}%)`,
                    transition: 'none',
                    pointerEvents: experienceProgress < 0.5 ? 'none' : 'auto',
                  }}
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {nextExperience.role}
                    </h2>
                    <p className="text-[#d9ff6c] text-sm font-semibold">
                      {nextExperience.period}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {nextExperience.description.map((paragraph, index) => (
                      <p key={index} className="text-white/80 text-sm leading-relaxed">
                        • {paragraph.replace(/^•\s*/, '')}
                      </p>
                    ))}
                  </div>

                  {nextExperience.keyProjects.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-white font-bold text-base mb-3">Key Projects</h3>
                      <div className="space-y-2">
                        {nextExperience.keyProjects.map((project, index) => (
                          <p key={index} className="text-white/80 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-[#d9ff6c] mt-1">•</span>
                            <span>{project}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-white font-bold text-base mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {nextExperience.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-[#1e1e1e] rounded-lg text-xs text-white border border-white/10 hover:border-[#d9ff6c]/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Indicador de progreso - fuera del grid */}
          <div className="mt-8 flex gap-2 justify-center">
            {experiences.map((_, index) => (
              <div
                key={index}
                className="transition-all duration-300"
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: index === currentIndex 
                    ? '#d9ff6c' 
                    : index < currentIndex 
                      ? 'rgba(217, 255, 108, 0.3)'
                      : 'rgba(255, 255, 255, 0.2)',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
