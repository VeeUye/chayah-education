import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svgr from 'vite-plugin-svgr'

const base = '/chayah-education/'

export default defineConfig({
  base: base,
  integrations: [react()],
  vite: {
    plugins: [svgr()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $baseUrl: "${base.slice(0, -1)}";
          `,
        },
      },
    },
  },
})
