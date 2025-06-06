import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FastForward } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function UpdateAcelerator() {
  const PageIcon = FastForward;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Update Acelerator Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Update Acelerator
            </CardTitle>
            <div className="border-b border-gray-300 mb-6"></div>
            <form>
              <div className="mb-6 pb-3">
                <h3 className="text-md font-bold text-gray-700 mb-2">
                  Common settings
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-gray-600">Enable log:</label>
                  <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-gray-600">
                    Delivery only/no download mode:
                  </label>
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600 mr-2">
                      Max. disk usage:
                    </label>
                    <Input className="small-input" />
                    <span className="ml-1 text-gray-600">%</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 mb-6"></div>

              <div className="mb-6 pb-3">
                <h3 className="text-md font-bold text-gray-700 mb-2">
                  Performance options
                </h3>
                <div className="flex items-center justify-between">
                  <label className="text-gray-600">
                    Lower CPU priority for downloads:
                  </label>
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600 mr-2">
                      Max. external download rate (kbit/s):
                    </label>
                    <Input />
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 mb-6"></div>

              <div className="mb-6 pb-3">
                <h3 className="text-md font-bold text-gray-700 mb-2">
                  Source checkup
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-gray-600">
                    Enable automatic source checkup:
                  </label>
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-gray-600 mr-2">
                      Source checkup schedule:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <label className="text-gray-600 mr-2">
                    Replace outdated files during checkup:
                  </label>
                  <Input />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Save</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Save and Restart</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Statistics</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Maintenance</a>
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
