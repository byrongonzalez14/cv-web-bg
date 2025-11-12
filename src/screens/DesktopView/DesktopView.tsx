import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { CurvedTextLoop } from "../../components/CurvedTextLoop";
import { LanguageToggle } from "../../components/LanguageToggle";
import { LayeredHero } from "../../components/LayeredHero";
import { MobileMenu } from "../../components/MobileMenu";
import { FadeText } from "../../components/FadeText";
import { DecryptedText } from "../../components/DecryptedText";
import { ScrollIndicator } from "../../components/ScrollIndicator";
import { ContactCTA } from "../../components/ContactCTA";
import { AboutMe } from "../../components/AboutMe";
import { ExperienceTimeline } from "../../components/ExperienceTimeline";
import { EducationCertifications } from "../../components/EducationCertifications";
import { SkillsLanguages } from "../../components/SkillsLanguages";
import { Footer } from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";

// Navigation items will be defined inside component to use language context

export const DesktopView = (): JSX.Element => {
  const { language, data, isTransitioning } = useLanguage();
  
  // Navigation items based on language
  const navigationItems = language === 'en' 
    ? [
        { label: "About Me", id: "about-me" },
        { label: "Experience", id: "experience" },
        { label: "Education & Certifications", id: "education-and-certifications" },
        { label: "Skills", id: "skills" },
      ]
    : [
        { label: "Sobre mí", id: "about-me" },
        { label: "Experiencia", id: "experience" },
        { label: "Educación y Certificaciones", id: "education-and-certifications" },
        { label: "Habilidades", id: "skills" },
      ];
  
  // Social icons with dynamic links from contact data
  const socialIcons = [
    { 
      Icon: Mail,
      alt: "Email", 
      href: `mailto:${data.personalInfo.contact.email}`,
      label: data.personalInfo.contact.email
    },
    { 
      Icon: MessageCircle,
      alt: "WhatsApp", 
      href: `https://wa.me/${data.personalInfo.contact.phone.replace(/\D/g, '')}`,
      label: data.personalInfo.contact.phone
    },
    { 
      Icon: Linkedin,
      alt: "LinkedIn", 
      href: data.personalInfo.contact.linkedin,
      label: "LinkedIn"
    },
    { 
      Icon: Github,
      alt: "GitHub", 
      href: data.personalInfo.contact.github,
      label: "GitHub"
    },
  ];
  
  // CV files based on language
  const cvFile = language === 'en' 
    ? '/src/assets/cv/CV-2026-EN-LT-BA-BYRON-GONZALEZ.pdf'
    : '/src/assets/cv/CV-2026-ES-LT-BA-BYRON-GONZALEZ.pdf';
  
  // Texts based on language
  const texts = {
    downloadCV: language === 'en' ? 'Download CV' : 'Descargar CV',
    aboutMe: language === 'en' ? 'About me ✦  ' : 'Sobre mí ✦  ',
    workExperience: language === 'en' ? 'Work Experience ✦ ' : 'Experiencia Laboral ✦ ',
    skills: language === 'en' ? 'Skills & Technologies ✦ ' : 'Habilidades y Tecnologías ✦ ',
    education: language === 'en' ? 'Education & Certifications ✦ ' : 'Educación y Certificaciones ✦ ',
  };
  
  return (
    <div
      className="flex flex-col items-start relative bg-[#161616]"
      data-model-id="102:2257"
    >
        <header className="flex flex-col w-full items-start lg:min-h-screen lg:justify-between lg:pb-8 relative overflow-hidden bg-[#161616]">
          {/* Layered Hero Animation - Desktop only (background) */}
          <div className="hidden lg:block">
            <LayeredHero />
          </div>
          
          {/* Navbar - Fixed at top */}
          <nav className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] z-50 pt-5 px-6 lg:px-[120px]">
            <img
              className="relative flex-[0_0_auto] h-[36px] lg:h-[47px]"
              alt="Logo bg white svg"
              src="/images/brand/logo.svg"
            />

            <div className="flex items-center gap-2 lg:gap-4">
              {/* Navbar - Hidden on mobile/tablet */}
              <ul className="hidden lg:inline-flex items-center justify-center gap-[22px] px-5 py-3 relative flex-[0_0_auto] bg-[#ffffff4c] rounded-[80px] backdrop-blur-[4.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)]">
                {navigationItems.map((item) => (
                  <li
                    key={item.id}
                    className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                >
                  <a
                    href={`#${item.id}`}
                    className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-9 whitespace-nowrap transition-all duration-300 group/link hover:text-[#d9ff6c] hover:scale-105"
                    style={{ opacity: isTransitioning ? 0.5 : 1 }}
                  >
                    {item.label}
                    {/* Underline animado */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#d9ff6c] transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu - Visible on mobile/tablet */}
            <MobileMenu navigationItems={navigationItems} isTransitioning={isTransitioning} />
            
            {/* Language Toggle */}
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile/Tablet: Foto PRIMERO (100vh) */}
        <div className="block lg:hidden relative w-full h-screen">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Foto principal */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <img
                src="/images/hero/hero-portrait.png"
                alt="Byron Gonzalez"
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Pincelada horizontal */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <img
                src="/images/hero/brush-stroke-1.png"
                alt="Brush stroke 1"
                className="h-[60%] w-auto object-contain"
              />
            </div>
            
            {/* Pincelada diagonal */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <img
                src="/images/hero/brush-stroke-2.png"
                alt="Brush stroke 2"
                className="h-[70%] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Hero Content - Card debajo en mobile, lado izquierdo en desktop */}
        <div className="w-full lg:flex-1 lg:flex lg:items-center lg:justify-start relative z-10 px-6 lg:px-[120px] py-8 lg:py-0">
          <section className="flex flex-col w-full lg:w-[669px] items-center lg:items-start justify-center gap-4 lg:gap-[22px] pt-8 lg:pt-[45px] pb-6 lg:pb-[35px] px-6 lg:px-20 relative z-10 bg-[#2323234c] rounded-[40px_0px_40px_0px] lg:rounded-[80px_0px_80px_0px] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
          <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              <h1 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Slackey',Helvetica] font-normal text-white text-5xl lg:text-[79.9px] tracking-[0] leading-tight lg:leading-[44.9px] whitespace-nowrap text-center lg:text-left">
                {data.personalInfo.name.split(' ')[0].toUpperCase()}
              </h1>
            </div>

            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              <h1 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Slackey',Helvetica] font-normal text-white text-5xl lg:text-[79.9px] tracking-[0] leading-tight lg:leading-[44.9px] whitespace-nowrap text-center lg:text-left">
                {data.personalInfo.name.split(' ')[1].toUpperCase()}
              </h1>
            </div>
          </div>

          <div className="inline-flex flex-col items-center lg:items-start justify-center relative flex-[0_0_auto]">
            <FadeText>
              <div className="flex flex-col items-center lg:items-start [font-family:'Poppins',Helvetica] font-medium text-xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[44.9px]">
                {data.personalInfo.title.split(' & ').map((line, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <DecryptedText
                      text={line}
                      speed={120}
                      maxIterations={20}
                      animateOn="view"
                      className="gradient-text"
                      encryptedClassName="text-white/50"
                      parentClassName=""
                    />
                    {index === 0 && <span className="text-white">&</span>}
                  </div>
                ))}
              </div>
            </FadeText>
          </div>

          <div className="inline-flex flex-col items-center justify-center gap-3 lg:gap-4 relative flex-[0_0_auto]">
            {/* Social Icons - ARRIBA del botón */}
            <div className="inline-flex items-center justify-center gap-4 lg:gap-5 relative flex-[0_0_auto]">
              {socialIcons.map((icon, index) => {
                const IconComponent = icon.Icon;
                return (
                  <a
                    key={index}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#d9ff6c] hover:scale-125 transition-all duration-300"
                    aria-label={icon.alt}
                    title={icon.label}
                  >
                    <IconComponent size={24} className="lg:w-7 lg:h-7" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>

            {/* Download CV Button - DEBAJO de los iconos */}
            <a 
              href={cvFile}
              download
              className="all-[unset] box-border inline-flex items-center gap-2 lg:gap-2.5 px-6 lg:px-[30px] py-3 lg:py-3.5 relative flex-[0_0_auto] bg-[#d9ff6c] rounded-[82px] cursor-pointer hover:bg-[#c5e861] transition-colors duration-300"
            >
              <img
                className="relative w-[13px] lg:w-[15px] h-[16.5px] lg:h-[19.5px]"
                alt="File icon"
                src="/icons/file.svg"
              />

              <span className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-grey-11 text-base lg:text-lg tracking-[0] leading-[27px] whitespace-nowrap transition-opacity duration-200" style={{ opacity: isTransitioning ? 0.5 : 1 }}>
                {texts.downloadCV}
              </span>
            </a>
          </div>
        </section>
        </div>
        
        {/* Indicador de scroll */}
        <ScrollIndicator />
      </header>

      {/* Separador animado - About Me */}
      <div id="about-me" className="w-full bg-[#d9ff6c] py-4 flex items-center">
        <div className="transition-opacity duration-200 w-full" style={{ opacity: isTransitioning ? 0.5 : 1 }}>
          <CurvedTextLoop 
            marqueeText={texts.aboutMe}
            speed={1}
            curveAmount={0}
            direction="left"
            interactive={true}
            className="!fill-[#1e1e1e]"
          />
        </div>
      </div>
      {/* Sección About Me */}
      <AboutMe />

      {/* Separador animado - Work Experience */}
      <div id="experience" className="w-full bg-[#d9ff6c] py-4 flex items-center">
        <div className="transition-opacity duration-200 w-full" style={{ opacity: isTransitioning ? 0.5 : 1 }}>
          <CurvedTextLoop 
            marqueeText={texts.workExperience}
            speed={2}
            curveAmount={0}
            direction="right"
            interactive={true}
            className="!fill-[#1e1e1e]"
          />
        </div>
      </div>
      {/* Timeline de Experiencia Profesional */}
      <ExperienceTimeline />

      {/* Separador animado - Education & Certifications */}
      <div id="education-and-certifications" className="w-full bg-[#d9ff6c] py-4 flex items-center">
        <div className="transition-opacity duration-200 w-full" style={{ opacity: isTransitioning ? 0.5 : 1 }}>
          <CurvedTextLoop 
            marqueeText={texts.education}
            speed={2}
            curveAmount={0}
            direction="left"
            interactive={true}
            className="!fill-[#1e1e1e]"
          />
        </div>
      </div>
      {/* Educación y Certificaciones */}
      <EducationCertifications />

      {/* Separador - Skills */}
      <div id="skills" className="w-full bg-[#1e1e1e] py-4 flex items-center">
        <div className="transition-opacity duration-200 w-full" style={{ opacity: isTransitioning ? 0.5 : 1 }}>
          <CurvedTextLoop 
            marqueeText={texts.skills}
            speed={2}
            curveAmount={0}
            direction="right"
            interactive={true}
            className="!fill-[#d9ff6c]"
          />
        </div>
      </div>
      {/* Skills y Lenguajes */}
      <SkillsLanguages />

      {/* Formulario de Contacto CTA */}
      <ContactCTA />
          {/* Footer */}
          <Footer />
   {/* fin de la página */}

    </div>
  );
};
