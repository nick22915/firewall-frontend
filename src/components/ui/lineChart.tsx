"use client"; // Esta directiva marca el componente como un Client Component

import React from "react";
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
  ResponsiveContainer,
} from "recharts";

// Datos de ejemplo para el gráfico
const sampleData = [
  { name: "Enero", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Febrero", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Marzo", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Abril", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Mayo", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Junio", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Julio", uv: 3490, pv: 4300, amt: 2100 },
];

const hours = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];


const lineColors = {
    'CPU waiting for IO': '#8884d8', // Purple
    'IRQ CPU Usage': '#82ca9d',     // Green
    'Nice CPU Usage': '#ffc658',    // Yellow
    'Interrupt CPU Usage': '#ff7300', // Orange
    'Steal CPU Usage': '#0088FE',   // Blue
    'User CPU Usage': '#00C49F',    // Teal
    'System CPU Usage': '#FFBB28',  // Gold
    'Idle CPU Usage': '#FF8042',    // Coral
  };

const App = () => {
  return (
    <div className=" bg-white p-4">
      <div className="w-full max-w-4xl h-96 bg-white  flex items-center justify-center">
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
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />{" "}
            {/* Líneas de la cuadrícula */}
            <XAxis dataKey="name" className="text-sm text-gray-600" />{" "}
            {/* Eje X con nombres de los meses */}
            <YAxis className="text-sm text-gray-600" /> {/* Eje Y */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
              labelStyle={{ color: "#333", fontWeight: "bold" }}
              itemStyle={{ color: "#555" }}
            />{" "}
            {/* Tooltip al pasar el ratón */}
            <Legend wrapperStyle={{ paddingTop: "20px" }} />{" "}
            {/* Leyenda del gráfico */}
            {/* Líneas del gráfico: 'uv' en azul y 'pv' en morado */}
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default App;
