import pkg from './package.json'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: process.env.NODE_ENV === 'production'
    ? `/${pkg.name}/`
    : '/'
})
