import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// NEW: Import the Tailwind Vite plugin
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // NEW: Add the plugin to the array
    tailwindcss(),
  ],
})