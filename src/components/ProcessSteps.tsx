"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Your Idea",
    description: "Share your vision with us, whether it's a specific design, customization of an existing piece, or a concept that needs refinement.",
    icon: (
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
        className="w-6 h-6"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        <path d="M12 2v2"></path>
        <path d="M12 22v-2"></path>
        <path d="m17 20.66-1-1.73"></path>
        <path d="M11 10.27 7 3.34"></path>
        <path d="m20.66 17-1.73-1"></path>
        <path d="m3.34 7 1.73 1"></path>
        <path d="M14 12h8"></path>
        <path d="M2 12h2"></path>
        <path d="m20.66 7-1.73 1"></path>
        <path d="m3.34 17 1.73-1"></path>
        <path d="m17 3.34-1 1.73"></path>
        <path d="m7 20.66 1-1.73"></path>
      </svg>
    ),
    subtitle: "Blueprint & Designs"
  },
  {
    id: 2,
    title: "Prototype",
    description: "Our expert design team develops a prototype that's perfectly aligned with your concept, adjusting every detail to your specifications.",
    icon: (
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
        className="w-6 h-6"
      >
        <path d="M5.2 6.2l1.4 1.4"></path>
        <path d="M13 2H7a5 5 0 0 0-5 5"></path>
        <path d="M17.4 7.6l1.4 1.4"></path>
        <path d="M22 7v-.5a3.5 3.5 0 0 0-3.5-3.5"></path>
        <path d="M14.5 17.7a4 4 0 0 0 6.7-4.4"></path>
        <path d="M18 12h.5"></path>
        <path d="M4 15l2 2"></path>
        <path d="M8.4 18.4l1.4 1.4"></path>
        <path d="M3 12h1"></path>
        <path d="M2 9v1"></path>
        <path d="M13 7.5V10l2.5 2.5"></path>
        <path d="M9.5 14.5 12 12l.5-.5"></path>
        <path d="M12 12c-.5-.5-1.4-1.5-2-2"></path>
        <path d="M3 21c4.5 0 8-2 12-4.5"></path>
        <path d="M20 15c1 1 1 3.5 1 6"></path>
      </svg>
    ),
    subtitle: "Pattern Grading & Sample Making"
  },
  {
    id: 3,
    title: "Approvals",
    description: "Review your prototype and provide feedback. We'll make adjustments until every detail meets your expectations.",
    icon: (
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
        className="w-6 h-6"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    subtitle: "Sample Approval & Pattern Grading"
  },
  {
    id: 4,
    title: "Finalize",
    description: "Once approved, we proceed with the production of your custom design, maintaining the same quality and attention to detail.",
    icon: (
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
        className="w-6 h-6"
      >
        <path d="M3 6v18h18"></path>
        <path d="M7 14h.01"></path>
        <path d="M11 16h.01"></path>
        <path d="M16 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
        <path d="m15 11-.91-2.2-.32.1a1.5 1.5 0 0 1-1.9-.8 1.5 1.5 0 0 1 .8-1.9l.32-.1L13 4l-.44-.9h-.33a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5h.33L13 1l3 5 1.1.57.07-.37a1.5 1.5 0 0 1 1.5-1.2 1.5 1.5 0 0 1 1.2 1.5v.37l1.33.7 3 5-2 1-1 5-5 2-5-2-1-5-2-1 1-2v-.5h.01"></path>
      </svg>
    ),
    subtitle: "Approval for Bulk Production"
  },
  {
    id: 5,
    title: "Dispatch",
    description: "We carefully package and ship your finished garments, ensuring they reach you in perfect condition, ready to be enjoyed.",
    icon: (
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
        className="w-6 h-6"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
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
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://web-assets.same.dev/340859424/423611638.png)",
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            How to Get My <span className="text-primary">Clothing Designs</span> Made
          </h2>
          <div className="h-0.5 w-20 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            From conception to delivery, our streamlined process ensures that your design vision becomes reality
            with the exceptional quality and craftsmanship that defines Reeta Madaan.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-start justify-between gap-4 relative"
        >
          {/* Process Line */}
          <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-primary/30 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative flex flex-col md:flex-row items-start gap-4 w-full md:w-1/5"
            >
              {/* Step Number and Icon Circle */}
              <div className="relative z-10">
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white shadow-lg mb-4">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-medium text-sm">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="md:ml-4 flex-1">
                <h3 className="text-xl font-serif font-medium mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector Line for Mobile - to separate each step */}
              {index < steps.length - 1 && (
                <div className="h-6 w-0.5 bg-primary/30 mx-auto my-4 md:hidden" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-6"
          >
            <Link href="/contact-us" className="flex items-center gap-2">
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
