import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wifi } from "lucide-react";
import DynamicLineChart from "@/components/ui/dynamicLineChart";
import {
  mediaStatusChartData,
  indexNodeData,
  diskUsageData,
  transferData
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

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Disk Usage
            </CardTitle>
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">
                      Device
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Mounted on
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Size
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Used
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Free
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Percentage
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {diskUsageData.map((diskUsageData) => (
                    <TableRow key={diskUsageData.id}>
                      <TableCell className="w-[200px]">
                        {diskUsageData.Device}
                      </TableCell>
                      <TableCell className="text-right">
                        {diskUsageData.Mounted_on}
                      </TableCell>
                      <TableCell className="text-right">
                        {diskUsageData.Size}
                      </TableCell>
                      <TableCell className="text-right">
                        {diskUsageData.Used}
                      </TableCell>
                      <TableCell className="text-right">
                        {diskUsageData.Free}
                      </TableCell>
                      <TableCell className="text-right">
                        {diskUsageData.Percentage}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Index-Nodes
            </CardTitle>
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">
                      Device
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Mounted on
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Size
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Used
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Free
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Percentage
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {indexNodeData.map((indexNodeData) => (
                    <TableRow key={indexNodeData.id}>
                      <TableCell className="w-[200px]">
                        {indexNodeData.Device}
                      </TableCell>
                      <TableCell className="text-right">
                        {indexNodeData.Mounted_on}
                      </TableCell>
                      <TableCell className="text-right">
                        {indexNodeData.Size}
                      </TableCell>
                      <TableCell className="text-right">
                        {indexNodeData.Used}
                      </TableCell>
                      <TableCell className="text-right">
                        {indexNodeData.Free}
                      </TableCell>
                      <TableCell className="text-right">
                        {indexNodeData.Percentage}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Transfers
            </CardTitle>
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">
                      Device
                    </TableHead>
                    <TableHead className="text-white text-right">
                      MB read
                    </TableHead>
                    <TableHead className="text-white text-right">
                      MB written
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transferData.map((transferData) => (
                    <TableRow key={transferData.id}>
                      <TableCell className="w-[200px]">
                        {transferData.Device}
                      </TableCell>
                      <TableCell className="text-right">
                        {transferData.MB_read}
                      </TableCell>
                      <TableCell className="text-right">
                        {transferData.MB_written}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
