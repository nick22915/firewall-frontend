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
        </CardContent>
      </Card>
    </div>
  );
}
