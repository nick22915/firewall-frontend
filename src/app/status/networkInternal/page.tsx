import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi } from "lucide-react";
import DynamicAreaChart from "@/components/ui/dynamicAreaChart";

const myMemoryData = [
  {
    time: "Tue 00:00",
    "Incoming Traffic": 2900,
    "Outgoing Traffic": 12000,
  },
    {
        time: "Tue 03:00",
        "Incoming Traffic": 2898,
        "Outgoing Traffic": 11111,
    },
    {
        time: "Tue 06:00",
        "Incoming Traffic": 3000,
        "Outgoing Traffic": 12345,
    },
    {
        time: "Tue 07:00",
        "Incoming Traffic": 1211,
        "Outgoing Traffic": 10999,
    },
    {
        time: "Tue 09:00",
        "Incoming Traffic": 1234,
        "Outgoing Traffic": 12345,
    },
    {
        time: "Tue 10:00",
        "Incoming Traffic": 2100,
        "Outgoing Traffic": 11345,
    },
    {
        time: "Tue 11:00",
        "Incoming Traffic": 2900,
        "Outgoing Traffic": 12666,
    },
    {
        time: "Tue 12:00",
        "Incoming Traffic": 2300,
        "Outgoing Traffic": 17001
    },
    {
        time: "Tue 15:00",
        "Incoming Traffic": 3300,
        "Outgoing Traffic": 9000,
    },
    {
        time: "Tue 18:00",
        "Incoming Traffic": 3000,
        "Outgoing Traffic": 9102,
    },
];

const lineColors: { [key: string]: string } = {
  // Explicitly define index signature
  "Incoming Traffic": "#2abd44", 
  "Outgoing Traffic": "#d13838", 
};

export default function NetworkInternal() {
  const PageIcon = Wifi;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Net-Traffic Graphs (Internal)
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Green0 Graph
            </CardTitle>
            <div>
                <DynamicAreaChart
                  data={myMemoryData}
                  lineColorsConfig={lineColors}
                  domain={[0, 12000]}
                  yAxisLabel="Bytes per Second (negative)"
                />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
