import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@shared': path.resolve(__dirname, './src/components/shared'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
