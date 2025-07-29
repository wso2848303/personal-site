import { fileURLToPath, URL } from 'node:url'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

function resolveFilesUnderForder(folderPath) {
  try {
    return readdirSync(folderPath)
      .filter((file) => file.endsWith('.less'))
      .map((file) => join(folderPath, file))
  } catch (error) {
    console.warn(`Cannot read directory: ${folderPath}`, error)
    return []
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        modifyVars: {
          hack: `true; ${resolveFilesUnderForder('./src/less/arguments')
            .map((item) => `@import "${item}";`)
            .join('')}`,
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      uses: fileURLToPath(new URL('./src/uses', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      stores: fileURLToPath(new URL('./src/stores', import.meta.url)),
      utils: fileURLToPath(new URL('./src/utils', import.meta.url)),
      views: fileURLToPath(new URL('./src/views', import.meta.url)),
      router: fileURLToPath(new URL('./src/router', import.meta.url)),
    },
  },
})
