"use client";

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
import { useRouter } from "next/navigation";

export default function FirewallLogIP() {
  const PageIcon = BarChart3;
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentDay = date.getDate();
  // should be updated when change the date filter

  const router = useRouter();

  const handleSourceClick = (source: string, country: string, redirect: string) => {
    // Redirigir a otra página con el parámetro `source`
    router.push(
      `/detail/ipInformationDetail?source=${source}&country=${country}&redirect=${redirect}`
    );
  };

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
  // sample data for the dynamic pie chart component

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Firewall log (IP)
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
              <label>Number of IPs for the pie chart: :</label>
              <Input type="number" />
            </div>
          </div>

          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Firewall Diagrama (IP)
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
                  <TableHead className="w-[100px] text-white">
                    IP Address
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Country
                  </TableHead>
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
                    <TableCell
                      className="w-[200px] text-right text-redfire hover:text-redfire/60 cursor-pointer"
                      onClick={() => handleSourceClick(port.name, port.country, "/logs/firewallLogsIp")}
                    >
                      {" "}
                      {port.name}
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      {port.country}
                    </TableCell>
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
