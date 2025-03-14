"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

// Combined products data (normally this would come from a database or API)
const allProducts = [
  {
    id: 1,
    name: "Anarkali Kurta Set",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    price: "₹12,999",
    category: "India Wear",
    isNew: true,
    description: "An elegant Anarkali kurta set featuring intricate embroidery and a flattering silhouette. Perfect for festive occasions and celebrations.",
    fabric: "Premium cotton silk blend",
    color: "Maroon",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Embroidered Punjabi Suit",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    price: "₹14,599",
    category: "India Wear",
    isNew: false,
    description: "A beautifully embroidered Punjabi suit with traditional craftsmanship. Features delicate handwork and a comfortable fit.",
    fabric: "Pure cotton with silk embroidery",
    color: "Teal Blue",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Hand Block Printed Kurta",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹8,999",
    category: "India Wear",
    isNew: true,
    description: "A hand block printed kurta showcasing traditional artisanal techniques. Each piece is unique with slight variations in the print pattern.",
    fabric: "Organic cotton",
    color: "Indigo Blue",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Traditional Saree",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    price: "₹18,599",
    category: "India Wear",
    isNew: false,
    description: "A luxurious traditional saree with rich detailing and exquisite craftsmanship. Includes a matching blouse piece.",
    fabric: "Banarasi silk",
    color: "Deep Red with Gold Border",
    sizes: ["Free Size"],
  },
  {
    id: 5,
    name: "Silk Fusion Blouse",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    price: "₹4,999",
    category: "Western Wear",
    isNew: true,
    description: "A contemporary silk fusion blouse that bridges traditional and modern aesthetics. Versatile enough for both casual and formal occasions.",
    fabric: "Silk blend",
    color: "Emerald Green",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 6,
    name: "Contemporary Pants",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    price: "₹6,599",
    category: "Western Wear",
    isNew: false,
    description: "Modern, well-tailored pants with a comfortable fit and elegant detailing. Perfect for professional settings or evening events.",
    fabric: "Cotton blend with stretch",
    color: "Black",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 7,
    name: "Designer Top",
    image: "https://web-assets.same.dev/3826536520/3735686446.png",
    price: "₹3,999",
    category: "Western Wear",
    isNew: true,
    description: "A stylish designer top with contemporary detailing and flattering cut. Easily dressed up or down for various occasions.",
    fabric: "Premium cotton with lace detailing",
    color: "Off-white",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Indo-Western Jacket",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    price: "₹9,599",
    category: "Western Wear",
    isNew: false,
    description: "A stunning indo-western jacket that combines traditional embroidery with modern styling. Perfect as a statement piece for special events.",
    fabric: "Silk with embroidery",
    color: "Navy Blue with Gold Embroidery",
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  // Find the product based on the ID parameter
  const productId = Number(params.id);
  const product = allProducts.find(p => p.id === productId);
  
  // Handle navigation when product not found
  useEffect(() => {
    if (!product && params.id) {
      router.push('/products');
    }
  }, [product, params.id, router]);
  
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