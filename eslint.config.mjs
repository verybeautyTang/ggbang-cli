import globals from 'globals'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import parse from '@typescript-eslint/parser'

export default defineConfig({
  extends: [js.configs.recommended],
  files: ['**/*.ts'],
  ignores: ['*.js', 'node_modules', 'dist'],
  rules: {
    'no-console': 'error',
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    globals: {
      ...globals.node,
    },
    parserOptions: {
      project: ['**/*/tsconfig.eslint.json', '**/*/tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
