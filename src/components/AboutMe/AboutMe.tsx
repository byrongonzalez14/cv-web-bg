import { User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutMe = () => {
  const { language, data } = useLanguage();

  const titles = {
    main: language === 'en' ? 'About Me' : 'Sobre Mí',
    subtitle: language === 'en'
      ? 'Bridging the gap between business and technology'
      : 'Conectando el negocio con la tecnología',
  };

  return (
    <section className="w-full bg-[#0d0d0d] px-8 md:px-[120px] py-20">
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d9ff6c]/10 rounded-full border border-[#d9ff6c]/20 mb-6">
            <User className="w-5 h-5 text-[#d9ff6c]" />
            <span className="text-[#d9ff6c] text-sm font-medium [font-family:'Poppins',Helvetica]">
              {language === 'en' ? 'Get To Know Me' : 'Conóceme'}
            </span>
          </div>


          {/* titulo principal
          
          

          <h2 className="text-5xl md:text-6xl font-bold text-white [font-family:'Slackey',Helvetica] mb-4">
            {titles.main}
          </h2>*/}
          <p className="text-white/70 text-lg [font-family:'Poppins',Helvetica] max-w-2xl mx-auto">
            {titles.subtitle}
          </p>
        </div>

        {/* Contenido principal: Foto + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Lado izquierdo - Foto con máscara de recorte */}
          <div className="relative">
            <div className="h-[480px] bg-[#1a1a1a] rounded-3xl border border-white/10 hover:border-[#d9ff6c]/30 transition-all duration-300 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-center scale-125"
                alt="Byron Gonzalez"
                src={`${import.meta.env.BASE_URL}images/about/profile.png`}
              />
            </div>
          </div>

          {/* Lado derecho - Summary */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 hover:border-[#d9ff6c]/30 transition-all duration-300">
            <div className="text-white/90 text-base leading-relaxed [font-family:'Poppins',Helvetica] space-y-4">
              {data.personalInfo.summary.split('. ').map((sentence, index, array) => (
                <p key={index}>
                  {sentence}{index < array.length - 1 ? '.' : ''}
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
