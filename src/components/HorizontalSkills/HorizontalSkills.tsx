import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// Import all skill logos
import awsLogo from '../../assets/logos-skills/aws.svg';
import gcpLogo from '../../assets/logos-skills/gcp.svg';
import dockerLogo from '../../assets/logos-skills/docker.svg';
import kubernetesLogo from '../../assets/logos-skills/kubernetes.svg';
import chatgptLogo from '../../assets/logos-skills/chatgpt.svg';
import geminiLogo from '../../assets/logos-skills/gemini.svg';
import claudeLogo from '../../assets/logos-skills/claude.svg';
import cursorLogo from '../../assets/logos-skills/cursor.svg';
import windsurfLogo from '../../assets/logos-skills/windsurf.svg';
import n8nLogo from '../../assets/logos-skills/n8n.svg';
import zapierLogo from '../../assets/logos-skills/zapier.svg';
import soapuiLogo from '../../assets/logos-skills/soapui.svg';
import postmanLogo from '../../assets/logos-skills/postman.svg';
import oracleLogo from '../../assets/logos-skills/oracle.svg';
import postgresqlLogo from '../../assets/logos-skills/postgresql.svg';
import mongodbLogo from '../../assets/logos-skills/mongodb.svg';
import firebaseLogo from '../../assets/logos-skills/firebase.svg';
import javaLogo from '../../assets/logos-skills/java.svg';
import springBootLogo from '../../assets/logos-skills/spring-boot.svg';
import nodejsLogo from '../../assets/logos-skills/nodejs.svg';
import typescriptLogo from '../../assets/logos-skills/typescript.svg';
import angularLogo from '../../assets/logos-skills/angular.svg';
import vuejsLogo from '../../assets/logos-skills/vuejs.svg';
import reactjsLogo from '../../assets/logos-skills/reactjs.svg';
import tailwindLogo from '../../assets/logos-skills/tailwind.svg';
import googleAnalyticsLogo from '../../assets/logos-skills/google-analytics.svg';
import gtmLogo from '../../assets/logos-skills/gtm.svg';
import aemLogo from '../../assets/logos-skills/aem.svg';
import wordpressLogo from '../../assets/logos-skills/wordpress.svg';
import powerbiLogo from '../../assets/logos-skills/powerbi.svg';
import bizagiLogo from '../../assets/logos-skills/bizagi.svg';
import lucidchartLogo from '../../assets/logos-skills/lucidchart.svg';
import jiraLogo from '../../assets/logos-skills/jira.svg';
import confluenceLogo from '../../assets/logos-skills/confluence.svg';
import trelloLogo from '../../assets/logos-skills/trello.svg';

// Logo mapping
const logoMap: Record<string, string> = {
  'aws.svg': awsLogo,
  'gcp.svg': gcpLogo,
  'docker.svg': dockerLogo,
  'kubernetes.svg': kubernetesLogo,
  'chatgpt.svg': chatgptLogo,
  'gemini.svg': geminiLogo,
  'claude.svg': claudeLogo,
  'cursor.svg': cursorLogo,
  'windsurf.svg': windsurfLogo,
  'n8n.svg': n8nLogo,
  'zapier.svg': zapierLogo,
  'soapui.svg': soapuiLogo,
  'postman.svg': postmanLogo,
  'oracle.svg': oracleLogo,
  'postgresql.svg': postgresqlLogo,
  'mongodb.svg': mongodbLogo,
  'firebase.svg': firebaseLogo,
  'java.svg': javaLogo,
  'spring-boot.svg': springBootLogo,
  'nodejs.svg': nodejsLogo,
  'typescript.svg': typescriptLogo,
  'angular.svg': angularLogo,
  'vuejs.svg': vuejsLogo,
  'reactjs.svg': reactjsLogo,
  'tailwind.svg': tailwindLogo,
  'google-analytics.svg': googleAnalyticsLogo,
  'gtm.svg': gtmLogo,
  'aem.svg': aemLogo,
  'wordpress.svg': wordpressLogo,
  'powerbi.svg': powerbiLogo,
  'bizagi.svg': bizagiLogo,
  'lucidchart.svg': lucidchartLogo,
  'jira.svg': jiraLogo,
  'confluence.svg': confluenceLogo,
  'trello.svg': trelloLogo,
};

