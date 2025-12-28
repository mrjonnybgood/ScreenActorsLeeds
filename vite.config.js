import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // This ensures all assets (JS, CSS, Images) are prefixed with your repo name
  base: '/ScreenActorsLeeds/', 
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