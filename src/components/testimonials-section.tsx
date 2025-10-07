'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    name: 'Liudmila Kiriaku',
    role: 'CEO',
    company: 'Compliance Group',
    image: '',
    content: 'Working with ALK Growth was seamless from start to finish. They translated our complex AI compliance solutions into a clean, professional website that our enterprise clients love. The turnaround time was incredible.',
    rating: 5,
  },
  {
    name: 'Alex Asonitis',
    role: 'Owner',
    company: 'AsoMedia',
    image: '',
    content: 'ALK Growth delivered exactly what we needed. Our new website perfectly captures our brand energy and has become our best sales tool. Client inquiries increased within the first month of launch.',
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
          <div className="flex items-center">
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
            Don't just take our word for it. Here's what industry leaders have to say about their experience with ALK Growth.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

