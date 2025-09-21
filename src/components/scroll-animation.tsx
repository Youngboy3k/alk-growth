"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "stagger"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollAnimation({ 
  children, 
  animation = "fadeUp", 
  delay = 0, 
  duration = 0.8,
  className = ""
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (elementRef.current) {
      const element = elementRef.current

      // Set initial state based on animation type
      switch (animation) {
        case "fadeUp":
          gsap.set(element, { y: 30, opacity: 0 })
          break
        case "fadeIn":
          gsap.set(element, { opacity: 0 })
          break
        case "slideLeft":
          gsap.set(element, { x: 50, opacity: 0 })
          break
        case "slideRight":
          gsap.set(element, { x: -50, opacity: 0 })
          break
        case "scale":
          gsap.set(element, { scale: 0.9, opacity: 0 })
          break
        case "stagger":
          gsap.set(element.children, { y: 20, opacity: 0 })
          break
      }

      // Fallback: Check if element is already in viewport on mount
      const checkInitialVisibility = () => {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        if (isInView) {
          // Element is already visible, animate immediately
          gsap.to(element, { 
            y: 0, 
            x: 0, 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out" 
          })
          if (animation === "stagger") {
            gsap.to(element.children, { 
              y: 0, 
              opacity: 1, 
              duration: 0.4, 
              stagger: 0.05, 
              ease: "power2.out" 
            })
          }
        }
      }

      // Check immediately and after a short delay
      checkInitialVisibility()
      setTimeout(checkInitialVisibility, 100)

      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          once: true, // Only animate once
          markers: false, // Set to true for debugging
          onEnter: () => {
            // Force immediate animation when element enters viewport
            gsap.set(element, { clearProps: "all" })
          }
        }
      })

      switch (animation) {
        case "fadeUp":
          tl.to(element, { y: 0, opacity: 1, duration: duration * 0.8, delay: delay * 0.5, ease: "power2.out" })
          break
        case "fadeIn":
          tl.to(element, { opacity: 1, duration: duration * 0.8, delay: delay * 0.5, ease: "power2.out" })
          break
        case "slideLeft":
          tl.to(element, { x: 0, opacity: 1, duration: duration * 0.8, delay: delay * 0.5, ease: "power2.out" })
          break
        case "slideRight":
          tl.to(element, { x: 0, opacity: 1, duration: duration * 0.8, delay: delay * 0.5, ease: "power2.out" })
          break
        case "scale":
          tl.to(element, { scale: 1, opacity: 1, duration: duration * 0.8, delay: delay * 0.5, ease: "back.out(1.7)" })
          break
        case "stagger":
          tl.to(element.children, { 
            y: 0, 
            opacity: 1, 
            duration: duration * 0.5, 
            stagger: 0.08, 
            delay: delay * 0.3, 
            ease: "power2.out" 
          })
          break
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
