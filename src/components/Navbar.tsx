"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, ShoppingBag, Search } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, itemCount, removeItem, updateQuantity } = useCart();

  useEffect(() => {
    // Set initial scroll state based on current scroll position and path
    const initialCheck = () => {
      // Always use solid navbar on non-home pages, regardless of scroll position
      if (!isHomePage) {
        setIsScrolled(true);
        return;
      }
      
      // On home page, check scroll position
      setIsScrolled(window.scrollY > 10);
    };
    
    // Run immediately on component mount to set correct initial state
    initialCheck();
    
    // Then add listener for future scroll events
    const handleScroll = () => {
      // On non-home pages, always keep the scrolled style
      if (!isHomePage) {
        setIsScrolled(true);
        return;
      }
      
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Re-check isScrolled when pathname changes
  useEffect(() => {
    // Update isScrolled based on the new path
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 10);
    }
  }, [pathname, isHomePage]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-2",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-black/30 backdrop-blur-sm"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Reeta Madaan"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className={cn(
              "text-base sm:text-lg md:text-xl font-serif font-medium",
              isScrolled ? "text-white" : "text-primary"
            )}>
              Reeta Madaan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "luxury-transition group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
                        isScrolled ? "text-foreground" : "text-white",
                        isActive && (isScrolled ? "text-primary" : "text-white font-semibold")
                      )}
                    >
                      <span>{item.label}</span>
                      <span className={cn(
                        "block h-0.5 mt-0.5",
                        isActive 
                          ? "max-w-full bg-primary" 
                          : "max-w-0 group-hover:max-w-full transition-all duration-500",
                        isScrolled ? "bg-primary" : "bg-white"
                      )}></span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className={isScrolled ? "text-foreground hover:text-primary p-1 sm:p-2" : "text-white hover:text-white/80 p-1 sm:p-2"}
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-[300px]">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h2 className="text-xl font-serif">Search Products</h2>
                  <Button variant="ghost" size="icon">
                    <X size={20} />
                  </Button>
                </div>
                <div className="flex-1 py-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search for products..." 
                      className="w-full rounded-md border border-input bg-background px-10 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="cursor-pointer">Anarkali</Badge>
                      <Badge variant="secondary" className="cursor-pointer">Punjabi Suit</Badge>
                      <Badge variant="secondary" className="cursor-pointer">Saree</Badge>
                      <Badge variant="secondary" className="cursor-pointer">Custom Design</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Shopping Bag"
                className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 p-1 sm:p-2"
              >
                <ShoppingBag 
                  className={cn(
                    "sm:w-5 sm:h-5",
                    isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                  )} 
                  size={18} 
                />
                <span className="absolute -top-1.5 sm:-top-2 -right-1 sm:-right-1.5 flex items-center justify-center min-w-4 sm:min-w-5 h-4 sm:h-5 px-1 sm:px-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-medium">
                  {itemCount}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] md:w-[450px]">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h2 className="text-lg sm:text-xl font-serif">Your Cart</h2>
                  <Button variant="ghost" size="icon">
                    <X size={20} />
                  </Button>
                </div>
                <div className="flex-1 py-6 overflow-auto">
                  {items.length > 0 ? (
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{item.name}</h4>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6 text-muted-foreground hover:text-foreground -mt-1 -mr-1"
                                onClick={() => removeItem(item.id)}
                              >
                                <X size={14} />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex items-center border rounded-md">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >-</Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >+</Button>
                              </div>
                              <span className="font-medium">{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="border-t pt-4 mt-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-medium">
                            ₹{items.reduce((sum, item) => {
                              const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
                              return sum + (price * item.quantity);
                            }, 0).toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-muted-foreground">Shipping</span>
                          <span className="font-medium">Calculated at checkout</span>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                          Checkout
                        </Button>
                        <Button asChild variant="outline" className="w-full mt-2">
                          <Link href="/products">Continue Shopping</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                      <ShoppingBag size={50} className="text-muted-foreground/50" />
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium">Your cart is empty</h3>
                        <p className="text-sm text-muted-foreground">Add items to your cart to see them here.</p>
                      </div>
                      <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                        <Link href="/products">Browse Products</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            asChild
            className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white font-medium rounded-md"
          >
            <Link href="/contact-us">Get a Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn("ml-1 sm:ml-2 p-1 sm:p-2", isScrolled ? "text-foreground" : "text-white")}
              >
                <MenuIcon size={22} className="sm:w-6 sm:h-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] md:w-[350px] border-l border-border bg-card p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-3 sm:p-4 border-b">
                  <div className="font-serif font-medium text-base sm:text-lg">Menu</div>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X size={18} className="sm:w-5 sm:h-5" />
                  </Button>
                </div>
                <nav className="flex-1 overflow-auto p-3 sm:p-4">
                  <ul className="space-y-3 sm:space-y-4">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href} className="py-1.5 sm:py-2">
                          <Link
                            href={item.href}
                            className={cn(
                              "block text-base sm:text-lg font-medium",
                              isActive 
                                ? "text-primary border-l-2 border-primary pl-2"
                                : "hover:text-primary"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="p-3 sm:p-4 border-t mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/90 py-2 sm:py-2.5 h-auto text-sm sm:text-base" asChild>
                    <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
