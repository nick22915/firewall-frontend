import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi } from "lucide-react";
import DynamicAreaChart from "@/components/ui/dynamicAreaChart";
import {
  gatewayGraphData,
  openConnection,
  firewallHitsGraphs,
} from "@/data/networkOthersGraphs";
import { Textarea } from "@/components/ui/textarea";

const lineColors: { [key: string]: string } = {
  // Explicitly define index signature
  latency: "#2abd44",
  openConnections: "#d13838",
};

const lineColorsFirewallHits: { [key: string]: string } = {
  // Explicitly define index signature
  "firewallhits (OUTPUT)": "#8884d8", // Purple
  "firewallhits (FORWARD)": "#82ca9d", // Green
  "firewallhits (INPUT)": "#ffc658", // Yellow
  NewNotSYN: "#ff7300", // Orange
  "Port Scans": "#0088FE", // Blue
  "Spoofed/Martians": "#00C49F", // Teal
  "From Hostile Networks": "#FFBB28", // Gold
  "To Hostile Networks": "#FF8042", // Coral
};
export default function NetworkOther() {
  const PageIcon = Wifi;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Network (others)
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Gateway Graph
            </CardTitle>
            <div>
              <DynamicAreaChart
                data={gatewayGraphData}
                lineColorsConfig={lineColors}
                domain={[0, 3]}
                yAxisLabel="ms"
              />
            </div>
          </div>

          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Connection Tracking
            </CardTitle>
            <div>
              <DynamicAreaChart
                data={openConnection}
                lineColorsConfig={lineColors}
                domain={[0, 200]}
                yAxisLabel="Open Connections"
              />
            </div>
          </div>

          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Firewallhits Graph
            </CardTitle>
            <div>
              <DynamicAreaChart
                data={firewallHitsGraphs}
                lineColorsConfig={lineColorsFirewallHits}
                domain={[0, 4000]}
                yAxisLabel="Bytes per Second"
              />
            </div>
          </div>

          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Routing Table Entries
            </CardTitle>
            <div>
              <div className="w-full h-32 table-entry-textarea p-2 text-sm text-gray-400">
                <p>
                  default via 172.16.90.250 dev rede proto dhcp src
                  172.16.90.126
                </p>
                <p>
                  metric 1002 172.16.90.0/24 dev rede proto dhcp scope link src
                </p>
                <p>
                  172.16.90.126 metric 1002 192.168.1.0/24 dev greene proto
                  kernel
                </p>
                <p>scope link src 192.168.1.1</p>
              </div>
            </div>
          </div>

          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              ARP Table Entries
            </CardTitle>
            <div>
              <div>
                <div className="w-full h-32 table-entry-textarea p-2 text-sm text-gray-400">
                  <p>172.16.90.129 dev rede lladdr 10:27:f5:3d:7:24 STALE</p>
                  <p>
                    192.168.1.100 dev green0 11addr 08:00:27:00:00:08 REACHABLE
                  </p>
                  <p>172.16.90.121 dev rede lladdr ec:f4:bb:5e:4f:ea STALE</p>
                  <p>
                    172.16.90.250 dev rede lladdr 08:56:02:02:06:46 REACHABLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
