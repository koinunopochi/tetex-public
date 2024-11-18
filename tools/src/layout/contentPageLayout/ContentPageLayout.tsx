import React from 'react';

interface ContentPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ContentPageLayout: React.FC<ContentPageLayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`pt-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentPageLayout;
