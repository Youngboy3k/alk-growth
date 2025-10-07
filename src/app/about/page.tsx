"use client";

import HeroSection from "@/components/hero-section";
import BeamsBackground from "@/components/kokonutui/beams-background";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import { FooterSimple } from "@/components/footer-simple";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Smooth scroll to about section after component mounts
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BeamsBackground className="min-h-screen w-full">
        <HeroSection />
      </BeamsBackground>
      
      <div className="mt-0">
        <section id="about" className="scroll-mt-24 md:scroll-mt-28">
          <AboutUs1 />
        </section>
      </div>
      <FooterSimple />
    </div>
  );
}
