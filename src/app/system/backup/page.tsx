import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

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
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Logs
            </CardTitle>
            <form>
              <div className="mb-2">
                <input type="radio" id="include-logfiles" name="logfiles-option" value="include" className="form-radio h-4 w-4 text-primary focus:primary mr-2"/>
                <label className="text-gray-600">Include logfiles</label>
              </div>
              <div className="mb-2">
                <input type="radio" id="exclude-logfiles" name="logfiles-option" value="include" className="form-radio h-4 w-4 text-primary focus:primary mr-2"/>
                <label className="text-gray-600">Exclude logfiles</label>
              </div>
              <div className="mb-4">
                <input type="radio" id="generate-iso" name="logfiles-option" value="include" className="form-radio h-4 w-4 text-primary focus:primary mr-2"/>
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
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Backups
            </CardTitle>
          </div>
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Add-Ons
            </CardTitle>
          </div>
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Restore
            </CardTitle>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
