import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

export default function QualityOfService() {
  const PageIcon = Globe;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Zone Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              NIC Assignment
            </CardTitle>
            <Table className="min-w-full table">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6 py-3 bg-accent text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs text-redfire font-medium uppercase tracking-wider bg-accent">
                    <span className="inline-block bg-redfire text-white px-2 py-1 text-xs font-semibold rounded">
                      Red
                    </span>
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs text-greenfire font-medium uppercase tracking-wider bg-accent">
                    <span className="inline-block bg-greenfire text-white px-2 py-1 text-xs font-semibold rounded">
                      Green (IN)
                    </span>
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="w-[100px] bg-accent"></TableHead>
                  <TableHead className="bg-accent pl-6">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableHead>
                  <TableHead className=" bg-accent pl-6">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="bg-white divide-y divide-gray-200">
                <TableRow className="bg-gray-zone">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    eth0
                    <br />
                    <span className="text-gray-500 text-xs">
                      08:00:27:31:a9:0c
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="native">Native</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Native</SelectItem>
                        <SelectItem value="native">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-gray-zone">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    eth1
                    <br />
                    <span className="text-gray-500 text-xs">
                      08:00:27:6e:3e:72
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Native</SelectItem>
                        <SelectItem value="native">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="native">Native</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    STP enable
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    <Checkbox />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Bridge Priority
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Input />
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Input />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="flex justify-end mt-4">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="">Save</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
