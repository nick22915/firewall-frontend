"use client";

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
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomizeRulesetData from "@/data/customizeRulesetData";
import { useState } from "react";

export default function CustomizeRuleset() {
  const PageIcon = Terminal;
  const [visibleSection, setVisibleSection] = useState("buttonsSection");

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/firewall/intrusionPrevention">
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
                Intrusion Prevention System
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Ruleset
            </CardTitle>
            <form>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <label className="text-gray-600">
                    etnetera_aggressive-ruleset.rules
                  </label>
                </div>
                {visibleSection !== "rulesetTable" && (
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-white text-blue-700 hover:text-blue-400 hover:bg-white"
                    onClick={() => setVisibleSection("rulesetTable")}
                  >
                    Show
                  </Button>
                )}

                {visibleSection === "rulesetTable" && (
                  <Button
                    size="lg"
                    type="submit"
                    className="bg-white text-blue-700 hover:text-blue-400 hover:bg-white"
                    onClick={() => setVisibleSection("buttonsSection")}
                  >
                    Hide
                  </Button>
                )}
              </div>

              {visibleSection === "rulesetTable" && (
                <div className="mt-5 mb-5">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-accent text-white">
                        <TableHead className="w-[200px] text-white"></TableHead>
                        <TableHead className="text-white text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {CustomizeRulesetData.map((rule) => (
                        <TableRow key={rule.id}>
                          <TableCell className="w-[200px]">
                            <div className="flex items-center gap-2">
                              <Checkbox checked={rule.group_left.checked} />
                              {rule.group_left.name}
                            </div>
                          </TableCell>
                          <TableCell className="w-[200px] text-right">
                            <div className="flex items-center gap-2">
                              <Checkbox checked={rule.group_right.checked} />
                              {rule.group_right.name}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

              <div className="flex justify-end gap-4">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
