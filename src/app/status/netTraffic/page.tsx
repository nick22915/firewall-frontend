import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileClock } from "lucide-react";
import DynamicPieChart from "@/components/ui/dynamicPieChart";
import { NetTrafficGreenData } from "@/data/netTraffic";

const sampleDataPiChart = [
  {
    id: 1,
    name: "172.16.90.120",
    value: 455751,
    percentage: 97,
    country: "United States",
  },
  {
    id: 2,
    name: "172.16.90.117",
    value: 4167,
    percentage: 1,
    country: "Canada",
  },
  {
    id: 3,
    name: "172.16.90.105",
    value: 954,
    percentage: 1,
    country: "Germany",
  },
  {
    id: 4,
    name: "172.16.90.114",
    value: 940,
    percentage: 0,
    country: "France",
  },
  {
    id: 5,
    name: "172.16.90.112",
    value: 888,
    percentage: 0,
    country: "Japan",
  },
  {
    id: 6,
    name: "172.16.90.100",
    value: 883,
    percentage: 0,
    country: "Australia",
  },
  {
    id: 7,
    name: "172.16.90.109",
    value: 615,
    percentage: 0,
    country: "Brazil",
  },
  { id: 8, name: "172.16.90.7", value: 418, percentage: 0, country: "India" },
  {
    id: 9,
    name: "172.16.90.200",
    value: 883,
    percentage: 0,
    country: "United Kingdom",
  },
  {
    id: 10,
    name: "172.16.90.10",
    value: 615,
    percentage: 0,
    country: "Mexico",
  },
  {
    id: 11,
    name: "172.16.90.164",
    value: 418,
    percentage: 0,
    country: "Spain",
  },
];

export default function NetTraffic() {
  const PageIcon = FileClock;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Net-Traffic
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Utilization-overview
            </CardTitle>
            <h3 className="text-lg font-medium text-greenfire mb-4 mt-5">
              Green0
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NetTrafficGreenData.map((net) => (
                <div className="mb-5">
                  <label className="w-1/2  font-medium text-gray-600">
                    {net.period}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 justify-start">
                    <label className="text-gray-400 text-sm">rx:</label>
                    <p className="text-gray-400 text-sm">{net.rx_MiB} MiB</p>
                    <label className="text-gray-400 text-sm">tx:</label>
                    <p className="text-gray-400 text-sm">{net.rx_MiB} MiB</p>
                    <label className="text-gray-400 text-sm">Total MiB:</label>
                    <p className="text-gray-400 text-sm">{net.total_MiB} MiB</p>
                    <label className="text-gray-400 text-sm">speed kbit:</label>
                    <p className="text-gray-400 text-sm">
                      {net.speed_kbit_s} MiB
                    </p>
                  </div>
                  <DynamicPieChart
                    data={net.chart_data}
                    innerRadius={60}
                    outerRadius={80}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Utilization-overview
            </CardTitle>
            <h3 className="text-lg font-medium text-redfire mb-4 mt-5">Red0</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NetTrafficGreenData.map((net) => (
                <div className="mb-5">
                  <label className="w-1/2  font-medium text-gray-600">
                    {net.period}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 justify-start">
                    <label className="text-gray-400 text-sm">rx:</label>
                    <p className="text-gray-400 text-sm">{net.rx_MiB} MiB</p>
                    <label className="text-gray-400 text-sm">tx:</label>
                    <p className="text-gray-400 text-sm">{net.rx_MiB} MiB</p>
                    <label className="text-gray-400 text-sm">Total MiB:</label>
                    <p className="text-gray-400 text-sm">{net.total_MiB} MiB</p>
                    <label className="text-gray-400 text-sm">speed kbit:</label>
                    <p className="text-gray-400 text-sm">
                      {net.speed_kbit_s} MiB
                    </p>
                  </div>
                  <DynamicPieChart
                    data={net.chart_data}
                    colors={["#d13838", "#82ca9d", "#ffc658", "#ff8042"]}
                    innerRadius={60}
                    outerRadius={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