const getLogoPath = (logoPath: string): string => {
  const filename = logoPath.split('/').pop() || '';
  return logoMap[filename] || '';
};

const getLevelText = (level: number): 'Expert' | 'Advanced' | 'Intermediate' => {
  if (level >= 5) return 'Expert';
  if (level >= 4) return 'Advanced';
  return 'Intermediate';
};

const getColorByCategory = (category: string): string => {
  const colorMap: Record<string, string> = {
    'Cloud': 'from-orange-500 to-yellow-600',
    'DevOps': 'from-blue-500 to-cyan-600',
    'Artificial Intelligence': 'from-purple-500 to-pink-600',
    'AI Tools': 'from-cyan-500 to-blue-600',
    'Automation': 'from-red-500 to-orange-600',
    'Architecture': 'from-green-500 to-emerald-600',
    'Databases': 'from-blue-600 to-indigo-700',
    'Development': 'from-yellow-500 to-amber-600',
    'Web Optimization': 'from-cyan-600 to-blue-700',
    'Web Management': 'from-red-700 to-pink-800',
    'Analytics': 'from-indigo-600 to-purple-700',
    'Analysis': 'from-green-600 to-lime-700',
    'Management': 'from-blue-600 to-cyan-700',
  };
  return colorMap[category] || 'from-gray-600 to-gray-700';
};

export const HorizontalSkills = () => {
  const { data } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Transform data to match component structure
  const skills = data.skills.map((skill, index) => ({
    id: index + 1,
    name: skill.name,
    category: skill.category,
    level: getLevelText(skill.level),
    stars: skill.level,
    description: skill.category,
    color: getColorByCategory(skill.category),
    logos: skill.logos?.map(getLogoPath).filter(Boolean) || [] // Map to imported logos
  }));

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-green-400 border-green-500/50';
      case 'Advanced':
        return 'text-blue-400 border-blue-500/50';
      case 'Intermediate':
        return 'text-orange-400 border-orange-500/50';
      default:
        return 'text-gray-400 border-gray-500/50';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, -rect.top / (containerHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular cuánto se han movido las cards (en píxeles)
  const cardWidth = 400; // Ancho de cada card + gap
  const totalWidth = skills.length * cardWidth;
  const maxScroll = totalWidth - window.innerWidth + 200; // Espacio extra
  const horizontalOffset = scrollProgress * maxScroll;

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-[#161616]"
      style={{ height: '300vh' }} // 3x altura para scroll
    >
      {/* Contenedor STICKY que se queda pegado */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Título y descripción */}
        <div className="absolute top-20 left-8 md:left-[120px] z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Scroll to explore my technical expertise →
          </p>
        </div>

        {/* Contenedor de las cards que se mueve horizontalmente */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full">
          <div 
            className="flex gap-8 px-8 md:px-[120px] transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(-${horizontalOffset}px)`,
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`
                  relative flex-shrink-0 w-[380px] h-[450px]
                  bg-gradient-to-br ${skill.color}
                  rounded-3xl
                  border-2 border-white/10
                  shadow-2xl
                  overflow-hidden
                  group
                  hover:scale-105 transition-transform duration-300
                `}
                style={{
                  opacity: Math.max(0.3, 1 - Math.abs(index - scrollProgress * skills.length) * 0.2),
                  transform: `scale(${Math.max(0.85, 1 - Math.abs(index - scrollProgress * skills.length) * 0.05)})`,
                }}
              >
                {/* Número de skill */}
                <div className="absolute top-6 left-6">
                  <span className="text-8xl font-bold text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Contenido de la card */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  
                  {/* Top */}
                  <div>
                    <div className="mt-16 mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium mb-4">
                        {skill.category}
                      </p>
                      
                      {/* Grid 2x2 de Logos */}
                      {skill.logos && skill.logos.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          {skill.logos.slice(0, 4).map((logo, i) => (
                            <div 
                              key={i}
                              className="rounded-xl p-3 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                            >
                              <img 
                                src={logo}
                                alt={`${skill.name} logo ${i + 1}`}
                                className="w-14 h-14 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    {/* Estrellas */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${
                            i < skill.stars ? 'text-yellow-300' : 'text-white/20'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                        {skill.description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de progreso */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#d9ff6c] to-purple-500 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-2">
            {Math.round(scrollProgress * 100)}% explored
          </p>
        </div>
      </div>
    </div>
  );
};
