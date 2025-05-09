import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      all: false,
    },
    dir: 'src',
    workspace: [
      {
        extends: true,
        test: {
          dir: 'src/services',
          environment: 'node',
          name: 'unit',
        },
      },
      {
        extends: true,
        test: {
          dir: 'src/controllers',
          name: 'e2e',
          environment:
            './prisma/vitest-environment-prisma/prisma-test-environment.ts',
        },
      },
    ],
  },
})
