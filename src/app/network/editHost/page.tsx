import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit3, Edit, Delete } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditHost() {
  const PageIcon = Edit3;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Hostname
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add Host
            </CardTitle>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 flex items-center">
                    Host IP address:{" "}
                    <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 items-center">
                    Hostname: <span className="text-redfire ml-1">*</span>
                  </label>
                  <Input />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Domain name:
                  </label>
                  <Input />
                </div>
                <div className="flex items-center md:justify-start justify-between mt-6 md:mt-0">
                  <div className="flex items-center mr-4 gap-1">
                    <Checkbox />
                    <label className="text-sm text-gray-600">
                      Generate PTR
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <label className="text-sm text-gray-600">Enabled:</label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-redfire text-sm">
                  <span className="mr-1">*</span> Required field
                </div>
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
              Current Host
            </CardTitle>

            <div className="overflow-x-auto">
              <table className="min-w-full table">
                <thead>
                  <tr className="">
                    <th className="px-6 py-3 bg-accent text-white text-left text-xs font-medium uppercase tracking-wider">
                      Host IP address
                    </th>
                    <th className="px-6 py-3 bg-accent text-white text-left text-xs font-medium uppercase tracking-wider">
                      Hostname
                    </th>
                    <th className="px-6 py-3 bg-accent text-white text-left text-xs font-medium uppercase tracking-wider">
                      Domain name
                    </th>
                    <th className="px-6 py-3 bg-accent text-white text-left text-xs font-medium uppercase tracking-wider">
                      PTR
                    </th>
                    <th className="px-6 py-3 bg-accent text-white text-left text-xs font-medium uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center justify-between gap-1">
                        <Edit className="h-5 w-5 text-primary" />
                        <Delete className="h-5 w-5 text-primary" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
