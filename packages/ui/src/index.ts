// index.ts
import './themes/theme-styles.css';
import './index.css';
import './styles.css';

// コンポーネントとプロバイダーのエクスポート
export * from './components/molecules/Header';
export * from './components/molecules/Footer';
export * from './contexts/ThemeContext';
export * from './components/layout/BasePageLayout';
export * from './components/atoms/Loading';

// themesもエクスポート
export { themes } from '@/themes/themes';
export type { ThemeName } from '@/themes/themes';
export type * from './components/molecules/Header';
