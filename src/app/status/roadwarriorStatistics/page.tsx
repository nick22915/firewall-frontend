import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function RoadWarriorStatistics() {
  const PageIcon = ShieldCheck;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                OpenVPN: Roadwarrior Statistics
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              OpenVPN: Roadwarrior Statistics
            </CardTitle>
            <label className="text-gray-400">
              Show Roadwarrior Statistics Statistics here if exist{" "}
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
