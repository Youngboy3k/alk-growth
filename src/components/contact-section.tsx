"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp" className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Contact{" "}
            <span className="text-primary">ALK Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and how we can help you grow.
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <ScrollAnimation animation="slideLeft" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </CardTitle>
                  <CardDescription>
                    Send us an email and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:info@alk-growth.com"
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                  >
                    info@alk-growth.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a Call
                  </CardTitle>
                  <CardDescription>
                    Book a free consultation to discuss your project requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    data-cal-link="info-alk-growth.com/15min"
                    data-cal-namespace="15min"
                    data-cal-config='{"layout":"month_view"}'
                    className="w-full"
                  >
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Quick Contact Form */}
            <ScrollAnimation animation="slideRight">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* CTA Section */}
          <ScrollAnimation animation="fadeUp" delay={0.4} className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to get started? Choose your preferred way to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                data-cal-link="info-alk-growth.com/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:info@alk-growth.com">
                  Email Us
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
