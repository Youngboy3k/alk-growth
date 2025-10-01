"use client"

import { motion } from "motion/react"
import { Logo } from '@/components/logo'
import { Mail } from 'lucide-react'

interface FooterSimpleProps {
  companyName?: string
  description?: string
  links?: {
    product?: Array<{ name: string; url: string }>
    company?: Array<{ name: string; url: string }>
    support?: Array<{ name: string; url: string }>
  }
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
    discord?: string
  }
  copyright?: string
}

export function FooterSimple({
  companyName = "ALK Growth",
  description = "Custom websites that help businesses grow. Modern design, clean code, and built exactly how you want them.",
  links = {
    company: [
      { name: "About Us", url: "#about" },
      { name: "Testimonials", url: "#testimonials" },
      { name: "FAQ", url: "#faq" },
      { name: "Contact", url: "#contact" },
    ],
  },
  social = {},
  copyright = "© 2025 ALK Growth. All rights reserved.",
}: FooterSimpleProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-foreground/70 mb-6 max-w-md text-sm">
                {description}
              </p>
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:alkgrowth@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  alkgrowth@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            {links.company && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-foreground mb-4 text-sm font-semibold uppercase tracking-wide">
                  Navigation
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  {links.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-foreground/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-border pt-8 text-center"
        >
          <p className="text-foreground/60 text-sm">
            {copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
