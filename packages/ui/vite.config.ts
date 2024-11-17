import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    dts({
      // 型定義ファイルの生成
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@tetex/ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
     rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // 固定の文字列を指定
        assetFileNames: 'index.css',
      },
    },
    },
  },
});
