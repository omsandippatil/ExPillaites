import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'frontend',         // Set the root to the 'frontend' folder
  plugins: [react()],
  build: {
    outDir: '../public',    // Output built files to the 'public' folder at the project root
  },
  publicDir: 'frontend/public', // Serve public assets from 'frontend/public'
});
