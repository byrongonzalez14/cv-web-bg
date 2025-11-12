import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis con configuración optimizada
    lenisRef.current = new Lenis({
      duration: 1.2,        // Duración de la animación (segundos)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
      orientation: 'vertical',  // Scroll vertical
      gestureOrientation: 'vertical', // Gestos verticales
      smoothWheel: true,    // Suavizar rueda del mouse
      wheelMultiplier: 1,   // Multiplicador de velocidad del mouse
      touchMultiplier: 2,   // Multiplicador de velocidad táctil
      infinite: false,      // No scroll infinito
      autoResize: true,     // Auto-redimensionar
    });

    // Función de animación
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    // Iniciar el loop de animación
    requestAnimationFrame(raf);

    // Cleanup: destruir Lenis al desmontar
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
};
