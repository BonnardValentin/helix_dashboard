import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-grid"
          style={{
            transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/20 filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/20 filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-md border border-white/5 mb-6">
                <span className="animate-pulse w-2 h-2 rounded-full bg-neon-green"></span>
                <span className="text-sm font-medium text-neon-green">Revolutionary DNA-Powered AI</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                <span className="block text-white">Evolve Your</span>
                <span className="block text-gradient">Business Intelligence</span>
                <span className="block text-white mt-2">Automatically</span>
              </h1>
              
              <p className="mt-6 text-xl text-foreground/80 max-w-xl">
                ShinAI's intelligent agents streamline workflows and boost efficiency. Transform business operations with our revolutionary Digital DNA technology that adapts and evolves to meet your unique needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <a 
                href="#demo" 
                className="btn-neon px-8 py-4 rounded-md text-white font-medium inline-flex items-center gap-2"
              >
                <span className="btn-neon-text">Start Free Trial</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="relative z-10"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              
              <a 
                href="#features" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all"
              >
                <span>See 300% ROI Case Study</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-x-8 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 border-2 border-background flex items-center justify-center text-xs font-medium text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-medium text-sm">Trusted by Fortune 500 companies</div>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="#3B82F6" 
                      className="w-4 h-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* 3D Visualization */}
          <motion.div 
            className="relative h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full h-full">
              {/* Holographic Agent Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Agent glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-blue/30 to-transparent animate-pulse-glow"></div>
                  
                  {/* Orbiting elements */}
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i}
                      className="absolute inset-0"
                      style={{
                        animation: `orbit ${5 + i * 2}s linear infinite`,
                        transform: `rotate(${i * 60}deg)`
                      }}
                    >
                      <div 
                        className="absolute w-4 h-4 rounded-full bg-neon-blue"
                        style={{
                          top: '0%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
                        }}
                      ></div>
                    </div>
                  ))}
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full animate-pulse-slow" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.5" />
                  </svg>
                  
                  {/* Agent core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">AI</div>
                  </div>
                </div>
              </div>
              
              {/* Floating data elements */}
              {[
                { top: '10%', left: '0%', delay: '0s' },
                { top: '20%', right: '10%', delay: '0.5s' },
                { bottom: '15%', left: '5%', delay: '1s' },
                { bottom: '25%', right: '5%', delay: '1.5s' }
              ].map((pos, i) => (
                <motion.div 
                  key={i}
                  className="absolute glass px-4 py-2 rounded-lg text-sm"
                  style={{
                    ...pos,
                    opacity: 0.9,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    delay: parseFloat(pos.delay),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
                    <div className="font-mono text-xs">agent_{i + 1}.processing</div>
                  </div>
                  <div className="text-gradient font-mono mt-1">{Math.floor(Math.random() * 100)}% complete</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-sm text-foreground/60 mb-2">Scroll to explore</div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-foreground/60"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
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
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
} 