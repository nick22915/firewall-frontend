import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings2, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LogSettings() {
  const PageIcon = Settings2;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Log Settings
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Log viewing options
            </CardTitle>
            <div className="flex items-center justify-between mb-4 ">
              <div className="flex items-center gap-1">
                <Checkbox />
                <label className="text-gray-600">
                  Sort in reverse chronological order
                </label>
              </div>
              <div className="flex items-center gap-1">
                <label className="text-gray-600 ">Lines per page:</label>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="150">150</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                    <SelectItem value="200">200</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Log Summaries
            </CardTitle>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label className="text-gray-600">Keep summaries for</label>
                <Input />
                <span className="ml-2 text-gray-600">Days</span>
              </div>
              <div className="flex items-center">
                <label className="text-gray-600 mr-2">Detail level:</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Remote Logging
            </CardTitle>
            <div className="flex items-center mb-6 gap-1 justify-between">
              <label className="text-gray-600 ">Enabled:</label>
              <Checkbox />
              <label className="text-gray-600 ">Syslog server:</label>
              <Input className="w-50" />
              <label className="text-gray-600 ">protocol:</label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="udp">UDP</SelectItem>
                  <SelectItem value="tcp">TCP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-1 justify-end">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="/">Save</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
