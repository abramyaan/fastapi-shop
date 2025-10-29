// frontend/vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true, // ← ДОБАВЬ ЭТО!
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // ← ИСПРАВЬ НА 127.0.0.1
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '/api') // не нужно
      },
    },
  },
})