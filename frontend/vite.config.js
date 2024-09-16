import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'frontend', // Set the root directory for the Vite build to 'frontend'
  plugins: [react()],
  build: {
    outDir: '../public', // Output the build files to the 'public' directory at the project root
    emptyOutDir: true,  // Ensure the output directory is emptied before each build
  },
  publicDir: 'frontend/public', // Ensure that static assets are served from 'frontend/public'
});
