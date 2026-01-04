import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// IMPORTANT: The 'base' property MUST match your GitHub repository name exactly.
// For example, if your repo is 'username/My-Official-Portfolio', use base: "/My-Official-Portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "/My-Official-Portfolio/", // 👈 MUST MATCH YOUR REPO NAME EXACTLY
})
