import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function Credits() {
  const PageIcon = Award;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <PageIcon className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Credits
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border rounded-md p-4 mb-4">
            <CardTitle className="text-2xl font-medium text-primary pb-5">
              Donations
            </CardTitle>
            <p className="text-gray-600 mb-4">
              IPFire is driven and maintained by volunteers in their free time.
              To keep this project running costs incurred, if you like to
              support us we would be pleased by a small donation.
            </p>

            <div className="flex justify-center mb-4">
              <a href="#" className="text-primary hover:underline">
                Donation
              </a>
            </div>

            <div className="text-center text-gray-600 mb-4">
              Visit us at:{" "}
              <a
                href="https://www.ipfire.org/"
                className="text-primary hover:underline"
              >
                https://www.ipfire.org/
              </a>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, architecto itaque minus laborum aspernatur velit ad, ut
              vel hic eligendi fugiat suscipit natus! Possimus dolorem dolorum
              tempora vero modi sit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet odit consequatur repellendus aut eius
              totam possimus delectus debitis tempora rerum itaque nesciunt ut
              ab, hic iste suscipit voluptatem, quis inventore. Lorem, ipsum
              dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore sed nesciunt magni exercitationem earum eligendi tempora
              suscipit vel optio eveniet iure quod, autem tenetur, provident
              veritatis ea ratione hic cupiditate ipsam aperiam possimus
              laudantium laborum voluptatum. Voluptatem excepturi in doloribus
              unde dignissimos deserunt iusto debitis nihil inventore aliquam
              natus harum cum quibusdam aliquid consequuntur vel similique,
              impedit, culpa illum. Enim repellat exercitationem rerum nostrum,
              aperiam sint magni excepturi debitis placeat consequuntur porro
              fuga esse sed. Tenetur mollitia vel consectetur officiis quidem
              deserunt in error nam? Aliquam, harum quidem et repellendus
              debitis earum, doloremque sapiente numquam nulla assumenda dolorum
              veritatis sit eaque! Nemo, molestiae. In obcaecati aliquid est
              reprehenderit quod quam molestiae expedita recusandae cupiditate?
              Nobis esse rem fugit aut maiores perferendis fugiat nam
              reprehenderit eum debitis earum eaque assumenda asperiores illo
              laudantium accusantium, vitae voluptatem, nostrum repudiandae
              dolor recusandae repellendus aperiam odit optio? Amet adipisci
              quasi alias harum sit tempore corrupti quisquam iste quo
              consectetur maxime quas labore, repudiandae rerum officia nihil.
              Soluta hic ullam fugiat placeat quam. Rem, voluptas quos. Sunt
              amet, vitae molestias a assumenda ullam aut architecto similique
              et dolore, facere praesentium deleniti quod odit tempora eius
              nesciunt ipsa excepturi hic soluta? Minima, obcaecati velit
              asperiores ratione cumque esse! Commodi iste, sapiente modi
              exercitationem eius, dignissimos veniam, iure molestias alias
              maxime excepturi laboriosam. Tenetur, velit distinctio. Quisquam
              perferendis, quae cumque eveniet voluptate rem voluptatum ullam
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
