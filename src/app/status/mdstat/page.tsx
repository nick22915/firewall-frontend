import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { History } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function Mdstat() {
  const PageIcon = History;
  const mdStatInformation = {
    Personalities: {
      "unused devices": "none",
    },
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Status Information
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              MD Raid State
            </CardTitle>
            <Textarea
              className="w-full h-[12rem] border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"
              value={JSON.stringify(mdStatInformation, null, 2)}
              readOnly
            ></Textarea>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
