"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { useNavigationHighlight } from "@/hooks/use-navigation-highlight"
import { ALKGrowthLogo } from "@/components/alk-growth-logo"
import { Menu, X } from "lucide-react"

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
  const activeSection = useNavigationHighlight()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    closeMobileMenu()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <ALKGrowthLogo />
            </Link>
          </div>

          {/* Navigation Links */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className={`px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors ${
                      activeSection === 'services' ? 'text-primary font-medium' : ''
                    }`}
                  >
                    Services
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className={`px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors ${
                      activeSection === 'about' ? 'text-primary font-medium' : ''
                    }`}
                  >
                    About
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className={`px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors ${
                      activeSection === 'how-it-works' ? 'text-primary font-medium' : ''
                    }`}
                  >
                    How It Works
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className={`px-3 lg:px-4 py-2 text-sm lg:text-base hover:text-primary transition-colors ${
                      activeSection === 'testimonials' ? 'text-primary font-medium' : ''
                    }`}
                  >
                    Testimonials
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => handleNavClick('services')}
                className={`block w-full text-left py-2 text-base hover:text-primary transition-colors ${
                  activeSection === 'services' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left py-2 text-base hover:text-primary transition-colors ${
                  activeSection === 'about' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')}
                className={`block w-full text-left py-2 text-base hover:text-primary transition-colors ${
                  activeSection === 'how-it-works' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className={`block w-full text-left py-2 text-base hover:text-primary transition-colors ${
                  activeSection === 'testimonials' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left py-2 text-base hover:text-primary transition-colors text-foreground"
              >
                Contact
              </button>
              <div className="pt-4">
                <Button 
                  className="w-auto"
                  data-cal-link="info-alk-growth.com/15min"
                  data-cal-namespace="15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
