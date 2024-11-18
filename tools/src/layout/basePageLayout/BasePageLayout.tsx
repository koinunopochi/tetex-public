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
      className={`min-h-screen ${className} bg-background-main text-primary`}
    >
      {children}
    </div>
  );
};

export default BasePageLayout;
