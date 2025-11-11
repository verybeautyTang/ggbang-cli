import globals from 'globals'
import js from '@eslint/js'
import tslint from 'typescript-eslint'
import parse from '@typescript-eslint/parser'

export default tslint.config {
  extends: [js.configs.recommended, ...tslint.config.recommended],
  files: ['*.ts'],
  ignores: ['*.js','node_modules'],
  rules: {
    'no-console': 'error'
  },
  languageOptions: {
    parser: tslint.parser,
    globals: {
      ...globals.node
    },
    parserOptions: {
      
    }
  }
}