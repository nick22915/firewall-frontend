"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import DynamicLineChart from "@/components/ui/dynamicLineChart";
import {
  mediaStatusChartData,
  indexNodeData,
  diskUsageData,
  transferData,
} from "@/data/mediaStatusData";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHeader,
  TableRow,
  TableFooter,
  TableHead,
} from "@/components/ui/table";
import { hardwareGraphData, hwvoltGraphData } from "@/data/hardwareGraphs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function HardwareGraphs() {
  const PageIcon = BarChart3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Add future functionality for input changes
    };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Hardware Graphs
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
                data={hardwareGraphData}
                lineColorsConfig={{
                  "hardware temperature": "#6f42c1",
                  "stand by": "#6c757d",
                }}
                domain={[0, 1]}
                yAxisLabel="Celcius"
              />
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              hwVolt Graph
            </CardTitle>
            <div>
              <DynamicLineChart
                data={hwvoltGraphData}
                lineColorsConfig={{
                  BAT0acpi0voltagein0: "#6f42c1",
                  "stand by": "#6c757d",
                }}
                domain={[0, 10]}
                yAxisLabel="Voltage"
              />
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              mbmongraph settings
            </CardTitle>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-4">
                  DisplayLabel
                </label>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <Input value="BAT0acpi0voltagein0" onChange={handleInputChange} />
                </div>
                <div className="flex items-center mb-4 gap-2">
                  <Checkbox />
                  <Input value="BAT0acpi0powerpower1" onChange={handleInputChange} />
                </div>
              </div>

              <div className="flex justify-end items-center">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
