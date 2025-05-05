'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 blur-backdrop shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-heading text-xl md:text-2xl font-bold text-gradient">
            Khalil
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">首页</NavLink>
          <NavLink href="/blog">博客</NavLink>
          <NavLink href="/projects">项目</NavLink>
          <NavLink href="/about">关于我</NavLink>
          <NavLink href="/contact">联系我</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>首页</MobileNavLink>
            <MobileNavLink href="/blog" onClick={() => setMenuOpen(false)}>博客</MobileNavLink>
            <MobileNavLink href="/projects" onClick={() => setMenuOpen(false)}>项目</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMenuOpen(false)}>关于我</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setMenuOpen(false)}>联系我</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href}
      className="font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 hero-gradient group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-medium text-2xl text-foreground/90 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
};

export default Navbar; 