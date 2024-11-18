import React from 'react';

interface BasePageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const BasePageLayout: React.FC<BasePageLayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background-main text-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default BasePageLayout;
