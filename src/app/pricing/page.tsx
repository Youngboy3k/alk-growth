"use client";

import HeroSection from "@/components/hero-section";
import BeamsBackground from "@/components/kokonutui/beams-background";
import PricingSection from "@/components/pricing-section";
import { FooterSimple } from "@/components/footer-simple";
import { useEffect } from "react";

export default function Pricing() {
  useEffect(() => {
    // Smooth scroll to pricing section after component mounts
    setTimeout(() => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BeamsBackground className="min-h-screen w-full">
        <HeroSection />
      </BeamsBackground>
      
      <section id="pricing" className="scroll-mt-24 md:scroll-mt-28">
        <PricingSection />
      </section>
      <FooterSimple />
    </div>
  );
}
