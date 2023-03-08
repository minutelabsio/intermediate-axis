import pkg from './package.json'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      'three/examples': path.resolve(__dirname, 'node_modules/three/examples/'),
      three: path.resolve(__dirname, 'node_modules/three/build/three.module.js'),
    },
  },
  base: process.env.NODE_ENV === 'production'
    ? `/${pkg.name}/`
    : '/'
})
