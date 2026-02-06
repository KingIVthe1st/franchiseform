import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from /franchiseform/ for custom domain
  build: {
    outDir: 'dist-dark',
    rollupOptions: {
      input: './index-dark.html'
    }
  }
})
