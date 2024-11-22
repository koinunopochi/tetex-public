import React from 'react';
import ThemeToggle from '@/components/atoms/ThemeToggle';
import CharacterImg from '../../assets/with_character_logo.svg';
import Breadcrumb from '@/components/atoms/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { BreadcrumbItem } from '@/types/breadcrumb';

export interface HeaderProps {
  className?: string;
  defaultLabel?: string;
  defaultPath?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  defaultLabel = null,
  defaultPath = null,
}) => {
  const location = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadcrumbs: BreadcrumbItem[] =
      defaultLabel && defaultPath
        ? [
            { label: 'tetex.tech', url: 'https://tetex.tech' },
            { label: defaultLabel, path: defaultPath },
          ]
        : [{ label: 'tetex.tech', url: 'https://tetex.tech' }];

    pathnames.reduce((acc, curr, idx) => {
      const path = `${acc}/${curr}`;
      const label = curr.charAt(0).toUpperCase() + curr.slice(1);

      breadcrumbs.push({
        label,
        ...(idx < pathnames.length - 1 && { path }),
      });

      return path;
    }, '');

    return breadcrumbs;
  };
  return (
    <header
      className={`
        ttx-w-full ttx-fixed ttx-top-0 ttx-left-0 ttx-right-0 ttx-z-50
        ttx-bg-background-main/70
        ttx-backdrop-blur-md
        ttx-border-b ttx-border-white/10
        ${className}
      `}
    >
      <div className="ttx-max-w-7xl ttx-mx-auto ttx-px-4 sm:ttx-px-6 lg:ttx-px-8">
        <div className="ttx-h-16 ttx-flex ttx-items-center">
          <div className="ttx-flex ttx-justify-between ttx-items-center ttx-w-full">
            <a
              href="https://tetex.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="ttx-flex-shrink-0"
            >
              <img
                src={CharacterImg}
                alt="Character"
                className="ttx-w-24 ttx-h-24"
              />
            </a>

            <div className="ttx-flex-grow ttx-mx-4">
              <Breadcrumb items={generateBreadcrumbs()} />
            </div>

            <div className="ttx-flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
