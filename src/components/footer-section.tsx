"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const footerLinks = {
  services: [
    { name: "Website Design", href: "/services/design" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "Content Management", href: "/services/cms" },
    { name: "Performance Optimization", href: "/services/performance" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" }
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Guides", href: "/guides" },
    { name: "Support", href: "/support" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" }
  ]
}

export function FooterSection() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
                ALK Growth
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                AI-powered SEO website building service provider. We help businesses grow online with cutting-edge technology and proven strategies.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Get Started
                </Button>
                <Button variant="secondary" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 lg:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 ALK Growth. All rights reserved.</span>
              <div className="flex gap-6">
                {footerLinks.legal.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                Made with ❤️ for growth
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


