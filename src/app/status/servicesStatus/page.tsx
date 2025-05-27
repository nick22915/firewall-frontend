import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ListChecks } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusInformation from "@/data/statusInformation";

export default function ServiceStatus() {
  const PageIcon = ListChecks;

  const getStatusClass = (status: string) => {
    if (status.includes("RUNNING")) {
      return "inline-block bg-greenfire text-white px-2 py-1 text-xs font-semibold rounded";
    }
    if (status.includes("STOPPED")) {
      return "inline-block bg-redfire text-white px-2 py-1 text-xs font-semibold rounded";
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Status Information
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Status Information
            </CardTitle>
           <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Status</TableHead>
                  <TableHead className="text-white text-right">Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {StatusInformation.map((status, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                     {status.Service}
                    </TableCell>
                   <TableCell className="text-right">
                      <span
                        className={`text-right ${getStatusClass(
                          status.Status
                        )}`}
                      >
                        {status.Status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{status.Usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add-On Services
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Add-On Services</TableHead>
                  <TableHead className="text-white text-center">Boot</TableHead>
                  <TableHead className="text-white text-right">Action</TableHead>
                  <TableHead className="text-white text-right">Status</TableHead>
                  <TableHead className="text-white text-right">Memory</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
