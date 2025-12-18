import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan baris base di bawah ini
  // Sesuaikan dengan nama repository GitHub Anda persis
  base: '/24000016089_Ahmad-Raka-Putra-Pratama_A/',
})