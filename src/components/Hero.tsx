import React, { useState } from 'react';
import { ArrowRight, MessageCircle, ExternalLink, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../config/whatsapp';

interface HeroProps {
  onOpenAyushProfile: () => void;
  onScrollToForm: () => void;
  onScrollToExamples: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAyushProfile,
  onScrollToForm,
  onScrollToExamples,
}) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'about' | 'work' | 'skills'>('about');

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      getWhatsAppUrl(WHATSAPP_PRESETS.connectWithProfessional('Ayush Sharma', 'Product Designer')),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-stone-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
              Personal Professional Profile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] text-balance">
              Your work deserves a place of its own.
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-xl text-balance">
              One beautiful link for your experience, work, skills and everything people need to know about you.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
              >
                Create My Profile
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                type="button"
                onClick={onScrollToExamples}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-stone-700 bg-stone-100/80 hover:bg-stone-200/80 rounded-xl transition-all cursor-pointer"
              >
                View Examples
              </button>
            </div>

            {/* Subtle pricing marker */}
            <div className="pt-1 flex items-center gap-2 text-xs text-stone-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
              <span>Professional profiles starting at ₹149</span>
              <span className="text-stone-300">·</span>
              <span>Delivered in 24 hours</span>
            </div>
          </div>

          {/* Right Hero Visual: Floating Profile Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              {/* Subtle floating shadow card frame */}
              <div className="relative bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_16px_36px_-12px_rgba(28,25,23,0.08)] transition-transform duration-500 ease-out hover:-translate-y-1">
                
                {/* Micro Header within Preview */}
                <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    {/* Portrait Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-xl bg-stone-900 text-stone-100 font-bold text-base flex items-center justify-center shadow-inner tracking-tight">
                      AS
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-base font-bold text-stone-900">Ayush Sharma</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" title="Available for projects" />
                      </div>
                      <div className="text-xs text-stone-500 font-medium">Product Designer · Bengaluru</div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenAyushProfile}
                    className="p-1.5 text-stone-400 hover:text-stone-900 transition-colors rounded-lg hover:bg-stone-50"
                    title="Open full interactive demo"
                    aria-label="Open full interactive demo of Ayush's profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Tagline */}
                <div className="py-4">
                  <p className="text-sm text-stone-700 font-normal leading-relaxed italic border-l-2 border-stone-900 pl-3">
                    "Designing digital experiences that make complex things feel simple."
                  </p>
                </div>

                {/* Interactive Segmented Mini Tabs */}
                <div className="flex items-center gap-1 p-1 bg-stone-100/90 rounded-lg text-xs mb-4">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab('about')}
                    className={`flex-1 py-1.5 rounded-md font-medium transition-all ${
                      activePreviewTab === 'about'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    About
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab('work')}
                    className={`flex-1 py-1.5 rounded-md font-medium transition-all ${
                      activePreviewTab === 'work'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Work
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab('skills')}
                    className={`flex-1 py-1.5 rounded-md font-medium transition-all ${
                      activePreviewTab === 'skills'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Skills
                  </button>
                </div>

                {/* Tab Content Preview */}
                <div className="min-h-[140px] text-xs text-stone-600">
                  {activePreviewTab === 'about' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-start gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-stone-800">Lead Product Designer</span> at Veloce Labs (2023 — Present)
                        </div>
                      </div>
                      <p className="text-stone-500 leading-normal pl-5">
                        Specializing in tokenized design systems, enterprise user flows, and high-impact fintech checkout experiences.
                      </p>
                    </div>
                  )}

                  {activePreviewTab === 'work' && (
                    <div className="space-y-2 animate-in fade-in duration-200">
                      <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                        <div className="font-semibold text-stone-900">Veloce Design System 2.0</div>
                        <div className="text-[11px] text-stone-500">Multi-brand design system with automated token pipelines.</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                        <div className="font-semibold text-stone-900">KiteFlow Merchant Dashboard</div>
                        <div className="text-[11px] text-stone-500">High-volume transaction analytics with zero friction.</div>
                      </div>
                    </div>
                  )}

                  {activePreviewTab === 'skills' && (
                    <div className="flex flex-wrap gap-1.5 pt-1 animate-in fade-in duration-200">
                      {['Design Systems', 'Interaction Design', 'User Research', 'Figma', 'Prototyping', 'Product Strategy'].map((s) => (
                        <span key={s} className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-md font-medium text-[11px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Profile Action Bar with WhatsApp button */}
                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Me
                  </button>

                  <button
                    type="button"
                    onClick={onOpenAyushProfile}
                    className="inline-flex items-center justify-center py-2.5 px-3.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Open Profile
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>

                {/* Subtext indicator */}
                <div className="mt-3 text-center">
                  <span className="text-[11px] text-stone-400 font-medium">
                    Preview: aboutly.me/p/ayush
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
