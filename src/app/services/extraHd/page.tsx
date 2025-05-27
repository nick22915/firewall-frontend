import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function ExtraHd() {
  const PageIcon = Briefcase;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Extra HD
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Detected Drives
            </CardTitle>
            <div className="mb-4">
              <div className="grid grid-cols-3 gap-2 items-center mb-2">
                <div className="col-span-1 text-gray-900 font-semibold">
                  /dev/sda
                </div>
                <div className="col-span-1 text-gray-600">
                  ATA VBOX HARDDISK
                </div>
                <div className="col-span-1 text-right text-gray-600">
                  Size 8.00 GB
                </div>
              </div>
              <p className="text-sm text-gray-700 ml-4 mb-2">
                UUID=6c5fd920-1055-4f6c-af0d-2630d84a5fef
              </p>

              <div className="grid grid-cols-3 gap-2 items-center mb-2 ml-4">
                <div className="col-span-1 text-gray-900">/dev/sda1</div>
                <div className="col-span-1 text-gray-600">Size 512.00 MB</div>
                <div className="col-span-1 flex items-center">
                  <span className="text-gray-600 mr-2">ext4</span>
                  <Input readOnly value={"/boot"} />
                </div>
              </div>
              <p className="text-sm text-gray-700 ml-8 mb-2">UUID=1009-CB58</p>

              <div className="grid grid-cols-3 gap-2 items-center mb-2 ml-4">
                <div className="col-span-1 text-gray-900">/dev/sda2</div>
                <div className="col-span-1 text-gray-600">Size 32.00 MB</div>
                <div className="col-span-1 flex items-center">
                  <span className="text-gray-600 mr-2">vfat</span>
                  <Input />
                </div>
              </div>
              <p className="text-sm text-gray-700 ml-8 mb-2">
                UUID=267a9f8b-a490-43de-87d2-33fd439c6740
              </p>

              <div className="grid grid-cols-3 gap-2 items-center mb-2 ml-4">
                <div className="col-span-1 text-gray-900">/dev/sda3</div>
                <div className="col-span-1 text-gray-600">Size 593.33 MB</div>
                <div className="col-span-1 flex items-center">
                  <span className="text-gray-600 mr-2">swap</span>
                  <Input value={"swap"} readOnly />
                </div>
              </div>
              <p className="text-sm text-gray-700 ml-8 mb-2">
                UUID=6aef704f-3003-454c-a4dd-852b0ae257bb
              </p>

              <div className="grid grid-cols-3 gap-2 items-center mb-4 ml-4">
                <div className="col-span-1 text-gray-900">/dev/sda4</div>
                <div className="col-span-1 text-gray-600">Size 6.89 GB</div>
                <div className="col-span-1 flex items-center">
                  <span className="text-gray-600 mr-2">ext4</span>
                  <Input readOnly value={"/"} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center mb-4">
                <div className="col-span-1 text-gray-900 font-semibold">
                  /dev/sr0
                </div>
                <div className="col-span-1 text-gray-600">VBOX CD-ROM</div>
                <div className="col-span-1 text-right text-gray-600">
                  Size 1024.00 MB
                </div>
              </div>
            </div>
            <div className="mt-5">
            <p className="text-gray-600 text-sm text-center mb-2">
                    If your device isn't listed here, you need to install or load the driver.
                </p>
                <p className="text-gray-600 text-sm text-center">
                    If you can see your device but no partitions you have to create them first.
                </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
