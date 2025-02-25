import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type UserConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      API_BASE_URL: JSON.stringify(env.API_BASE_URL),
    },
    resolve: {
      alias: {
        '@pages': resolve(__dirname, './src/pages'),
        '@services': resolve(__dirname, './src/services'),
        '@models': resolve(__dirname, './src/models'),
      },
    },
  } satisfies UserConfig;
});
