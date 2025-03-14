"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = {
  "india-wear": [
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
  ],
  "western-wear": [
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
  ],
};

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Our <span className="text-primary">Signature</span> Collection
          </h2>
          <div className="h-0.5 w-20 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From exquisite Punjabi suits and Anarkali ensembles to chic Western tops
            and designer pieces, our collections cater to every style and occasion.
          </p>
        </motion.div>

        <Tabs defaultValue="india-wear" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
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
          </motion.div>

          <TabsContent value="india-wear">
            <Carousel className="w-full">
              <CarouselContent>
                {products["india-wear"].map((product, index) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                    <motion.div
                      variants={item}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      transition={{ delay: 0.1 * index }}
                      className="group relative overflow-hidden"
                    >
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
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8">
                <CarouselPrevious className="static transform-none bg-muted hover:bg-muted/80 text-foreground" />
                <CarouselNext className="static transform-none bg-primary hover:bg-primary/90 text-white" />
              </div>
            </Carousel>
          </TabsContent>

          <TabsContent value="western-wear">
            <Carousel className="w-full">
              <CarouselContent>
                {products["western-wear"].map((product, index) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                    <motion.div
                      variants={item}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      transition={{ delay: 0.1 * index }}
                      className="group relative overflow-hidden"
                    >
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
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8">
                <CarouselPrevious className="static transform-none bg-muted hover:bg-muted/80 text-foreground" />
                <CarouselNext className="static transform-none bg-primary hover:bg-primary/90 text-white" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/products" className="flex items-center gap-2">
              View All Collections
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
