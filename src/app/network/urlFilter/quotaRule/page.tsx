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

export default function QuotaRule() {
  const PageIcon = Filter;
  const [quotaRules, setQuotaRule] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    timeQuota: "",
    renewalPeriod: "",
    assignedUser: "",
    activityDetection: "",
    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
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
      timeQuota: "",
      renewalPeriod: "",
      assignedUser: "",
      activityDetection: "",
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
              Add new user quota rule:
            </CardTitle>
            <form onSubmit={handleAddRule}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className=" text-gray-600 flex items-center mb-1">
                    Time quota (in minutes):{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input
                    name="timeQuota"
                    value={formData.timeQuota}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block  text-gray-600 mb-1">
                    Assigned users (one per line):{" "}
                    <span className="text-redfire ml-1">*</span>{" "}
                  </label>
                  <Input
                    name="assignedUser"
                    value={formData.assignedUser}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center gap-5">
                  <label className=" text-gray-600 ">Renewal period:</label>
                  <Select
                    value={formData.renewalPeriod}
                    onValueChange={(value) =>
                      handleSelectChange("renewalPeriod", value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                  <label className=" text-gray-600 ">Enable:</label>
                  <Checkbox />
                </div>

                <div className="flex items-center md:justify-start justify-end mt-6 md:mt-0 gap-1">
                  <label className=" text-gray-600">Activity detection:</label>
                  <Select
                    value={formData.activityDetection}
                    onValueChange={(value) =>
                      handleSelectChange("activityDetection", value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disable">Disable</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-redfire text-sm">
                  <span className="mr-1">*</span> Required field
                </div>
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
              Current rules:
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    Time quota
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Activity detection
                  </TableHead>
                  <TableHead className="text-white">Renewal</TableHead>
                  <TableHead className="text-right text-white">
                    Assigned users
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
                      {rule.timeQuota}
                    </TableCell>
                    <TableCell className="text-center">
                      {rule.activityDetection}
                    </TableCell>
                    <TableCell>{rule.renewalPeriod}</TableCell>
                    <TableCell className="text-right">
                      {rule.assignedUser}
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
