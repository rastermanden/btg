import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Repo name on GitHub Pages: https://rastermanden.github.io/btg/
export default defineConfig({
  plugins: [vue()],
  base: '/btg/'
})
