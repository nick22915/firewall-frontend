import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { profileInformation } from "@/data/systemInformation";
import callApi from "@/lib/callApi";

async function getData() {
  let profileInformation = null; 
  let error = null;

  try {
    const response = await callApi.get("/todos/1"); 
    profileInformation = response.data; 
  } catch (err: any) {
    
    console.error("Error fetching data in SystemInformationPage:", err);
    error = {
      message:
        err.message || "Error desconocido al cargar la información del perfil.",
    };
  }

  return profileInformation;
}

// Server Component can be an async Function .
// Data can be fetched directly inside the component
export default async function SystemInformation() {
  const PageIcon = Info;
  const data = await getData();
  console.log("This is the data from de example API", data);

  // To inject the data in the code just use {} and the data propertie: {data.title}

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                System Information
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              FireIn
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow className="bg-accent text-white">
                  <TableHead className="w-[200px] text-white">System</TableHead>
                  <TableHead className="text-white text-center">
                    Version
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>IPFire version</TableCell>
                  <TableCell> IPFire 2.29 (x86_64) - core193</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pakfire version</TableCell>
                  <TableCell>2.29-x86_64</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kernel version</TableCell>
                  <TableCell>
                    {" "}
                    Linux ipfire.localdomain 6.12.13-ipfire #1 SMP
                    PREEMPT_DYNAMIC Mon Mar 31 18:37:57 GMT 2025 x86_64 GNU/Lin
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="border rounded-md p-4 mt-5">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              FireInfo Settings
            </CardTitle>
            <form>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-600">Your profile ID:</label>
                <p className="text-redfire text-sm">
                  01368265526890be4a7d1a99b0fa95572364dcd4
                </p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-redfire text-sm">
                  Your profile is not submitted to the fireinfo service.
                </p>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Yes, I want to send my profile
                </Button>
              </div>

              <div className="mb-4">
                <Textarea
                  className="w-full h-50 border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-sm p-2"
                  value={JSON.stringify(profileInformation, null, 2)}
                  readOnly
                ></Textarea>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
