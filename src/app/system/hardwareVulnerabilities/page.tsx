import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import hardwareVulnerabilitiesData from "@/data/hardwareVulnerabilites";
import { Input } from "@/components/ui/input";

export default function HardwareVulnerabilities() {
  const PageIcon = AlertTriangle;

  const getStatusClass = (status: string) => {
    if (status.includes("Not Affected")) {
      return "inline-block bg-greenfire text-white px-2 py-1 text-xs font-semibold rounded";
    }
    if (status.includes("Vulnerable")) {
      return "inline-block bg-redfire text-white px-2 py-1 text-xs font-semibold rounded";
    }
    if (status.includes("Mitigated")) {
      return "inline-block bg-accent text-white px-2 py-1 text-xs font-semibold rounded";
    }
    if (status.includes("Unknown")) {
      return "text-gray-500 font-bold";
    }
    if (status.includes("unsupported")) {
      return "text-gray-500 font-bold";
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
                Processor Vulnerability Mitigations
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Processor Vulnerability Mitigations
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[200px] text-white">
                    Vulnerability
                  </TableHead>
                  <TableHead className="text-white text-right">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hardwareVulnerabilitiesData.map((vulnerability) => (
                  <TableRow key={vulnerability.id}>
                    <TableCell className="w-[200px]">
                      {vulnerability.Vulnerability}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`text-right ${getStatusClass(
                          vulnerability.Status
                        )}`}
                      >
                        {vulnerability.Status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className=" text-white">
                    Simultaneous Multi-Threading (SMT) is not supported
                  </TableHead>
                  <TableHead className="w-[100px] text-white"></TableHead>
                  <TableHead className="w-[100px] text-white"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-left">
                    <div className="flex items-center gap-1 mb-2 ">
                      <label htmlFor="">
                        {" "}
                        Enable Simultaneous Multi-Threading (SMT)
                      </label>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-left">
                    <div className="flex items-center mb-2 justify-end gap-3 ">
                      <Input className="h-4" type="radio" />
                      <label htmlFor="">Automatic</label>
                      <Input className="h-4" type="radio" />
                      <label htmlFor="">Forced (Dangerous)</label>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex items-center justify-end ">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
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
