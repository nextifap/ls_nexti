import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
/*
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['sweetalert2']
  }
})
*/


export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['sweetalert2']
  },

  server: {
    host: true, // ou '0.0.0.0'
    port: 8080, // opcional
  },
})




