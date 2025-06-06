"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Delete, Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { selectHour, selectDay, selectMinutes } from "@/data/selectDate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

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
  const [scheduledActions, setScheduledActions] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    time: "",
    hour: "",
    minute: "",
    action: "",
    daysFrom: "",
    daysTo: "",
    remark: "",
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddScheduledAction = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduledActions((prev) => [...prev, formData]);
    setFormData({
      time: "",
      hour: "",
      minute: "",
      action: "",
      daysFrom: "",
      daysTo: "",
      remark: "",
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleDeleteScheduledActions = (index: number) => {
    setScheduledActions((prev) => prev.filter((_, i) => i !== index));
  };

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
            <form onSubmit={handleAddScheduledAction}>
              <div className="flex items-center mb-4">
                <label className="w-1/3 text-gray-600 flex items-center">
                  Time: <span className="text-redfire ml-1">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <Select
                    value={formData.hour}
                    onValueChange={(value) => handleSelectChange("hour", value)}
                  >
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

                  <Select
                    value={formData.minute}
                    onValueChange={(value) =>
                      handleSelectChange("minute", value)
                    }
                  >
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectMinutes.map((option) => (
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
                    <Select
                      value={formData.action}
                      onValueChange={(value) =>
                        handleSelectChange("action", value)
                      }
                    >
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
                    <Select
                      value={formData.daysFrom}
                      onValueChange={(value) =>
                        handleSelectChange("daysFrom", value)
                      }
                    >
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

                    <Select
                      value={formData.daysTo}
                      onValueChange={(value) =>
                        handleSelectChange("daysTo", value)
                      }
                    >
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
                        <Checkbox
                          checked={formData.monday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("monday", Boolean(checked))
                          }
                        />
                        <label className="text-gray-600">Monday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox
                          checked={formData.tuesday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("tuesday", Boolean(checked))
                          }
                        />
                        <label className="text-gray-600">Tuesday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox
                          checked={formData.wednesday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("wednesday", Boolean(checked))
                          }
                        />
                        <label className="text-gray-600">Wednesday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox
                          checked={formData.thursday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("thursday", Boolean(checked))
                          }
                        />
                        <label className="text-gray-600">Thursday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox
                          checked={formData.friday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("friday", Boolean(checked))
                          }
                        />
                        <label className="text-gray-600">Friday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox
                          checked={formData.saturday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("saturday", Boolean(checked))
                          }
                        />
                        <label className="text-gray-600">Saturday</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox
                          checked={formData.sunday}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("sunday", Boolean(checked))
                          }
                        />
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
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Add
                </Button>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Scheduled actions
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Time</TableHead>
                  <TableHead className="w-[100px] text-white text-right">Days</TableHead>
                  <TableHead className="text-white text-right">
                    Remark
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduledActions.map((action, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      {action.hour}:{action.minute}
                    </TableCell>
                    <TableCell className="text-right">
                      {action.monday}
                    </TableCell>
                    <TableCell className="text-right">
                      {action.action} {action.remark}
                    </TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      <Edit />{" "}
                      <Delete
                        className="cursor-pointer text-refire"
                        onClick={() => handleDeleteScheduledActions(index)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
