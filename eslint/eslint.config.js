import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import { noJasmine } from './src/plugins/no-jasmine.js'
export default defineConfig([
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },
  {
    rules: {
      'no-console': 'error',
      'setting/no-jasmine': 'error',
    },
    plugins: {
      setting: noJasmine,
    },
  },
])
// ast