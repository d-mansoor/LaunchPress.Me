
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { initScrollReveal } from "@/utils/scrollReveal";

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhySection />
      <HowSection />
      <ServiceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
