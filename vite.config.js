import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // Using './' makes the deployment flexible (works in any subfolder)
  base: './', 
  server: {
    host: true,
    port: 8080,
  },
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});