"use client";

import HeroSection from "@/components/hero-section";
import BeamsBackground from "@/components/kokonutui/beams-background";
import ProcessSection from "@/components/process-section";
import { FooterSimple } from "@/components/footer-simple";
import { useEffect } from "react";

export default function Process() {
  useEffect(() => {
    // Smooth scroll to process section after component mounts
    setTimeout(() => {
      const processSection = document.getElementById("process");
      if (processSection) {
        processSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BeamsBackground className="min-h-screen w-full">
        <HeroSection />
      </BeamsBackground>
      
      <section id="process" className="scroll-mt-24 md:scroll-mt-28">
        <ProcessSection />
      </section>
      <FooterSimple />
    </div>
  );
}
