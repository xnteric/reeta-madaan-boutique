"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Your Idea",
    description: "Share your vision with us, whether it's a specific design, customization of an existing piece, or a concept that needs refinement.",
    icon: (
      <Image
        src="/images/Handcrafted-Quality.png"
        alt="Your Idea"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    subtitle: "Blueprint & Designs"
  },
  {
    id: 2,
    title: "Prototype",
    description: "Our expert design team develops a prototype that's perfectly aligned with your concept, adjusting every detail to your specifications.",
    icon: (
      <Image
        src="/images/Top-notch-quality.png"
        alt="Prototype"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    subtitle: "Pattern Grading & Sample Making"
  },
  {
    id: 3,
    title: "Approvals",
    description: "Review your prototype and provide feedback. We'll make adjustments until every detail meets your expectations.",
    icon: (
      <Image
        src="/images/Shipping-Worldwide.png"
        alt="Approvals"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    subtitle: "Sample Approval & Pattern Grading"
  },
  {
    id: 4,
    title: "Finalize",
    description: "Once approved, we proceed with the production of your custom design, maintaining the same quality and attention to detail.",
    icon: (
      <Image
        src="/images/Customised-Fabrics.png"
        alt="Finalize"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    subtitle: "Approval for Bulk Production"
  },
  {
    id: 5,
    title: "Dispatch",
    description: "We carefully package and ship your finished garments, ensuring they reach you in perfect condition, ready to be enjoyed.",
    icon: (
      <Image
        src="/images/Shipping-Worldwide.png"
        alt="Dispatch"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    subtitle: "Dispatch, Logistics & Reorder"
  }
];

export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/Untitled-design-2.png)",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
            opacity: 0.05
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            How to Get My <span className="text-primary">Clothing Designs</span> Made
          </h2>
          <div className="h-0.5 w-24 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From conception to delivery, our streamlined process ensures that your design vision becomes reality
            with the exceptional quality and craftsmanship that defines Reeta Madaan.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-6 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative bg-white/90 rounded-xl shadow-sm p-6 flex flex-col items-center md:items-start max-w-md mx-auto md:mx-0"
            >
              {/* Step Number and Icon Circle - Restructured */}
              <div className="relative flex items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white shadow-md">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Step number badge - repositioned */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-medium text-sm shadow-sm">
                  {step.id}
                </div>
              </div>

              {/* Step Content - Improved spacing */}
              <div className="mt-6 text-center md:text-left w-full">
                <h3 className="text-xl font-serif font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {step.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Separate container for the quote button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-base">
            <Link href="/contact-us" className="flex items-center gap-2">
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
