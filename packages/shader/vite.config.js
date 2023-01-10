import glslLoader from './glsl-loader.js'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    glslLoader()
  ]
})