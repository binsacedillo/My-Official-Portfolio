
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// For Netlify, use the default base ('/')
export default defineConfig({
  plugins: [react()],
  base: '/',
})
