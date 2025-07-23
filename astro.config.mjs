import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import svgr from 'vite-plugin-svgr'


// https://astro.build/config
export default defineConfig({
  base: '/chayah-education/',
  integrations: [react(), tailwind()],
  vite: {
    plugins: [
      svgr(),
    ],
  },
})
