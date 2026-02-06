import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/franchiseform/',
  build: {
    outDir: 'dist-light',
    rollupOptions: {
      input: './index-light.html'
    }
  }
})
