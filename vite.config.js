import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single-page static React site (Vite). SPA fallback handled by the dev server
// and by hosting rewrites in production.
export default defineConfig({
  plugins: [react()],
})
