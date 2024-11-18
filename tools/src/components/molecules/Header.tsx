import React from 'react';
import ThemeToggle from './ThemeToggle';
import CharacterImg from '@/assets/with_character_logo.svg';
import Breadcrumb from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import { BreadcrumbItem } from '@/types/breadcrumb';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = useLocation();

  // パンくずリストの生成
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x);

    // ベースとなるホームアイテム
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'tetex.tech', url: 'https://tetex.tech' },
      { label: '開発支援ツール', path: '/' },
    ];

    // パスを順に解析してパンくずリストを生成
    pathnames.reduce((acc, curr, idx) => {
      const path = `${acc}/${curr}`;
      // パスに応じてラベルを設定
      // 実際の実装ではroutesConfigなどから適切なラベルを取得することを推奨
      const label = curr.charAt(0).toUpperCase() + curr.slice(1);

      breadcrumbs.push({
        label,
        // 最後のアイテム以外にはpathを設定
        ...(idx < pathnames.length - 1 && { path }),
      });

      return path;
    }, '');

    return breadcrumbs;
  };
  return (
    <header
      className={`
        w-full fixed top-0 left-0 right-0 z-50
        bg-background-main/70
        backdrop-blur-md
        border-b border-white/10
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインヘッダー部分 */}
        <div className="h-16 flex items-center">
          <div className="flex justify-between items-center w-full">
            <a
              href="https://tetex.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img src={CharacterImg} alt="Character" className="w-24 h-24" />
            </a>

            {/* パンくずリストを中央に配置 */}
            <div className="flex-grow mx-4">
              {' '}
              {/* flex-growで残りのスペースを取る */}
              <Breadcrumb items={generateBreadcrumbs()} />
            </div>

            {/* テーマトグル */}
            <div className="flex-shrink-0">
              {' '}
              {/* トグルボタンが縮まないようにする */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
