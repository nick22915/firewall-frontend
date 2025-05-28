"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileWarning } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import {
  chainInputTable,
  ipTableSelect,
  ipTableManglesSelect,
  ipTableNetworkSelect,
} from "@/data/ipTables";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

export default function IpTables() {
  const PageIcon = FileWarning;
  const [tableData, setTableData] = useState<
    {
      id: number;
      pkts: string;
      bytes: string;
      target: string;
      prot: string;
      opt: string;
      in: string;
      out: string;
      source: string;
      destination: string;
      category: string;
    }[]
  >([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    // Inicialmente, cargar todos los datos en la tabla
    setTableData(chainInputTable);
  }, [chainInputTable]);

  const handleFiltroChange = (event: any) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);

    // Aplicar filtro
    if (newFilter === "") {
      setTableData(chainInputTable); // Mostrar todos los datos si no hay filtro
    } else {
      const datosFiltrados = chainInputTable.filter(
        (register) => register.category === newFilter
      ); // Ajusta 'categoria' según tu estructura de datos
      setTableData(datosFiltrados);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                IpTables
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              IpTables
            </CardTitle>
            <Select value={selectedFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {ipTableSelect.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="mt-5">
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">pkts</TableHead>
                    <TableHead className="text-white text-right">
                      bytes
                    </TableHead>
                    <TableHead className="text-white text-right">
                      target
                    </TableHead>
                    <TableHead className="text-white text-center">
                      prot
                    </TableHead>
                    <TableHead className="text-white text-center">
                      opt
                    </TableHead>
                    <TableHead className="text-white text-center">in</TableHead>
                    <TableHead className="text-white text-center">
                      out
                    </TableHead>
                    <TableHead className="text-white text-center">
                      source
                    </TableHead>
                    <TableHead className="text-white text-center">
                      destination
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((blocklist) => (
                    <TableRow key={blocklist.id}>
                      <TableCell className="w-[200px]">
                        {blocklist.pkts}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.bytes}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.target}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.prot}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.opt}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.out}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.source}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.destination}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              IPTable Mangles:
            </CardTitle>
            <Select value={selectedFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {ipTableManglesSelect.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="mt-5">
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">pkts</TableHead>
                    <TableHead className="text-white text-right">
                      bytes
                    </TableHead>
                    <TableHead className="text-white text-right">
                      target
                    </TableHead>
                    <TableHead className="text-white text-center">
                      prot
                    </TableHead>
                    <TableHead className="text-white text-center">
                      opt
                    </TableHead>
                    <TableHead className="text-white text-center">in</TableHead>
                    <TableHead className="text-white text-center">
                      out
                    </TableHead>
                    <TableHead className="text-white text-center">
                      source
                    </TableHead>
                    <TableHead className="text-white text-center">
                      destination
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((blocklist) => (
                    <TableRow key={blocklist.id}>
                      <TableCell className="w-[200px]">
                        {blocklist.pkts}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.bytes}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.target}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.prot}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.opt}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.out}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.source}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.destination}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              IPTable Network Address Translation:
            </CardTitle>
            <Select value={selectedFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {ipTableNetworkSelect.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="mt-5">
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent text-white">
                    <TableHead className="w-[200px] text-white">pkts</TableHead>
                    <TableHead className="text-white text-right">
                      bytes
                    </TableHead>
                    <TableHead className="text-white text-right">
                      target
                    </TableHead>
                    <TableHead className="text-white text-center">
                      prot
                    </TableHead>
                    <TableHead className="text-white text-center">
                      opt
                    </TableHead>
                    <TableHead className="text-white text-center">in</TableHead>
                    <TableHead className="text-white text-center">
                      out
                    </TableHead>
                    <TableHead className="text-white text-center">
                      source
                    </TableHead>
                    <TableHead className="text-white text-center">
                      destination
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((blocklist) => (
                    <TableRow key={blocklist.id}>
                      <TableCell className="w-[200px]">
                        {blocklist.pkts}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.bytes}
                      </TableCell>
                      <TableCell className="w-[200px] text-right">
                        {blocklist.target}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.prot}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.opt}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.out}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.source}
                      </TableCell>
                      <TableCell className="w-[200px] text-center">
                        {blocklist.destination}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
