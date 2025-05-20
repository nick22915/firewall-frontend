import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function SshAccess() {
  const PageIcon = CalendarClock;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Connection Scheduler
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add Action
            </CardTitle>
            <form>
              <div className="flex items-center mb-4">
                <label className="w-1/3 text-gray-600 flex items-center">
                  Time: <span className="text-redfire ml-1">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <select
                    id="action-time-hour"
                    name="action-time-hour"
                    className="styled-select w-auto"
                  >
                    <option value="00">00</option>
                  </select>
                  <span>:</span>
                  <select
                    id="action-time-minute"
                    name="action-time-minute"
                    className="styled-select w-auto"
                  >
                    <option value="00">00</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <label className="w-1/3 text-gray-600 flex items-center">
                  Action: <span className="text-redfire ml-1">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-around gap-1">
                    <Input type="radio" />
                    <label className="text-gray-600">Reconnect</label>
                  </div>

                  <Input type="radio" />
                  <label className="text-gray-600 mr-2">
                    Change to profile:
                  </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">
                        1. This field may be left blank
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <label className="w-1/3 text-gray-600 flex items-center mt-1">
                  Days: <span className="text-redfire ml-1">*</span>
                </label>
                <div className="">
                  <div className="flex items-center justify-between gap-1">
                    <Input type="radio" />
                    <label className="text-gray-600">1 - 31</label>
                  </div>
                  <div>
                    <label className="text-gray-600">Days of the week:</label>
                    <div className="ml-6 mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Monday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Tuesday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Wednesday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Thursday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Friday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Saturday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <label className="text-gray-600">Sunday</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <label className="w-1/3 text-gray-600">Remark:</label>
                <Input />
              </div>

              <div className="flex items-center justify-end mb-4 text-redfire text-sm">
                <span className="mr-1">*</span> Required field
              </div>

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
        </CardContent>
      </Card>
    </div>
  );
}
