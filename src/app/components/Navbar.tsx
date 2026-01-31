import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background oriental-gradient">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary">东方玄学</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary hover:text-secondary transition-colors">首页</Link>
            <Link href="#services" className="text-primary hover:text-secondary transition-colors">服务</Link>
            <Link href="#cases" className="text-primary hover:text-secondary transition-colors">案例</Link>
            <Link href="#blog" className="text-primary hover:text-secondary transition-colors">科普</Link>
            <Link href="#contact" className="text-primary hover:text-secondary transition-colors">咨询</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 oriental-border rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-primary hover:text-secondary transition-colors">首页</Link>
              <Link href="#services" className="text-primary hover:text-secondary transition-colors">服务</Link>
              <Link href="#cases" className="text-primary hover:text-secondary transition-colors">案例</Link>
              <Link href="#blog" className="text-primary hover:text-secondary transition-colors">科普</Link>
              <Link href="#contact" className="text-primary hover:text-secondary transition-colors">咨询</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
