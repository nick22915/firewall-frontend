import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Delete, Edit, ListChecks } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FirewallRules() {
  const PageIcon = ListChecks;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Firewall Rules
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Firewall Rules
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white">#</TableHead>
                  <TableHead className="text-white ">Protocol</TableHead>
                  <TableHead className="text-right text-white">
                    Source
                  </TableHead>
                  <TableHead className="text-right text-white">Log</TableHead>
                  <TableHead className="text-right text-white">
                    Destination
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium bg-accent text-white">
                    1
                  </TableCell>
                  <TableCell className="tex-right">TCP</TableCell>
                  <TableCell className="text-right">Any</TableCell>
                  <TableCell className="text-right">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-right">Red:SMTP</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Checkbox />
                    <Edit /> <Delete className="cursor-pointer text-refire" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="firewall-policy-bar mt-5">
              <span className="firewall-policy-green">GREEN </span>
              <span className="firewall-policy-red flex-1">
                Internet (Allowed)
              </span>
            </div>
            <div className="firewall-policy-label">Policy: Allowed</div>
            <div className="flex justify-end mt-5">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/">New Rule</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
