import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Explicitly tell Vite to use the public folder for static assets
  server: {
    host: true,
    port: 8080,
  },
  root: '.',
});