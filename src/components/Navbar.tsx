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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/india-wear", label: "India Wear" },
      { href: "/products/western-wear", label: "Western Wear" },
      { href: "/products/accessories", label: "Accessories" },
      { href: "/products/custom-designs", label: "Custom Designs" },
    ]
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-black/30 backdrop-blur-sm py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Reeta Madaan"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className={cn(
              "text-lg md:text-xl font-serif font-medium",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Reeta Madaan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className={cn(
                    "font-sans text-sm font-medium",
                    isScrolled ? "text-foreground" : "text-white"
                  )}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium">{child.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "luxury-transition group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
                        isScrolled ? "text-foreground" : "text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      <span className={cn(
                        "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 mt-0.5",
                        isScrolled ? "bg-primary" : "bg-white"
                      )}></span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className={isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}
          >
            <Search size={20} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Shopping Bag"
            className={isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}
          >
            <ShoppingBag size={20} />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-white">
              0
            </Badge>
          </Button>

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
                className={cn("ml-2", isScrolled ? "text-foreground" : "text-white")}
              >
                <MenuIcon size={24} />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l border-border bg-card p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="font-serif font-medium text-lg">Menu</div>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X size={20} />
                  </Button>
                </div>
                <nav className="flex-1 overflow-auto p-4">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href} className="py-2">
                        {item.children ? (
                          <div className="space-y-3">
                            <div className="font-medium text-primary">{item.label}</div>
                            <ul className="ml-4 space-y-2">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block py-1.5 text-muted-foreground hover:text-foreground"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-1.5 text-lg font-medium hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact-us">Get a Quote</Link>
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
