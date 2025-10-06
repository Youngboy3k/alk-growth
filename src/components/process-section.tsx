'use client'

import { motion } from 'framer-motion'

type Step = {
  number: string
  title: string
  description: string
  badge?: string
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Book your free preview',
    description:
      "We design a custom homepage demo before the call so you can see your future website’s look and feel.",
    badge: 'Free preview',
  },
  {
    number: '2',
    title: 'Approve & onboard',
    description:
      'During onboarding, we gather all details about your brand visuals, tone, and goals, to tailor every element perfectly.',
    badge: 'Onboarding',
  },
  {
    number: '3',
    title: 'Launch within a week',
    description:
      'Once you’re onboarded, we design, build, and launch your new website. Ready to attract customers and perform on both Google and AI platforms.',
    badge: 'Go live',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative w-full overflow-hidden py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Launch a high-performing website with a simple, guided process.
          </p>
        </motion.div>

        {/* Horizontal steps row */}
        <div className="mx-auto max-w-6xl">
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative rounded-2xl border border-border/60 bg-gradient-to-b from-background/70 to-background p-6 shadow-sm backdrop-blur"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {step.number}
                    </div>
                    {step.badge && (
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-foreground/80">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}


