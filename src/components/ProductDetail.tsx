"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

// Product type definition
export type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  description: string;
  fabric: string;
  color: string;
  sizes: string[];
  isNew?: boolean;
};

export type ProductDetailProps = {
  product: Product | null;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  // Handle navigation when product not found
  useEffect(() => {
    if (!product) {
      router.push('/products');
    }
  }, [product, router]);
  
  if (!product) {
    return null; // Will redirect in the useEffect
  }
  
  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      toast.error("Please select a size");
      return;
    }
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-cream">
        <div className="container-custom py-8">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-8 pl-0 text-muted-foreground hover:text-foreground"
            onClick={() => router.back()}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative rounded-lg overflow-hidden bg-white p-8">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-primary text-white">New</Badge>
                )}
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-primary uppercase tracking-wider font-medium mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
                <p className="text-2xl text-primary font-medium">{product.price}</p>
              </div>
              
              <div className="border-t border-b py-6 my-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-6 space-y-3">
                  <p><span className="font-medium">Fabric:</span> {product.fabric}</p>
                  <p><span className="font-medium">Color:</span> {product.color}</p>
                </div>
              </div>
              
              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        type="button"
                        variant={selectedSize === size ? "default" : "outline"}
                        className={`h-10 px-4 ${selectedSize === size ? 'bg-primary text-white' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center border rounded-md w-32">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </Button>
                  <div className="flex-1 text-center font-medium">{quantity}</div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white h-12"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 