import React from 'react';
import { motion } from 'framer-motion';

export function AgentsShowcase() {
  const agents = [
    {
      name: "Data Analyst",
      description: "Processes large datasets and generates insights through visualization and statistical analysis.",
      icon: "📊",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "Content Creator",
      description: "Creates engaging content for marketing, blogs, and social media with SEO optimization.",
      icon: "✏️",
      color: "from-neon-purple to-neon-pink"
    },
    {
      name: "Task Automator",
      description: "Automates repetitive business processes and workflows to improve efficiency.",
      icon: "⚙️",
      color: "from-neon-green to-neon-blue"
    }
  ];

  return (
    <div className="py-16">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium text-neon-purple uppercase tracking-widest mb-3">AI Agents</h2>
        <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">Meet Your New Digital Workforce</h3>
        <p className="text-xl text-foreground/80">
          Our specialized AI agents are designed to handle specific business functions with superhuman capabilities.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="card-glass overflow-hidden relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
            <div className="p-8 relative z-10">
              <div className="text-4xl mb-4">{agent.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{agent.name}</h3>
              <p className="text-foreground/70 mb-4">{agent.description}</p>
              <button className="text-gradient font-medium inline-flex items-center">
                Learn more
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 