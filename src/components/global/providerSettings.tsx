import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Terminal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const providerSelect = [
  {
    id: "1",
    text: "Abuse.ch SSLBL Blacklist Rules",
    value: "Abuse.ch SSLBL Blacklist Rules",
  },
  {
    id: "2",
    text: "Emergingthreats.net Community Rules",
    value: "Emergingthreats.net Community Rules",
  },
  {
    id: "3",
    text: "Emergingthreats.net Pro Rules",
    value: "Emergingthreats.net Pro Rules",
  },
  {
    id: "4",
    text: "Etnetera Aggressive Blacklist Rules",
    value: "Etnetera Aggressive Blacklist Rules",
  },
  {
    id: "5",
    text: "OISF Traffic ID Rules",
    value: "OISF Traffic ID Rules",
  },
  {
    id: "6",
    text: "Snort/VRT GPLv2 Community Rules",
    value: "Snort/VRT GPLv2 Community Rules",
  },
  {
    id: "7",
    text: "Talos VRT rules for registered users",
    value: "Talos VRT rules for registered users",
  },
  {
    id: "8",
    text: "Talos VRT rules with subscription",
    value: "Talos VRT rules with subscription",
  },
  {
    id: "9",
    text: "ThreatFox Indicators Of Compromise Rules",
    value: "ThreatFox Indicators Of Compromise Rules",
  },
  {
    id: "10",
    text: "Travis Green - Hunting rules",
    value: "Travis Green - Hunting rules",
  },
];

export default function ProviderSettings() {
  const PageIcon = Terminal;

  return (
    <div className="border rounded-md p-4 mt-5">
      <Button variant="outline" className="mb-5">
        <ArrowLeft className="h-4 w-4" />
        <a href="/firewall/intrusionPrevention"> Back</a>
      </Button>
      <CardTitle className="text-2xl font-medium text-primary pb-5">
        Provider Settings
      </CardTitle>
      <form>
        <div className="flex items-center mb-4 justify-between">
          <label className="w-1/3 text-gray-600">Provider</label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {providerSelect.map((option) => (
                <SelectItem key={option.id} value={option.value}>
                  {option.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <a href="#" className="text-redfire hover:underline ml-4">
            Visit provider website
          </a>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Checkbox />
            <label className="text-gray-600">Enable automatic updates</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <label className="text-gray-600">Monitor traffic only</label>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            size="lg"
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="/">Add</a>
          </Button>
        </div>
      </form>
    </div>
  );
}
