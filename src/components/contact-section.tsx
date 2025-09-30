'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Declare Cal.com types
declare global {
  interface Window {
    Cal: any;
  }
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Initialize Cal.com inline embed
  useEffect(() => {
    // Wait for the global Cal script to be available
    const initCal = () => {
      if (typeof window !== 'undefined' && window.Cal) {
        // Initialize the inline embed
        window.Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline-30min",
          config: { "layout": "month_view" },
          calLink: "alk-growth.com/30min",
        });
      } else {
        // Retry after a short delay if Cal is not yet available
        setTimeout(initCal, 100);
      }
    };

    // Start initialization
    initCal();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your business with a stunning website? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Cal.com Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-12"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Book a Free Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a 30-minute call to discuss your project, get a free quote, and see how we can help grow your business.
                </p>
                
                {/* Cal.com Inline Embed */}
                <div 
                  id="my-cal-inline-30min"
                  className="w-full h-[600px] overflow-auto rounded-lg border border-border/50 bg-background"
                  style={{ width: '100%', height: '600px', overflow: 'auto' }}
                >
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Loading calendar...
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">hello@alkgrowth.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground text-sm">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
