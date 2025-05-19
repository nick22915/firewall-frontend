import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <section className="text-left py-12 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-5xl font-bold text-primary pl-3">
          Main Page
        </h1>
        <div className="mb-6">
                    <table className="min-w-full bg-white rounded-md overflow-hidden">
                        <thead>
                            <tr className="text-white bg-accent">
                                <th>Network</th>
                                <th>IP address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row-odd">
                                <td data-label="Network">
                                    <span className="inline-block bg-accent text-white px-2 py-1 text-xs font-semibold rounded">INTERNET</span>
                                </td>
                                <td data-label="IP address">172.16.90.137</td>
                                <td data-label="Status">Connected ( 7m 13s )</td>
                            </tr>
                            <tr className="table-row-even">
                                <td data-label="Hostname">Hostname:</td>
                                <td data-label="ipfire.localdomain">ipfire.localdomain</td>
                            </tr>
                             <tr className="table-row-odd">
                                <td data-label="Gateway">Gateway:</td>
                                <td data-label="172.16.90.250">172.16.90.250</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-6">
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
                                     <span className="inline-block bg-greenfire text-white px-2 py-1 text-xs font-semibold rounded">LAN</span>
                                </td>
                                <td data-label="IP address">192.168.1.1/24</td>
                                <td data-label="Status">Proxy off</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <section className="card p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                <h3 className ="font-semibold mb-2">Warning</h3>
                <p>Please enable the fireinfo service</p>
            </section>
      </section>

    </div>
  );
}
