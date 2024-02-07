import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        iterator: resolve(__dirname, 'src/iterator/iterator.html'),
      },
    },
  },
})
