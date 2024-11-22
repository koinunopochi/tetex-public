/** @type {import('tailwindcss').Config} */
module.exports = {
  // ライブラリのプレフィックスを設定して衝突を防ぐ
  prefix: 'ttx-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        morse: 'morse 3s infinite linear',
      },
      keyframes: {
        morse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' }
        }
      }
    }
  },
  plugins: [],
};
