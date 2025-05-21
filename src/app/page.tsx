import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <section className="text-left py-12 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-5xl font-bold text-primary pl-3">
          Main Page
        </h1>
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
          <table className="min-w-full bg-white rounded-md overflow-hidden">
            <thead>
              <tr className="bg-accent text-white">
                <th>Network</th>
                <th>IP address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row-odd">
                <td data-label="Network">
                  <span className="inline-block bg-greenfire text-white px-2 py-1 text-xs font-semibold rounded">
                    LAN
                  </span>
                </td>
                <td data-label="IP address">192.168.1.1/24</td>
                <td data-label="Status">Proxy off</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6 p-5">
          <section className="card p-5 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <h3 className="font-semibold mb-2">Warning</h3>
            <p>Please enable the fireinfo service</p>
          </section>
        </div>
      </section>
    </div>
  );
}
