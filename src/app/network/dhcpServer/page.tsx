"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Delete, Edit, Wifi } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function DHCPConfiguration() {
  const PageIcon = Wifi;
  const [options, setOptions] = useState<any[]>([]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                DHCP Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              DHCP
            </CardTitle>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <label className="w-1/2 text-greenfire font-bold">
                    Green Interface
                  </label>
                  <div className="flex items-center flex-1 mr-7">
                    <label className="text-gray-600 mr-2">Enabled:</label>
                    <Checkbox />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center mb-2">
                      <label className="w-1/2 text-gray-600">IP address</label>
                      <label className="w-1/2 text-gray-900 font-bold text-right">
                        192.168.1.1
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label className="w-1/2 text-gray-600">Netmask:</label>
                      <label className="w-1/2 text-gray-900 font-bold text-right">
                        255.255.255.0
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-90 md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">
                      Start address:{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      End address: <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">
                      Default lease time (mins):{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Max lease time (mins):{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">
                      Domain name suffix:
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Allow bootp clients:
                    </label>
                    <Checkbox />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">
                      Primary DNS: <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Secondary DNS:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">
                      Primary NTP server:
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Secondary NTP server:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">
                      Primary WINS server address:
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Secondary WINS server address:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2 mr-7">
                    <label className="text-gray-600 mr-2">Next-server:</label>
                    <Input />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Filename:
                    </label>
                    <Input />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              DNS Update
            </CardTitle>
            <form>
              <div className="flex items-center mb-6">
                <label className="text-gray-600 mr-2">
                  Enable DNS Update (RFC2136):
                </label>
                <Checkbox />
              </div>

              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  localdomain
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <label className="text-gray-600 ">Key name</label>
                      <Input />
                    </div>
                    <div className="flex items-center">
                      <label className="text-gray-600 mr-2">Secret</label>
                      <Input />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <label className="text-gray-600 mr-2">Algorithm:</label>
                      <Select>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="HMAC-MD5">HMAC-MD5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Additional DHCP options
            </CardTitle>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Add a DHCP option
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600 flex items-center">
                    Option name: <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600 flex items-center">
                    Option value: <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>

                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Enabled:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-sm font-medium text-gray-600">
                    Option scope:
                  </label>
                  <div className="flex items-center flex-1 gap-1">
                    <label className="text-gray-600">GREEN</label>
                    <Checkbox />
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                Global scope or limit scope to checked interfaces.
              </p>

              <div className="flex justify-end gap-4 mb-3">
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
                  List Options
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[100px] text-white">
                      Option Name
                    </TableHead>
                    <TableHead className="text-white text-center">
                      Option Value
                    </TableHead>
                    <TableHead className="text-white">MAC Address</TableHead>
                    <TableHead className="text-right text-white">
                      Option Scope
                    </TableHead>
                    <TableHead className="text-right text-white">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {options.map((option, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-center">
                        firewall.domain
                      </TableCell>
                      <TableCell className="text-center">
                        {option.name}
                      </TableCell>
                      <TableCell>{option.macAddress}</TableCell>
                      <TableCell className="text-right">
                        {option.value}
                      </TableCell>
                      <TableCell className="text-right flex gap-2 justify-end">
                        <Edit /> <Delete />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Current fixed leases
            </CardTitle>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Add a new fixed lease
            </h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="w-1/2  text-gray-600 flex items-center">
                    MAC Address: <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600 flex items-center">
                    IP address: <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2  text-gray-600">Enabled:</label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="w-1/2  text-gray-600">Remark:</label>
                  <Input />
                </div>
              </div>

              <h4 className="text-md font-medium text-gray-700 mb-2">
                Enter optional bootp pxe data for this fixed lease
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block  text-gray-600">next-server:</label>
                  <Input />
                </div>
                <div>
                  <label className="block text-gray-600">filename:</label>
                  <Input />
                </div>
                <div>
                  <label className="block text-gray-600">root path:</label>
                  <Input />
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
            <Table className="mt-5">
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    MAC Address
                  </TableHead>
                  <TableHead className="text-white text-center">
                    IP Address
                  </TableHead>
                  <TableHead className="text-white">MAC Address</TableHead>
                  <TableHead className="text-right text-white">
                    Remark
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Next-Server
                  </TableHead>
                  <TableHead className="text-right text-white">
                    filename
                  </TableHead>
                  <TableHead className="text-right text-white">
                    root path
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Current dynamic leases
            </CardTitle>
            <Table className="mt-5">
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">
                    IP Address
                  </TableHead>
                  <TableHead className="text-white text-center">
                    MAC Address
                  </TableHead>
                  <TableHead className="text-white">MAC Address</TableHead>
                  <TableHead className="text-right text-white">
                    Hostname
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Lease expires (local time d/m/y)
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Add to fix leases
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
