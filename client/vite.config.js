import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Ensure Vite handles SPA routing
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  // Add this to handle SPA routing
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
