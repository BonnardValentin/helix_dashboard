import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
    functionPerRoute: false,
    maxDuration: 60,
    devCommand: 'pnpm dev',
    includeFiles: ['node_modules/react/**/*', 'node_modules/react-dom/**/*']
  }),
}); 