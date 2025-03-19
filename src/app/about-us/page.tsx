import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 bg-cream">
        <div className="container-custom py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-serif mb-4">About Reeta Madaan</h1>
            <div className="h-0.5 w-20 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground">
              Our story of craftsmanship, tradition, and timeless elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">
                The Modern Luxury Shopping Destination
              </h2>
              <p className="mb-4 text-muted-foreground">
                Founded by Reeta Madaan, a fashion designer with an enduring passion for artful design, our label embodies the perfect blend of heritage and modernity.
              </p>
              <p className="mb-4 text-muted-foreground">
                Since 2000, Reeta Madaan has dedicated herself to bringing the beauty of Indian crafts to a wider audience through meticulously designed apparel that speaks to every generation.
              </p>
              <p className="mb-6 text-muted-foreground">
                At Reeta Madaan, we believe in the timeless appeal of handcrafted elegance. From intricate hand embroidery to the delicate art of hand block printing, each garment is crafted with care and attention, ensuring that every piece tells a story of skill and dedication.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact-us">Get In Touch</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/fashion-runway.png"
                  alt="Reeta Madaan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 md:bottom-auto md:-left-12 md:top-1/2 md:-translate-y-1/2 bg-cream p-5 md:p-6 rounded-lg shadow-xl max-w-xs">
                <div className="font-serif text-primary text-xl mb-2">Our Mission</div>
                <p className="text-sm text-muted-foreground">
                  To celebrate the beauty of Indian craftsmanship by blending traditional techniques with modern design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
