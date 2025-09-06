import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    return `hover:text-gray-900 transition-colors ${
      isActive(path) ? 'text-gray-900 font-bold' : ''
    }`;
  };

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-serif font-bold text-gray-800">
            StockTracker.
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-gray-600">
            <Link to="/" className={navLinkClass('/')}>Dashboard</Link>
            <button 
              onClick={() => scrollToSection('market-overview')} 
              className="hover:text-gray-900 transition-colors"
            >
              Markets
            </button>
            <button 
              onClick={() => scrollToSection('top-stocks')} 
              className="hover:text-gray-900 transition-colors"
            >
              Stocks
            </button>
            <button 
              onClick={() => scrollToSection('breakout-stocks')} 
              className="hover:text-gray-900 transition-colors"
            >
              Analysis
            </button>
            <Link to="/portfolio" className={navLinkClass('/portfolio')}>Portfolio</Link>
          </nav>
          <div className="hidden md:block">
            <button className="px-6 py-2 rounded-full border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors">
              Get Started
            </button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-8 w-8 text-gray-800" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold animate-fade-in-down">
          <button className="absolute top-6 right-6" onClick={toggleMenu}>
            <X className="h-8 w-8 text-gray-800" />
          </button>
          <Link to="/" className="text-gray-800" onClick={toggleMenu}>Dashboard</Link>
          <button 
            onClick={() => scrollToSection('market-overview')} 
            className="text-gray-800"
          >
            Markets
          </button>
          <button 
            onClick={() => scrollToSection('top-stocks')} 
            className="text-gray-800"
          >
            Stocks
          </button>
          <button 
            onClick={() => scrollToSection('breakout-stocks')} 
            className="text-gray-800"
          >
            Analysis
          </button>
          <Link to="/portfolio" className="text-gray-800" onClick={toggleMenu}>Portfolio</Link>
          <button className="px-8 py-3 rounded-full border-2 border-gray-800 text-gray-800 font-semibold mt-4">
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
