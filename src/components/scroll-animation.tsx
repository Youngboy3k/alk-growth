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
          gsap.set(element, { y: 50, opacity: 0 })
          break
        case "fadeIn":
          gsap.set(element, { opacity: 0 })
          break
        case "slideLeft":
          gsap.set(element, { x: 100, opacity: 0 })
          break
        case "slideRight":
          gsap.set(element, { x: -100, opacity: 0 })
          break
        case "scale":
          gsap.set(element, { scale: 0.8, opacity: 0 })
          break
        case "stagger":
          gsap.set(element.children, { y: 30, opacity: 0 })
          break
      }

      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      switch (animation) {
        case "fadeUp":
          tl.to(element, { y: 0, opacity: 1, duration, delay, ease: "power2.out" })
          break
        case "fadeIn":
          tl.to(element, { opacity: 1, duration, delay, ease: "power2.out" })
          break
        case "slideLeft":
          tl.to(element, { x: 0, opacity: 1, duration, delay, ease: "power2.out" })
          break
        case "slideRight":
          tl.to(element, { x: 0, opacity: 1, duration, delay, ease: "power2.out" })
          break
        case "scale":
          tl.to(element, { scale: 1, opacity: 1, duration, delay, ease: "back.out(1.7)" })
          break
        case "stagger":
          tl.to(element.children, { 
            y: 0, 
            opacity: 1, 
            duration: duration * 0.6, 
            stagger: 0.1, 
            delay, 
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
