import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onSubmit?: (email: string) => void;
  className?: string;
}

export function LoginForm({ onSubmit, className }: LoginFormProps) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      // If no onSubmit handler is provided, redirect to dashboard
      window.location.href = '/dashboard';
    }
  };

  const handleGithubLogin = () => {
    // In a real app, this would trigger OAuth flow
    window.location.href = '/dashboard';
  };

  return (
    <div className={cn("w-full max-w-md space-y-6", className)}>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-400">Create an account</h1>
        <p className="mt-2 text-slate-300">
          Enter your email below to create your account
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-4 py-2 border border-slate-700 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Sign In with Email
        </Button>
      </form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-700"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-black text-slate-400">OR CONTINUE WITH</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 text-white hover:bg-slate-700"
        onClick={handleGithubLogin}
      >
        <GithubIcon size={20} className="text-white" />
        GitHub
      </Button>
      
      <p className="text-center text-sm text-slate-400">
        By clicking continue, you agree to our{' '}
        <a href="#" className="underline font-medium text-blue-400 hover:text-blue-300">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="underline font-medium text-blue-400 hover:text-blue-300">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
} 