import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BreadcrumbProps } from '@/types/breadcrumb';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="パンくずリスト" className={`ttx-py-2 ${className}`}>
      <ol className="ttx-flex ttx-flex-wrap ttx-items-center ttx-gap-2 ttx-text-sm">
        {items.map((item, index) => (
          <li key={index} className="ttx-flex ttx-items-center">
            {index > 0 && (
              <ChevronRight
                className="ttx-h-4 ttx-w-4 ttx-mx-1 ttx-text-secondary"
                aria-hidden="true"
              />
            )}

            {index === items.length - 1 ? (
              <span className="ttx-text-primary ttx-font-medium">
                {item.label}
              </span>
            ) : item.url ? (
              <a
                href={item.url}
                className="ttx-link ttx-transition-colors"
                target={item.isBlank ? '_blank' : undefined}
                rel={item.isBlank ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            ) : item.path ? (
              <Link to={item.path} className="ttx-link ttx-transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="ttx-text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
