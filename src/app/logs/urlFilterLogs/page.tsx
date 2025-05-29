import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, ArrowLeft, ArrowRight } from "lucide-react";
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
import firewallLogs from "@/data/firewallLogs";
import { selectMonth, selectDay } from "@/data/selectDate";
import urlFilterLogs from "@/data/urlFilterLogs";

export default function UrlFilterLog() {
  const PageIcon = Filter;
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentDay = date.getDate();
  // should be updated when change the date filter

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Url Filter Logs
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
              <label>Section :</label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drop">URL Filter</SelectItem>
                  <SelectItem value="reject">squidGuard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Log
            </CardTitle>
            <p className="text-gray-600 mb-4 ">
              Total number of firewall hits for {currentMonth} {currentDay},{" "}
              {currentYear}: {urlFilterLogs.length}
            </p>
            <Table>
              <TableCaption>Logs List.</TableCaption>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    Blocked domains
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Blocked URLs
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
