import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const ScrollIndicator = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Detectar cualquier scroll en la página (threshold muy bajo)
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inmediatamente para verificar estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const text = language === 'en' ? 'Scroll to explore' : 'Desplázate para explorar';

  return (
    <div 
      className="fixed bottom-12 left-1/2 -translate-x-1/2 text-center z-50"
      style={{
        transform: `translate(-50%, ${hasScrolled ? '200px' : '0'}) scale(${hasScrolled ? '0.3' : '1'})`,
        transition: hasScrolled 
          ? 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)' // Salida: bounce suave hacia abajo
          : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',      // Entrada: bounce dinámico hacia arriba
        pointerEvents: hasScrolled ? 'none' : 'auto',
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <p className="text-white/80 text-base font-medium [font-family:'Poppins',Helvetica]">
          {text}
        </p>
        <div className="w-7 h-11 border-2 border-[#d9ff6c]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-2 bg-[#d9ff6c] rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
        </div>
      </div>
    </div>
  );
};
