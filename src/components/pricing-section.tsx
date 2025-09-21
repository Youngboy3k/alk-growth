"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,999",
    period: "one-time",
    description: "Perfect for small businesses getting started online",
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Contact form integration",
      "3 months support",
      "SSL certificate included"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$4,999",
    period: "one-time",
    description: "Ideal for growing businesses that need more features",
    features: [
      "Everything in Starter",
      "Advanced SEO optimization",
      "Content management system",
      "Analytics integration",
      "6 months support",
      "Performance optimization",
      "Social media integration"
    ],
    cta: "Choose Growth",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Advanced analytics",
      "Priority support",
      "12 months support",
      "White-label options",
      "Dedicated account manager"
    ],
    cta: "Contact Us",
    popular: false
  }
]

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose the perfect plan for your{" "}
            <span className="text-primary">business growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our core features and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-3 mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="mb-6" />

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="secondary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}


