import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'frontend', // Vite root directory
  plugins: [react()],
  build: {
    outDir: '../public', // Output directory relative to the root of the project
    emptyOutDir: true, // Ensure the output directory is emptied before each build
  },
  publicDir: 'frontend/public', // Public directory for static assets
});
