import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectMonth, selectDay, selectYear } from "@/data/selectDate";
import systemLogsSelect from "@/data/systemLogsSelect";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import systemLogsData from "@/data/systemLogs";

export default function SshAccess() {
  const PageIcon = Info;
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentDay = date.getDate();
  // should be updated when change the date filter

  // the data for the system logs table
  // should be fetched from the backend based on the selected filters

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                System Logs
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <form>
              <div className="flex flex-col md:flex-row justify-between items-center h-28">
                <label className="text-gray-600">Section :</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {systemLogsSelect.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <label className="text-gray-600">Month :</label>
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
                <label className="text-gray-600">Day :</label>
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
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Log
            </CardTitle>
            <Table>
              <TableCaption className="text-primary">
                Total number of firewall hits for {currentMonth} {currentDay},{" "}
                {currentYear}: {systemLogsData.length}
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-accent ">
                  <TableHead className="w-[100px] text-white">Time</TableHead>
                  <TableHead className="text-white">Section</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemLogsData.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.Time}</TableCell>
                    <TableCell>
                      {log.Section} {log.Description}
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
