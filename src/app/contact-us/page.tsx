import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-20 sm:pt-24 bg-cream relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/Untitled-design-2.png)",
              backgroundSize: "200px",
              backgroundRepeat: "repeat",
              opacity: 0.05
            }}
          />
        </div>

        <div className="container-custom py-8 sm:py-12 md:py-16 relative z-10">
          {/* Decorative Image */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
            <Image
              src="/images/Handcrafted-Quality.png"
              alt="Decorative"
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4">Contact Us</h1>
            <div className="h-0.5 w-20 bg-primary mx-auto mb-4 sm:mb-6" />
            <p className="text-muted-foreground px-4 sm:px-0">
              We'd love to hear from you. Let us know how we can help with your fashion needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Get in Touch</h2>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    required
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium">Address</h3>
                      <p className="text-muted-foreground mt-1">
                        261 Guru Teg Bahadur nagar Jalandhar city
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium">Email</h3>
                      <p className="text-muted-foreground mt-1">
                        info@reetamadaan.com<br />
                        enquiry@reetamadaan.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium">Phone</h3>
                      <p className="text-muted-foreground mt-1">
                        +91 9876181817<br />
                        +91 6280833993
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-sm h-[250px] sm:h-[300px] bg-secondary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.5354773603567!2d75.57976717501765!3d31.32392707413895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c089cf9%3A0x5f7f73f54bc715c2!2sGuru%20Teg%20Bahadur%20Nagar%2C%20Jalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710400486062!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
