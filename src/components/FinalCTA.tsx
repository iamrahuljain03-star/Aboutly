import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../config/whatsapp';

interface FinalCTAProps {
  onScrollToForm: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background warm soft gradient circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-stone-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
          Start Today
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight text-balance">
          Give your work a better first impression.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-xl mx-auto text-balance leading-relaxed">
          Your next opportunity might only need one good link.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          >
            <span>Create My Profile</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <a
            href={getWhatsAppUrl(WHATSAPP_PRESETS.generalInquiry)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl transition-all cursor-pointer shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-[#128C7E]" />
            <span>Talk to us on WhatsApp</span>
          </a>
        </div>

        <div className="mt-6 text-xs text-stone-500 font-medium">
          Professional profiles starting at ₹149 · No subscription required
        </div>
      </div>
    </section>
  );
};
