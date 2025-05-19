import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Backup() {
  const PageIcon = Mail;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Backup
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Logs
            </CardTitle>
            <form>
              <div className="mb-2">
                <Input />
                <label className="text-gray-600">Include logfiles</label>
              </div>
              <div className="mb-2">
                <Input />
                <label className="text-gray-600">Exclude logfiles</label>
              </div>
              <div className="mb-4">
                <Input />
                <label className="text-gray-600">Generate ISO</label>
              </div>

              <div className="flex justify-end">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="/">Backup</a>
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
