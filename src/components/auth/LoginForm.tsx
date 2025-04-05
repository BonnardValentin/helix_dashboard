import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

// Define a consistent color palette based on the futuristic blue image
const colors = {
  primary: {
    base: 'cyan-600',
    hover: 'cyan-500',
    glow: 'cyan-500/30'
  },
  text: {
    heading: 'cyan-300',
    body: 'cyan-100/90',
    muted: 'cyan-200/60',
    link: 'cyan-300',
    linkHover: 'cyan-200'
  },
  surface: {
    card: 'sky-900/20',
    input: 'sky-900/30',
    border: 'cyan-700/30',
    borderFocus: 'cyan-400',
    divider: 'cyan-800/30'
  }
};

// Define consistent transitions
const transitions = {
  fast: 'transition-all duration-200',
  medium: 'transition-all duration-300',
  slow: 'transition-all duration-500'
};

interface LoginFormProps {
  onSubmit?: (email: string) => void;
  className?: string;
}

export function LoginForm({ onSubmit, className }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      if (onSubmit) {
        onSubmit(email);
      } else {
        // If no onSubmit handler is provided, redirect to dashboard
        window.location.href = '/dashboard';
      }
    }, 1000);
  };

  const handleGithubLogin = () => {
    setIsLoading(true);
    // In a real app, this would trigger OAuth flow
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <div className={cn("w-full max-w-md space-y-8", className)}>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-cyan-300">
          Welcome Back
        </h1>
        <p className="mt-3 text-cyan-100">
          Sign in to your account to continue
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <div className="relative">
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3.5 bg-sky-900/30 border border-cyan-700/30 focus:border-cyan-400 rounded-lg text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full relative overflow-hidden py-6 font-medium rounded-lg bg-cyan-600 text-white hover:shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-70"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-white">Signing In...</span>
            </div>
          ) : (
            <span className="relative z-10 text-white">Sign In with Email</span>
          )}
        </Button>
      </form>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-cyan-800/30"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-3 py-1 rounded-full bg-sky-900/20 backdrop-blur-sm text-cyan-200/60 font-medium">or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <Button 
          variant="outline" 
          className="group relative w-full flex items-center justify-center gap-2 py-6 border-cyan-700/30 bg-sky-900/20 backdrop-blur-sm rounded-lg text-white hover:bg-sky-900/30 hover:border-cyan-400/30 hover:text-white transition-all duration-300"
          onClick={handleGithubLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white group-hover:scale-110 transition-all duration-300"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="text-white">GitHub</span>
            </>
          )}
        </Button>
      </div>
      
      <p className="pt-4 text-center text-sm text-cyan-200/60 leading-relaxed">
        By signing in, you agree to our{' '}
        <a href="#" className="font-medium text-cyan-300 hover:text-cyan-200 relative inline-block group transition-all duration-300">
          Terms of Service
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </a>{' '}
        and{' '}
        <a href="#" className="font-medium text-cyan-300 hover:text-cyan-200 relative inline-block group transition-all duration-300">
          Privacy Policy
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </p>
    </div>
  );
} 