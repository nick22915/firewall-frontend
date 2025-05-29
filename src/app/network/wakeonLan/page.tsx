"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Power, Delete, Edit } from "lucide-react";
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

export default function WakeOnLan() {
  const PageIcon = Power;
  const [macAddress, setMacAddress] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    macAddress: "",
    interface: "green", // Default value for the interface
    remark: "",
    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();
    setMacAddress((prev) => [...prev, formData]);
    setFormData({
      macAddress: "",
        interface: "green", // Reset to default value
      remark: "",
      enabled: false,
    });
  };

  const handleDeleteDevice = (index: number) => {
    setMacAddress((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Wake On LAN
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add Device
            </CardTitle>
            <form onSubmit={handleAddDevice}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className=" text-gray-600 flex items-center mb-1">
                    MAC Address: <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input
                    name="macAddress"
                    value={formData.macAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex items-center md:justify-start justify-end mt-6 md:mt-0 gap-1">
                  <label className=" text-gray-600">Interface:</label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="green" onChange={handleInputChange}>GREEN</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block  text-gray-600 mb-1">Remark:</label>
                  <Input
                    name="remark"
                    value={formData.remark}
                    onChange={handleInputChange}
                  />
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
              Current Devices
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    MAC Address
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Interface
                  </TableHead>
                  <TableHead className="text-white">MAC Address</TableHead>
                  <TableHead className="text-right text-white">
                    Remark
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {macAddress.map((device, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                       {device.macAddress}
                    </TableCell>
                    <TableCell className="text-center">
                      {device.interface}
                    </TableCell>
                    <TableCell>{device.macAddress}</TableCell>
                    <TableCell className="text-right">
                      {device.remark}
                    </TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      <Edit />{" "}
                      <Delete
                        className="cursor-pointer text-refire"
                        onClick={() => handleDeleteDevice(index)}
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
