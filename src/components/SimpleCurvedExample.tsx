import React from "react";
import { CurvedLoop } from "./CurvedLoop";

/**
 * EJEMPLO SIMPLE: Cómo usar CurvedLoop
 * 
 * Este es un ejemplo minimalista que muestra cómo usar el componente
 * CurvedLoop para conectar dos elementos con una línea curva animada.
 */
export const SimpleCurvedExample: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-lg p-8">
      {/* Elemento A */}
      <div 
        className="absolute top-20 left-20 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl"
      >
        A
      </div>

      {/* Elemento B */}
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl"
      >
        B
      </div>

      {/* La línea curva que conecta A y B */}
      <CurvedLoop
        startX={140}      // Posición X del punto A
        startY={110}      // Posición Y del punto A
        endX={900}        // Posición X del punto B
        endY={210}        // Posición Y del punto B
        curvature={100}   // Qué tan curva es la línea
        color="#8b5cf6"   // Color morado
        strokeWidth={4}   // Grosor de la línea
        duration={2}      // Duración de la animación (2 segundos)
        showDots={true}   // Mostrar puntos en los extremos
      />
    </div>
  );
};
