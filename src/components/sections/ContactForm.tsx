import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto p-8 rounded-xl bg-background-lighter"
          >
            <h3 className="text-3xl font-display font-bold mb-4">Thank You!</h3>
            <p className="text-xl text-foreground/80 mb-6">
              Our team will review your information and contact you shortly to schedule your personalized ROI assessment.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-neon-blue font-medium underline"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
              <div>
                <h2 className="text-sm font-medium text-neon-blue uppercase tracking-widest mb-3">Contact Us</h2>
                <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">Accelerate Your AI Strategy</h3>
                <p className="text-xl text-foreground/80 mb-8">
                  Schedule a personalized demo and see how ShinAI delivers immediate ROI through reduced overhead and increased productivity. 
                  Our clients typically see payback within 90 days.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-border focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition"
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-border focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition"
                    placeholder="john@enterprise.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-border focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition"
                    placeholder="Enterprise, Inc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your AI needs</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-border focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition resize-none"
                    placeholder="I'm looking to reduce our AI maintenance costs and increase efficiency..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Your ROI Assessment'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm; 