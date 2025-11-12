import React from "react";
import { CurvedLoop } from "../CurvedLoop";

export const CurvedLoopDemo: React.FC = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-xl p-8 overflow-hidden">
      {/* Título de la demo */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          ✨ Curved Loop Demo
        </h2>
        <p className="text-gray-300 text-lg">
          Líneas curvas animadas conectando diferentes puntos
        </p>
      </div>

      {/* Contenedor con los elementos conectados */}
      <div className="relative z-10 flex justify-around items-center h-[400px]">
        {/* Elemento 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400 shadow-lg shadow-purple-500/50">
          <div className="w-32 h-32 flex items-center justify-center">
            <div className="text-6xl">🚀</div>
          </div>
          <p className="text-white text-center mt-2 font-semibold">Inicio</p>
        </div>

        {/* Elemento 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-blue-400 shadow-lg shadow-blue-500/50">
          <div className="w-32 h-32 flex items-center justify-center">
            <div className="text-6xl">⚡</div>
          </div>
          <p className="text-white text-center mt-2 font-semibold">Proceso</p>
        </div>

        {/* Elemento 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-green-400 shadow-lg shadow-green-500/50">
          <div className="w-32 h-32 flex items-center justify-center">
            <div className="text-6xl">🎯</div>
          </div>
          <p className="text-white text-center mt-2 font-semibold">Objetivo</p>
        </div>
      </div>

      {/* Las líneas curvas animadas */}
      {/* Línea 1: Inicio -> Proceso */}
      <CurvedLoop
        startX={240}
        startY={280}
        endX={540}
        endY={280}
        curvature={80}
        color="#a78bfa"
        strokeWidth={3}
        duration={3}
        showDots={true}
      />

      {/* Línea 2: Proceso -> Objetivo */}
      <CurvedLoop
        startX={700}
        startY={280}
        endX={1000}
        endY={280}
        curvature={80}
        color="#60a5fa"
        strokeWidth={3}
        duration={3}
        showDots={true}
      />

      {/* Línea 3: Una curva más pronunciada de vuelta */}
      <CurvedLoop
        startX={1000}
        startY={320}
        endX={240}
        endY={240}
        curvature={150}
        color="#34d399"
        strokeWidth={2}
        duration={4}
        showDots={false}
      />

      {/* Información de controles */}
      <div className="relative z-10 mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <h3 className="text-white font-bold mb-2">💡 Cómo funciona:</h3>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• Las líneas se "dibujan" solas con animación</li>
          <li>• Puedes ajustar el color, grosor y velocidad</li>
          <li>• La curvatura determina qué tan pronunciada es la curva</li>
          <li>• Los puntos (dots) son opcionales</li>
        </ul>
      </div>
    </div>
  );
};
