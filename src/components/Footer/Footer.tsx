import { Mail, Github, Linkedin, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
  const { language, data } = useLanguage();

  const socialLinks = [
    {
      Icon: Mail,
      href: `mailto:${data.personalInfo.contact.email}`,
      label: 'Email'
    },
    {
      Icon: MessageCircle,
      href: `https://wa.me/${data.personalInfo.contact.phone.replace(/\D/g, '')}`,
      label: 'WhatsApp'
    },
    {
      Icon: Linkedin,
      href: data.personalInfo.contact.linkedin,
      label: 'LinkedIn'
    },
    {
      Icon: Github,
      href: data.personalInfo.contact.github,
      label: 'GitHub'
    },
  ];

  return (
    <footer className="w-full bg-[#161616] border-t border-white/10">
      <div className="px-8 md:px-[120px] py-12">
        <div className="max-w-7xl mx-auto">

          {/* Grid principal - 3 columnas equilibradas */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-x-20 gap-y-12 mb-8 items-start">

            {/* Columna 1 - Branding */}
            <div className="space-y-4">
              <img
                className="h-12"
                alt="Logo"
                src={`${import.meta.env.BASE_URL}images/brand/logo.svg`}
              />
              <p className="text-white/60 text-sm leading-relaxed [font-family:'Poppins',Helvetica] max-w-sm">
                {language === 'en'
                  ? 'Business Analyst & Technical Lead specializing in cloud solutions and automation.'
                  : 'Business Analyst & Technical Lead especializado en soluciones cloud y automatización.'}
              </p>
            </div>

            {/* Columna 2 - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg [font-family:'Poppins',Helvetica]">
                {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
              </h3>
              <nav className="flex flex-col gap-2">
                {[
                  { label: language === 'en' ? 'About Me' : 'Sobre mí', href: '#about-me' },
                  { label: language === 'en' ? 'Experience' : 'Experiencia', href: '#experience' },
                  { label: language === 'en' ? 'Skills' : 'Habilidades', href: '#skills' },
                  { label: language === 'en' ? 'Education' : 'Educación', href: '#education-and-certifications' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white/60 hover:text-[#d9ff6c] transition-colors text-sm [font-family:'Poppins',Helvetica] whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Columna 3 - Social */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg [font-family:'Poppins',Helvetica]">
                {language === 'en' ? 'Connect' : 'Conecta'}
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.Icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#d9ff6c]/50 hover:bg-[#d9ff6c]/10 flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-white/60 group-hover:text-[#d9ff6c] transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* Ubicación */}
              <div className="pt-4">
                <p className="text-white/40 text-sm [font-family:'Poppins',Helvetica] whitespace-nowrap">
                  📍 {data.personalInfo.contact.location}
                </p>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Copyright */}
              <p className="text-white/40 text-sm [font-family:'Poppins',Helvetica] flex items-center gap-2">
                © {new Date().getFullYear()} {data.personalInfo.name}.
                <span className="flex items-center gap-1">
                  {language === 'en' ? 'Made with' : 'Hecho con'}
                  <Heart className="w-4 h-4 text-[#d9ff6c] fill-[#d9ff6c]" />
                  {language === 'en' ? 'in Colombia' : 'en Colombia'}
                </span>
              </p>

              {/* Tech Stack Badge */}
              <p className="text-white/40 text-xs [font-family:'Poppins',Helvetica]">
                Built with React + TypeScript + Tailwind CSS
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
