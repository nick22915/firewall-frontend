"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wifi } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHeader,
  TableRow,
  TableFooter,
  TableHead,
} from "@/components/ui/table";
import connectionsData from "@/data/connectionsTable";
import { useRouter } from "next/navigation";

export default function Connections() {
  const PageIcon = Wifi;

  const router = useRouter();

  const handleSourceClick = (
    source: string,
    country: string,
    redirect: string
  ) => {
    // Redirigir a otra página con el parámetro `source`
    router.push(
      `/detail/ipInformationDetail?source=${source}&country=${country}&redirect=${redirect}`
    );
  };

  const getStatusClass = (status: string) => {
    if (status.includes("INTERNET")) {
      return "bg-redfire";
    }
    if (status.includes("LAN")) {
      return "bg-greenfire";
    }
    if (status.includes("DMZ")) {
      return "bg-[#ffc107]";
    }
    if (status.includes("Wireless")) {
      return "bg-[#17a2b8]";
    }
    if (status.includes("IPFire")) {
      return "bg-[#6f42c1]";
    }
    if (status.includes("VPN")) {
      return "bg-[#007bff]";
    }
    if (status.includes("WireGuard")) {
      return "bg-[#fd7e14]";
    }
    if (status.includes("OpenVPN")) {
      return "bg-[#6c757d]";
    }
    if (status.includes("Multicast")) {
      return "bg-[#e83e8c]";
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Connections
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Connections
            </CardTitle>

            <div className="border rounded-md p-4 mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Legend:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-4">
                <div className="status-connection-button bg-greenfire">
                  <span className=""></span>LAN
                </div>
                <div className="status-connection-button bg-redfire">
                  <span className="status-connection-button"></span>INTERNET
                </div>
                <div className="status-connection-button bg-[#ffc107]">
                  <span className="status-connection-button"></span>DMZ
                </div>
                <div className="status-connection-button bg-[#17a2b8]">
                  <span className="status-connection-button"></span>Wireless
                </div>
                <div className="status-connection-button bg-[#6f42c1]">
                  <span className="status-connection-button"></span>IPFire
                </div>
                <div className="status-connection-button bg-[#007bff]">
                  <span className="status-connection-button"></span>VPN
                </div>
                <div className="status-connection-button bg-[#fd7e14]">
                  <span className="status-connection-button"></span>WireGuard
                </div>
                <div className="status-connection-button bg-[#6c757d]">
                  <span className="status-connection-button"></span>OpenVPN
                </div>
                <div className="status-connection-button bg-[#e83e8c]">
                  <span className="status-connection-button"></span>Multicast
                </div>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[200px] text-white">
                    Protocol
                  </TableHead>
                  <TableHead className="text-white text-right">
                    Source IP:Port
                  </TableHead>
                  <TableHead className="text-white text-right">
                    Dest. IP: Port
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Data Transfer
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Connection Status
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Expires (H:M:S)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {connectionsData.map((connection) => (
                  <TableRow key={connection.id}>
                    <TableCell className="w-[200px]">
                      {connection.Protocol}
                    </TableCell>
                    <TableCell
                      className={`w-[200px] text-right cursor-pointer ${getStatusClass(
                        connection.connection_type
                      )}`}
                      onClick={() =>
                        handleSourceClick(
                          connection.Source_IP_Port,
                          "?",
                          "/status/connections"
                        )
                      }
                    >
                      {connection.Source_IP_Port}
                    </TableCell>
                    <TableCell
                      className="w-[200px] text-right text-redfire hover:text-redfire/60 cursor-pointer"
                      onClick={() =>
                        handleSourceClick(
                          connection.Dest_IP_Port,
                          "?",
                          "/status/connections"
                        )
                      }
                    >
                      {connection.Dest_IP_Port}
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      {connection.Data_Transfer_Up}{" "}
                      {connection.Data_Transfer_Down}
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      {connection.Connection_Status}
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      {connection.Expires_H_M_S}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
