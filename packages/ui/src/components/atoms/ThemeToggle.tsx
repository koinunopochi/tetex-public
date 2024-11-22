import React from 'react';
import { Moon, Sun, Leaf } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeName } from '@/themes/themes';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { themeName, setThemeName } = useTheme();

  const themeIcons = {
    light: Sun,
    dark: Moon,
    nature: Leaf,
  };

  const nextTheme: Record<ThemeName, ThemeName> = {
    light: 'dark',
    dark: 'nature',
    nature: 'light',
  };

  const ThemeIcon = themeIcons[themeName];

  const handleThemeChange = () => {
    setThemeName(nextTheme[themeName]);
  };

  return (
    <button
      onClick={handleThemeChange}
      className={`ttx-flex ttx-items-center ttx-w-full ttx-text-left ttx-px-4 ttx-py-2 ttx-text-sm ttx-rounded-md 
                  ttx-text-text-primary hover:ttx-text-primary ttx-transition-colors ttx-duration-300 ttx-ease-in-out
                  ${className}`}
    >
      <ThemeIcon className="ttx-mr-2" />
      {themeName === 'light' && 'ダークモードに切り替え'}
      {themeName === 'dark' && '自然テーマに切り替え'}
      {themeName === 'nature' && 'ライトモードに切り替え'}
    </button>
  );
};

export default ThemeToggle;
