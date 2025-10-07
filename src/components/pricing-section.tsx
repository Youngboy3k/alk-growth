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
      {/* Top and bottom border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,255,0.1)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,255,0.1)] to-transparent" />
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Pricing
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            We create professional, conversion-focused websites that help your business grow and stand out online.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Single-Page Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
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

          {/* Professional Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-0 max-w-[480px] mx-auto"
                  style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
              <CardContent className="p-8 lg:p-12 h-full flex flex-col min-h-[600px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Professional Website
                  </h3>
                  <p className="text-[#555] text-base mb-4">
                    Best for growing businesses with more to showcase
                  </p>
                  <div className="text-3xl md:text-4xl font-medium text-primary mb-6">
                    €1,400
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

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8 mb-16"
        >
          {/* Maintenance & Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-out border-0"
               style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Maintenance & Support
            </h3>
            <p className="text-[#555] text-base">
              Your first month is included. After that, ongoing care continues for <span className="font-medium text-primary">€100/month</span>, covering updates, performance checks, and minor adjustments.
            </p>
          </div>

          {/* Blog Post Automation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-out border-0"
               style={{ boxShadow: '0 10px 40px rgba(130, 100, 255, 0.15)' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Optional Add-On: Blog Post Automation
            </h3>
            <p className="text-[#555] text-base mb-4">
              Boost your visibility even further
            </p>
            <div className="text-2xl font-medium text-primary mb-4">
              €500/month
            </div>
            <p className="text-[#555] text-base">
              Includes 8 SEO-optimized blog posts per month tailored to your business and audience, uploaded directly to your website.
            </p>
          </div>
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