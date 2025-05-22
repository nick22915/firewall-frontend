import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const selectMonth = [
  { id: "1", name: "January", value: "january" },
  { id: "2", name: "February", value: "february" },
  { id: "3", name: "March", value: "march" },
  { id: "4", name: "April", value: "april" },
  { id: "5", name: "May", value: "may" },
  { id: "6", name: "June", value: "june" },
  { id: "7", name: "July", value: "july" },
  { id: "8", name: "August", value: "august" },
  { id: "9", name: "September", value: "september" },
  { id: "10", name: "October", value: "october" },
  { id: "11", name: "November", value: "november" },
  { id: "12", name: "December", value: "december" },
];

const selectYear = [
  { id: "1", name: "2025", value: "2025" },
  { id: "2", name: "2024", value: "2024" },
  { id: "3", name: "2023", value: "2023" },
  { id: "4", name: "2022", value: "2022" },
  { id: "5", name: "2021", value: "2021" },
  { id: "6", name: "2020", value: "2020" },
];

const selectDay = [
  { id: "1", name: "1", value: "1" },
  { id: "2", name: "2", value: "2" },
  { id: "3", name: "3", value: "3" },
  { id: "4", name: "4", value: "4" },
  { id: "5", name: "5", value: "5" },
  { id: "6", name: "6", value: "6" },
  { id: "7", name: "7", value: "7" },
  { id: "8", name: "8", value: "8" },
  { id: "9", name: "9", value: "9" },
  { id: "10", name: "10", value: "10" },
  { id: "11", name: "11", value: "11" },
  { id: "12", name: "12", value: "12" },
  { id: "13", name: "13", value: "13" },
  { id: "14", name: "14", value: "14" },
  { id: "15", name: "15", value: "15" },
  { id: "16", name: "16", value: "16" },
  { id: "17", name: "17", value: "17" },
  { id: "18", name: "18", value: "18" },
  { id: "19", name: "19", value: "19" },
  { id: "20", name: "20", value: "20" },
  { id: "21", name: "21", value: "21" },
  { id: "22", name: "22", value: "22" },
  { id: "23", name: "23", value: "23" },
  { id: "24", name: "24", value: "24" },
  { id: "25", name: "25", value: "25" },
  { id: "26", name: "26", value: "26" },
  { id: "27", name: "27", value: "27" },
  { id: "28", name: "28", value: "28" },
  { id: "29", name: "29", value: "29" },
  { id: "30", name: "30", value: "30" },
  { id: "31", name: "31", value: "31" },
];

export default function ProxyReports() {
  const PageIcon = BarChart3;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Proxy Reports
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <div className="mb-4">
              <h4 className="text-md font-medium text-gray-700 mb-5">
                Report period
              </h4>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className="text-gray-600">From:</label>
                <Select>
                  <SelectTrigger className="w-[140px]">
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
                <Select>
                  <SelectTrigger className="w-[140px]">
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
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectYear.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <label className="text-gray-600 ml-4">To:</label>
                <Select>
                  <SelectTrigger className="w-[140px]">
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
                <Select>
                  <SelectTrigger className="w-[140px]">
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
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectYear.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-5">
                Report options
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600 ">
                      Enable domain report
                    </label>
                    <span className="ml-2 text-gray-500">[-d]</span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Number of domains:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="150">10</SelectItem>
                        <SelectItem value="50">25</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="200">unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600">
                      Enable performance report:
                    </label>
                    <span className="ml-2 text-gray-500">[-P]</span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Report interval (in minutes):
                    </label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="60">60</SelectItem>
                        <SelectItem value="120">120</SelectItem>
                        <SelectItem value="240">240</SelectItem>
                        <SelectItem value="480">480</SelectItem>
                        <SelectItem value="720">720</SelectItem>
                        <SelectItem value="1440">1440</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600">
                      Enable content report:
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Number of content types:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="unlimited">unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600">
                      Enable requester report:
                    </label>
                    <span className="ml-2 text-gray-500">[-r/-R]</span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Number of requesting hosts:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="unlimited">unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600">Show usernames:</label>
                    <span className="ml-2 text-gray-500">[-u]</span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Number of requested URLs:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">none</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="unlimited">unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600">
                      Enable distribution histogram:
                    </label>
                    <span className="ml-2 text-gray-500">[-D]</span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Histogram resolution:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">low</SelectItem>
                        <SelectItem value="medium">medium</SelectItem>
                        <SelectItem value="high">high</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600">
                      Enable verbose reporting:
                    </label>
                    <span className="ml-2 text-gray-500">[-s]</span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">Byte unit:</label>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Byte">Byte</SelectItem>
                        <SelectItem value="Kbyte">Kbyte</SelectItem>
                        <SelectItem value="Mbyte">Mbyte</SelectItem>
                        <SelectItem value="Gbyte">Gbyte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-5">
                Performance options
              </h4>
              <div className="flex items-center justify-around gap-1 mb-5">
                <div className="flex items-center gap-1">
                  <Checkbox />
                  <label className="text-gray-600">
                    Skip archived logfiles.
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox />
                  <label className="text-gray-600">
                    Run as background task:
                  </label>
                </div>
              </div>
              <div className="flex items-center mb-6 gap-1 justify-end">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="">Create Report</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Available Reports
            </CardTitle>
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Available reports:
              </h3>

              <p className="text-gray-600 mb-4">No reports available</p>

              <div className="flex justify-end">
              <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="">Refresh List</a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
