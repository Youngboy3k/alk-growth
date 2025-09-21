import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeTestimonialsSection } from "@/components/marquee-testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeTestimonialsSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}
