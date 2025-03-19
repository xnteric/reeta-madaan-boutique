"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: "/images/Handcrafted-Quality.png",
    title: "Handcrafted Quality",
    description: "Each garment is meticulously crafted with exquisite attention to detail, incorporating traditional techniques such as hand embroidery and intricate stitching patterns."
  },
  {
    icon: "/images/Shipping-Worldwide.png",
    title: "Shipping Worldwide",
    description: "We deliver our luxurious creations to fashion enthusiasts across the globe, ensuring that our artisanal craftsmanship reaches every corner of the world."
  },
  {
    icon: "/images/Top-notch-quality.png",
    title: "Top Notch Fabrics",
    description: "We source only the finest textiles, from sumptuous silks to breathable cottons, ensuring that every piece not only looks exquisite but feels magnificent against your skin."
  },
  {
    icon: "/images/Customised-Fabrics.png",
    title: "Customized Creations",
    description: "Our bespoke service allows you to collaborate with our designers to create personalized garments that perfectly reflect your individual style and preferences."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(/images/Untitled-design-2.png)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          opacity: 0.05
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-primary">Reeta Madaan</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-primary mx-auto mb-6"
          />

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            At Reeta Madaan, we don't just make clothing; we create wearable art that combines elegance,
            comfort, and tradition. Here's why our clients trust us for their most cherished looks.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-accent/20"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-serif font-medium mb-3 text-primary">
                {feature.title}
              </h3>

              <Separator className="w-12 bg-gold h-0.5 mb-4" />

              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
