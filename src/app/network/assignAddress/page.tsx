import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fingerprint } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function AssignMACAddress() {
  const PageIcon = Fingerprint;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Assign MAC Address
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              MAC Address on red0
            </CardTitle>
            <div className="mb-4">
              <p className="text-gray-600 text-sm mb-4">
                Here you are able to change the MAC address on red0. The address
                must be entered in hexadecimal (0-9,a-f), a valid entry is e.g.
                00-01-02-0e-b8-d6 or 00:01:02:0eb8d6.
              </p>
            </div>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600 flex items-center">
                    new MAC address:{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div></div>{" "}
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600">
                    new MAC address 1 (vdsl-inet):
                  </label>
                  <Input />
                </div>
                <div></div>{" "}
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    new MAC address 2 (vdsl-iptv):
                  </label>
                  <Input />
                </div>
                <div></div>{" "}
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center text-redfire text-sm">
                  <span className="mr-1">*</span> Required field
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Save
                  </Button>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent/80 text-accent-foreground hover:bg-accent/60"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
