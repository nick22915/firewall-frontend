"use client"; 

import React from "react"; 
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

/**

 *
 * @param {Array<Object>} props.data 
 * 
 */

type ExampleChartProps = {
  data: any[];
  lineColorsConfig: { [key: string]: string }; 
  domain: [number, number];
  yAxisLabel: string; 
};

const App = ({ data, lineColorsConfig, domain, yAxisLabel }: ExampleChartProps) => {
 
  const dataKeys =
    data && data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== "time")
      : [];

  return (
     <div className=" bg-white p-4">
      <div className="w-full max-w-4xl h-96 bg-white  flex items-center justify-center">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data} 
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="time" className="text-xs text-gray-600" />
              <YAxis
                domain={domain}
                label={{
                  value: yAxisLabel,
                  angle: -90,
                  position: "insideLeft",
                  offset: -10,
                  className: "text-sm text-gray-600",
                }}
                className="text-xs text-gray-600"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                labelStyle={{ color: "#333", fontWeight: "bold" }}
                itemStyle={{ color: "#555" }}
                formatter={(value) => `${value} %`}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} />
              {/* Render one line per metric in the data */}
              {dataKeys.map(
                (
                  key: string // Explicitly type key as string
                ) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={lineColorsConfig[key] || "#000000"} 
                    strokeWidth={2}
                    dot={false} 
                  />
                )
              )}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-700 text-lg">
            There are no data to be shown
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
