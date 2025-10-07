"use client";

import HeroSection from "@/components/hero-section";
import BeamsBackground from "@/components/kokonutui/beams-background";
import { FaqsAccordion } from "@/components/faqs-accordion";
import { FooterSimple } from "@/components/footer-simple";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    // Smooth scroll to FAQ section after component mounts
    setTimeout(() => {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BeamsBackground className="min-h-screen w-full">
        <HeroSection />
      </BeamsBackground>
      
      <section id="faq" className="scroll-mt-24 md:scroll-mt-28">
        <FaqsAccordion />
      </section>
      <FooterSimple />
    </div>
  );
}
