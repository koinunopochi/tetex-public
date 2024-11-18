import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ThemeToggle />
    </div>
  );
};

export default Header;
