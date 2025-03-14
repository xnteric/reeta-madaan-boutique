"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { QuoteIcon } from "@radix-ui/react-icons";
// Import from embla-carousel-react instead of embla-carousel-autoplay
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Anjali M.",
    avatar: "https://web-assets.same.dev/2076236770/3757503505.png",
    comment: "As someone who appreciates Indian culture and art, I'm thrilled to find a brand that truly respects and elevates it. Every piece feels like it has a story, and I love how Reeta Madaan is keeping traditional techniques alive in such beautiful ways!",
    location: "Mumbai, India"
  },
  {
    id: 2,
    name: "Meera R.",
    avatar: "https://web-assets.same.dev/3826536520/3735686446.png",
    comment: "I've never owned anything quite like my Reeta Madaan Anarkali suit. The intricate embroidery and attention to detail are simply stunning. It's clear that each piece is made with passion and dedication. I get compliments every time I wear it!",
    location: "London, UK"
  },
  {
    id: 3,
    name: "Amanpreet S.",
    avatar: "https://web-assets.same.dev/2076236770/3757503505.png",
    comment: "Reeta Madaan has mastered the art of blending traditional Indian aesthetics with modern trends. My customized Punjabi suit fits me like a dream, and the fabric quality is incredible. I'm beyond happy with my purchase!",
    location: "Toronto, Canada"
  },
  {
    id: 4,
    name: "Claudia Hill",
    avatar: "https://web-assets.same.dev/3826536520/3735686446.png",
    comment: "The quality of craftsmanship in my Reeta Madaan outfit is unparalleled. The attention to detail, from the embroidery to the stitching, speaks volumes about their commitment to excellence. Truly a luxury experience from start to finish.",
    location: "New York, USA"
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Manual autoplay implementation
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
  if (emblaApi) emblaApi.scrollNext();
}, [emblaApi, emblaRef]);

  // Auto-scroll effect
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(scrollNext, 4000);
  }, [scrollNext]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const onMouseEnter = useCallback(() => {
    stopAutoplay();
  }, [stopAutoplay]);

  const onMouseLeave = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-deep-brown relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://web-assets.same.dev/742375514/2556174153.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-wider font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl text-white font-serif mt-3 mb-4">
            What Our Customers Say
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
        </motion.div>

        <div
          ref={emblaRef}
          className="overflow-hidden"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-4">
                        <QuoteIcon className="h-8 w-8 text-gold" />
                        <p className="text-white/90 italic leading-relaxed">
                          "{testimonial.comment}"
                        </p>
                      </div>
                      <div className="flex items-center pt-4 border-t border-white/10">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-white/60 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="bg-white/10 hover:bg-white/20 text-white h-10 w-10 rounded-full flex items-center justify-center"
              aria-label="Previous testimonial"
            >
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
                className="w-5 h-5"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="bg-gold hover:bg-gold/90 text-white h-10 w-10 rounded-full flex items-center justify-center"
              aria-label="Next testimonial"
            >
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
                className="w-5 h-5"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
