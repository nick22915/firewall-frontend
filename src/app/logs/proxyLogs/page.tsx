import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export default function ProxyLogs() {
  const PageIcon = FileText;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Proxy Log Viewer
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center">
              <div className="flex items-center gap-2">
                <label className="text-gray-600">Month:</label>
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
                <label className="text-gray-600 ml-4">Day:</label>
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
                  size="icon"
                  asChild
                  className="py-1 px-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-gray-50"
                >
                  <a href="">
                    <ArrowLeft />
                  </a>
                </Button>
                <Button
                  size="icon"
                  asChild
                  className="py-1 px-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-gray-50"
                >
                  <a href="">
                    <ArrowRight />
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-end gap-2">
                <label className="text-gray-600">Source IP:</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
                <label className="text-gray-600 ml-4">Username:</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="text-gray-600">Ignore filter:</label>
              <Input className="flex h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
              <div className="flex items-center gap-1">
                <Checkbox />
                <label className="text-gray-600">Enable ignore filter.</label>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Restore Default</a>
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
          </div>

          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Log
            </CardTitle>
            <Table>
              <TableCaption className="text-primary">
                Total number of websites matching selected criteria for May 21,
                2025: 0
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-accent ">
                  <TableHead className="w-[100px] text-white">Time</TableHead>
                  <TableHead className="text-white">Source IP</TableHead>
                  <TableHead className="text-white">Username</TableHead>
                  <TableHead className=" text-white">Website</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">001</TableCell>
                  <TableCell>001</TableCell>
                  <TableCell>juan.perez@example.com</TableCell>
                  <TableCell className="text-right">
                    juan.perez@example.com
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
