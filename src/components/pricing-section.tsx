'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function PricingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-gradient-to-b from-[#FAFAFF] to-[#FFFFFF] overflow-hidden"
    >
      {/* Top and bottom border glow - Mobile optimized */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,255,0.05)] to-transparent md:via-[rgba(155,120,255,0.1)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,255,0.05)] to-transparent md:via-[rgba(155,120,255,0.1)]" />
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-16 mobile-no-animation"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Pricing
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            We create professional, conversion-focused websites that help your business grow and stand out online.
          </p>
        </motion.div>

        {/* Row 1: Web Development - Two Large Cards */}
        <div className="web-dev grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Single-Page Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full mobile-no-animation"
          >
            <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-0 max-w-[480px] mx-auto"
                  style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
              <CardContent className="p-8 lg:p-12 h-full flex flex-col min-h-[600px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Single-Page Website
                  </h3>
                  <p className="text-[#555] text-base mb-4">
                    Perfect for startups and small businesses
                  </p>
                  <div className="text-3xl md:text-4xl font-medium text-primary mb-6">
                    €900
                    <span className="text-lg text-[#555] font-normal"> (one-time)</span>
                  </div>
                </div>
                
                <p className="text-[#555] text-base mb-6 flex-1">
                  A professional one-page website that builds trust, performs beautifully on all devices, and helps you get found online.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-foreground mb-4">Includes:</h4>
                  <ul className="space-y-2 text-[#555] text-base">
                    <li>• Modern, responsive design</li>
                    <li>• Optimized for Google and AI visibility</li>
                    <li>• Mobile-friendly and performance-optimized</li>
                    <li>• Contact form and clear call-to-action</li>
                    <li>• First month of maintenance & support included</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-auto">
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      asChild
                    >
                      <a href="#contact">
                        <span className="text-nowrap">Get Started</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Multi-Page Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full mobile-no-animation"
          >
            <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-0 max-w-[480px] mx-auto"
                  style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
              <CardContent className="p-8 lg:p-12 h-full flex flex-col min-h-[600px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Multi-Page Website
                  </h3>
                  <p className="text-[#555] text-base mb-4">
                    Best for growing businesses with more to showcase
                  </p>
                  <div className="text-3xl md:text-4xl font-medium text-primary mb-6">
                    €1 500
                    <span className="text-lg text-[#555] font-normal"> (one-time)</span>
                  </div>
                </div>
                
                <p className="text-[#555] text-base mb-6 flex-1">
                  A multi-page structure designed for companies with multiple services, case studies, or a broader story to tell.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-foreground mb-4">Includes:</h4>
                  <ul className="space-y-2 text-[#555] text-base">
                    <li>• Everything from the Single-Page Website</li>
                    <li>• Multi-page layout tailored to your content and goals</li>
                    <li>• Ideal for businesses with multiple offerings or service areas</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-auto">
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      asChild
                    >
                      <a href="#contact">
                        <span className="text-nowrap">Get Started</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Row 2: Maintenance & Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="maintenance mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-out border-0"
               style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Maintenance & Support
            </h3>
            <p className="text-[#555] text-base">
              Your first month is included. After that, ongoing care continues for <span className="font-medium text-primary">€100/month</span>, covering updates, performance checks, and minor adjustments.
            </p>
          </div>
        </motion.div>

        {/* Row 3: SEO Services - Three Equal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="seo-services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 hidden"
        >
          {/* Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full mobile-no-animation"
          >
            <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-0"
                  style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Blog Posts
                  </h3>
                  <div className="text-2xl font-medium text-primary mb-4">
                    €600
                    <span className="text-lg text-[#555] font-normal">/month</span>
                  </div>
                </div>
                
                <p className="text-[#555] text-base mb-6 flex-1">
                  Regular, high-quality blog content to boost your online presence and engage your audience.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-foreground mb-3">Includes:</h4>
                  <ul className="space-y-2 text-[#555] text-sm">
                    <li>• 4 SEO-optimized blog posts per month</li>
                    <li>• Keyword research and optimization</li>
                    <li>• Content tailored to your business</li>
                    <li>• Direct upload to your website</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-auto">
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      asChild
                    >
                      <a href="#contact">
                        <span className="text-nowrap">Get Started</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full mobile-no-animation"
          >
            <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-0"
                  style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    SEO Optimization
                  </h3>
                  <div className="text-2xl font-medium text-primary mb-4">
                    €600
                    <span className="text-lg text-[#555] font-normal">/month</span>
                  </div>
                </div>
                
                <p className="text-[#555] text-base mb-6 flex-1">
                  Comprehensive SEO services to improve your search engine rankings and drive organic traffic.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-foreground mb-3">Includes:</h4>
                  <ul className="space-y-2 text-[#555] text-sm">
                    <li>• Technical SEO audits</li>
                    <li>• Keyword research and strategy</li>
                    <li>• On-page optimization</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-auto">
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      asChild
                    >
                      <a href="#contact">
                        <span className="text-nowrap">Get Started</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO + Blog Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full mobile-no-animation"
          >
            <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-0"
                  style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    SEO + Blog Bundle
                  </h3>
                  <div className="text-2xl font-medium text-primary mb-4">
                    €1 000
                    <span className="text-lg text-[#555] font-normal">/month</span>
                  </div>
                </div>
                
                <p className="text-[#555] text-base mb-6 flex-1">
                  Complete content and SEO solution combining blog posts with comprehensive optimization for maximum impact.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-foreground mb-3">Includes:</h4>
                  <ul className="space-y-2 text-[#555] text-sm">
                    <li>• Everything from Blog Posts</li>
                    <li>• Everything from SEO Optimization</li>
                    <li>• 8 blog posts per month</li>
                    <li>• Advanced SEO strategy</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-auto">
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      asChild
                    >
                      <a href="#contact">
                        <span className="text-nowrap">Get Started</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <p className="text-[#555] text-lg mb-8 max-w-2xl mx-auto">
            Every project starts with a free homepage preview see your website before you commit.
          </p>
          <div className="flex justify-center">
            <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
              <Button
                size="lg"
                className="rounded-xl px-5 text-base"
                asChild
              >
                <a href="#contact">
                  <span className="text-nowrap">Get Started</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}