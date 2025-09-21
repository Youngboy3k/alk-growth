"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function useNavigationHighlight() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sections = [
      "services",
      "about", 
      "how-it-works",
      "testimonials",
      "contact"
    ]

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
          onLeave: () => {
            // Only clear if we're not entering another section
            const nextSection = sections[sections.indexOf(sectionId) + 1]
            if (nextSection) {
              const nextElement = document.getElementById(nextSection)
              if (nextElement) {
                const rect = nextElement.getBoundingClientRect()
                if (rect.top > window.innerHeight * 0.7) {
                  setActiveSection("")
                }
              }
            }
          }
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger?.id) {
          trigger.kill()
        }
      })
    }
  }, [])

  return activeSection
}
