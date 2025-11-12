import React from "react";
import { CurvedTextLoop } from "../CurvedTextLoop";

export const CurvedTextLoopDemo: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-xl overflow-hidden">
      {/* Título de la sección */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          ✨ Curved Text Loop Animation
        </h2>
        <p className="text-gray-300 text-lg">
          Texto animado en curva - Interactivo y llamativo
        </p>
        <p className="text-gray-400 text-sm mt-2">
          💡 Tip: ¡Arrastra el texto con el mouse para interactuar!
        </p>
      </div>

      {/* Ejemplo 1: Básico */}
      <div className="mb-8">
        <CurvedTextLoop marqueeText="Welcome to React Bits ✦" />
      </div>

      {/* Ejemplo 2: Personalizado con velocidad rápida */}
      <div className="mb-8 bg-black/20 py-8">
        <div className="text-center mb-4">
          <h3 className="text-white text-xl font-semibold">Rápido y creativo</h3>
        </div>
        <CurvedTextLoop 
          marqueeText=" About me ★"
          speed={3}
          curveAmount={0}
          interactive={true}
        />
      </div>

      {/* Ejemplo 3: Lento y suave */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <h3 className="text-white text-xl font-semibold">Lento y elegante</h3>
        </div>
        <CurvedTextLoop 
          marqueeText="Smooth Curved Animation ★ Professional ★ Modern ★"
          speed={1}
          curveAmount={300}
          direction="right"
          interactive={true}
        />
      </div>

      {/* Ejemplo 4: Tu marca personalizada */}
      <div className="mb-8 bg-white/5 py-8">
        <div className="text-center mb-4">
          <h3 className="text-white text-xl font-semibold">Personaliza con tu marca</h3>
        </div>
        <CurvedTextLoop 
          marqueeText="Tu Proyecto ⚡ Tu Estilo ⚡ Tu Visión ⚡"
          speed={2}
          curveAmount={400}
          direction="right"
          interactive={true}
          className="!fill-purple-400"
        />
      </div>

      {/* Información y controles */}
      <div className="px-8 pb-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-white font-bold text-xl mb-4">🎮 Características:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-2">✨ Animación fluida</h4>
              <p className="text-sm">El texto se mueve suavemente a lo largo de una curva</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">🖱️ Interactivo</h4>
              <p className="text-sm">Arrastra con el mouse para cambiar dirección</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">🔄 Loop infinito</h4>
              <p className="text-sm">El texto se repite continuamente sin pausas</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">⚙️ Personalizable</h4>
              <p className="text-sm">Ajusta velocidad, curva, dirección y más</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
