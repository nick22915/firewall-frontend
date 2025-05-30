import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerCog } from "lucide-react";
import DynamicLineChart from "@/components/ui/dynamicLineChart";

const myMemoryData = [
  {
    time: "Tue 00:00",
    "Used Memory": 0.12,
    "Buffered Memory": 0.48,
    "Cached Memory": 4.5,
    "Free Memory": 2.63,
    
  },
  {
    time: "Tue 03:00",
    "Used Memory": 0.15,
    "Buffered Memory": 6.55,
    "Cached Memory": 1.8,
    "Free Memory": 2.8,
   
  },
  {
    time: "Tue 06:00",
    "Used Memory": 0.1,
    "Buffered Memory": 9.4,
    "Cached Memory": 1.2,
    "Free Memory": 2.3,
   
  },
  {
    time: "Tue 07:00",
    "Used Memory": 78.2,
    "Buffered Memory": 0.6,
    "Cached Memory": 2.0,
    "Free Memory": 3.0,
   
  },
  {
    time: "Tue 09:00",
    "Used Memory": 78.2,
    "Buffered Memory": 10.6,
    "Cached Memory": 45.0,
    "Free Memory": 3.0,
   
  },
  {
    time: "Tue 10:00",
    "Used Memory": 78.2,
    "Buffered Memory": 0.6,
    "Cached Memory": 56.0,
    "Free Memory": 33.0,
   
  }, 
  {
    time: "Tue 11:00",
    "Used Memory": 58.2,
    "Buffered Memory": 1.6,
    "Cached Memory": 2.0,
    "Free Memory": 3.0,
   
  },
];

const lineColors: { [key: string]: string } = {
  // Explicitly define index signature
  "Used Memory": "#8884d8", // Purple
  "Buffered Memory": "#82ca9d", // Green
  "Cached Memory": "#ffc658", // Yellow
  "Free Memory": "#ff7300", // Orange
};

export default function MemoryStatus() {
  const PageIcon = ServerCog;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Memory Information
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Memory Graph
            </CardTitle>
            <div>
                <DynamicLineChart
                  data={myMemoryData}
                  lineColorsConfig={lineColors}
                  domain={[0, 100]}
                  yAxisLabel="Percentage"
                />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
