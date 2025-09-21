"use client"

import { Button } from "@/components/ui/button"
import { ALKGrowthLogo } from "@/components/alk-growth-logo"

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

export function FooterSection() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Company Info */}
            <div>
              <div className="mb-4">
                <ALKGrowthLogo size={140} className="h-10" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                AI-powered website building and SEO optimization service.
              </p>
              <Button 
                data-cal-link="info-alk-growth.com/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
              </Button>
            </div>

            {/* Right Column - Navigation */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 lg:py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 ALK Growth. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


