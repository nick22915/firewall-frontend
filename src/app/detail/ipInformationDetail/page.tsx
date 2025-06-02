"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function IpInformationDetail() {
  const PageIcon = Info;

  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const country = searchParams.get("country");

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/logs/firewallLogs" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Ip Information for {source}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Basic IP Information
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[100px] text-white"></TableHead>
                  <TableHead className="text-white"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell>{country}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PTR</TableCell>
                  <TableCell>Reverse lookup failed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Autonomous System</TableCell>
                  <TableCell>AS lookup failed</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              WHOIS results from whois.arin.net
            </CardTitle>

            <Textarea
              className="w-full h-96 whois-textarea p-2 text-sm"
              readOnly
              value={
                " ARIN WHOIS data and services are subject to the Terms of Use # available at: https://www.arin.net/resources/registry/whois/tou/ # # If you see inaccuracies in the results, please report at # https://www.arin.net/resources/registry/whois/inaccuracy_reporting/ # # Copyright 1997-2025, American Registry for Internet Numbers, Ltd. "
              }
            ></Textarea>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
