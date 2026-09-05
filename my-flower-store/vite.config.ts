import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE ?? '/m_k_website/my-flower-store/',
  plugins: [react()],
})
