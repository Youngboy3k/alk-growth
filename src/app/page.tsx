import HeroSection from '@/components/hero-section';
import BeamsBackground from '@/components/kokonutui/beams-background';
import AboutUs1 from '@/components/mvpblocks/about-us-1';
import { StatsGrid } from '@/components/stats-grid';
import TestimonialsSection from '@/components/testimonials-section';
import { FaqsAccordion } from '@/components/faqs-accordion';
import ContactSection from '@/components/contact-section';
import { FooterSimple } from '@/components/footer-simple';

export default function Home() {
  return (
    <div className="min-h-screen">
      <BeamsBackground className="min-h-screen w-full">
        <HeroSection />
      </BeamsBackground>
      
      <div className="mt-0">
        <section id="about" className="scroll-mt-24 md:scroll-mt-28">
          <AboutUs1 />
        </section>
      </div>
      <section id="results" className="scroll-mt-24 md:scroll-mt-28">
        <StatsGrid />
      </section>
      <section id="testimonials" className="scroll-mt-24 md:scroll-mt-28">
        <TestimonialsSection />
      </section>
      <section id="faq" className="scroll-mt-24 md:scroll-mt-28">
        <FaqsAccordion />
      </section>
      <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
        <ContactSection />
      </section>
      <FooterSimple />
    </div>
  );
}
