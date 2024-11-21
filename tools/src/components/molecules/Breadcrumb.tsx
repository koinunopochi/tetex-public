import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BreadcrumbProps } from '@/types/breadcrumb';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="パンくずリスト" className={`py-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight
                className="h-4 w-4 mx-1 text-secondary"
                aria-hidden="true"
              />
            )}

            {/* 最後の項目 */}
            {index === items.length - 1 ? (
              <span className="text-primary font-medium">{item.label}</span>
            ) : /* 外部リンク */
            item.url ? (
              <a
                href={item.url}
                className="link transition-colors"
                target={item.isBlank ? '_blank' : undefined}
                rel={item.isBlank ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            ) : /* 内部リンク */
            item.path ? (
              <Link to={item.path} className="link transition-colors">
                {item.label}
              </Link>
            ) : (
              /* テキストのみ */
              <span className="text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
