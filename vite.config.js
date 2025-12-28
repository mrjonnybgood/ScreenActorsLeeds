import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // CRITICAL: This must match your GitHub Repository name exactly with slashes around it.
  base: '/ScreenActorsLeeds/', 
  server: {
    host: true,
    port: 8080,
  },
  root: '.',
});