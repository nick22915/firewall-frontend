"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function IpInformationDetail(
  { IP }: { IP: string },
  country: string
) {
  const PageIcon = Info;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Ip Information for {IP}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Basic IP Information
            </CardTitle>
            <div className="flex items-center gap-4 mb-4">
              <label className="text-gray-600">Country</label>
              <p className="text-gray-600 mb-1 text-sm">{country}</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="text-gray-600">PTR</label>
              <p className="text-gray-600 mb-1 text-sm">
                Reverse lookup failed
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="text-gray-600">Autonomous System</label>
              <p className="text-gray-600 mb-1 text-sm">AS lookup failed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
