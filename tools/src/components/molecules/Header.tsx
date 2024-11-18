import React from 'react';
import ThemeToggle from './ThemeToggle';
import CharacterImg from '@/assets/with_character_logo.svg';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
return (
  <header className={`w-full fixed top-0 left-0 right-0 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
      <div className="flex justify-between w-full">
        <a href="https://tetex.tech" target="_blank" rel="noopener noreferrer">
          <img src={CharacterImg} alt="Character" className="w-24 h-24" />
        </a>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
);
};

export default Header;
