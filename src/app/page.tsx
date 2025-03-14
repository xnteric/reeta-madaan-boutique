import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import QualityGuarantee from "@/components/QualityGuarantee";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Features />

      <FeaturedProducts />

      <QualityGuarantee />

      <ProcessSteps />

      <Testimonials />

      <Newsletter />

      <Footer />
    </main>
  );
}
