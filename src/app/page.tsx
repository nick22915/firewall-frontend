import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Menu } from "lucide-react"

export default async function HomePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <Menu className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Main Page
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <div className="mb-6 p-5 mt-5">
          <Table className="min-w-full bg-white rounded-md overflow-hidden">
            <TableHeader>
              <TableRow className="bg-accent ">
                <TableHead className="w-[100px] text-white ">Network</TableHead>
                <TableHead className="text-white text-center">
                  IP Address
                </TableHead>
                <TableHead className="text-white text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <span className="inline-block bg-redfire text-white px-2 py-1 text-xs font-semibold rounded">
                    INTERNET
                  </span>
                </TableCell>
                <TableCell className="text-center">172.16.90.137</TableCell>
                <TableCell className="text-center">
                  Conected ( 7m 13s )
                </TableCell>
              </TableRow>
              <TableRow className="table-row-even">
                <TableCell className="font-medium text-center">
                  Hostname
                </TableCell>
                <TableCell className="font-medium text-center">
                  ipfire.localdomain
                </TableCell>
              </TableRow>
              <TableRow className="table-row-odd">
                <TableCell className="font-medium text-center">
                  Gateway:
                </TableCell>
                <TableCell className="font-medium text-center">
                  172.16.90.250
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mb-6 p-5">
          <Table className="min-w-full bg-white rounded-md overflow-hidden">
            <TableHeader>
              <TableRow className="bg-accent ">
                <TableHead className="w-[100px] text-white ">Network</TableHead>
                <TableHead className="text-white text-center">
                  IP Address
                </TableHead>
                <TableHead className="text-white text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <span className="inline-block bg-greenfire text-white px-2 py-1 text-xs font-semibold rounded">
                    LAN
                  </span>
                </TableCell>
                <TableCell className="text-center">192.168.1.1/24</TableCell>
                <TableCell className="text-center">Proxy off</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mb-2 p-5">
          <section className="card p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <h3 className="font-semibold mb-2">Warning</h3>
            <p>Please enable the fireinfo service</p>
          </section>
        </div>

      </Card>
    </div>
  );
}
