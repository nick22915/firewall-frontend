'use client'; // Esta directiva marca el componente como un Client Component

import React from 'react';
// Importación directa de los componentes de Recharts.
// En este entorno de Canvas, no es necesario usar next/dynamic
// ya que la compilación y renderización se hacen del lado del cliente.
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Datos de ejemplo para el gráfico
const sampleData = [
  { name: 'Enero', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Febrero', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Marzo', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Abril', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Mayo', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Junio', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Julio', uv: 3490, pv: 4300, amt: 2100 },
];

/**
 * Componente de React para mostrar un gráfico de líneas usando Recharts.
 * Utiliza datos de ejemplo y es responsivo.
 * Se han eliminado las importaciones de 'next/dynamic' para compatibilidad
 * con el entorno de compilación actual (Canvas).
 */
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 rounded-lg p-2 bg-white shadow-md">
        Gráfico de Líneas con Recharts
      </h1>
      <div className="w-full max-w-4xl h-80 bg-white rounded-lg shadow-xl p-4 flex items-center justify-center">
        {/* ResponsiveContainer asegura que el gráfico se ajuste al tamaño de su contenedor */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sampleData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> {/* Líneas de la cuadrícula */}
            <XAxis dataKey="name" className="text-sm text-gray-600" /> {/* Eje X con nombres de los meses */}
            <YAxis className="text-sm text-gray-600" /> {/* Eje Y */}
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}
              labelStyle={{ color: '#333', fontWeight: 'bold' }}
              itemStyle={{ color: '#555' }}
            /> {/* Tooltip al pasar el ratón */}
            <Legend wrapperStyle={{ paddingTop: '20px' }} /> {/* Leyenda del gráfico */}
            {/* Líneas del gráfico: 'uv' en azul y 'pv' en morado */}
            <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-8 text-gray-600 text-center">
        Este es un ejemplo básico de un gráfico de líneas utilizando la librería Recharts en un componente de React.
        Puedes modificar los datos y las propiedades del gráfico para adaptarlo a tus necesidades.
      </p>
    </div>
  );
};

export default App;
