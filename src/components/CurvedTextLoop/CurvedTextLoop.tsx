import { useRef, useEffect, useState, useMemo, useId, FC, PointerEvent } from 'react';

// Hook para detectar el ancho de la pantalla
const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
};

interface CurvedTextLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: 'left' | 'right';
  interactive?: boolean;
}

const CurvedTextLoop: FC<CurvedTextLoopProps> = ({
  marqueeText = 'Welcome to React Bits ✦',
  speed = 2,
  className,
  curveAmount = 400,
  direction = 'left',
  interactive = true
}) => {
  // Aseguramos que el texto tenga espacio al final
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const windowWidth = useWindowWidth();
  
  // Ajustar velocidad según el tamaño de pantalla
  const isMobile = windowWidth < 768;
  const adjustedSpeed = isMobile ? speed * 0.4 : speed; // Velocidad más lenta en mobile
  
  // Definimos la curva del path SVG (Y=52 para centrado visual)
  const pathD = `M-100,52 Q500,${52 + curveAmount} 1540,52`;

  // Referencias para la interacción
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<'left' | 'right'>(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  // Repetimos el texto para crear el efecto de loop infinito
  // En mobile, repetimos más veces para que se vea más fluido
  const repetitions = useMemo(() => {
    if (!textLength) return 2;
    return isMobile 
      ? Math.ceil(2400 / textLength) + 4 
      : Math.ceil(1800 / textLength) + 2;
  }, [textLength, isMobile]);
  
  const totalText = textLength
    ? Array(repetitions)
        .fill(text)
        .join('')
    : text;
  const ready = spacing > 0;

  // Actualizar dirección cuando cambia el prop
  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  // Medir el ancho del texto
  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  // Inicializar posición
  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute('startOffset', initial + 'px');
      setOffset(initial);
    }
  }, [spacing]);

  // Animación continua
  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === 'right' ? adjustedSpeed : -adjustedSpeed;
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        let newOffset = currentOffset + delta;
        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;
        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, adjustedSpeed, ready]);

  // Interacción con el mouse
  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
    let newOffset = currentOffset + dx;
    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;
    textPathRef.current.setAttribute('startOffset', newOffset + 'px');
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  const cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

  return (
    <div
      className="h-[80px] flex items-center justify-center w-full overflow-hidden"
      style={{ visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full h-full block text-[2rem] md:text-[3.5rem] font-bold uppercase leading-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Texto invisible para medir */}
        <text ref={measureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          {text}
        </text>
        
        {/* Definimos el path curvo */}
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        
        {/* El texto que sigue el path */}
        {ready && (
          <text xmlSpace="preserve" className={`fill-white ${className ?? ''}`}>
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedTextLoop;
