// eslint.config.js
import tseslint from 'typescript-eslint'
import pluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['_templates/'],
  },

  ...pluginAstro.configs.recommended,
  ...pluginAstro.configs['jsx-a11y-recommended'],

  ...tseslint.configs.recommended,

  eslintConfigPrettier,
]
