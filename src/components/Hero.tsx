"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-soft-beige flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 z-10" />
        <Image
          src="https://web-assets.same.dev/3912981138/3739621807.jpeg"
          alt="Luxurious Indian Fashion"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-16">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="inline-block text-gold text-sm md:text-base font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Welcome to Reeta Madaan
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight tracking-tight text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Where Tradition Meets
            <span
              className="block mt-1 text-gold"
              style={{
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
              }}
            >
              Modern Elegance
            </span>
          </motion.h1>

          <motion.p
            className="text-white text-base md:text-lg mb-8 max-w-lg text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Discover a world where timeless Indian craftsmanship and contemporary fashion unite.
            Our unique collection of finely crafted attire caters to every style and occasion.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/products" className="flex items-center gap-2">
                Explore Collection
                <ArrowRight size={16} />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 block">
              <Link href="/about-us">
                About Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />

      <motion.div
        className="absolute bottom-8 right-8 md:right-12 z-20 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          ease: "easeOut"
        }}
      >
        <Image
          src="https://web-assets.same.dev/3859986984/332052239.png"
          alt="Decorative Element"
          width={120}
          height={120}
          className="opacity-70"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-white text-sm font-light">Scroll Down</span>
        <motion.div
          className="w-0.5 h-10 bg-white/30 rounded-full overflow-hidden relative"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gold" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
