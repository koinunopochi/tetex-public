import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      include: ['src'], // 型定義を生成するファイルを指定
      exclude: ['node_modules', 'dist'],
    }),
  ],
  server: {
    port: 3000, // デフォルトポートを3000に設定
    open: true, // 起動時にブラウザを自動で開く
    host: true, // IPアドレスでのアクセスを許可
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@tetex/ui',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
});
