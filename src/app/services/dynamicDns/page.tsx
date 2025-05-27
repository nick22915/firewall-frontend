import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudCog } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import DynamicDnsSelect from "@/data/dynamicDns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DynamicDns() {
  const PageIcon = CloudCog;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Dynamic DNS
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <p className="text-gray-600 text-sm mb-4">
              Dynamic DNS provider(s) will receive an IP address for this IPFire
              from:
            </p>

            <form>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="ml-2 text-gray-600">
                    The classical RED IP used by IPFire during connection
                  </label>
                </div>
                <div className="flex items-center">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="ml-2 text-gray-600">
                    Guess the real public IP with help of an external server
                  </label>
                </div>
              </div>

              <div className="flex justify-end">
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

          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add a Host
            </CardTitle>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600">Service:</label>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {DynamicDnsSelect.map((dns, index) => (
                        <SelectItem key={dns.id} value={dns.value}>
                          {dns.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/2  text-gray-600">Hostname:</label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2  text-gray-600">Enabled:</label>
                  <Checkbox />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <label className="w-1/2 text-sm font-medium text-gray-600">
                      Username:
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center">
                    <label className="w-1/2 text-sm font-medium text-gray-600">
                      Password:
                    </label>
                    <Input type="password" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-3">
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
