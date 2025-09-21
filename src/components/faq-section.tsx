"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically, we deliver a complete website within 2-4 weeks, depending on the complexity and scope of your project. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! All our plans include support periods ranging from 3-12 months. We also offer ongoing maintenance and support packages for long-term partnerships."
  },
  {
    question: "Can I update my website content myself?",
    answer: "Absolutely! We provide a user-friendly content management system (CMS) that allows you to easily update text, images, and other content without any technical knowledge."
  },
  {
    question: "What's included in SEO optimization?",
    answer: "Our SEO services include keyword research, on-page optimization, meta tags, schema markup, site speed optimization, mobile optimization, and ongoing performance monitoring."
  },
  {
    question: "Do you work with existing websites?",
    answer: "Yes, we can redesign and optimize existing websites. We'll analyze your current site and provide recommendations for improvements while preserving your brand identity."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and can work with payment plans for larger projects. We'll discuss payment options during our consultation."
  },
  {
    question: "Do you offer hosting services?",
    answer: "Yes, we provide reliable hosting services optimized for performance and security. We can also work with your existing hosting provider if preferred."
  },
  {
    question: "What makes ALK Growth different from other agencies?",
    answer: "We combine AI-powered optimization with personalized service. Our focus on SEO-ready websites means your site is built for growth from day one, not as an afterthought."
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
            <Button size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
