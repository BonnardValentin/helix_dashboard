import React from 'react';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The AI agents from ShinAI have transformed our data analytics capabilities, reducing analysis time by 70% while improving accuracy.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      avatar: "🧑‍💼"
    },
    {
      quote: "We've seen a 40% increase in productivity since implementing ShinAI agents across our marketing department.",
      author: "Michael Chen",
      position: "Marketing Director, GrowthSphere",
      avatar: "👨‍💼"
    },
    {
      quote: "The enterprise-grade security and seamless integration made ShinAI the obvious choice for our sensitive operations.",
      author: "Amara Patel",
      position: "CISO, SecureBank Financial",
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
        <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">What Our Clients Say</h3>
        <p className="text-xl text-foreground/80">
          See how our AI agents are making a real-world impact for businesses across industries.
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