"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    title: "AI-Powered SEO Optimization",
    description: "Advanced algorithms analyze your content and optimize for search engines automatically.",
    badge: "Popular",
    icon: "🔍"
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach ensures your website looks perfect on all devices.",
    badge: "Essential",
    icon: "📱"
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast loading times with optimized images and code.",
    badge: "Fast",
    icon: "⚡"
  },
  {
    title: "Content Management",
    description: "Easy-to-use CMS for updating your content without technical knowledge.",
    badge: "User-Friendly",
    icon: "✏️"
  },
  {
    title: "Analytics Integration",
    description: "Track your website's performance with detailed analytics and insights.",
    badge: "Insights",
    icon: "📊"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to help you grow your online presence.",
    badge: "Support",
    icon: "🛟"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="text-primary">grow online</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


