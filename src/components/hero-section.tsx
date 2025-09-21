"use client"

import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function HeroSection() {
  const unicornRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on client side to avoid hydration issues
    if (unicornRef.current) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    // GSAP headline animation
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll('.char')
      
      // Set initial state
      gsap.set(chars, { y: -100, opacity: 0 })
      
      // Animate characters with stagger
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.5
      })
    }
  }, [])

  return (
    <AuroraBackground className="min-h-screen">
      {/* Hidden Unicorn.studio Interactive Background - kept for future use */}
      <div 
        id="unicorn-studio-background"
        className="absolute inset-0 z-0 w-full h-full hidden"
        aria-label="Interactive background element - unicorn.studio integration (hidden)"
        style={{ display: 'none' }}
      >
        <div 
          ref={unicornRef}
          data-us-project="uhBo499B502eJHKrvQdd" 
          style={{width: '100%', height: '100%'}}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-24 sm:pt-28 lg:pt-32 flex items-center justify-start sm:justify-center min-h-screen">
        <div className="max-w-5xl text-left sm:text-center">
          <h1 
            ref={headlineRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground"
          >
            <div className="inline-block overflow-hidden">
              {Array.from("YOUR SEO-READY WEBSITE,").map((char, index) => (
                <span key={index} className="char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <br />
            <div className="inline-block overflow-hidden">
              {Array.from("BUILT FOR GROWTH.").map((char, index) => (
                <span key={index} className="char inline-block text-primary">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </h1>
          
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <Button 
              size="lg" 
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 h-auto w-auto"
              data-cal-link="info-alk-growth.com/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}
