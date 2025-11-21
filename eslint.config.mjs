// eslint.config.mjs

import tsParser from '@typescript-eslint/parser'
import tseslint from '@typescript-eslint/eslint-plugin'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  //
  // 1. `.mjs` — use default JS parser
  //
  {
    files: ['**/*.mjs'],
    ignores: ['.source/**/*'], // ignore generated files
    languageOptions: {
      // no parser → espree (default JS parser)
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // ensure TS projects don’t apply:
        project: undefined,
        tsconfigRootDir: undefined,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'comma-dangle': ['error', 'always-multiline'],
      'prettier/prettier': ['error'],
    },
  },

  //
  // 2. NON-type-aware TS for .source/*
  //
  {
    files: ['.source/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: undefined,
        tsconfigRootDir: undefined,
      },
    },
  },

  //
  // 3. REAL type-aware TS for everything else
  //
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['.source/**/*'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'comma-dangle': ['error', 'always-multiline'],
      'prettier/prettier': ['error'],
    },
  },

  //
  // 4. JS rules
  //
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['**/*.mjs'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'comma-dangle': ['error', 'always-multiline'],
      'prettier/prettier': ['error'],
    },
  },
]
