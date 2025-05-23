import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from "@/components/ui/select";


export default function MailService() {

    const PageIcon = Mail;

    return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
            <div className="flex items-center gap-3">
              <PageIcon className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="text-3xl font-bold text-primary">Mail Service</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
                <div className="border rounded-md p-4">
                <CardTitle className="text-2xl font-medium text-primary pb-5">Configuration</CardTitle>
                    <form>
                        <div className="flex items-center mb-4">
                            <label  className="flex-1 text-gray-600">Activate Mail Service</label>
                            <input type="checkbox" id="activate-mail" name="activate-mail" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"/>
                        </div>
    
                        <div className="flex items-center mb-4">
                            <label  className="w-1/3 text-gray-600 flex items-center">
                                Mail Sender <span className="text-redfire ml-1">*</span>
                            </label>
                            <Input/>
                        </div>
    
                        <div className="flex items-center mb-4">
                            <label  className="w-1/3 text-gray-600 flex items-center">
                                Mail Recipient <span className="text-redfire ml-1">*</span>
                            </label> 
                            <Input/>
                        </div>
    
                        <div className="flex items-center mb-4">
                            <label  className="w-1/3 text-gray-600 flex items-center">
                                Mail Server Address <span className="text-redfire ml-1">*</span>
                            </label>
                            <Input/>
                        </div>
    
                        <div className="flex items-center mb-4">
                            <label className="w-1/3 text-gray-600 flex items-center">
                                Mail Server Port <span className="text-redfire ml-1">*</span>
                            </label>
                            <Input/>
                        </div>
    
                        <div className="flex items-center mb-4">
                            <label className="w-1/3 text-gray-600">Username</label>
                            <Input/>
                        </div>
    
                        <div className="flex items-center mb-4">
                            <label  className="w-1/3 text-gray-600">Password</label>
                            <Input/>
                        </div>
    
                        <div className="flex items-center mb-6">
                            <label  className="w-1/3 text-gray-600">TLS mode</label>
                            <Select >
                                <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="enable">Enable</SelectItem>
                                <SelectItem value="disable">Disable</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
    
                        <div className="flex justify-end">
                        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <a href="/system/home">Save</a>
                        </Button>
                        </div>
                    </form>
                </div>
       
          </CardContent>
        </Card>
      </div>
    );}
