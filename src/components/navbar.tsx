"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // Account for fixed navbar height
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
              ALK Growth
            </Link>
          </div>

          {/* Navigation Links */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors"
                  >
                    How It Works
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors"
                  >
                    Testimonials
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors"
                  >
                    Contact Us
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button 
              variant="secondary" 
              size="sm" 
              className="hidden sm:inline-flex text-xs sm:text-sm"
              onClick={() => scrollToSection('contact')}
            >
              Contact us
            </Button>
            <Button 
              size="sm" 
              className="text-xs sm:text-sm"
              data-cal-link="info-alk-growth.com/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
