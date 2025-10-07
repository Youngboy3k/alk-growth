'use client'

import { motion } from 'framer-motion'
import { CardHoverEffect } from '@/components/ui/pulse-card'
import { CalendarDays, ClipboardCheck, Rocket } from 'lucide-react'

type Step = {
  number: string
  title: string
  description: string
  badge?: string
  icon: 'calendar' | 'check' | 'rocket'
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Book your free preview',
    description:
      "We design a custom homepage demo before the call so you can see your future website’s look and feel.",
    badge: 'Free preview',
    icon: 'calendar',
  },
  {
    number: '2',
    title: 'Approve & onboard',
    description:
      'During onboarding, we gather all details about your brand visuals, tone, and goals, to tailor every element perfectly.',
    badge: 'Onboarding',
    icon: 'check',
  },
  {
    number: '3',
    title: 'Launch within a week',
    description:
      'Once onboarded, we design, build, and launch your website—ready to win on Google and AI.',
    badge: 'Go live',
    icon: 'rocket',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative w-full overflow-hidden py-20 bg-background scroll-mt-40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Launch a high-performing website with a simple, guided process.
          </p>
        </motion.div>

        {/* Steps using the same card style as About Us values */}
        <div className="mx-auto max-w-6xl relative">
          {/* Purple gradient shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl blur-3xl -z-10" />
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.number}>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.2, delay: 0 }}
                    >
                  <CardHoverEffect
                    icon={
                      step.icon === 'calendar' ? (
                        <CalendarDays className="h-6 w-6" />
                      ) : step.icon === 'check' ? (
                        <ClipboardCheck className="h-6 w-6" />
                      ) : (
                        <Rocket className="h-6 w-6" />
                      )
                    }
                    title={`${step.number}. ${step.title}`}
                    description={step.description}
                    variant="purple"
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}


