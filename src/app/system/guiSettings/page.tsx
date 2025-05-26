import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import LanguageSelect from "@/data/language";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import languageSelect from "@/data/language";


export default function GuiSettings() {
  const PageIcon = Mail;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                GUI SETTINGS
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Display
            </CardTitle>
            <form>
              <div className="flex gap-1 items-center mb-2">
                <Checkbox></Checkbox>
                <label className="text-gray-600">
                  Display hostname in window title
                </label>
              </div>

              <div className="flex gap-1 items-center mb-2">
                <Checkbox />
                <label className="text-gray-600">
                  Refresh index.cgi page while connected
                </label>
              </div>

              <div className="flex gap-1 items-center mb-4">
                <Checkbox />
                <label className="text-gray-600">Show Ajax speedmeter</label>
              </div>

              <div className="flex items-center mb-6">
                <label className="w-1/3 text-gray-600">
                  Select the language you wish IPFire to display in
                </label>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {languageSelect.map((language) => (
                      <SelectItem key={language.id} value={language.language_code}>
                        {language.language_display}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </form>
          </div>

          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Sound
            </CardTitle>
            <form>
              <div className="flex gap-1 items-center mb-6">
                <Checkbox />
                <label className="text-gray-600">
                  Beep when IPFire connects or disconnects
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                    size="lg"
                    asChild
                    className="bg-accent/80 text-accent-foreground hover:bg-accent/60 inline-flex justify-center py-2 px-4"
                  >
                    <a href="/">Restore Default</a>
                  </Button>
                <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="/">Save</a>
                  </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
