import { useEffect, useState } from 'react';

export const LayeredHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden pointer-events-none z-0">
      {/* Container with relative positioning for layered images */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Capa 3: Tu foto (aparece PRIMERO) */}
        <div 
          className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src="/images/hero/portrait.png"
            alt="Byron Gonzalez"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Capa 1: Pincelada horizontal (aparece DESPUÉS con delay) */}
        <div 
          className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-1200 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <img
            src="/images/hero/brush-stroke-1.png"
            alt="Brush stroke 1"
            className="h-[60%] w-auto object-contain"
          />
        </div>

        {/* Capa 2: Pincelada diagonal (aparece DESPUÉS con más delay) */}
        <div 
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-1200 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
          }`}
        >
          <img
            src="/images/hero/brush-stroke-2.png"
            alt="Brush stroke 2"
            className="h-[70%] w-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
};
