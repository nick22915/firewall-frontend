"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Delete, Edit, ArrowLeft } from "lucide-react";
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
import CountriesData from "@/data/countries";

export default function NewRule() {
  const PageIcon = ListChecks;

  const protocolSelect = [
    {
      id: "1",
      text: "All",
      value: "All",
    },
    {
      id: "2",
      text: "- Preset -",
      value: "- Preset -",
    },
    {
      id: "3",
      text: "TCP",
      value: "TCP",
    },
    {
      id: "4",
      text: "UDP",
      value: "UDP",
    },
    {
      id: "5",
      text: "ICMP",
      value: "ICMP",
    },
    {
      id: "6",
      text: "IGMP",
      value: "IGMP",
    },
    {
      id: "7",
      text: "AH",
      value: "AH",
    },
    {
      id: "8",
      text: "ESP",
      value: "ESP",
    },
    {
      id: "9",
      text: "GRE",
      value: "GRE",
    },
    {
      id: "10",
      text: "IPv6 Encapsulation (Protocol 41)",
      value: "IPv6 Encapsulation (Protocol 41)",
    },
    {
      id: "11",
      text: "IPIP",
      value: "IPIP",
    },
  ];

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
                Firewall Rules
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form>
            <div className="border rounded-md p-4">
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Source
              </CardTitle>
              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center mr-6 mb-2 md:mb-0 gap-2">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">
                    Source address (MAC/IP address or network):
                  </label>
                </div>
                <Input className="mt-3" />

                <div className="flex items-center mb-2 md:mb-0 mt-5 gap-5">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">Firewall</label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600 mr-4">
                    Standard networks:
                  </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center mb-4"></div>

              <div className="flex items-center mb-6 gap-2">
                <Input type="radio" className="h-4 w-4" />
                <label className="text-gray-600 mr-4">Location:</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anonymous">Anonymous Proxy</SelectItem>
                    <SelectItem value="satelite">Satelite Provider</SelectItem>
                    <SelectItem value="anycast">
                      Worldwide Anycast Instance
                    </SelectItem>
                    {CountriesData.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border rounded-md p-4 mt-5">
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                NAT
              </CardTitle>
              <div className="flex items-center gap-2">
                <Checkbox />
                <label className="text-gray-600">
                  Use Network Address Translation (NAT)
                </label>
              </div>
            </div>

            <div className="border rounded-md p-4 mt-5">
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Destination
              </CardTitle>

              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center mr-6 mb-2 md:mb-0 gap-2">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">
                    Destination address (IP address or network):
                  </label>
                </div>
                <Input className="mt-3" />

                <div className="flex items-center mb-2 md:mb-0 mt-5 gap-5">
                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600">Firewall</label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input type="radio" className="h-4 w-4" />
                  <label className="text-gray-600 mr-4">
                    Standard networks:
                  </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center mb-4"></div>

              <div className="flex items-center mb-6 gap-2">
                <Input type="radio" className="h-4 w-4" />
                <label className="text-gray-600 mr-4">Location:</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anonymous">Anonymous Proxy</SelectItem>
                    <SelectItem value="satelite">Satelite Provider</SelectItem>
                    <SelectItem value="anycast">
                      Worldwide Anycast Instance
                    </SelectItem>
                    {CountriesData.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border rounded-md p-4 mt-5">
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Protocol
              </CardTitle>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {protocolSelect.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 mt-9">
                <Input type="radio" className="w-4 h-4" />
                <label className="text-greenfire font-medium">Accept</label>

                <Input type="radio" className="w-4 h-4" />
                <label className="text-redfire font-medium">Drop</label>

                <Input type="radio" className="w-4 h-4" />
                <label className="text-gray-800 font-medium">Reject</label>
              </div>
            </div>

            <div className="border rounded-md p-4 mt-5">
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Additional settings
              </CardTitle>

              <div className="mb-4">
                <label className="block text-gray-600">Remark:</label>
                <Input />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600">Rule position:</label>
                <Input />
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">Log rule</label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">
                    Enable SYN Flood Protection (TCP only)
                  </label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">Use time constraints</label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600 gap-2">
                    Limit concurrent connections per IP address
                  </label>
                </div>
                <div className="flex items-center mb-6 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">
                    Rate-limit new connections
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Add
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
