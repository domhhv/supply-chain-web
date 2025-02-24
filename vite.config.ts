import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, './src/pages'),
    },
  },
}) satisfies UserConfig;
