import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Terminal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function SshAccess() {
  const PageIcon = Terminal;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Remote Access
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              SSH
            </CardTitle>
            <form>
              <div className="flex items-center gap-1 mb-2">
                <Checkbox></Checkbox>
                <label className="text-gray-600">SSH Access</label>
              </div>

              <div className="flex items-center gap-1 mb-2 ml-6">
                <Checkbox></Checkbox>
                <label className="text-gray-600">
                  Allow SSH Agent Forwarding
                </label>
              </div>

              <div className="flex items-center gap-1 mb-2 ml-6">
                <Checkbox></Checkbox>
                <label className="text-gray-600">Allow TCP forwarding</label>
              </div>

              <div className="flex items-center gap-1 mb-2 ml-6">
                <Checkbox></Checkbox>
                <label className="text-gray-600">
                  Allow password based authentication
                </label>
              </div>

              <div className="flex items-center gap-1 mb-4 ml-6">
                <Checkbox></Checkbox>
                <label className="text-gray-600">
                  Allow public key based authentication
                </label>
              </div>

              <div className="flex items-center gap-1 mb-6">
                <Checkbox></Checkbox>
                <label className="text-gray-600">
                  Set SSH port to default 22 (222 is used otherwise)
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                    size="lg"
                    asChild
                    className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                  >
                    <a href="/">Stop SSH Daemon in 15 minutes</a>
                  </Button>
                
                <Button
                    size="lg"
                    asChild
                    className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                  >
                    <a href="/">Stop SSH Daemon in 30 minutes</a>
                  </Button>
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Save</a>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
