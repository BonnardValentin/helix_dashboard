import type { FC } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    ),
    title: "Contextual Understanding",
    description: "Our agents understand complex business contexts beyond simple instructions, enabling deeper comprehension of your organizational needs.",
    gradient: "from-neon-blue to-neon-purple"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    ),
    title: "Autonomous Execution",
    description: "Agents work independently to complete complex tasks and workflows without constant supervision, improving operational efficiency.",
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
        <line x1="2" y1="2" x2="22" y2="22"></line>
      </svg>
    ),
    title: "Privacy-First Design",
    description: "Enterprise-grade security with end-to-end encryption and zero data retention, ensuring your sensitive information stays protected.",
    gradient: "from-neon-green to-neon-blue"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "Seamless Integration",
    description: "Integrates with your existing enterprise tools and platforms with minimal setup, reducing implementation friction.",
    gradient: "from-neon-pink to-neon-purple"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    title: "Adaptive Learning",
    description: "Agents continuously learn from interactions and feedback, improving performance and adapting to your business's evolving needs.",
    gradient: "from-neon-blue to-neon-cyan"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    ),
    title: "Performance Analytics",
    description: "Comprehensive dashboards and real-time metrics to measure agent performance, ROI, and operational improvements.",
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
        <h2 className="text-sm font-medium text-neon-blue uppercase tracking-widest mb-3">Features</h2>
        <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">Enterprise AI, Reimagined</h3>
        <p className="text-xl text-foreground/80">
          Our AI agents combine advanced capabilities with enterprise-grade reliability to transform your business operations.
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
            { value: "98%", label: "Task Completion Rate", gradient: "from-neon-blue to-neon-purple" },
            { value: "500+", label: "Enterprise Clients", gradient: "from-neon-purple to-neon-pink" },
            { value: "5x", label: "Efficiency Increase", gradient: "from-neon-pink to-neon-blue" },
            { value: "24/7", label: "Continuous Operation", gradient: "from-neon-blue to-neon-green" }
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
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-lg text-foreground/80 mb-6">
                Join 500+ enterprises already using our AI agents to drive efficiency and innovation.
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