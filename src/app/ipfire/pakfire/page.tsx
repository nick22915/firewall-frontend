import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Package, Plus, Minimize, Download } from "lucide-react";

export default function Pakfire() {
  const PageIcon = Package;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Pakfire Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Pakfire
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  System Status:
                </h3>
                <p className="text-gray-600 mb-2">
                  Core-Update-Level: <span className="font-semibold">193</span>
                </p>
                <p className="text-gray-600 mb-1 text-sm">
                  Last update made 52d 23h 34m 3s ago.
                </p>
                <p className="text-gray-600 mb-1 text-sm">
                  Last server list update made 5m 7s ago.
                </p>
                <p className="text-gray-600 mb-1 text-sm">
                  Last core list update made 5m 1s ago.
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  Last packages list update made 5m 4s ago.
                </p>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Refresh List
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Available updates:
                </h3>
                <Textarea
                  className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"
                  value={"Core-Update-2.29-x86_64-Release: 193 -> 194"}
                  readOnly
                ></Textarea>
                <div className="flex justify-center mt-2">
                  <Download className="text-accent" />
                </div>
              </div>
            </div>

            <div className="border rounded-md p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Available Add-ons:
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Please choose one or more items from the list below and
                    click the plus to install.
                  </p>
                  <select multiple className="addon-listbox w-full mb-2">
                    <option>7zip-17.05-10</option>
                    <option>alac-0.0.7-1</option>
                    <option>alsa-1.2.13-22</option>
                    <option>amazon-ssm-agent-3.3.1345.0-9</option>
                    <option>apcupsd-3.14.14-2</option>
                    <option>avahi-0.8-14</option>
                    <option>aws-cli-1.37.4-11</option>
                    <option>bacula-15.0.2-14</option>
                    <option>bird-2.15.1-14</option>
                    <option>borgbackup-1.4.0-17</option>
                  </select>
                  <div className="flex justify-center">
                    <Minimize className="text-accent" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Installed Add-ons:
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Please choose one or more items from the list below and
                    click the minus to uninstall.
                  </p>
                  <select multiple className="addon-listbox w-full mb-2">
                    <option>Installed Add-on 1</option>
                    <option>Installed Add-on 2</option>
                  </select>
                  <div className="flex justify-center">
                    <Plus className="text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <div className="flex items-center justify-between mb-4">
              <label className="text-gray-600">QNAME Minimisation</label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stable">Stable</SelectItem>
                  <SelectItem value="testing">Testing</SelectItem>
                  <SelectItem value="unstable">Unstable</SelectItem>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
