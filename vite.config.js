import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // Point specifically to your main file
    entry: 'src/main.jsx',
    // Force the input to be your index.html in the current folder
    input: 'index.html',
  },
  // Ensure the build output stays within the 'arova' folder
  build: {
    outDir: 'dist',
  }
})