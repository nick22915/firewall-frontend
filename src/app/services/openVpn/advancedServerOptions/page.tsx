import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function AdvancedServerOptions() {
  const PageIcon = ShieldCheck;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/services/openVpn">
        <Button variant="outline" className="mb-5">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Open VPN
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Global Settings
            </CardTitle>
            <form>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Blacklist Editor
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="flex items-center mb-4">
                  <label className="w-1/4 text-gray-600">Domain</label>
                  <Input />
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/4 text-gray-600">DNS</label>
                  <Input />
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/4 text-gray-600">WINS</label>
                  <Input />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Route push options
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Routes (one per line){" "}
                </label>
                <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Miscellaneous options
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">Client-To-Client</label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">Redirect-Gateway def1</label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">
                    LZO-Compression{" "}
                    <span className="text-redfire ml-2">
                      Default: off (ATTENTION exploitable via Voracle)
                    </span>
                  </label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">
                    Additional configuration{" "}
                    <span className="text-gray-500 ml-2">Default: off</span>
                  </label>
                </div>
                <div className="flex items-center mb-2 gap-2">
                  <Checkbox />
                  <label className="text-gray-600">
                    mssfix{" "}
                    <span className="text-gray-500 ml-2">Default: off</span>
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/4 text-gray-600">fragment</label>
                  <Input />
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/4 text-gray-600">Max-Clients</label>
                  <Input />
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/4 text-gray-600">Keepalive</label>
                  <Input />
                  <span className="mr-2">/</span>
                  <Input />
                  <span className="ml-2 text-gray-600">
                    (ping/ping-restart)
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                  Logfile options
                </h3>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="flex items-center">
                  <label className="w-1/4 text-gray-600">VERB</label>
                  <Input />
                </div>
              </div>

              <div className="flex justify-end gap-4">
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
