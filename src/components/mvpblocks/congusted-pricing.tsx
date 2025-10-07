'use client';

import { buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import NumberFlow from '@number-flow/react';

// Define your plans
const plans = [
  {
    name: 'LAUNCH',
    price: '900',
    yearlyPrice: '900',
    period: 'one-time',
    features: [
      'Modern, responsive design',
      'Optimized for Google & AI search',
      'Mobile-friendly and performance-optimized',
      'Contact form and clear call-to-action',
      'First month of maintenance and support included',
    ],
    description: 'Perfect for startups and new projects',
    buttonText: 'Get Started',
    href: '#contact',
    isPopular: false,
  },
  {
    name: 'BUSINESS',
    price: '1400',
    yearlyPrice: '1400',
    period: 'one-time',
    features: [
      'Everything from the Launch Website',
      'Multi-page structure',
      'Modern, responsive design',
      'Optimized for Google & AI search',
      'Mobile-friendly and performance-optimized',
      'Contact form and clear call-to-action',
      'First month of maintenance and support included',
    ],
    description: 'Best for growing companies',
    buttonText: 'Get Started',
    href: '#contact',
    isPopular: true,
  },
];

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export default function CongestedPricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(1); // 0 = Launch, 1 = Business
  const [hasBlogAddon, setHasBlogAddon] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          'hsl(var(--primary))',
          'hsl(var(--accent))',
          'hsl(var(--secondary))',
          'hsl(var(--muted))',
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['circle'],
      });
    }
  };

  // Calculate totals
  const basePrice = parseInt(plans[selectedPlan].price);
  const CARE_MONTHLY = 100;
  const BLOG_MONTHLY = 400; // updated as requested
  const DISCOUNT = 0.2; // 20% off for yearly
  const carePrice = isMonthly
    ? CARE_MONTHLY
    : Math.round(CARE_MONTHLY * 12 * (1 - DISCOUNT));
  const blogPrice = hasBlogAddon
    ? isMonthly
      ? BLOG_MONTHLY
      : Math.round(BLOG_MONTHLY * 12 * (1 - DISCOUNT))
    : 0;
  const totalOneTime = basePrice;
  const totalMonthly = carePrice + blogPrice;
  const totalYearly = carePrice + blogPrice;

  return (
    <section id="pricing" className="py-20 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-6 space-y-3 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Build Your Perfect Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Customize your plan to fit your exact needs. Only pay for what you use.
          </p>
          {/* Billing Toggle centered under title */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <span className={cn("text-sm", isMonthly ? "font-semibold" : "text-muted-foreground")}>
              Monthly
            </span>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
            />
            <span className={cn("text-sm", !isMonthly ? "font-semibold" : "text-muted-foreground")}>
              Yearly <span className="text-primary">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Plan Selection */}
          <div className="space-y-6">
            {/* Plan Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">1. Choose your base plan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'relative rounded-xl border p-6 cursor-pointer transition-all',
                      selectedPlan === index
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                        : 'border-border bg-card/50 hover:border-primary/50'
                    )}
                    onClick={() => setSelectedPlan(index)}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold">{plan.name}</h4>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">€{plan.price}</span>
                        <span className="text-muted-foreground ml-1">one-time</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-lg font-semibold mb-4">2. Add-ons</h3>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Website Care Plan</h4>
                      <p className="text-sm text-muted-foreground">Ongoing updates, performance checks</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">€{carePrice}/{isMonthly ? 'mo' : 'year'}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Growth Blog System</h4>
                      <p className="text-sm text-muted-foreground">8 SEO-optimized posts per month</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Switch
                        ref={switchRef as any}
                        checked={hasBlogAddon}
                        onCheckedChange={(checked) => setHasBlogAddon(checked)}
                      />
                      <div className="text-right">
                        <div className="font-semibold">+€{blogPrice}/{isMonthly ? 'mo' : 'year'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing toggle moved above; keep space for layout consistency if needed */}
          </div>

          {/* Right: Price Breakdown */}
          <div className="lg:w-[520px] mx-auto lg:mx-0">
            <div className="rounded-xl border border-border bg-card/50 p-6 min-h-[360px]">
              <h3 className="text-lg font-semibold mb-4">Your Custom Plan</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Plan</span>
                  <span className="font-medium">€{totalOneTime} one-time</span>
                </div>
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Website Care Plan</span>
                    <span className="font-medium">€{carePrice}/{isMonthly ? 'mo' : 'year'}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className={cn('text-muted-foreground', !hasBlogAddon && 'opacity-70')}>Growth Blog System</span>
                    <span className="font-medium">€{blogPrice}/{isMonthly ? 'mo' : 'year'}</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Monthly Total</span>
                    <span>€{totalMonthly}/{isMonthly ? 'mo' : 'year'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Included Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Optimized for Google & AI search
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Modern, responsive design
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Clear calls-to-action and contact form
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Performance and mobile optimization
                  </li>
                </ul>
              </div>

              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full mt-6'
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
