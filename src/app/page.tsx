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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <Features />

        <FeaturedProducts />

        <QualityGuarantee />

        <ProcessSteps />

        <Testimonials />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
