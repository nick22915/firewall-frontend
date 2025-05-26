// app/status/systemStatus/loading.js (o en cualquier segmento de ruta que desees)
'use client'; // Opcional, si tu loader tiene interactividad o animaciones de cliente

import React from 'react';

/**
 * Componente de carga que se muestra automáticamente mientras la ruta se renderiza.
 * Este archivo debe llamarse 'loading.js' y estar dentro de un segmento de ruta.
 */
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex items-center space-x-3 text-gray-700">
        {/* Un spinner simple de Tailwind CSS */}
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <p className="text-lg font-semibold">Cargando datos del sistema...</p>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Esto puede tardar un momento.
      </p>
    </div>
  );
};

export default Loading;
