import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WifiOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
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
import ipAddressBlocklist from "@/data/ipBlocklist";

export default function IpAddressBlocklist() {
  const PageIcon = WifiOff;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Ip Address Blocklist
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
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Enable IP Blocklists:</label>
                <Checkbox />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Log dropped packets:</label>
                <Checkbox />
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Blocklist Settings
              </h3>

              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">
                      Blocklist
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Name
                    </TableHead>
                    <TableHead className="text-white text-right">
                      Category
                    </TableHead>
                    <TableHead className="text-white text-center">
                      Enable
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ipAddressBlocklist.map((blocklist) => (
                    <TableRow key={blocklist.id}>
                      <TableCell className="w-[200px]">
                        {blocklist.Blocklist}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.Name}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.Category}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        <Checkbox />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end mt-5">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
