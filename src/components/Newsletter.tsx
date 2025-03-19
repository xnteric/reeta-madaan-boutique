"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/Untitled-design-2.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
            opacity: 0.1
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
                Stay Updated with
                <span className="block text-primary mt-1">Our Latest Collections</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and be the first to know about new arrivals,
                exclusive offers, and fashion tips from our expert designers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 pl-4 pr-36 bg-white border-accent-foreground/20 focus:border-primary"
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 h-10 bg-primary hover:bg-primary/90 text-white"
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground/80">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </motion.div>

            {/* Right Side - Decorative Element */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-sm aspect-square p-6">
                <div className="absolute inset-0 rounded-full bg-accent/30" />
                <div className="absolute inset-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/images/runway-show.png"
                    alt="Reeta Madaan Newsletter"
                    width={300}
                    height={300}
                    className="object-cover rounded-full h-full w-full"
                  />
                </div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-gold text-white p-4 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="block text-center font-medium">Join<br/>Now</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
