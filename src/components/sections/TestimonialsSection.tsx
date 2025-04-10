import React from 'react';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ShinAI's digital DNA evolution system has transformed our agent development approach. After just five generations, our agents are 42% more efficient at complex tasks.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      avatar: "🧑‍💼"
    },
    {
      quote: "The Together.ai integration in ShinAI provides reliable and cost-effective inference while the DNA evolution ensures our agents continually improve without manual tuning.",
      author: "Michael Chen",
      position: "AI Director, GrowthSphere",
      avatar: "👨‍💼"
    },
    {
      quote: "The hexagonal architecture of ShinAI made it remarkably simple to integrate with our existing systems. The clean API design saved us months of development time.",
      author: "Amara Patel",
      position: "Lead Engineer, SecureBank Financial",
      avatar: "👩‍💼"
    }
  ];

  return (
    <div>
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium text-neon-cyan uppercase tracking-widest mb-3">Testimonials</h2>
        <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">What Our Partners Say</h3>
        <p className="text-xl text-foreground/80">
          See how our digital DNA technology is accelerating AI agent evolution across industries.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="glass p-8 rounded-xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-4">"</div>
            <p className="text-foreground/90 mb-6 italic">
              {testimonial.quote}
            </p>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 text-2xl">{testimonial.avatar}</div>
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-foreground/70">{testimonial.position}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 