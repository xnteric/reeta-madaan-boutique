"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  isNew?: boolean;
};

type ProductQuickViewProps = {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProductQuickView({ product, open, onOpenChange }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} added to cart!`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto p-0">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="text-xl font-serif">{product.name}</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X size={18} />
              </Button>
            </DialogClose>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative rounded-lg overflow-hidden bg-background">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-primary text-white">New</Badge>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <DialogDescription className="mb-4">
                <span className="text-sm text-primary font-medium">
                  {product.category}
                </span>
              </DialogDescription>

              <div className="mb-6">
                <p className="text-xl font-medium text-primary mb-2">{product.price}</p>
                <p className="text-muted-foreground text-sm">
                  Quick preview of this product. View the full details for more information.
                </p>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Quantity</h3>
                <div className="flex items-center border rounded-md w-32">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={14} />
                  </Button>
                  <div className="flex-1 text-center font-medium">{quantity}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={14} />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Add to Cart
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/products/${product.id}`}>
                    View Full Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 