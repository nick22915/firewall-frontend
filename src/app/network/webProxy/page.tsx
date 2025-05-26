import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Router } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function WebProxy() {
  const PageIcon = Router;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Advanced Web Proxy Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Advanced Web Proxy
            </CardTitle>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Enabled on{" "}
                      <span className="font-semibold text-greenfire">
                        Green
                      </span>
                      :
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Proxy port: <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Transparent on{" "}
                      <span className="font-semibold text-greenfire">
                        Green
                      </span>
                      :
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Transparent port:{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                </div>

                <div className="md:col-span-2 flex items-center">
                  <label className="w-1/4 text-gray-600">
                    Visible hostname:
                  </label>
                  <Input />
                </div>
                <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="w-1/2 text-gray-600">
                      Error messages language:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="de">de</SelectItem>
                        <SelectItem value="en">en</SelectItem>
                        <SelectItem value="es">es</SelectItem>
                        <SelectItem value="fr">fr</SelectItem>
                        <SelectItem value="nl">nl</SelectItem>
                        <SelectItem value="pl">pl</SelectItem>
                        <SelectItem value="ru">ru</SelectItem>
                        <SelectItem value="tr">tr</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="w-1/2 text-gray-600">
                      Error messages design:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ipfire">Ipfire</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4 text-redfire">
                    URL filter
                  </h3>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">Enabled</label>
                    <Checkbox />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4 text-redfire">
                    Update accelerator
                  </h3>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">Enabled</label>
                    <Checkbox />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Upstream proxy
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center w-full md:w-1/2 gap-1">
                  <label className="text-gray-600">
                    Proxy address forwarding:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center w-full md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600">
                    Upstream proxy (host:port):
                  </label>
                  <Input />
                </div>
                <div className="flex items-center w-full md:w-1/2 gap-1">
                  <label className="text-gray-600">
                    Client IP address forwarding:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center w-full md:w-1/2">
                  <label className=" block text-sm font-medium text-gray-600">
                    Upstream username:
                  </label>
                  <Input />
                </div>
                <div className="flex items-center w-full md:w-1/2 gap-1">
                  <label className="text-gray-600">Username forwarding:</label>
                  <Checkbox />
                </div>
                <div className="flex items-center w-full md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600">
                    Upstream password:
                  </label>
                  <Input type="password" />
                </div>
                <div className="flex items-center w-full md:w-1/2">
                  <label className="text-gray-600">
                    No connection oriented authentication forwarding:
                  </label>
                  <Checkbox />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Log settings
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center w-full md:w-1/2 gap-1">
                  <label className="text-gray-600">Log enabled:</label>
                  <Checkbox />
                </div>
                <div className="flex items-center w-full md:w-1/2 gap-1">
                  <label className="text-gray-600">Log query terms:</label>
                  <Checkbox />
                </div>
                <div className="flex items-center w-full md:w-1/2 gap-1">
                  <label className="text-gray-600">Log useragents:</label>
                  <Checkbox />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Cache Managment
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-redfire mr-2">
                      Activate cachemanager:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Cache administrator e-mail:
                    </label>
                    <Input type="email" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 flex items-center mr-2">
                      Amount of filedescriptors:{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input type="number" className="w-50" />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Cache administrator password:
                    </label>
                    <Input type="password" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 flex items-center mr-2">
                      Memory cache size (MB):{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input className="w-50" />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Harddisk cache size (MB):{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input type="number" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 flex items-center mr-2">
                      Min object size (KB):{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input type="number" className="w-50 ml-9" />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Max object size (KB):{" "}
                      <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input type="number" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-start justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Number of level-1 subdirectories:
                    </label>

                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16">16</SelectItem>
                        <SelectItem value="32">32</SelectItem>
                        <SelectItem value="64">64</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 mb-1">
                      Do not cache these domains (one per line):
                    </label>
                    <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Memory replacement policy:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lru">LRU</SelectItem>
                        <SelectItem value="lfu">LFU</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 mr-2">
                      Cache replacement policy:
                    </label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lru">LRU</SelectItem>
                        <SelectItem value="lfu">LFU</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Enable offline mode:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 mr-2">
                      Enable Cache-Digest Generation:
                    </label>
                    <Checkbox />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Destination Porst
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className=" text-sm font-medium text-gray-600 flex items-center mb-1">
                    Allowed standard ports (one per line):{" "}
                    <span className="text-redifire ml-1">*</span>
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className=" text-sm font-medium text-gray-600 flex items-center mb-1">
                    Allowed SSL ports (one per line):{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Network Based Access Control
                </h3>
              </div>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className=" text-sm font-medium text-gray-600 flex items-center mb-1">
                    Allowed subnets (one per line):{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div className="flex items-start md:justify-end">
                  <label className="text-gray-600 mr-2">
                    Disable internal proxy access to{" "}
                    <span className="font-semibold text-greenfire">Green</span>{" "}
                    from other subnets:
                  </label>
                  <Checkbox />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Unrestricted IP addresses (one per line):
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Unrestricted MAC addresses (one per line):
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Banned IP addresses (one per line):
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Banned MAC addresses (one per line):
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <label className="text-gray-600 mr-2">
                  Classroom extensions Enabled:
                </label>
                <Checkbox />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Web Proxy Auto-Discovery Protocol (WPAD) / Proxy Auto-Config
                  (PAC)
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Excluded IP Subnets (one per line):
                    </label>
                    <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Excluded URLs (one per line):
                    </label>
                    <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Time Restrictions
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <label className="text-gray-600 mr-2">Access</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allow">Allow</SelectItem>
                    <SelectItem value="deny">Deny</SelectItem>
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

                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00">00</SelectItem>
                      <SelectItem value="deny">Deny</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>:</span>
                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00">00</SelectItem>
                      <SelectItem value="deny">Deny</SelectItem>
                    </SelectContent>
                  </Select>
                  <label className="text-gray-600 ml-4">To</label>
                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="deny">Deny</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>:</span>
                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00">00</SelectItem>
                      <SelectItem value="deny">Deny</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Transfer Limits
                </h3>
              </div>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <label className="text-gray-600 flex items-center mr-2">
                    Max download size (KB):{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input type="number" />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 flex items-center mr-2">
                    Max upload size (KB):{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input type="number" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Transfer Limits
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">
                      Overall limit on{" "}
                      <span className="font-semibold text-greenfire">
                        Green
                      </span>
                      :
                    </label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                MIME type filter
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center">
                <label className="text-gray-600 mr-2">Enabled</label>
                <Checkbox />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Anomaly detections based on Autonomous Systems information
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <label className="text-gray-600 mr-2">
                    Deny access to destinations hosted on fast flux setups:
                  </label>
                  <Input />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">Threshold:</label>
                  <Input type="number" />
                </div>
                <div className="flex items-start md:col-span-2">
                  <label className="text-gray-600 mr-2">
                    Deny access to destinations hosted on selectively announced
                    networks:
                  </label>
                  <Checkbox />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Authentication method
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Input type="radio" />
                  <label className="ml-2 text-gray-600">None</label>
                </div>
                <div className="flex items-center">
                  <Input type="radio" />
                  <label className="ml-2 text-gray-600">Local</label>
                </div>
                <div className="flex items-center">
                  <Input type="radio" />
                  <label className="ml-2 text-gray-600">Oidentd</label>
                </div>
                <div className="flex items-center">
                  <Input type="radio" />
                  <label className="ml-2 text-gray-600">LDAP</label>
                </div>
                <div className="flex items-center">
                  <Input type="radio" />
                  <label className="ml-2 text-gray-600">RADIUS</label>
                </div>
              </div>
              <p className="text-redfire text-sm mb-4">
                <span className="mr-1">*</span> Required field
              </p>

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save
                </Button>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save and Reload
                </Button>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save and Restart
                </Button>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Clear Cache
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
