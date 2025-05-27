import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, Edit, Delete } from "lucide-react";
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

export default function IpSec() {
  const PageIcon = Lock;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                IpSec
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Global Settings
            </CardTitle>
            <form>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Enabled:</label>
                <Checkbox />
              </div>

              <div className="flex items-center mb-4">
                <label className="w-1/2 text-gray-600">
                  Host-to-Net Endpoint:
                </label>
                <Input />
              </div>

              <div className="flex items-center mb-6">
                <label className="w-1/2 text-gray-600">
                  Host-to-Net Virtual Private Network (RoadWarrior):
                </label>
                <Input />
              </div>

              <div className="flex justify-end">
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
              Connection Status and -Control
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Name</TableHead>
                  <TableHead className="text-white text-center">Type</TableHead>
                  <TableHead className="text-right text-white">
                    Common Name
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Remark
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Status
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
            <div className="flex items-center justify-end mt-6">
              <Button
                size="lg"
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Add
              </Button>
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Certificate Authorities and -Keys
            </CardTitle>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">Name</TableHead>
                  <TableHead className="text-white text-center">
                    Subject
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    Root Certificate
                  </TableCell>
                  <TableCell className="text-center">Not Present</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Edit /> <Delete className="cursor-pointer text-refire" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    Host Certificate
                  </TableCell>
                  <TableCell className="text-center">Not Present</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Edit /> <Delete className="cursor-pointer text-refire" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="border-b border-gray-300 mb-6"></div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
                  <div className="flex items-center">
                    <label className="w-1/3 text-sm font-medium text-gray-600 flex items-center">
                      CA name: <span className="text-redfire ml-1">*</span>
                    </label>
                    <Input />
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <Input type="file" />
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Upload CA Certificate
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Resetting the X509 remove the root CA, the host certificate
                  and all certificate based connections..
                </p>

                <div className="flex justify-end gap-3">
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Generate Root/Host Certificates
                  </Button>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Remove X509
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
