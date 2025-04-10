import React from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <div className="relative">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium text-neon-green uppercase tracking-widest mb-3">Contact Us</h2>
        <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">Ready to Transform Your Business?</h3>
        <p className="text-xl text-foreground/80">
          Get in touch with our team to learn how AI agents can empower your enterprise.
        </p>
      </motion.div>

      <motion.div
        className="glass p-8 md:p-12 rounded-xl max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
            <p className="text-foreground/70 mb-6">
              Our team is ready to answer your questions and provide more information about our AI solutions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contact@shinai.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-neon w-full py-3 rounded-md text-white font-medium"
              >
                <span className="btn-neon-text">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 