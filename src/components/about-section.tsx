"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeUp" className="text-center mb-8 sm:mb-12">
            <Badge variant="secondary" className="mb-3 sm:mb-4">
              About ALK Growth
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              AI-Powered Digital{" "}
              <span className="text-primary">Excellence</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeUp" delay={0.1} duration={0.6} className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              We're AI-powered website and SEO specialists who help businesses dominate their markets through intelligent digital solutions. Our team combines cutting-edge artificial intelligence with proven SEO strategies to build websites that don't just look great—they perform exceptionally.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Founded on the principle that every business deserves a competitive edge online, we've developed proprietary AI systems that analyze, optimize, and continuously improve your web presence. From local businesses to growing enterprises, we've helped hundreds of companies achieve measurable growth through smarter websites and strategic SEO.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Our mission is simple: leverage AI technology to make professional website building and SEO optimization accessible, effective, and results-driven for businesses of all sizes.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <ScrollAnimation animation="fadeUp" delay={0.2} duration={0.5} className="text-center p-6 rounded-lg bg-card border border-border/50">
              <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Cutting-edge artificial intelligence drives every solution we create.</p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.3} duration={0.5} className="text-center p-6 rounded-lg bg-card border border-border/50">
              <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-muted-foreground">Measurable growth and performance improvements for every client.</p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.4} duration={0.5} className="text-center p-6 rounded-lg bg-card border border-border/50">
              <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Experience</h3>
              <p className="text-muted-foreground">Hundreds of successful projects across various industries.</p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeUp" delay={0.5} duration={0.6} className="text-center">
            <Button 
              size="lg"
              data-cal-link="info-alk-growth.com/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Start Your Growth Journey
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
