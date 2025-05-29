import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wifi } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import DynamicLineChart from "@/components/ui/dynamicLineChart";
import { mediaStatusChartData } from "@/data/mediaStatusData";

export default function MediaStatus() {
  const PageIcon = Wifi;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Media Information
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              sda Graph
            </CardTitle>
            <div>
              <DynamicLineChart
                data={mediaStatusChartData}
                lineColorsConfig={{
                  bytes_read: "#82ca9d",
                  bytes_written: "#d9534f",
                }}
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
