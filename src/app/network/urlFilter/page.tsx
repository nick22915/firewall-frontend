import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import BlacklistOptions from "@/data/blacklistOptions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function UrlFilter() {
  const PageIcon = Filter;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                URL Filter Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              URL Filter Settings
            </CardTitle>
            <form>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Block Categories
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                {BlacklistOptions.map((option) => (
                  <div className="flex items-center" key={option.id}>
                    <label className="text-gray-600 mr-2">{option.text}:</label>
                    <Checkbox />
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Custom Blacklist
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-medium text-gray-600">
                    Blocked domains (one per line)
                  </label>
                  <p className="text-xs text-gray-500 mb-1">
                    Example: www.domain.com
                  </p>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block font-medium text-gray-600">
                    Blocked URLs (one per line)
                  </label>
                  <p className="text-xs text-gray-500 mb-1">
                    Example: www.domain.com/ads/
                  </p>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <label className="text-gray-600 mr-2">
                  Enable custom blacklist
                </label>
                <Checkbox />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Custom Whitelist
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Allowed domains (one per line)
                  </label>
                  <p className="text-xs text-gray-500 mb-1">
                    Example: www.domain.com
                  </p>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Allowed URLs (one per line)
                  </label>
                  <p className="text-xs text-gray-500 mb-1">
                    Example: www.domain.com/ads/
                  </p>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <label className="text-gray-600 mr-2">
                  Enable custom whitelist:
                </label>
                <Checkbox />{" "}
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Custom Expression List
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Blocked expressions (as regular expressions)
                </label>
                <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
              </div>
              <div className="flex items-center justify-end">
                <label className="text-gray-600 mr-2">
                  Enable custom expression list
                </label>
                <Checkbox />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                File extension blocking
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Block executable files:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Block audio/video files:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Block compressed archive files:
                  </label>
                  <Checkbox />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Local File Redirection
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center">
                <label className="text-gray-600 mr-2">
                  Enable local file redirection:
                </label>
                <Checkbox />
              </div>
              <div className="flex justify-end mt-4">
                <Link href="/network/urlFilter/manageRepository" passHref>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Manage Repository
                  </Button>
                </Link>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Network based access control
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Unfiltered IP addresses
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Banned IP addresses
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Time Based Access Control
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex justify-start gap-4">
                <Link href="/network/urlFilter/timeConstrains" passHref>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Set Time Constraints
                  </Button>
                </Link>

                <Link href="/network/urlFilter/quotaRule" passHref>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Set User Quota
                  </Button>
                </Link>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Block Page Settings
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-between col-span-full">
                  <label className="w-1/2 text-gray-600">
                    Redirect page template
                  </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unlimited">Legacy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Show category on block page:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Redirect to this URL:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Show category on block page:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Redirect to this URL:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Show URL on block page:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Message line 1:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Show IP on block page:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Message line 2:
                    </label>
                    <Input />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between col-span-full">
                  <div className="flex items-center w-full md:w-1/2">
                    <label className="text-gray-600 mr-2">
                      Use "DNS error" to block URLs:
                    </label>
                    <Checkbox />
                  </div>
                  <div className="flex items-center w-full md:w-1/2 mt-2 md:mt-0 md:justify-end">
                    <label className="text-gray-600 flex items-center mr-2">
                      Message line 3:
                    </label>
                    <Input />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Advanced Settings
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Enable expression lists:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">Enable log:</label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Block "ads" with empty window:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">Log username:</label>
                  <Checkbox />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Block sites accessed by it's IP address:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Split log by categories:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Block all URLs not explicitly allowed:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">
                    Allow custom whitelist for banned clients:
                  </label>
                  <Checkbox />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-redfire text-sm">
                  <span className="mr-1">*</span> Required field
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Save
                  </Button>
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Save and Restart
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              URL filter maintenance
            </CardTitle>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Blacklist Update
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>
            <p className="text-gray-600 text-sm mb-4">
              The new blacklist will be automatically compiled to prebuilt
              databases. Depending on the size of the blacklist, this may take
              several minutes. Please wait for this task to be finished before
              restarting the URL filter.
            </p>
            <p className="text-gray-600 text-sm mb-4">
              To install an updated blacklist upload the .tar.gz file below:
            </p>
            <form className="flex items-center justify-between gap-4">
              <Input type="file" />
              <Button
                size="lg"
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Upload Blacklist
              </Button>
            </form>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Automatic Blacklist Update
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center ">
                  <label className="text-gray-600 mr-2">
                    Enable automatic update:
                  </label>
                  <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <label className="w-1/2 text-gray-600">
                    Automatic update schedule:
                  </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="daily">Dairy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600">
                    Select download source:
                  </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="univToulouse">
                        Univ. Toulouse
                      </SelectItem>
                      <SelectItem value="custom">Custom Source URL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/2 text-gray-600">
                    Custom source URL:
                  </label>
                  <Input />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Save Update Settings
                </Button>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Update Now
                </Button>
              </div>
            </form>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Blacklist Editor
            </h3>

            <div className="border-b border-gray-300 mb-6"></div>
            <p className="text-gray-600 text-sm mb-4">
              Create and edit your own blacklist files
            </p>
            <div className="flex justify-start">
              <Link href="/network/urlFilter/blacklistEditor" passHref>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Blacklist Editor
                </Button>
              </Link>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Include complete blacklist:
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>
            <form>
              <div className="flex items-center mb-4">
                <label className="text-gray-600 mr-2">
                  Include complete blacklist
                </label>
                <Checkbox />
              </div>
              <div className="flex justify-end">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Create Backup File
                </Button>
              </div>
            </form>
            <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
              Restore URL filter settings
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>
            <p className="text-gray-600 text-sm mb-4">
              To restore a previously saved configuration upload the .tar.gz
              backup file below:
            </p>

            <form className="flex items-center justify-between gap-4">
              <Input type="file" />
              <Button
                size="lg"
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Import Backup File
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
