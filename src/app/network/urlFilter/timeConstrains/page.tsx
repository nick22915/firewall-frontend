"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Delete, Edit, ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { selectHour } from "@/data/selectDate";
import { Textarea } from "@/components/ui/textarea";
import BlacklistOptions from "@/data/blacklistOptions";

export default function TimeConstrains() {
  const PageIcon = Filter;
  const [quotaRules, setQuotaRule] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    definition: "",
    timeSpaceHourFrom: "",
    timeSpaceHourTo: "",
    timeSpaceMinuteFrom: "",
    timeSpaceMinuteTo: "",
    source: "",
    destination: "",
    enabled: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    setQuotaRule((prev) => [...prev, formData]);
    setFormData({
      definition: "",
      timeSpaceHourFrom: "",
      timeSpaceHourTo: "",
      timeSpaceMinuteFrom: "",
      timeSpaceMinuteTo: "",
      source: "",
      destination: "",
      enabled: true,
    });
  };

  const handleDeleteRule = (index: number) => {
    setQuotaRule((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/network/urlFilter">
        <Button variant="outline" className="mb-5">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                URL filter configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add new time constraint rule:
            </CardTitle>
            <form onSubmit={handleAddRule}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <label className="text-gray-600 mr-2">Definition</label>
                <Select
                  value={formData.definition}
                  onValueChange={(value) =>
                    handleSelectChange("definition", value)
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="within">Within</SelectItem>
                    <SelectItem value="outside">Outside</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Checkbox />
                  <label className="text-gray-600">Mon</label>
                  <Checkbox />
                  <label className="text-gray-600">Tue</label>
                  <Checkbox />
                  <label className="text-gray-600">Wed</label>
                  <Checkbox />
                  <label className="text-gray-600">Thu</label>
                  <Checkbox />
                  <label className="text-gray-600">Fri</label>
                  <Checkbox />
                  <label className="text-gray-600">Sat</label>
                  <Checkbox />
                  <label className="text-gray-600">Sun</label>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <label className="text-gray-600">From</label>

                  <Select
                    value={formData.timeSpaceHourFrom}
                    onValueChange={(value) =>
                      handleSelectChange("timeSpaceHourFrom", value)
                    }
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
                    value={formData.timeSpaceMinuteFrom}
                    onValueChange={(value) =>
                      handleSelectChange("timeSpaceMinuteFrom", value)
                    }
                  >
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00">00</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="45">45</SelectItem>
                    </SelectContent>
                  </Select>

                  <label className="text-gray-600 ml-4">To</label>
                  <Select
                    value={formData.timeSpaceHourTo}
                    onValueChange={(value) =>
                      handleSelectChange("timeSpaceHourTo", value)
                    }
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
                    value={formData.timeSpaceMinuteTo}
                    onValueChange={(value) =>
                      handleSelectChange("timeSpaceMinuteTo", value)
                    }
                  >
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00">00</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="45">45</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-6">
                <div className="md:col-span-1">
                  <label className=" text-gray-600 flex items-center">
                    Source host(s) or network(s){" "}
                    <span className="text-redifre ml-1">*</span>
                  </label>
                  <Textarea
                    className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"
                    name="assignedUser"
                    value={formData.source}
                    onChange={handleInputChange}
                  ></Textarea>
                </div>
                <div className="md:col-span-1 flex items-center gap-2">
                  <label className=" text-gray-600 flex items-center">
                    Destination <span className="text-redfire ml-1">*</span>
                  </label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) =>
                      handleSelectChange("destination", value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {BlacklistOptions.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                          {option.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1 flex items-center gap-2">
                  <label className="block text-gray-600">Access</label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="block">block</SelectItem>
                      <SelectItem value="allow">allow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600">Remark</label>
                <Input />
              </div>

              <div className="flex items-center mb-6">
                <label className="text-gray-600 mr-2">Enabled:</label>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-redfire text-sm">
                  <span className="mr-1">*</span> Required field
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Add
                  </Button>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Current rules:
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    Definition
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Time space
                  </TableHead>
                  <TableHead className="text-white">Source</TableHead>
                  <TableHead className="text-right text-white">
                    Destination
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotaRules.map((rule, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      {rule.definition}
                    </TableCell>
                    <TableCell className="text-center">
                      {rule.timeSpaceHourFrom}:{rule.timeSpaceMinuteFrom} to{" "}
                      {rule.timeSpaceHourTo}:{rule.timeSpaceMinuteTo}
                    </TableCell>
                    <TableCell>{rule.renewalPeriod}</TableCell>
                    <TableCell className="text-right">
                      {rule.destination}
                    </TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      <Edit />{" "}
                      <Delete
                        className="cursor-pointer text-refire"
                        onClick={() => handleDeleteRule(index)}
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
