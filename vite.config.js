// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SMPIJCAI/', // 👈 GitHub Pages 项目路径
  plugins: [react()],
})
