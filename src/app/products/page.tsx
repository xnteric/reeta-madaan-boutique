"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";
import ProductQuickView from "@/components/ProductQuickView";

// Product type definition to match ProductQuickView component
type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  isNew?: boolean;
};

const indiaWearProducts: Product[] = [
  {
    id: 1,
    name: "Anarkali Kurta Set",
    image: "/images/1.png",
    price: "₹12,999",
    category: "India Wear",
    isNew: true,
  },
  {
    id: 2,
    name: "Embroidered Punjabi Suit",
    image: "/images/2.png",
    price: "₹14,599",
    category: "India Wear",
    isNew: false,
  },
  {
    id: 3,
    name: "Hand Block Printed Kurta",
    image: "/images/3.png",
    price: "₹8,999",
    category: "India Wear",
    isNew: true,
  },
  {
    id: 4,
    name: "Traditional Saree",
    image: "/images/traditional-saree.jpg",
    price: "₹18,599",
    category: "India Wear",
    isNew: false,
  },
];

const westernWearProducts: Product[] = [
  {
    id: 5,
    name: "Silk Fusion Blouse",
    image: "/images/22.png",
    price: "₹4,999",
    category: "Western Wear",
    isNew: true,
  },
  {
    id: 6,
    name: "Contemporary Pants",
    image: "/images/23.png",
    price: "₹6,599",
    category: "Western Wear",
    isNew: false,
  },
  {
    id: 7,
    name: "Designer Top",
    image: "/images/runway-show.png",
    price: "₹3,999",
    category: "Western Wear",
    isNew: true,
  },
  {
    id: 8,
    name: "Indo-Western Jacket",
    image: "/images/Untitled-design-2.png",
    price: "₹9,599",
    category: "Western Wear",
    isNew: false,
  },
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setQuickViewOpen(true);
  };

  const renderProductCard = (product: Product) => (
    <div 
      key={product.id} 
      className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <Link href={`/products/${product.id}`} className="block cursor-pointer">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-primary text-white">New</Badge>
          )}
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-9 w-9 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleQuickView(product);
              }}
            >
              <Eye size={16} />
            </Button>
            <Button 
              size="icon" 
              className="h-9 w-9 rounded-full bg-primary hover:bg-primary/90 text-white"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart(product);
              }}
            >
              <ShoppingBag size={16} />
            </Button>
          </div>
        </div>
      </Link>
      <Link href={`/products/${product.id}`} className="block cursor-pointer">
        <div className="mt-4 text-center pb-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-sm text-primary font-semibold mt-1">{product.price}</p>
        </div>
      </Link>
    </div>
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 bg-cream relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/Untitled-design-2.png)",
              backgroundSize: "200px",
              backgroundRepeat: "repeat",
              opacity: 0.05
            }}
          />
        </div>

        <div className="container-custom py-8 relative z-10">
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
                {indiaWearProducts.map(renderProductCard)}
              </div>
            </TabsContent>

            <TabsContent value="western-wear">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {westernWearProducts.map(renderProductCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          open={quickViewOpen}
          onOpenChange={setQuickViewOpen}
        />
      )}

      <Footer />
    </main>
  );
}
