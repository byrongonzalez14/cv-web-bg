import { Code, Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Import language flags
import englishFlag from '../../assets/english-lang.png';
import spanishFlag from '../../assets/spanish-lang.png';

// Import skill logos
import awsLogo from '../../assets/skills/aws.svg';
import gcpLogo from '../../assets/skills/gcp.svg';
import dockerLogo from '../../assets/skills/docker.svg';
import kubernetesLogo from '../../assets/skills/kubernetes.svg';
import chatgptLogo from '../../assets/skills/chatgpt.svg';
import geminiLogo from '../../assets/skills/gemini.svg';
import claudeLogo from '../../assets/skills/claude.svg';
import cursorLogo from '../../assets/skills/cursor.svg';
import windsurfLogo from '../../assets/skills/windsurf.svg';
import n8nLogo from '../../assets/skills/n8n.svg';
import zapierLogo from '../../assets/skills/zapier.svg';
import soapuiLogo from '../../assets/skills/soapui.svg';
import postmanLogo from '../../assets/skills/postman.svg';
import oracleLogo from '../../assets/skills/oracle.svg';
import postgresqlLogo from '../../assets/skills/postgresql.svg';
import mongodbLogo from '../../assets/skills/mongodb.svg';
import firebaseLogo from '../../assets/skills/firebase.svg';
import javaLogo from '../../assets/skills/java.svg';
import springBootLogo from '../../assets/skills/spring-boot.svg';
import nodejsLogo from '../../assets/skills/nodejs.svg';
import typescriptLogo from '../../assets/skills/typescript.svg';
import angularLogo from '../../assets/skills/angular.svg';
import vuejsLogo from '../../assets/skills/vuejs.svg';
import reactjsLogo from '../../assets/skills/reactjs.svg';
import tailwindLogo from '../../assets/skills/tailwind.svg';
import googleAnalyticsLogo from '../../assets/skills/google-analytics.svg';
import gtmLogo from '../../assets/skills/gtm.svg';
import aemLogo from '../../assets/skills/aem.svg';
import wordpressLogo from '../../assets/skills/wordpress.svg';
import powerbiLogo from '../../assets/skills/powerbi.svg';
import bizagiLogo from '../../assets/skills/bizagi.svg';
import lucidchartLogo from '../../assets/skills/lucidchart.svg';
import jiraLogo from '../../assets/skills/jira.svg';
import confluenceLogo from '../../assets/skills/confluence.svg';
import trelloLogo from '../../assets/skills/trello.svg';

// Map logo paths to imported images
const logoMap: Record<string, string> = {
  'assets/skills/aws.svg': awsLogo,
  'assets/skills/gcp.svg': gcpLogo,
  'assets/skills/docker.svg': dockerLogo,
  'assets/skills/kubernetes.svg': kubernetesLogo,
  'assets/skills/chatgpt.svg': chatgptLogo,
  'assets/skills/gemini.svg': geminiLogo,
  'assets/skills/claude.svg': claudeLogo,
  'assets/skills/cursor.svg': cursorLogo,
  'assets/skills/windsurf.svg': windsurfLogo,
  'assets/skills/n8n.svg': n8nLogo,
  'assets/skills/zapier.svg': zapierLogo,
  'assets/skills/soapui.svg': soapuiLogo,
  'assets/skills/postman.svg': postmanLogo,
  'assets/skills/oracle.svg': oracleLogo,
  'assets/skills/postgresql.svg': postgresqlLogo,
  'assets/skills/mongodb.svg': mongodbLogo,
  'assets/skills/firebase.svg': firebaseLogo,
  'assets/skills/java.svg': javaLogo,
  'assets/skills/spring-boot.svg': springBootLogo,
  'assets/skills/nodejs.svg': nodejsLogo,
  'assets/skills/typescript.svg': typescriptLogo,
  'assets/skills/angular.svg': angularLogo,
  'assets/skills/vuejs.svg': vuejsLogo,
  'assets/skills/reactjs.svg': reactjsLogo,
  'assets/skills/tailwind.svg': tailwindLogo,
  'assets/skills/google-analytics.svg': googleAnalyticsLogo,
  'assets/skills/gtm.svg': gtmLogo,
  'assets/skills/aem.svg': aemLogo,
  'assets/skills/wordpress.svg': wordpressLogo,
  'assets/skills/powerbi.svg': powerbiLogo,
  'assets/skills/bizagi.svg': bizagiLogo,
  'assets/skills/lucidchart.svg': lucidchartLogo,
  'assets/skills/jira.svg': jiraLogo,
  'assets/skills/confluence.svg': confluenceLogo,
  'assets/skills/trello.svg': trelloLogo,
};

export const SkillsLanguages = () => {
  const { language, data } = useLanguage();

  const titles = {
    main: language === 'en' ? 'Skills & Expertise' : 'Habilidades y Experiencia',
    subtitle: language === 'en' 
      ? 'Technical proficiency across multiple domains'
      : 'Competencia técnica en múltiples áreas',
    skills: language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas',
    languages: language === 'en' ? 'Languages' : 'Idiomas',
  };

  return (
    <section className="w-full bg-[#161616] px-8 md:px-[120px] py-20">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d9ff6c]/10 rounded-full border border-[#d9ff6c]/20 mb-6">
            <Code className="w-5 h-5 text-[#d9ff6c]" />
            <span className="text-[#d9ff6c] text-sm font-medium [font-family:'Poppins',Helvetica]">
              {language === 'en' ? 'Core Competencies' : 'Competencias Clave'}
            </span>
          </div>
          
         {/* <h2 className="text-5xl md:text-6xl font-bold text-white [font-family:'Slackey',Helvetica] mb-4">
            {titles.main}
          </h2>
          */}
          
          <p className="text-white/70 text-lg [font-family:'Poppins',Helvetica] max-w-2xl mx-auto">
            {titles.subtitle}
          </p>
        </div>

        {/* SKILLS EN GRID DE 4 */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#d9ff6c]/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-[#d9ff6c]" />
            </div>
            <h3 className="text-3xl font-bold text-white [font-family:'Slackey',Helvetica]">
              {titles.skills}
            </h3>
          </div>

          {/* Grid directo de skills - 4 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/10 hover:border-[#d9ff6c]/30 transition-all duration-300 hover:transform hover:scale-[1.02] group"
              >
                {/* Nombre de la skill */}
                <h4 className="text-white font-bold text-base mb-0 text-center [font-family:'Poppins',Helvetica] min-h-[48px] flex items-center justify-center">
                  {skill.name}
                </h4>

                {/* Logos grandes */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {skill.logos.map((logo, logoIdx) => (
                    <div 
                      key={logoIdx}
                      className="w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
                      title={logo.split('/').pop()?.replace('.svg', '')}
                    >
                      <img 
                        src={logoMap[logo] || logo}
                        alt=""
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#d9ff6c]/10 flex items-center justify-center">
              <Languages className="w-6 h-6 text-[#d9ff6c]" />
            </div>
            <h3 className="text-3xl font-bold text-white [font-family:'Slackey',Helvetica]">
              {titles.languages}
            </h3>
          </div>

          {/* Cards de idiomas - Layout horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.languages.map((lang, index) => {
              const flagImage = lang.name === 'English' ? englishFlag : spanishFlag;
              
              return (
                <div 
                  key={index}
                  className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/10 hover:border-[#d9ff6c]/30 transition-all duration-300 hover:transform hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-4">
                    {/* Bandera circular */}
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10 group-hover:border-[#d9ff6c]/30 transition-colors">
                      <img 
                        src={flagImage} 
                        alt={`${lang.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Nombre del idioma */}
                    <h4 className="text-xl font-bold text-white [font-family:'Poppins',Helvetica] flex-1">
                      {lang.name}
                    </h4>

                    {/* Nivel */}
                    <span className="text-white/60 text-sm font-medium [font-family:'Poppins',Helvetica]">
                      {lang.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
