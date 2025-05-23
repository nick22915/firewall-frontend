import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatabaseZap, Delete, Edit } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DnsServers from "@/data/dnsServers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DomainNameSystem() {
  const PageIcon = DatabaseZap;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Domanin Name System
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              DNS Servers
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    NameServer
                  </TableHead>
                  <TableHead className="text-white">Counrty</TableHead>
                  <TableHead className="text-white">rDNS</TableHead>
                  <TableHead className="text-right text-white">
                    Remark
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DnsServers.map((dns) => (
                  <TableRow key={dns.id}>
                    <TableCell className="font-medium">
                      {dns.Nameserver}
                    </TableCell>
                    <TableCell>{dns.Country}</TableCell>
                    <TableCell>{dns.rDNS}</TableCell>
                    <TableCell className="text-right">{dns.Remark}</TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      <Edit /> <Delete className="cursor-pointer text-refire" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-end gap-2 mt-4">
              <Button
                size="lg"
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Add
              </Button>

              <Button
                size="lg"
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Check DNS Servers
              </Button>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              DNS Configuration
            </CardTitle>
            <form>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Use ISP-assigned DNS servers
                </label>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Protocol for DNS queries
                </label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="udp">UDP</SelectItem>
                    <SelectItem value="tls">TLS</SelectItem>
                    <SelectItem value="tcp">TCP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Enable Safe Search</label>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Include YouTube in Safe Search
                </label>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">QNAME Minimisation</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standar">Standard</SelectItem>
                    <SelectItem value="strict">Strict</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-end mb-4">
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
