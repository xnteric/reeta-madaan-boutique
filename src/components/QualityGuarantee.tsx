"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QualityGuarantee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 lg:gap-x-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto md:mx-0 max-w-md md:max-w-full px-4 md:px-0"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] w-full">
              <Image
                src="/images/Handcrafted-Quality.png"
                alt="Craftsmanship"
                fill
                className="object-cover object-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 right-0 md:bottom-8 md:right-0 md:translate-x-1/4 bg-cream p-5 md:p-6 rounded-lg shadow-xl max-w-xs z-10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gold text-white p-3 rounded-full flex-shrink-0">
                  <Image
                    src="/images/Top-notch-quality.png"
                    alt="Quality Guaranteed"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium font-serif mb-2">Quality Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    Every piece is crafted with premium materials and meticulous attention to detail, ensuring exceptional quality and longevity.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:pl-4"
          >
            <div>
              <h3 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">About Our Quality</h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Crafted to Perfection, <span className="text-primary">Designed for You</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              At Reeta Madaan, quality is at the heart of everything we do. From fabric selection to the final touches,
              each step in our process is guided by rigorous standards and a commitment to excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Quality Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2 bg-background/50 p-4 rounded-lg border border-border/50"
              >
                <div className="bg-accent/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Artisanal Craftsmanship</h3>
                <p className="text-sm text-muted-foreground">
                  Our dedicated artisans pour their expertise into each stitch, preserving generations of traditional techniques.
                </p>
              </motion.div>

              {/* Quality Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-2 bg-background/50 p-4 rounded-lg border border-border/50"
              >
                <div className="bg-accent/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Premium Materials</h3>
                <p className="text-sm text-muted-foreground">
                  We source only the finest fabrics and materials, ensuring comfort, durability, and a luxurious feel.
                </p>
              </motion.div>

              {/* Quality Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-2 bg-background/50 p-4 rounded-lg border border-border/50"
              >
                <div className="bg-accent/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M5 3a2 2 0 0 0-2 2"></path>
                    <path d="M19 3a2 2 0 0 1 2 2"></path>
                    <path d="M21 19a2 2 0 0 1-2 2"></path>
                    <path d="M5 21a2 2 0 0 1-2-2"></path>
                    <path d="M9 3h1"></path>
                    <path d="M9 21h1"></path>
                    <path d="M14 3h1"></path>
                    <path d="M14 21h1"></path>
                    <path d="M3 9v1"></path>
                    <path d="M21 9v1"></path>
                    <path d="M3 14v1"></path>
                    <path d="M21 14v1"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Meticulous Finishing</h3>
                <p className="text-sm text-muted-foreground">
                  Every garment undergoes rigorous quality checks to ensure flawless finishing and impeccable detailing.
                </p>
              </motion.div>

              {/* Quality Feature 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-2 bg-background/50 p-4 rounded-lg border border-border/50"
              >
                <div className="bg-accent/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="m16 13-3.5 3.5-2-2L8 17"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Certified Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Our designs adhere to the highest industry standards, ensuring you receive nothing short of excellence.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/about-us" className="flex items-center gap-2">
                  Learn More About Our Process
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
