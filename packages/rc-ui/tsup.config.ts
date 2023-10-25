import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['cjs', 'esm'],
  target: 'es2019',
  sourcemap: true,
  treeshake: true,
  banner: {
    // js: "'use client'",
  },
})
