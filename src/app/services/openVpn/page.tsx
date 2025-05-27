import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Edit, Delete } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { hashAlgorithm, encryption } from "@/data/cryptographicSelect";

export default function OpenVpn() {
  const PageIcon = ShieldCheck;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Open VPN
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Global Settings
            </CardTitle>
            <div className="openvpn-status-bar mb-6">
              <span className="openvpn-status-label">
                OpenVPN Roadwarrior Server
              </span>
              <span className="openvpn-status-stopped">STOPPED</span>
            </div>
            <form>
              <div className="flex items-center mb-4">
                <label className="w-1/2 text-gray-600">
                  Current OpenVPN server status:
                </label>
                <div className="status-button-stopped">STOPPED</div>
              </div>

              <div className="flex items-center mb-6">
                <label className="w-1/2 text-gray-600">OpenVPN on RED:</label>
                <Checkbox />
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Network configuration:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Local VPN Hostname/IP
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    OpenVPN subnet:
                  </label>
                  <Input value={"10.86.198.0/255.255.255.0"} />
                </div>
                <div className="flex items-center justify-between">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Protocol:
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">UDP</SelectItem>
                      <SelectItem value="en">TCP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Destination port:
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    MTU size:
                  </label>
                  <Input />
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Cryptographic options:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center justify-between">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Hash algorithm:
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Hash" />
                    </SelectTrigger>
                    <SelectContent>
                      {hashAlgorithm.map((hash) => (
                        <SelectItem key={hash.id} value={hash.value}>
                          {hash.option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Encryption:
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Encryption" />
                    </SelectTrigger>
                    <SelectContent>
                      {encryption.map((encryption) => (
                        <SelectItem
                          key={encryption.id}
                          value={encryption.value}
                        >
                          {encryption.option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    TLS Channel Protection:
                  </label>
                  <Checkbox />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                >
                  <a href="/">Static IP Address Pools</a>
                </Button>

                <Button
                  size="lg"
                  asChild
                  className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                >
                  <a href="/">Advanced Server Options</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                >
                  <a href="/">Start Open VPN Server</a>
                </Button>
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Save</a>
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Certificate Authorities and -Keys
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Name</TableHead>
                  <TableHead className="text-white text-center">
                    Subject
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    Root Certificate
                  </TableCell>
                  <TableCell className="text-center">Not Present</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Edit /> <Delete className="cursor-pointer text-refire" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    Host Certificate
                  </TableCell>
                  <TableCell className="text-center">Not Present</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Edit /> <Delete className="cursor-pointer text-refire" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="border-b border-gray-300 mb-6"></div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
                  <div className="flex items-center">
                    <label className="w-1/3 text-sm font-medium text-gray-600 flex items-center">
                      CA name: <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <Input type="file" />
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Upload CA Certificate
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Resetting the X509 remove the root CA, the host certificate
                  and all certificate based connections..
                </p>

                <div className="flex justify-end gap-3">
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Generate Root/Host Certificates
                  </Button>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Remove X509
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
