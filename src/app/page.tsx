import dynamic from 'next/dynamic';
import HeroSection from '@/components/hero-section';
import BeamsBackground from '@/components/kokonutui/beams-background';

// Lazy load heavy components for better mobile performance
const AboutUs1 = dynamic(() => import('@/components/mvpblocks/about-us-1'), {
  loading: () => <div className="h-96 bg-background animate-pulse rounded-lg" />
});
const ProcessSection = dynamic(() => import('@/components/process-section'), {
  loading: () => <div className="h-96 bg-background animate-pulse rounded-lg" />
});
const PricingSection = dynamic(() => import('@/components/pricing-section'), {
  loading: () => <div className="h-96 bg-background animate-pulse rounded-lg" />
});
const ContactSection = dynamic(() => import('@/components/contact-section'), {
  loading: () => <div className="h-96 bg-background animate-pulse rounded-lg" />
});
const FaqsAccordion = dynamic(() => import('@/components/faqs-accordion').then(mod => ({ default: mod.FaqsAccordion })), {
  loading: () => <div className="h-96 bg-background animate-pulse rounded-lg" />
});
const FooterSimple = dynamic(() => import('@/components/footer-simple').then(mod => ({ default: mod.FooterSimple })), {
  loading: () => <div className="h-32 bg-background animate-pulse rounded-lg" />
});

export default function Home() {
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
      {/* Removed Why Choose / Results section */}
      {/* <section id="testimonials" className="scroll-mt-24 md:scroll-mt-28">
        <TestimonialsSection />
      </section> */}
      <section id="process" className="scroll-mt-24 md:scroll-mt-28">
        <ProcessSection />
      </section>
      <section id="pricing" className="scroll-mt-24 md:scroll-mt-28">
        <PricingSection />
      </section>
      <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
        <ContactSection />
      </section>
      <section id="faq" className="scroll-mt-24 md:scroll-mt-28">
        <FaqsAccordion />
      </section>
      <FooterSimple />
    </div>
  );
}
