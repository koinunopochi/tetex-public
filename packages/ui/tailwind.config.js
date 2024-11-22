/** @type {import('tailwindcss').Config} */
module.exports = {
  // ライブラリのプレフィックスを設定して衝突を防ぐ
  prefix: 'tetex-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // 他のカスタムカラー
      },
    },
  },
  plugins: [],
  corePlugins: {
    //Tailwind独自のGlobal Styleを無効化
    preflight: false,
  },
};
