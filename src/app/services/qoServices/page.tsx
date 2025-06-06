import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BandWidthSettingsSelect from "@/data/bandWidthSettings";

export default function QualityOfService() {
  const PageIcon = Settings2;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Quality of Service
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Quality of Service
            </CardTitle>
            <form>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Quality of Service:</label>
                <div className="status-button-stopped">STOPPED</div>
              </div>

              <div className="flex justify-end gap-2 mb-6">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Start</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Stop</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Restart</a>
                </Button>
              </div>

              <CardTitle className="text-2xl font-medium text-primary pb-5">
                Bandwidth Settings
              </CardTitle>

              <p className="text-gray-600 mb-4">
                Enter your Down- and Uplink-Speed and then press Save
              </p>

              <div className="flex items-center mb-4">
                <label className="w-1/2 text-gray-600">
                  Downlink speed (kbit/sec):
                </label>
                <Input />
              </div>

              <div className="flex items-center mb-4">
                <label className="w-1/2 text-gray-600">
                  Uplink speed (kbit/sec):
                </label>
                <Input />
              </div>

              <div className="flex items-center mb-6">
                <label className="w-1/2 text-gray-600">
                  Link-Layer Encapsulation:
                </label>
                <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {BandWidthSettingsSelect.map((option) => (
                                  <SelectItem key={option.id} value={option.value}>
                                    {option.text}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                >
                  <a href="/">Preset</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Save</a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                >
                  <a href="/">Reset</a>
                </Button>
              </div>

              <p className="text-re text-sm mt-6">
                You have two options to set up QoS. The First, you press the
                save button and generate the classes and rules on your own. The
                second, you press the preset button and classes and rules will
                be set up by a template.
              </p>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
