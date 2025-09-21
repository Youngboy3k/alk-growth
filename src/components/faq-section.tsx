"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // Account for fixed navbar
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const faqs = [
  {
    question: "What's the difference between your service packages?",
    answer: "We offer three packages: Website Building (custom responsive design with AI optimization), Website + SEO (everything in Website Building plus advanced SEO implementation), and Full Growth Package (complete solution with automated blog content and ongoing monitoring). Each package builds upon the previous one."
  },
  {
    question: "How long does website building take?",
    answer: "Typically, we deliver a complete website within 2-4 weeks, depending on the complexity and scope of your project. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with existing websites for rebuilds?",
    answer: "Yes, we can redesign and optimize existing websites. We'll analyze your current site and provide recommendations for improvements while preserving your brand identity."
  },
  {
    question: "What's included in your SEO optimization?",
    answer: "Our SEO services include keyword research, on-page optimization, meta tags, schema markup, site speed optimization, mobile optimization, technical SEO audit & fixes, and local SEO optimization."
  },
  {
    question: "How does the blog automation work in the Full Growth Package?",
    answer: "Our AI-powered blog automation system creates high-quality, SEO-optimized content based on your industry and target keywords. It includes content strategy development, automated posting schedules, and performance tracking."
  },
  {
    question: "How do I choose the right package for my business?",
    answer: "Start with our free consultation where we'll analyze your needs and goals. Generally, new businesses choose Website Building, established businesses wanting growth choose Website + SEO, and businesses serious about dominating their market choose the Full Growth Package."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! All our plans include support periods ranging from 3-12 months. We also offer ongoing maintenance and support packages for long-term partnerships."
  },
  {
    question: "Can you help with local SEO for my business?",
    answer: "Absolutely! Our Website + SEO and Full Growth packages include local SEO optimization, Google My Business setup, local keyword targeting, and location-based content strategies to help you dominate your local market."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Got questions? We've got{" "}
            <span className="text-primary">answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              data-cal-link="info-alk-growth.com/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
