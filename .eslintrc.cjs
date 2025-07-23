// .eslintrc.cjs
/* eslint-env node */

module.exports = {
  root: true,
  // Base environment for the project
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  overrides: [
    // --- Configuration for Astro Components ---
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    // --- Configuration for React/TypeScript Files ---
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime', // For the new JSX transform
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        react: {
          version: 'detect', // Automatically detect the React version
        },
      },
      rules: {
        'react/prop-types': 'off', // Not needed when using TypeScript for props
      },
    },
    // --- Configuration for Node.js Scripts & Configs ---
    {
      // This glob now includes .cjs files to correctly lint all config files
      files: [
        '.eslintrc.cjs',
        '*.cjs', // Catches .cz-config.cjs and other root .cjs files
        'astro.config.mjs',
        '_templates/**/*.js',
      ],
      env: {
        node: true, // Defines globals like `module`, `require`, and `process`
      },
      rules: {
        // You can add Node-specific rule overrides here if needed
      },
    },
    // Prettier must be last to override all other formatting rules
    {
      files: ['*'],
      extends: ['prettier'],
    },
  ],
}
