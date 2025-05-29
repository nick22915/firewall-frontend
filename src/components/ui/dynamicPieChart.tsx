"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

/**
 * @typedef {Object} PieChartData
 * @property {string} name 
 * @property {number} value 

/**
 * @typedef {Object} PieChartProps
 * @property {PieChartData[]} data - Array de objetos con los datos para el gráfico de torta.
 * Cada objeto debe tener una propiedad 'name' y 'value'.
 * @property {string[]} colors - Array de cadenas de colores (ej. ['#FF0000', '#00FF00']).
 * Estos colores se asignarán a las porciones en orden.
 * @property {number} [innerRadius=60] - El radio interior del gráfico de torta (para hacerlo de anillo).
 * @property {number} [outerRadius=80] - El radio exterior del gráfico de torta.
 * @property {string} [valueFormatter] - Función para formatear el valor en el Tooltip.
 */

// Datos de ejemplo para el gráfico de torta
const sampleData = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 300 },
  { name: "Grupo D", value: 200 },
];

// Colores de ejemplo para las porciones del gráfico
const sampleColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const App = ({
  data = sampleData,
  colors = sampleColors,
  innerRadius = 80,
  outerRadius = 120,
  valueFormatter = (value: number) => `${value}`,
}) => {
  return (
    <div className="bg-white p-4 flex flex-col items-center justify-center ">
      <div className="w-full max-w-xl h-96 bg-white p-4 flex items-center justify-center">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%" 
                cy="50%" 
                innerRadius={innerRadius} 
                outerRadius={outerRadius} 
                fill="#8884d8" 
                dataKey="value"
                nameKey="name" 
                labelLine={false} 
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length] || "#000000"}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                labelStyle={{ color: "#333", fontWeight: "bold" }}
                itemStyle={{ color: "#555" }}
                formatter={valueFormatter}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-700 text-lg">There are no data to be shown</p>
        )}
      </div>
    </div>
  );
};

export default App;
