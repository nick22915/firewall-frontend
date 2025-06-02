"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FirewallGroup() {
  const PageIcon = Users;
  const [visibleSection, setVisibleSection] = useState("buttonsSection");

  const changeSection = (sectionName: string, e: React.FormEvent) => {
    setVisibleSection(sectionName);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Firewall Groups
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {visibleSection === "buttonsSection" && (
            <div className="border rounded-md p-4">
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Firewall Groups
              </CardTitle>
              <form>
                <div className="border rounded-md p-4 mb-4" id="buttonsSection">
                  <p className="text-gray-600">
                    Over here, you can group single hosts, networks and services
                    together, which will creating new rules more easy and
                    faster.
                  </p>
                  <div className="flex flex-col md:flex-row justify-around items-center h-28">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleSection("addNetwork")}
                    >
                      Networks
                    </Button>
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleSection("addHost")}
                    >
                      Host
                    </Button>
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleSection("addNetworkHostGroup")}
                    >
                      Network/ Host Groups
                    </Button>
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleSection("addLocationGroup")}
                    >
                      Location Groups
                    </Button>
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleSection("addService")}
                    >
                      Services
                    </Button>
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleSection("addServiceGroup")}
                    >
                      Service Groups
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {visibleSection === "addNetwork" && (
            <div className="border rounded-md p-4 mt-5" id="addNetwork">
              <Button
                variant="outline"
                className="mb-5"
                onClick={() => setVisibleSection("buttonsSection")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Add new Network
              </CardTitle>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600 flex items-center">
                      Name:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600">
                      Network Address:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2  font-medium text-gray-600">
                      Netmask:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2  font-medium text-gray-600">
                      Remark:
                    </label>
                    <Input />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-redfire text-sm">
                    <span className="mr-1">*</span> Required field
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {visibleSection === "addHost" && (
            <div className="border rounded-md p-4 mt-5" id="addHost">
              <Button
                variant="outline"
                className="mb-5"
                onClick={() => setVisibleSection("buttonsSection")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Add new Host
              </CardTitle>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600 flex items-center">
                      Name:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600">IP/MAC:</label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2  font-medium text-gray-600">
                      Remark:
                    </label>
                    <Input />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-redfire text-sm">
                    <span className="mr-1">*</span> Required field
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {visibleSection === "addNetworkHostGroup" && (
            <div
              className="border rounded-md p-4 mt-5"
              id="addNetworkHostGroup"
            >
              <Button
                variant="outline"
                className="mb-5"
                onClick={() => setVisibleSection("buttonsSection")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Add new network/host group
              </CardTitle>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600 flex items-center">
                      Group name:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2  font-medium text-gray-600">
                      Remark:
                    </label>
                    <Input />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-redfire text-sm">
                    <span className="mr-1">*</span> Required field
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {visibleSection === "addLocationGroup" && (
            <div className="border rounded-md p-4 mt-5" id="addLocationGroup">
              <Button
                variant="outline"
                className="mb-5"
                onClick={() => setVisibleSection("buttonsSection")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Add new Location group
              </CardTitle>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600 flex items-center">
                      Group Name:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2  font-medium text-gray-600">
                      Remark:
                    </label>
                    <Input />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-redfire text-sm">
                    <span className="mr-1">*</span> Required field
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {visibleSection === "addService" && (
            <div className="border rounded-md p-4 mt-5" id="addService">
              <Button
                variant="outline"
                className="mb-5"
                onClick={() => setVisibleSection("buttonsSection")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Add new Service
              </CardTitle>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600 flex items-center">
                      Service name:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600">Protocol:</label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tcp">TCP</SelectItem>
                        <SelectItem value="udp">UDP</SelectItem>
                        <SelectItem value="icmp">ICMP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600">Port(s):</label>
                    <Input />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-redfire text-sm">
                    <span className="mr-1">*</span> Required field
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {visibleSection === "addServiceGroup" && (
            <div className="border rounded-md p-4 mt-5" id="addServiceGroup">
              <Button
                variant="outline"
                className="mb-5"
                onClick={() => setVisibleSection("buttonsSection")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Add new Service Group
              </CardTitle>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600 flex items-center">
                      Group Name:
                    </label>
                    <Input />
                  </div>

                  <div className="flex items-center">
                    <label className="w-1/2 text-gray-600">Remark:</label>
                    <Input />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-redfire text-sm">
                    <span className="mr-1">*</span> Required field
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
