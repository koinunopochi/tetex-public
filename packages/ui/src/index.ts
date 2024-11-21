// index.ts
import './styles/globals.css';

// コンポーネントとプロバイダーのエクスポート
export { default as Header } from './components/molecules/Header';
export { default as Footer } from './components/molecules/Footer';
export { ThemeProvider, useTheme } from './contexts/ThemeContext';

// themesもエクスポート
export { themes } from '@/themes/themes';
export type { ThemeName } from '@/themes/themes';
export type { HeaderProps } from './components/molecules/Header';
