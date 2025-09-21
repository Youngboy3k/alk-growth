"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

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
                  <Link href="/services" className="px-3 lg:px-4 py-2 text-sm lg:text-base">
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="px-3 lg:px-4 py-2 text-sm lg:text-base">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/portfolio" className="px-3 lg:px-4 py-2 text-sm lg:text-base">
                    Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="px-3 lg:px-4 py-2 text-sm lg:text-base">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/resources" className="px-3 lg:px-4 py-2 text-sm lg:text-base">
                    Resources
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="secondary" size="sm" className="hidden sm:inline-flex text-xs sm:text-sm">
              Contact us
            </Button>
            <Button size="sm" className="text-xs sm:text-sm">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
