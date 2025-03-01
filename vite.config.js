import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public", // Ensure assets and index.html are detected
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor libraries
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase warning limit (optional)
  }
})
