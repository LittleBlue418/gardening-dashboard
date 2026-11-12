import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Send /api calls to the local Scala backend (sbt run, port 9000).
    // Same origin for the browser, so no CORS setup needed.
    proxy: {
      '/api': 'http://localhost:9000',
    },
  },
})
