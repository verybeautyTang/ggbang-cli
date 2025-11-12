import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  dts: true,
  entry: ['./src/index.ts'],
  format: ['cjs'],
  outDir: 'dist',
})
