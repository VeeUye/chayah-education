// /Users/veeuye/projects/chayah-education/astro.config.mjs

import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const base = '/chayah-education/'

// Define the complete @font-face rule here, using the `base` variable directly.
const fontFaceRule = `
  @font-face {
    font-weight: 100 900;
    font-style: normal;
    font-family: Cabin;
    font-display: swap;
    src: url('${base}fonts/Cabin-VariableFont_wdth,wght.ttf') format('truetype-variations');
  }
`

export default defineConfig({
  base: base,
  integrations: [react()],
  vite: {
    plugins: [svgr()],
    css: {
      preprocessorOptions: {
        scss: {
          // FIX: Use a function to replace a placeholder in main.scss.
          // This gives us precise control, inserting the font rule AFTER
          // all the @use rules and avoiding any Sass syntax errors.
          additionalData: (source, filePath) => {
            const mainScssPath = path.resolve(__dirname, 'src/styles/main.scss')
            if (filePath === mainScssPath) {
              return source.replace('/* FONT_FACE_PLACEHOLDER */', fontFaceRule)
            }
            return source
          },
        },
      },
    },
  },
})
