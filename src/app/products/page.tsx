import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const indiaWearProducts = [
  {
    id: 1,
    name: "Anarkali Kurta Set",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    price: "₹12,999",
    category: "India Wear",
    isNew: true,
  },
  {
    id: 2,
    name: "Embroidered Punjabi Suit",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    price: "₹14,599",
    category: "India Wear",
    isNew: false,
  },
  {
    id: 3,
    name: "Hand Block Printed Kurta",
    image: "https://web-assets.same.dev/3846276091/3213301.png",
    price: "₹8,999",
    category: "India Wear",
    isNew: true,
  },
  {
    id: 4,
    name: "Traditional Saree",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    price: "₹18,599",
    category: "India Wear",
    isNew: false,
  },
];

const westernWearProducts = [
  {
    id: 5,
    name: "Silk Fusion Blouse",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    price: "₹4,999",
    category: "Western Wear",
    isNew: true,
  },
  {
    id: 6,
    name: "Contemporary Pants",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    price: "₹6,599",
    category: "Western Wear",
    isNew: false,
  },
  {
    id: 7,
    name: "Designer Top",
    image: "https://web-assets.same.dev/3826536520/3735686446.png",
    price: "₹3,999",
    category: "Western Wear",
    isNew: true,
  },
  {
    id: 8,
    name: "Indo-Western Jacket",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    price: "₹9,599",
    category: "Western Wear",
    isNew: false,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 bg-cream">
        <div className="container-custom py-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl font-serif mb-4">Our Collections</h1>
            <div className="h-0.5 w-20 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground">
              From exquisite Punjabi suits and Anarkali ensembles to chic Western tops and designer pieces, our collections cater to every style and occasion.
            </p>
          </div>

          <Tabs defaultValue="india-wear" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-muted/50 p-1">
                <TabsTrigger
                  value="india-wear"
                  className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  India Wear
                </TabsTrigger>
                <TabsTrigger
                  value="western-wear"
                  className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Western Wear
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="india-wear">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {indiaWearProducts.map((product) => (
                  <div key={product.id} className="group relative overflow-hidden">
                    <div className="relative h-[380px] w-full overflow-hidden rounded-lg bg-secondary/20">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-4 left-4 bg-primary text-white">
                          New Arrival
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-white text-primary hover:bg-white/90"
                        >
                          <Link href={`/products/${product.id}`} className="flex items-center gap-1">
                            <Eye size={14} />
                            Quick View
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="text-sm text-primary font-semibold mt-1">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="western-wear">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {westernWearProducts.map((product) => (
                  <div key={product.id} className="group relative overflow-hidden">
                    <div className="relative h-[380px] w-full overflow-hidden rounded-lg bg-secondary/20">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-4 left-4 bg-primary text-white">
                          New Arrival
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-white text-primary hover:bg-white/90"
                        >
                          <Link href={`/products/${product.id}`} className="flex items-center gap-1">
                            <Eye size={14} />
                            Quick View
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="text-sm text-primary font-semibold mt-1">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </main>
  );
}
