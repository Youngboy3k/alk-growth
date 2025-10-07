'use client';

import React from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
// Image import removed - no longer needed
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            {/* Background image removed to fix Next.js image configuration error */}
                        </div>


                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <a href="/contact">
                                        <span className="text-foreground text-sm">Limited Spots Available for Q4 Projects</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-primary" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-primary" />
                                                </span>
                                            </div>
                                        </div>
                                        </a>
                                    </Button>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    We Make It Easy for Clients to Find You
                                </TextEffect>
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-lg">
                                    We design websites that rank up on Google, get noticed by AI, and turn visitors into customers.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            size="lg"
                                            className="rounded-xl px-5 text-base"
                                            data-cal-link="alk-growth.com/30min"
                                            data-cal-namespace="30min"
                                            data-cal-config='{"layout":"month_view"}'>
                                            <span className="text-nowrap">Get Started</span>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5 hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                                        asChild>
                                        <a href="/contact">
                                            <span className="text-nowrap">Let's Talk</span>
                                        </a>
                                    </Button>
                                </AnimatedGroup>

                                {/* Video showcase - Mobile optimized */}
                                <div className="mt-20 flex justify-center px-4">
                                    <div className="relative w-full max-w-7xl rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-2 shadow-2xl shadow-primary/25">
                                        <div className="rounded-2xl overflow-hidden bg-background">
                                            <video 
                                                className="w-full h-auto min-h-[200px] sm:min-h-[300px] md:min-h-[500px] rounded-2xl object-cover"
                                                controls
                                                autoPlay
                                                muted
                                                playsInline
                                                loop
                                                preload="none"
                                                poster="/video-poster.jpg"
                                                loading="lazy"
                                            >
                                                <source src="/Untitled video - Made with Clipchamp.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
