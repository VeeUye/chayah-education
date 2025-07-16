// .eslintrc.cjs
/* eslint-env node */

module.exports = {
  root: true,
  // Base environment for the project
  env: {
    browser: true,
    es2021: true,
  },
  // Start with the recommended presets
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'prettier', // This must be last
  ],
  // Main parser for TypeScript files
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  overrides: [
    {
      // Configuration for your Astro components
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      // Extend TypeScript rules for the script part of Astro files
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      // This is the key fix for your astro.config.mjs file
      files: ['astro.config.mjs'],
      // We are only turning off the "not defined" rule for this one specific file
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
