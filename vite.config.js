import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: './', // CRITICAL: Ensures assets are loaded relative to index.html
  server: {
    host: true,
    port: 8080,
  },
  root: '.',
});