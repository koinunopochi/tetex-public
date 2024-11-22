import React from 'react';
import { Header, HeaderProps } from '../molecules/Header';
import { Footer } from '../molecules/Footer';

export interface BasePageLayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
}

export const BasePageLayout: React.FC<BasePageLayoutProps> = ({
  children,
  headerProps,
}) => {
  return (
    <div className="ttx-min-h-screen ttx-flex ttx-flex-col ttx-bg-background-main ttx-text-primary">
      <Header {...headerProps} />
      <main className="ttx-flex-1 ttx-flex ttx-flex-col ttx-pt-20">
        <div className="ttx-mx-auto ttx-w-full ttx-max-w-7xl ttx-px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
