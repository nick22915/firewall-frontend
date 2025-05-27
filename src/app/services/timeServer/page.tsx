import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileClock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TimeServer() {
  const PageIcon = FileClock;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                NTP Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Common Settings
            </CardTitle>
            <form>
              <div className="flex items-center mb-4">
                <Checkbox />
                <label className="ml-2 text-gray-600">
                  Obtain time from a network time server
                </label>
              </div>

              <p className="text-gray-600 text-sm mb-4 ml-6">
                Clock was last synchronized at 19:50:09 CEST, 2025-05-26
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600 flex items-center">
                    Primary NTP server:{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600">
                    Secondary NTP server:
                  </label>
                  <Input />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Checkbox />
                <label className="ml-2 text-gray-600">
                  Provide time to local network
                </label>
              </div>

              <div className="flex items-center mb-6">
                <Checkbox />
                <label className="ml-2 text-gray-600">
                  Force setting the system clock on boot
                </label>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                System Time (as of last page load): 2025-05-27 at 17:20:04 CEST
              </p>

              <div className="flex justify-end">
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

          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Synchronization
            </CardTitle>
            <form>
              <div className="flex items-center mb-4 gap-2">
                <Input type="radio" className="h-4 w-4"/>
                <label className="text-gray-600 mr-4">Every</label>
                <Input/>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hours">Hours</SelectItem>
                    <SelectItem value="days">Days</SelectItem>
                    <SelectItem value="weeks">Weeks</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center mb-6 gap-2">
                <Input type="radio" className="h-4 w-4"/>
                <label className="text-gray-600">Manually</label>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Update the time:
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                To queue a synchronization event at any time (even while using a
                repeating schedule), press the Set time now button. Please note
                that you may have to wait for five minutes, or more, before a
                sync event occurs.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center text-redfire text-sm">
                  <span className="mr-1">*</span> Required field
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Set Time Now</a>
                  </Button>
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
        </CardContent>
      </Card>
    </div>
  );
}
