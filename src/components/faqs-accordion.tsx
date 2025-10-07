"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

interface FaqsAccordionProps {
  title?: string
  description?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function FaqsAccordion({
  title = "Frequently Asked Questions",
  description = "",
  faqs = [
    {
      question: "What is AI SEO?",
      answer:
        "AI SEO ensures your website is optimized not only for Google but also for AI systems like ChatGPT and Bing Copilot. It increases the chances of your business being referenced in AI-generated search results.",
    },
    {
      question: "How long does the full process take?",
      answer:
        "Once onboarding is complete, we typically launch your website within one week.",
    },
    {
      question: "Do I need to provide text and images?",
      answer:
        "We can work with your existing materials or help you create professional copy and visuals.",
    },
    {
      question: "What is blog automation?",
      answer:
        "We set up a content system that automatically publishes SEO-rich blog posts, improving your Google ranking and AI visibility over time.",
    },
    {
      question: "Can I edit my website later?",
      answer: "Yes, you’ll have full access to edit text and images anytime.",
    },
    {
      question: "Do you handle maintenance and updates?",
      answer:
        "Yes. We take care of ongoing maintenance, performance checks, and any minor adjustments you need moving forward. You focus on your business — we handle the rest.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "You pay 50% upfront after onboarding and the remaining 50% once your website is launched.",
    },
  ],
}: FaqsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-4 text-3xl font-bold lg:text-4xl">
            {title}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary hover:shadow-lg"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-background/50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-foreground text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="h-5 w-5 text-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
