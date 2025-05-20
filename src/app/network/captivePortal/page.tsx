import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function CaptivePortal() {
  const PageIcon = Users;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Captive Portal
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Settings
            </CardTitle>
            <form>
              <div className="flex items-center mb-4">
                <label className="flex-1 text-gray-600">
                  Activated on{" "}
                  <span className="font-semibold text-green-600">GREEN</span>
                </label>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between mb-6 pb-3">
                <label className="w-1/3 text-gray-600">Type of Access</label>
                <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enable">Terms & Conditions</SelectItem>
                      </SelectContent>
                    </Select>
              </div>

              <div className="mb-6">
                <h3 className="text-md font-bold text-gray-700 mb-2">
                  Branding
                </h3>
                <div className="flex items-center mb-4">
                  <label className="w-1/3 text-gray-600">
                    Title of Login Page
                  </label>
                  <Input />
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/3 text-gray-600">Brand Color</label>
                  <input
                    type="color"
                    id="brand-color"
                    name="brand-color"
                    className="h-8 w-8 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label className="w-1/3 text-gray-600">Upload Logo</label>
                  <div className="flex-1 flex items-center">
                    <input
                      type="file"
                      id="upload-logo"
                      name="upload-logo"
                      className="text-sm text-gray-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-md file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-blue-50 file:text-primary
                                            hover:file:bg-blue-100"
                    />
                    <span className="ml-2 text-sm text-gray-500">
                      (PNG or JPEG, recommended 1280x720 pixels)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-md font-medium text-gray-700 mb-2">
                  Terms & Conditions
                </h4>
                <textarea
                  id="terms-conditions"
                  name="terms-conditions"
                  className="w-full border-gray-300 rounded-md shadow-sm text-base py-2 px-3"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Save</a>
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
