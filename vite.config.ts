import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,mts,mjs}"',
        useFlatConfig: true,
      },
      overlay: {
        badgeStyle: 'left: 65px;',
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
})
