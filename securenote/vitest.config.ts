import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'; // needed for @/ imports

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'], // ✅ this is your jest-dom setup
    include: ['**/*.{test,spec}.ts?(x)'], // ✅ tells Vitest which files are tests
  },
});

