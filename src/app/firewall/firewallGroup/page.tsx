import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function FirewallGroup() {
  const PageIcon = Users;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Firewall Groups
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Firewall Groups
            </CardTitle>
            <form>
              <div className="border rounded-md p-4 mb-4">
                <p className="text-gray-600">
                  Over here, you can group single hosts, networks and services
                  together, which will creating new rules more easy and faster.
                </p>
                <div className="flex flex-col md:flex-row justify-around items-center h-28">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Networks</a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Host</a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Network/Host Groups</a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Services</a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Service Groups</a>
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
