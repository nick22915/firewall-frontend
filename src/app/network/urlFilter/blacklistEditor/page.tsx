import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlacklistOptions from "@/data/blacklistOptions";

export default function ManageRepository() {
  const PageIcon = Filter;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/network/urlFilter">
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
                URL Filter Configuration
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Url Filter Blacklist Editor
            </CardTitle>
            <form>
              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Blacklist Name
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="mb-4">
                <label className=" font-medium text-gray-600 flex items-center mb-1">
                  Blacklist category name:{" "}
                  <span className="text-redfire ml-1">*</span>
                </label>
                <Input />
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4 mt-5">
                Edit domains, URLs and expressions{" "}
                <span className="text-redfire ml-1">*</span>
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Domains (one per line)
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    URLs (one per line)
                  </label>
                  <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600">
                  Expressions (one per line)
                </label>
                <Textarea className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"></Textarea>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Load blacklist
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center mb-6 gap-3">
                <label className="w-1/3 text-gray-600">
                  Select existing blacklist:
                </label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {BlacklistOptions.map((option) => (
                      <SelectItem key={option.id} value={option.value}>
                        {option.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Load Blacklist
                </Button>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Import blacklist
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <p className="text-gray-600 text-sm mb-4">
                To import a previously saved blacklist editor file upload the
                tar.gz file below:
              </p>
              <div className="flex items-center justify-between mb-6 gap-3">
                <Input type="file" />
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Add
                </Button>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Export blacklist
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex justify-start mb-6">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Export Blacklist
                </Button>
              </div>

              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Install blacklist
              </h3>
              <div className="border-b border-gray-300 mb-6"></div>
              <div className="flex items-center mb-4">
                <label className="text-gray-600 mr-2">
                  Do not restart URL filter:
                </label>
                <Checkbox />
              </div>
              <div className="flex justify-start mb-6">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Install Blacklist
                </Button>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                The new blacklist will be automatically compiled to prebuilt
                databases. Depending on the size of the blacklist, this may take
                several minutes.
              </p>

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
