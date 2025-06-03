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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuotaRule() {
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
          
        </CardContent>
      </Card>
    </div>
  );
}
