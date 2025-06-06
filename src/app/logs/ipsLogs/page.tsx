import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, ArrowLeft, ArrowRight } from "lucide-react";
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

export default function IpsLogs() {
  const PageIcon = ShieldAlert;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                IPS Log Viewer
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-5">
          <CardTitle className="text-2xl font-medium text-primary pb-5">
              Error messages
            </CardTitle>
            <p className="text-gray-600">
              No (or only partial) logs exist for the day queried:
              /var/log/suricata/fast.log could not be opened.{" "}
            </p>
          </div>
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
          </div>
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Log
            </CardTitle>
            <p className="text-gray-600 mb-4 ">
              Total number of firewall hits for May 22, 2025: {firewallLogs.length}
            </p>
            <Table>
              <TableCaption>Logs List.</TableCaption>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Time</TableHead>
                  <TableHead className="text-white">Chain</TableHead>
                  <TableHead className="text-white">Iface</TableHead>
                  <TableHead className="text-right text-white">Proto</TableHead>
                  <TableHead className="text-right text-white">
                    Source Destination
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Src Port Dst Port
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Country
                  </TableHead>
                  <TableHead className="text-right text-white">
                    MAC Address
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {firewallLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.Time}</TableCell>
                    <TableCell>{log.Chain}</TableCell>
                    <TableCell>{log.Iface}</TableCell>
                    <TableCell className="text-right">{log.Proto}</TableCell>
                    <TableCell className="text-right">{log.Source}</TableCell>
                    <TableCell className="text-right">
                      {log["Src Port"]}
                    </TableCell>
                    <TableCell className="text-right">{log.Country}</TableCell>
                    <TableCell className="text-right">
                      {log["MAC Address"]}
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
