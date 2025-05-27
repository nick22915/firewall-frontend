import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { firewallLoggingData, firewallSettings } from "@/data/firewallLoging"; // Assuming you have a data file for logging options

export default function firewallOptions() {
  const PageIcon = Settings2;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Firewall Options
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Firewall Options
            </CardTitle>
            <form>
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Masquerade GREEN
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Masquerade GREEN</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enable">Masquerading Enable</SelectItem>
                    <SelectItem value="disable">
                      Masquerading Disable
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Firewall options for RED interface
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Drop packets from and to hostile networks (listed at Spamhaus
                  DROP, etc.)
                </label>
                <div className="flex items-center">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600 mr-4">on</label>
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">off</label>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Firewall options for BLUE interface
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Drop all packets not addressed to proxy
                </label>
                <div className="flex items-center">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600 mr-4">on</label>
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">off</label>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Drop all Microsoft ports 135,137,138,139,445,1025
                </label>
                <div className="flex items-center">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600 mr-4">on</label>
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">off</label>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Firewall Logging
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              {firewallLoggingData.map((data) => (
                <div
                  key={data.id}
                  className="flex items-center justify-between mb-4"
                >
                  <label className="text-gray-600">{data.setting}</label>
                  <div className="flex items-center">
                    <Input type="radio" className="h-4 w-4" />
                    <label className="text-gray-600 mr-4">on</label>
                    <Input type="radio" className="h-4 w-4" />
                    <label className="text-gray-600">off</label>
                  </div>
                </div>
              ))}

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Firewall Settings
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              {firewallSettings.map((data) => (
                <div
                  key={data.id}
                  className="flex items-center justify-between mb-4"
                >
                  <label className="text-gray-600">{data.setting}</label>
                  <div className="flex items-center">
                    <Input type="radio" className="h-4 w-4" />
                    <label className="text-gray-600 mr-4">on</label>
                    <Input type="radio" className="h-4 w-4" />
                    <label className="text-gray-600">off</label>
                  </div>
                </div>
              ))}

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Firewall Policy
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Default behaviour of (forward) firewall in mode "Blocked"
                </label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drop">DROP</SelectItem>
                    <SelectItem value="reject">REJECT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Default behaviour of (outgoing) firewall in mode "Blocked"
                </label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drop">DROP</SelectItem>
                    <SelectItem value="reject">REJECT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">
                  Default behaviour of (input) firewall
                </label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drop">DROP</SelectItem>
                    <SelectItem value="reject">REJECT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end mt-5">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Save</a>
                </Button>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Default firewall behaviour
            </CardTitle>

            <h3 className="text-lg font-medium text-gray-700 mb-4 text-redfire">
              FORWARD
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>
            <p className="text-gray-600 text-sm mb-4">
              Sets the default firewall behaviour for connections from local
              networks. You may either allow all new connections or block them
              by default. Connections between the local networks are also
              blocked in the latter mode.
            </p>

            <form className="flex items-center justify-end gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allowed">Allowed</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectContent>
              </Select>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Save</a>
              </Button>
            </form>

            <h3 className="text-lg font-medium text-gray-700 mb-4 text-redfire">
              OUTGOING
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>
            <p className="text-gray-600 text-sm mb-4">
              Sets the default firewall behaviour for connections initiated by
              the firewall itself. Attention! You may lock yourself out.
            </p>

            <form className="flex items-center justify-end gap-4 ">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allowed">Allowed</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectContent>
              </Select>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Save</a>
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
