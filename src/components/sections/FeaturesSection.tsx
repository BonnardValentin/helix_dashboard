import type { FC } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    title: "Digital DNA Evolution",
    description: "Cut AI management costs by 70% with self-evolving agents. Our proprietary technology mimics natural selection to create increasingly powerful AI without manual intervention.",
    gradient: "from-neon-blue to-neon-purple"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    title: "Optimized LLM Selection",
    description: "Reduce AI costs significantly with our smart model selection system. We match the right model to each task, ensuring optimal performance while minimizing operational expenses.",
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "Enterprise-Ready Architecture",
    description: "Built on solid architectural principles that ensure reliability, maintainability, and scalability for enterprise deployments, with easy integration into existing systems.",
    gradient: "from-neon-green to-neon-blue"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
        <line x1="8" y1="16" x2="8.01" y2="16"></line>
        <line x1="8" y1="20" x2="8.01" y2="20"></line>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
        <line x1="12" y1="22" x2="12.01" y2="22"></line>
        <line x1="16" y1="16" x2="16.01" y2="16"></line>
        <line x1="16" y1="20" x2="16.01" y2="20"></line>
      </svg>
    ),
    title: "Epigenetic Adaptation",
    description: "Agents adapt to feedback through epigenetic markers that influence DNA expression, enabling context-specific optimization without modifying core genetic traits.",
    gradient: "from-neon-pink to-neon-purple"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        <circle cx="12" cy="16" r="1"></circle>
      </svg>
    ),
    title: "Secure API Integration",
    description: "Comprehensive API key management system with secured endpoints and permissions, making it enterprise-ready with robust authentication and authorization.",
    gradient: "from-neon-blue to-neon-cyan"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    ),
    title: "Fitness Evaluation",
    description: "Intelligent fitness scoring system that evaluates agent performance across multiple dimensions, enabling targeted evolution and continuous improvement.",
    gradient: "from-neon-cyan to-neon-green"
  }
];

const FeaturesSection: FC = () => {
  return (
    <>
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium text-neon-blue uppercase tracking-widest mb-3">Breakthrough Technology</h2>
        <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">Enhance Your AI Capabilities</h3>
        <p className="text-xl text-foreground/80">
          Our innovative Digital DNA technology creates AI agents that adapt to your business needs, improving efficiency while reducing the complexity of AI implementation.
        </p>
      </motion.div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card-glass group hover:shadow-lg transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`mb-5 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
              {feature.description}
            </p>
            
            <div className="mt-5 flex items-center text-sm font-medium">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>Learn more</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`ml-1 w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} transition-transform duration-300 group-hover:translate-x-1`}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Stats section */}
      <motion.div 
        className="mt-24 glass p-8 sm:p-12 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { value: "95%", label: "Task Completion Rate", gradient: "from-neon-blue to-neon-purple" },
            { value: "20+", label: "Active Clients", gradient: "from-neon-purple to-neon-pink" },
            { value: "2x", label: "Productivity Increase", gradient: "from-neon-pink to-neon-blue" },
            { value: "30%", label: "Average Time Saved", gradient: "from-neon-blue to-neon-green" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className={`text-4xl sm:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>
                {stat.value}
              </h4>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* CTA Banner */}
      <motion.div 
        className="mt-24 relative overflow-hidden rounded-2xl border-glow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary/50 backdrop-blur-sm -z-10"></div>
        
        <div className="relative p-8 sm:p-12 z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">Transform Your Business with ShinAI</h3>
              <p className="text-lg text-foreground/80 mb-6">
                Join forward-thinking businesses that are streamlining operations and enhancing productivity with our intelligent AI platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#demo" 
                  className="btn-neon px-8 py-3 rounded-md text-white font-medium inline-flex items-center gap-2"
                >
                  <span className="btn-neon-text">Get Started</span>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all"
                >
                  <span>Contact Sales</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <motion.div 
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-radial from-neon-blue/30 to-transparent relative"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">AI</div>
                </div>
                
                {/* Orbiting elements */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="absolute inset-0"
                    style={{
                      animation: `orbit ${8 + i * 3}s linear infinite ${i * 2}s`,
                      transform: `rotate(${i * 120}deg)`
                    }}
                  >
                    <div 
                      className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neon-blue"
                      style={{
                        top: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
                      }}
                    ></div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default FeaturesSection; 