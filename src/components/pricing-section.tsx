"use client"

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type BasePlan = 'launch' | 'business'

const BASE_PRICES: Record<BasePlan, number> = {
  launch: 900,
  business: 1400,
}

const CARE_MONTHLY = 100
const BLOG_MONTHLY = 500

export default function PricingSection() {
  const [basePlan, setBasePlan] = useState<BasePlan>('business')
  const [blogCount, setBlogCount] = useState<number>(0)

  const oneTimeTotal = useMemo(() => BASE_PRICES[basePlan], [basePlan])
  const monthlyTotal = useMemo(
    () => CARE_MONTHLY + blogCount * BLOG_MONTHLY,
    [blogCount]
  )

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Build Your Perfect Plan
          </h2>
          <p className="text-muted-foreground mt-2">
            Customize your plan to fit your exact needs. Only pay for what you use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Builder Controls */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div>
              <div className="text-foreground font-medium mb-3 text-sm">1. Choose your base plan</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PlanCard
                  title="Launch"
                  price="€900"
                  period="one-time"
                  description="One-page website for startups"
                  selected={basePlan === 'launch'}
                  onSelect={() => setBasePlan('launch')}
                />
                <PlanCard
                  title="Business"
                  price="€1,400"
                  period="one-time"
                  description="Multi-page website for growing companies"
                  selected={basePlan === 'business'}
                  onSelect={() => setBasePlan('business')}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-foreground font-medium mb-3 text-sm">2. Customize your plan</div>
              <div className="space-y-3">
                <div className="rounded-xl border border-border/40 bg-card/20 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-foreground font-medium text-sm">Website Care Plan</div>
                      <div className="text-muted-foreground text-xs">Ongoing updates, performance checks</div>
                    </div>
                    <div className="text-foreground font-medium text-sm">€{CARE_MONTHLY}/mo</div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/40 bg-card/20 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-foreground font-medium text-sm">Growth Blog System</div>
                      <div className="text-muted-foreground text-xs">8 SEO-optimized posts per month</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                        onClick={() => setBlogCount(Math.max(0, blogCount - 1))}
                      >
                        −
                      </Button>
                      <div className="w-4 text-center text-xs tabular-nums">{blogCount}</div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                        onClick={() => setBlogCount(1)}
                      >
                        +
                      </Button>
                      <div className="text-foreground font-medium text-sm ml-2">+€{BLOG_MONTHLY}/mo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div>
            <Card className="bg-card/30 border border-border/40 rounded-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-foreground text-lg">Your Custom Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground text-sm">Base Plan</div>
                  <div className="text-foreground font-medium text-sm">
                    {basePlan === 'launch' ? 'Launch' : 'Business'} · €{oneTimeTotal} one-time
                  </div>
                </div>
                <div className="h-px bg-border/40" />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground text-sm">Website Care Plan</div>
                    <div className="text-foreground text-sm">€{CARE_MONTHLY}/mo</div>
                  </div>
                  {blogCount > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground text-sm">Growth Blog System</div>
                      <div className="text-foreground text-sm">+€{BLOG_MONTHLY}/mo</div>
                    </div>
                  )}
                </div>
                <div className="h-px bg-border/40" />
                <div className="flex items-center justify-between">
                  <div className="text-foreground font-semibold text-sm">Monthly Total</div>
                  <div className="text-foreground font-semibold text-sm">€{monthlyTotal}/mo</div>
                </div>

                <div className="pt-2">
                  <div className="text-foreground font-medium text-sm mb-2">Included Features:</div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Optimized for Google & AI search
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Modern, responsive design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Clear calls-to-action and contact form
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Performance and mobile optimization
                    </li>
                  </ul>
                </div>

                <div className="pt-3">
                  <Button asChild className="w-full h-9 text-sm rounded-full">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

type PlanCardProps = {
  title: string
  price: string
  period: string
  description: string
  selected?: boolean
  onSelect?: () => void
}

function PlanCard({ title, price, period, description, selected, onSelect }: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'text-left rounded-xl border p-3 transition-colors w-full',
        'bg-card/20 border-border/40 hover:border-border/60',
        selected && 'border-primary/60 bg-primary/5 ring-1 ring-primary/50'
      )}
    >
      <div className="text-sm font-semibold text-foreground">{title}</div>
      <div className="text-lg font-bold text-foreground mt-1">{price}</div>
      <div className="text-xs text-muted-foreground">{period}</div>
      <div className="text-xs text-muted-foreground mt-2">{description}</div>
    </button>
  )
}


