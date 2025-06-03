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
import { Input } from "@/components/ui/input";

export default function ManageRepository() {
  const PageIcon = Terminal;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Button variant="outline" className="mb-5">
        <ArrowLeft className="h-4 w-4" />
        <a href="/network/urlFilter">Back</a>
      </Button>
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
              Manage Local File Repository
            </CardTitle>
            <p className="text-gray-600 text-sm mb-4">
              Download requests for these files will be redirected from the
              original source to the local file repository.
            </p>
            <p className="text-gray-600 text-sm mb-4">
              To add a file to the local repository upload the file below.
            </p>

            <form className="flex items-center justify-between mb-4 gap-2">
              <Input type="file" />
              <Button
                size="lg"
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Upload File
              </Button>
            </form>

            <p className="text-gray-600 text-sm mb-4">
              <span className="font-semibold">Note:</span> The URL filter needs
              to be restarted to activate changes to the repository.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
