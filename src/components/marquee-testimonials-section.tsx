"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    quote: "ALK Growth transformed our online presence completely. Our website traffic increased by 300% in just 3 months!",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    company: "RetailPro",
    quote: "The AI-powered SEO optimization is incredible. We're ranking #1 for our target keywords without any manual work.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    company: "EcoFriendly Co.",
    quote: "Professional, fast, and results-driven. ALK Growth delivered exactly what they promised and more.",
    avatar: "ER"
  },
  {
    name: "David Kim",
    company: "FinanceFlow",
    quote: "Outstanding service and incredible results. Our conversion rate improved by 250% after the website redesign.",
    avatar: "DK"
  },
  {
    name: "Lisa Thompson",
    company: "HealthTech Solutions",
    quote: "The team's expertise in SEO and user experience is unmatched. Highly recommend their services.",
    avatar: "LT"
  },
  {
    name: "James Wilson",
    company: "GreenEnergy Corp",
    quote: "ALK Growth helped us establish a strong online presence. Our organic traffic has grown exponentially.",
    avatar: "JW"
  },
  {
    name: "Maria Garcia",
    company: "EduTech Platform",
    quote: "Exceptional work on our website. The performance improvements were noticeable immediately.",
    avatar: "MG"
  },
  {
    name: "Robert Brown",
    company: "LogisticsPlus",
    quote: "Professional team that delivers on their promises. Our website now converts visitors into customers effectively.",
    avatar: "RB"
  },
  {
    name: "Jennifer Davis",
    company: "Creative Agency",
    quote: "The AI optimization features are game-changing. Our search rankings improved dramatically.",
    avatar: "JD"
  },
  {
    name: "Christopher Lee",
    company: "Manufacturing Co.",
    quote: "ALK Growth exceeded our expectations. The website is fast, beautiful, and drives results.",
    avatar: "CL"
  }
]

export function MarqueeTestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current && topRowRef.current && bottomRowRef.current) {
      const topCards = topRowRef.current.querySelectorAll('.testimonial-card')
      const bottomCards = bottomRowRef.current.querySelectorAll('.testimonial-card')

      // Set initial state for all cards
      gsap.set([...topCards, ...bottomCards], { y: 100, opacity: 0 })

      // Animate top row cards
      gsap.to(topCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Animate bottom row cards with delay
      gsap.to(bottomCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3, // Delay after top row starts
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What our clients say about{" "}
            <span className="text-primary">ALK Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>
      </div>

      {/* Top Row - Moving Left */}
      <div ref={topRowRef} className="flex animate-marquee-left">
        <div className="flex space-x-6 px-6">
          {testimonials.map((testimonial, index) => (
            <Card key={`top-${index}`} className="testimonial-card flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <blockquote className="text-sm leading-relaxed mb-2 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <Card key={`top-duplicate-${index}`} className="testimonial-card flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <blockquote className="text-sm leading-relaxed mb-2 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Row - Moving Right */}
      <div ref={bottomRowRef} className="flex animate-marquee-right mt-8">
        <div className="flex space-x-6 px-6">
          {testimonials.map((testimonial, index) => (
            <Card key={`bottom-${index}`} className="testimonial-card flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <blockquote className="text-sm leading-relaxed mb-2 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <Card key={`bottom-duplicate-${index}`} className="testimonial-card flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <blockquote className="text-sm leading-relaxed mb-2 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
