import { useEffect, useRef, useState } from 'react';

export const ParallaxShowcase = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height - window.innerHeight);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-gray-900">
      
      {/* SECCIÓN 1: Hero con Parallax de Fondo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo que se mueve más lento (parallax) */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"
          style={{
            transform: `translateY(${scrollY * 100}px)`,
          }}
        />
        
        {/* Contenido que se mueve normal */}
        <div className="relative z-10 text-center px-8">
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{
              transform: `translateY(${scrollY * -50}px)`,
              opacity: 1 - scrollY * 0.5,
            }}
          >
            Parallax Effects
          </h1>
          <p 
            className="text-xl text-gray-300"
            style={{
              transform: `translateY(${scrollY * -30}px)`,
              opacity: 1 - scrollY * 0.8,
            }}
          >
            Scroll down to see the magic ✨
          </p>
        </div>

        {/* Elementos decorativos con diferentes velocidades */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#d9ff6c]/20 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 200}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -150}px)`,
          }}
        />
      </section>

      {/* SECCIÓN 2: Imágenes con Parallax */}
      <section className="relative min-h-screen py-32 px-8 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-20 text-center">
            Image Parallax
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagen 1 - Se mueve hacia arriba al scrollear */}
            <div 
              className="relative h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transform: `translateY(${scrollY * -80}px)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Slow ↑</span>
              </div>
            </div>

            {/* Texto que se mueve normal */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Different Speeds
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This image moves <strong>slower</strong> than the scroll (parallax effect).
                It creates depth and makes the page feel more dynamic.
              </p>
              <p className="text-gray-400 text-sm">
                Try scrolling up and down to see how it moves at a different speed than the text.
              </p>
            </div>
          </div>

          {/* Imagen 2 - Se mueve hacia abajo al scrollear */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-32">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-white mb-4">
                Reverse Direction
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This image moves in the <strong>opposite direction</strong>.
                It goes down while you scroll down, creating a unique effect.
              </p>
            </div>

            <div 
              className="relative h-96 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
              style={{
                transform: `translateY(${scrollY * 120}px)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Fast ↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Scale Effect */}
      <section className="relative min-h-screen py-32 px-8 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <div
            style={{
              transform: `scale(${1 + scrollY * 0.3})`,
              opacity: Math.max(0, 1 - scrollY * 0.5),
            }}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Scale Effect
            </h2>
            <p className="text-2xl text-gray-400">
              I grow as you scroll
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Horizontal Parallax */}
      <section className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          Horizontal Parallax
        </h2>

        <div className="relative h-96 overflow-hidden">
          {/* Elementos que se mueven horizontalmente */}
          <div 
            className="absolute top-0 flex gap-8"
            style={{
              transform: `translateX(${scrollY * -200}px)`,
            }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-4xl font-bold">{i}</span>
              </div>
            ))}
          </div>

          <div 
            className="absolute bottom-0 flex gap-8"
            style={{
              transform: `translateX(${scrollY * 150}px)`,
            }}
          >
            {[6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-4xl font-bold">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: Fade & Blur Effect */}
      <section className="relative min-h-screen py-32 px-8 flex items-center justify-center bg-gray-900">
        <div className="max-w-4xl text-center">
          <div
            style={{
              opacity: Math.max(0, 1 - scrollY * 2),
              filter: `blur(${scrollY * 10}px)`,
            }}
          >
            <h2 className="text-6xl font-bold text-white mb-8">
              Fade & Blur
            </h2>
            <p className="text-2xl text-gray-300">
              I disappear and blur as you scroll
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: Rotate Effect */}
      <section className="relative min-h-screen py-32 px-8 flex items-center justify-center bg-black">
        <div
          className="w-96 h-96 bg-gradient-to-br from-yellow-400 to-red-600 rounded-3xl flex items-center justify-center"
          style={{
            transform: `rotate(${scrollY * 180}deg) scale(${1 + scrollY * 0.2})`,
          }}
        >
          <span className="text-white text-4xl font-bold">Rotate</span>
        </div>
      </section>

      {/* SECCIÓN 7: Staggered Elements */}
      <section className="relative min-h-screen py-32 px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          Staggered Parallax
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { text: 'Layer 1', speed: 50, color: 'from-red-500 to-pink-500' },
            { text: 'Layer 2', speed: 100, color: 'from-blue-500 to-cyan-500' },
            { text: 'Layer 3', speed: 150, color: 'from-green-500 to-emerald-500' },
            { text: 'Layer 4', speed: 200, color: 'from-purple-500 to-violet-500' },
            { text: 'Layer 5', speed: 250, color: 'from-orange-500 to-yellow-500' },
          ].map((layer, index) => (
            <div
              key={index}
              className={`h-32 bg-gradient-to-r ${layer.color} rounded-2xl flex items-center justify-center shadow-2xl`}
              style={{
                transform: `translateX(${scrollY * layer.speed}px)`,
              }}
            >
              <span className="text-white text-3xl font-bold">{layer.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 8: Final - Texto que emerge */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div
          className="text-center"
          style={{
            transform: `translateY(${Math.max(0, 100 - scrollY * 100)}px)`,
            opacity: Math.min(1, scrollY * 2),
          }}
        >
          <h2 className="text-7xl md:text-9xl font-bold text-white mb-6">
            That's Parallax
          </h2>
          <p className="text-2xl text-[#d9ff6c]">
            Now you know how it works ✨
          </p>
        </div>
      </section>
    </div>
  );
};
