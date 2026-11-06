import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PuikResolver } from '@prestashopcorp/puik-resolver'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-web')
        }
      },
    }),
    vueJsx(),
    Components({
      resolvers: [PuikResolver()],
    }),
    AutoImport({
      resolvers: [PuikResolver()],
    }),
  ],
  build: {
    // puik-theme ships `@media (max-width: var(--screen-xs))`, which lightningcss
    // (Vite 8 default CSS minifier) rejects as an invalid media query.
    cssMinify: 'esbuild',
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  resolve: {
    alias: {
      '@/': fileURLToPath(new URL('./src/', import.meta.url)),
    }
  }
})
