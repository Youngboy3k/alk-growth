"use client";

import HeroSection from "@/components/hero-section";
import BeamsBackground from "@/components/kokonutui/beams-background";
import ContactSection from "@/components/contact-section";
import { FooterSimple } from "@/components/footer-simple";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Smooth scroll to contact section after component mounts
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BeamsBackground className="min-h-screen w-full">
        <HeroSection />
      </BeamsBackground>
      
      <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
        <ContactSection />
      </section>
      <FooterSimple />
    </div>
  );
}
