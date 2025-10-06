'use client'

import { motion } from 'framer-motion'

type Step = {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Book your free preview',
    description:
      "We design a custom homepage demo before the call so you can see your future website’s look and feel.",
  },
  {
    number: '2',
    title: 'Approve & onboard',
    description:
      'During onboarding, we gather all details about your brand visuals, tone, and goals, to tailor every element perfectly.',
  },
  {
    number: '3',
    title: 'Launch within a week',
    description:
      'Once you’re onboarded, we design, build, and launch your new website. Ready to attract customers and perform on both Google and AI platforms.',
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

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-background/60 to-background p-6 shadow-sm backdrop-blur"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                {step.number}
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


