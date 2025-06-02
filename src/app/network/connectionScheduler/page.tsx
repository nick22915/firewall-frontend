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
import { selectHour, selectDay } from "@/data/selectDate";

const selectAction = [
  {
    id: "1",
    text: "Reconnect",
    value: "Reconnect",
  },
  {
    id: "2",
    text: "Connect",
    value: "Connect",
  },
  {
    id: "3",
    text: "Disconnect",
    value: "Disconnect",
  },
  {
    id: "4",
    text: "Reboot",
    value: "Reboot",
  },
  {
    id: "5",
    text: "Shutdown",
    value: "Shutdown",
  },
  {
    id: "6",
    text: "IPsec (re)start",
    value: "IPsec (re)start",
  },
  {
    id: "7",
    text: "IPsec stop",
    value: "IPsec stop",
  },
];

export default function ConnectionScheduler() {
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
                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectHour.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span>:</span>

                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectHour.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <label className="w-1/3 text-gray-600 flex items-center">
                  Action: <span className="text-redfire ml-1">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-around gap-1">
                    <Input type="radio" className="h-4 w-4" />
                    <Select>
                      <SelectTrigger className="w-[90px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectAction.map((option) => (
                          <SelectItem key={option.id} value={option.value}>
                            {option.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Input type="radio" className="h-4 w-4" />
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
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Input type="radio" className="h-4 w-4" />
                    <Select>
                      <SelectTrigger className="w-[90px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectDay.map((option) => (
                          <SelectItem key={option.id} value={option.value}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-[90px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectDay.map((option) => (
                          <SelectItem key={option.id} value={option.value}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                  <div className="flex items-center gap-4">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">Days of the week:</label>
                  </div>
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
