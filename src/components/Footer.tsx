"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-white/90 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://web-assets.same.dev/340859424/423611638.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
            opacity: 0.1
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Reeta Madaan"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="text-xl font-serif text-white">Reeta Madaan</span>
              </div>
            </Link>

            <p className="text-white/70 mt-4 max-w-md">
              Discover a world where timeless Indian craftsmanship and contemporary fashion unite.
              Our unique collection of finely crafted attire caters to every style and occasion.
            </p>

            <div className="flex space-x-4 mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-gold"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Menu Links - Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-gold transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white/70 hover:text-gold transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-gold transition-colors duration-200"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-gold transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white/70 hover:text-gold transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-5 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-3">
                  <MapPin size={18} className="text-gold shrink-0" />
                </div>
                <span className="text-white/80 leading-relaxed">
                  261 Guru Teg Bahadur nagar<br /> 
                  Jalandhar city
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-3">
                  <Mail size={18} className="text-gold shrink-0" />
                </div>
                <div className="flex flex-col">
                  <Link
                    href="mailto:info@reetamadaan@gmail.com"
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    info@reetamadaan@gmail.com
                  </Link>
                  <Link
                    href="mailto:enquiry@reetamadaan@gmail.com"
                    className="text-white/80 hover:text-gold transition-colors duration-200 mt-1"
                  >
                    enquiry@reetamadaan@gmail.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-3">
                  <Phone size={18} className="text-gold shrink-0" />
                </div>
                <div className="flex flex-col">
                  <Link
                    href="tel:+919876181817"
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    +91 9876181817
                  </Link>
                  <Link
                    href="tel:+916280833993"
                    className="text-white/80 hover:text-gold transition-colors duration-200 mt-1"
                  >
                    +91 6280833993
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-5 text-white">Get Enquiry</h3>
            <form className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold px-4 py-3 h-auto rounded-md hover:border-white/40 transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold px-4 py-3 h-auto rounded-md hover:border-white/40 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/60 focus:border-gold focus:outline-none hover:border-white/40 transition-colors"
                ></textarea>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-white border-none font-medium py-6 h-auto rounded-md transition-colors duration-300 mt-2"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Reeta Madaan. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            Powered by <span className="text-gold hover:underline">Same.dev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
