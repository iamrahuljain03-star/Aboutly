import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../config/whatsapp';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onNavigateHome,
}) => {
  return (
    <footer className="bg-white border-t border-stone-200/80 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-100">
          
          {/* Brand */}
          <div className="space-y-1.5">
            <button
              onClick={onNavigateHome}
              className="text-lg font-bold tracking-tight text-stone-900 cursor-pointer"
            >
              ABOUTLY
            </button>
            <p className="text-xs sm:text-sm text-stone-500">
              Professional profiles, beautifully made.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-stone-600">
            <button
              onClick={() => onScrollToSection('examples')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Examples
            </button>
            <button
              onClick={() => onScrollToSection('how-it-works')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              onClick={() => onScrollToSection('faq')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => onScrollToSection('request-form')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Create Profile
            </button>
            <a
              href={getWhatsAppUrl(WHATSAPP_PRESETS.generalInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#128C7E] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </nav>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © 2026 Aboutly. All rights reserved.
          </div>
          <div>
            Your work deserves a place of its own.
          </div>
        </div>
      </div>
    </footer>
  );
};

