import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Power } from "lucide-react";

export default function Shutdown() {
  const PageIcon = Power;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Shutdown
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <div className="flex flex-col md:flex-row justify-around items-center h-28">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Shutdown</a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Reboot</a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">Reboot and Run "fsck"</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
