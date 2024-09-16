import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'frontend'), // Set the root directory to frontend
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'frontend', 'dist'), // Output to frontend/dist
    emptyOutDir: true, // Clears the output directory before building
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend', 'src'), // Adjust the alias for imports if needed
    },
  },
});
