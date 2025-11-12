import React, { useEffect, useRef } from "react";

interface CurvedLoopProps {
  // Posición inicial (punto de partida)
  startX?: number;
  startY?: number;
  // Posición final (punto de llegada)
  endX?: number;
  endY?: number;
  // Intensidad de la curva (qué tan pronunciada es)
  curvature?: number;
  // Color de la línea
  color?: string;
  // Grosor de la línea
  strokeWidth?: number;
  // Duración de la animación en segundos
  duration?: number;
  // Mostrar puntos en los extremos
  showDots?: boolean;
}

export const CurvedLoop: React.FC<CurvedLoopProps> = ({
  startX = 50,
  startY = 50,
  endX = 400,
  endY = 200,
  curvature = 100,
  color = "#6366f1", // Color morado/azul por defecto
  strokeWidth = 3,
  duration = 2,
  showDots = true,
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Cuando el componente se monta, iniciamos la animación
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;
    }
  }, []);

  // Calculamos el punto de control para la curva (esto hace que sea curva)
  const controlX = (startX + endX) / 2;
  const controlY = Math.min(startY, endY) - curvature;

  // Creamos la ruta SVG usando una curva cuadrática
  const pathData = `M ${startX} ${startY} Q ${controlX} ${controlY}, ${endX} ${endY}`;

  // Calculamos el tamaño del SVG automáticamente
  const padding = 20;
  const width = Math.max(startX, endX, controlX) + padding;
  const height = Math.max(startY, endY) + padding;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    >
      {/* Definimos la animación */}
      <defs>
        <style>
          {`
            @keyframes drawLine {
              to {
                stroke-dashoffset: 0;
              }
            }
            .curved-path {
              animation: drawLine ${duration}s ease-in-out forwards;
              animation-iteration-count: infinite;
            }
          `}
        </style>
      </defs>

      {/* La línea curva */}
      <path
        ref={pathRef}
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="curved-path"
        style={{
          filter: "drop-shadow(0 0 8px currentColor)",
        }}
      />

      {/* Puntos en los extremos (opcionales) */}
      {showDots && (
        <>
          <circle
            cx={startX}
            cy={startY}
            r={6}
            fill={color}
            style={{
              filter: "drop-shadow(0 0 4px currentColor)",
            }}
          />
          <circle
            cx={endX}
            cy={endY}
            r={6}
            fill={color}
            style={{
              filter: "drop-shadow(0 0 4px currentColor)",
            }}
          />
        </>
      )}
    </svg>
  );
};
