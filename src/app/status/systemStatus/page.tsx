import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerCog } from "lucide-react";
import LinearChart from "@/components/ui/lineChart";
import DynamicLineChart from "@/components/ui/dynamicLineChart";

const myActualCpuData = [
  {
    time: "Tue 00:00",
    "CPU waiting for IO": 0.12,
    "IRQ CPU Usage": 0.48,
    "User CPU Usage": 4.5,
    "System CPU Usage": 2.63,
    "Idle CPU Usage": 99.19,
  },
  {
    time: "Tue 03:00",
    "CPU waiting for IO": 0.15,
    "IRQ CPU Usage": 6.55,
    "User CPU Usage": 1.8,
    "System CPU Usage": 2.8,
    "Idle CPU Usage": 98.6,
  },
  {
    time: "Tue 06:00",
    "CPU waiting for IO": 0.1,
    "IRQ CPU Usage": 9.4,
    "User CPU Usage": 1.2,
    "System CPU Usage": 2.3,
    "Idle CPU Usage": 99.0,
  },
  {
    time: "Tue 09:00",
    "CPU waiting for IO": 78.2,
    "IRQ CPU Usage": 0.6,
    "User CPU Usage": 2.0,
    "System CPU Usage": 3.0,
    "Idle CPU Usage": 97.8,
  },
  {
    time: "Tue 12:00",
    "CPU waiting for IO": 12.18,
    "IRQ CPU Usage": 0.58,
    "User CPU Usage": 1.9,
    "System CPU Usage": 2.9,
    "Idle CPU Usage": 98.0,
  },
  {
    time: "Tue 15:00",
    "CPU waiting for IO": 33.25,
    "IRQ CPU Usage": 78.7,
    "User CPU Usage": 2.2,
    "System CPU Usage": 3.2,
    "Idle CPU Usage": 97.2,
  },
  {
    time: "Tue 18:00",
    "CPU waiting for IO": 0.3,
    "IRQ CPU Usage": 0.8,
    "User CPU Usage": 2.5,
    "System CPU Usage": 3.5,
    "Idle CPU Usage": 96.4,
  },
  {
    time: "Tue 21:00",
    "CPU waiting for IO": 0.28,
    "IRQ CPU Usage": 0.75,
    "User CPU Usage": 34.3,
    "System CPU Usage": 3.3,
    "Idle CPU Usage": 96.87,
  },
];

const lineColors: { [key: string]: string } = {
  // Explicitly define index signature
  "CPU waiting for IO": "#8884d8", // Purple
  "IRQ CPU Usage": "#82ca9d", // Green
  "Nice CPU Usage": "#ffc658", // Yellow
  "Interrupt CPU Usage": "#ff7300", // Orange
  "Steal CPU Usage": "#0088FE", // Blue
  "User CPU Usage": "#00C49F", // Teal
  "System CPU Usage": "#FFBB28", // Gold
  "Idle CPU Usage": "#FF8042", // Coral
};

export default function SystemStatus() {
  const PageIcon = ServerCog;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Status Information
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Processors
            </CardTitle>
            <div>
              <div>
              <DynamicLineChart
                data={myActualCpuData}
                lineColorsConfig={lineColors}
                domain={[0, 100]}
                yAxisLabel="Percentage" 
              />
            </div>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Load Average
            </CardTitle>
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
