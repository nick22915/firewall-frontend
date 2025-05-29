import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ArrowLeft, ArrowRight, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { selectMonth, selectDay } from "@/data/selectDate";
import { Input } from "@/components/ui/input";
import DynamicPieChart from "@/components/ui/dynamicPieChart";

export default function FirewallLogPort() {
  const PageIcon = BarChart3;
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentDay = date.getDate();
  // should be updated when change the date filter

  const sampleDataPiChart = [
    { id: 1, name: "2222", value: 324835, percentage: 72 },
    { id: 2, name: "324835", value: 71223, percentage: 16 },
    { id: 3, name: "3289", value: 45610, percentage: 10 },
    { id: 4, name: "57621", value: 5096, percentage: 1 },
    { id: 5, name: "137", value: 4108, percentage: 0 },
    { id: 6, name: "138", value: 1266, percentage: 0 },
    { id: 7, name: "7989", value: 273, percentage: 0 },
    { id: 8, name: "67", value: 54, percentage: 0 },
  ];
  // sample data for the dynamic pie chart component

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Firewall log (Port)
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <div className="flex flex-col md:flex-row justify-between items-center h-28">
              <label>Month :</label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  {selectMonth.map((option) => (
                    <SelectItem key={option.id} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <label>Day :</label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Day" />
                </SelectTrigger>
                <SelectContent>
                  {selectDay.map((option) => (
                    <SelectItem key={option.id} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="">
                  <ArrowLeft className="text-white" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="">
                  <ArrowRight className="text-white" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Update</a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Export</a>
              </Button>
            </div>
            <div className="flex items-center justify-start gap-12">
              <label>Destination port :</label>
              <Input type="number" />
            </div>
          </div>

          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Firewall Diagrama (Port)
            </CardTitle>
            <div className="mb-5">
              <DynamicPieChart
                data={sampleDataPiChart}
                innerRadius={110}
                outerRadius={150}
              />
            </div>

            <Table>
              <TableCaption className="text-primary">
                Total number of firewall hits for {currentMonth} {currentDay},
                {currentYear}: {sampleDataPiChart.length}
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Port</TableHead>
                  <TableHead className="text-white text-center">
                    Count
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Percentage
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleDataPiChart.map((port) => (
                  <TableRow key={port.id}>
                    <TableCell className="w-[200px]">{port.name}</TableCell>
                    <TableCell className="w-[200px] text-center">
                      {port.value}
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      {port.percentage}
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <Plus />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
