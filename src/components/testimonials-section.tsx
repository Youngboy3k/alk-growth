'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechForward Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'AlkGrowth transformed our business strategy completely. The insights and growth we achieved in just 6 months exceeded our expectations for the entire year.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'VP of Marketing',
    company: 'GrowthLabs',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The ROI we saw from AlkGrowth was immediate and substantial. Our team productivity increased by 300% and customer acquisition costs dropped significantly.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StartupFlow',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    content: 'As a startup founder, AlkGrowth gave us the strategic edge we needed. We scaled from 0 to 10,000 customers in record time.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CTO',
    company: 'InnovateTech',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    content: 'The technical implementation was seamless, and the results speak for themselves. Our conversion rates improved by 250% within the first quarter.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Operations',
    company: 'ScaleUp Solutions',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    content: 'AlkGrowth streamlined our operations and provided actionable insights that drove real business impact. Highly recommend to any growing company.',
    rating: 5,
  },
  {
    name: 'Alex Martinez',
    role: 'Product Manager',
    company: 'NextGen Apps',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    content: 'The analytics and growth strategies provided by AlkGrowth helped us make data-driven decisions that significantly improved our product-market fit.',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialProps; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-yellow-400 text-yellow-400" 
              />
            ))}
          </div>
          
          {/* Testimonial Content */}
          <blockquote className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
            "{testimonial.content}"
          </blockquote>
          
          {/* User Info */}
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage 
                src={testimonial.image} 
                alt={testimonial.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <AvatarFallback className="bg-primary/10 text-primary font-medium hidden">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold text-foreground text-sm">
                {testimonial.name}
              </div>
              <div className="text-muted-foreground text-xs">
                {testimonial.role} at {testimonial.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about their experience with AlkGrowth.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm">
            Join hundreds of companies that trust AlkGrowth for their growth journey
          </p>
        </motion.div>
      </div>
    </section>
  );
}

