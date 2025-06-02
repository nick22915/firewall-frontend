"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Delete, Edit, ShieldAlert } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ProviderSettings from "@/components/global/providerSettings";

export default function IntrusionPrevention() {
  const PageIcon = ShieldAlert;
  const [hostList, setHostlist] = useState<any[]>([]);
  const [visibleSection, setVisibleSection] = useState("mainSection");
  const [formData, setFormData] = useState({
    ipProvider: "",
    remark: "",
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
    setHostlist((prev) => [...prev, formData]);
    setFormData({
      ipProvider: "",
      remark: "",
    });
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Intrusion Prevention System
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {visibleSection === "mainSection" && (
            <div>
              <div className="border rounded-md p-4">
                <div className="openvpn-status-bar mb-6">
                  <span className="openvpn-status-label">
                    Intrusion Prevention System
                  </span>
                  <span className="openvpn-status-stopped">STOPPED</span>
                </div>

                <CardTitle className="text-2xl font-medium text-primary pb-5">
                  Rulesets
                </CardTitle>

                <Table>
                  <TableHeader>
                    <TableRow className="bg-accent text-white">
                      <TableHead className="w-[100px] text-white">
                        Povider
                      </TableHead>
                      <TableHead className="text-white text-center">
                        Last Update
                      </TableHead>
                      <TableHead className="text-right text-white">
                        Automatic Updates
                      </TableHead>
                      <TableHead className="text-right text-white">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody></TableBody>
                </Table>
                <div className="flex justify-end gap-3 mt-5">
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => setVisibleSection("addProvider")}
                  >
                    Add Provider
                  </Button>
                </div>
              </div>

              <div className="border rounded-md p-4 mt-5">
                <CardTitle className="text-2xl font-medium text-primary pb-5">
                  Whitelisted Hosts
                </CardTitle>
                <form onSubmit={handleAddDevice}>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-accent text-white">
                        <TableHead className="text-center text-white">
                          IP Provider
                        </TableHead>
                        <TableHead className="text-white text-center">
                          Remark
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hostList.map((host, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-center">
                            {host.ipProvider}
                          </TableCell>
                          <TableCell className="text-center">
                            {host.remark}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex items-center justify-end mt-10 mb-3">
                    <label className="text-gray-600 mr-2">IP Address</label>
                    <Input
                      name="ipProvider"
                      value={formData.ipProvider}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-end gap-4 mb-3">
                    <label className="text-gray-600 mr-2">Remark</label>
                    <Input
                      name="remark"
                      value={formData.remark}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-3 mt-5">
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
            </div>
          )}

          {visibleSection === "addProvider" && <ProviderSettings />}
          
        </CardContent>
      </Card>
    </div>
  );
}
