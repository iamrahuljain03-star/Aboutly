import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: () => void;
  isProfilePage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, isProfilePage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isProfilePage && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={handleBrandClick}
          className="text-xl font-bold tracking-tight text-stone-900 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded"
          aria-label="Aboutly Homepage"
        >
          ABOUTLY
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <button
            onClick={() => handleNavClick('examples')}
            className="hover:text-stone-900 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-900 cursor-pointer"
          >
            Examples
          </button>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="hover:text-stone-900 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-900 cursor-pointer"
          >
            How it works
          </button>
          <button
            onClick={() => handleNavClick('for-everyone')}
            className="hover:text-stone-900 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-900 cursor-pointer"
          >
            For everyone
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-stone-900 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-900 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('request-form')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
          >
            Create My Profile
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-stone-200 px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-1 text-sm font-medium text-stone-700">
            <button
              onClick={() => handleNavClick('examples')}
              className="text-left py-2 px-1 hover:text-stone-900"
            >
              Examples
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left py-2 px-1 hover:text-stone-900"
            >
              How it works
            </button>
            <button
              onClick={() => handleNavClick('for-everyone')}
              className="text-left py-2 px-1 hover:text-stone-900"
            >
              For everyone
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 px-1 hover:text-stone-900"
            >
              FAQ
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('request-form')}
              className="w-full flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-white bg-stone-900 rounded-lg active:bg-stone-800"
            >
              Create My Profile
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
