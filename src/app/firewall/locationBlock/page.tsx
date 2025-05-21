"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import CountriesData from "@/data/countries";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocationBlock() {
  const PageIcon = MapPin;
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Location Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Location Block
            </CardTitle>
            <form>
              <div className="flex flex-col md:flex-row justify-around items-center h-28">
                <label>Enable Location based blocking :</label>
                <Checkbox />
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
              Block Country
            </CardTitle>
            <form>
              <div className="flex flex-col md:flex-row justify-around items-center h-28">
                <Select value={selectedValue} onValueChange={handleValueChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {CountriesData.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedValue && (
                  <p className="mt-4 text-gray-700 text-sm">
                    Selected Countries:{" "}
                    <span className="font-semibold text-blue-600">
                      {selectedValue}
                    </span>
                  </p>
                )}
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Save</a>
                </Button>
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-center pt-3">
                <Checkbox />
                <label className="text-gray-600">
                  Incoming traffic from this country will be blocked
                </label>
                <Checkbox />
                <label className="text-gray-600">
                  Incoming traffic from this country is allowed
                </label>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
