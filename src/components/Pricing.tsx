import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingProps {
  onScrollToForm: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onScrollToForm }) => {
  const features = [
    'Custom professional profile hand-crafted for you',
    'Fully mobile responsive & lightning fast',
    'Direct WhatsApp and email contact buttons',
    'LinkedIn, Instagram & portfolio links',
    'Editorial layout tailored to your profession',
    'Shareable profile link (aboutly.me/p/yourname)',
    'Resume / CV downloadable link integration',
    'Profile edits within 48 hours of initial delivery',
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
            Honest & Accessible
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Simple pricing. No complicated plans.
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Get your own professionally designed profile without recurring subscription traps or technical headaches.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-[#FAF9F5] border border-stone-300 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-stone-200">
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Professional Profile
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Complete setup & custom link delivery
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs text-stone-500 uppercase font-medium">Starting at</div>
                <div className="text-3xl font-extrabold text-stone-900 tracking-tight">
                  ₹149
                </div>
                <div className="text-[11px] text-stone-500">One-time launch price</div>
              </div>
            </div>

            {/* Features list */}
            <div className="py-7 space-y-3.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                  <div className="w-4 h-4 rounded-full bg-stone-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onScrollToForm}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer"
              >
                <span>Create My Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-stone-500 mt-3.5 leading-normal">
                Final pricing may vary depending on profile requirements or custom domain requests. No advance payment required before initial review.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
