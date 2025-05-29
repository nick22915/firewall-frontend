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
import {selectMonth, selectDay, selectYear} from "@/data/selectDate";

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
