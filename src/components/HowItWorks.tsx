import React from 'react';
import { FileEdit, Wand2, Share2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell us about yourself',
      description: 'Share your basic information, experience, skills and links.',
      detail: 'Fill out our simple form with your background, past roles, credentials, and work samples. Upload your resume or photo if you have them ready.',
      icon: FileEdit,
    },
    {
      num: '02',
      title: 'We build your profile',
      description: 'We turn your information into a polished professional profile.',
      detail: 'Our design team hand-crafts your layout, ensures clean typography, sets up instant WhatsApp and contact CTAs, and optimizes mobile responsiveness.',
      icon: Wand2,
    },
    {
      num: '03',
      title: 'Share it anywhere',
      description: 'Use your Aboutly link on WhatsApp, LinkedIn, Instagram, your resume or email signature.',
      detail: 'Receive your clean, shareable link (aboutly.me/p/yourname) ready to send to prospective employers, clients, partners, and collaborators.',
      icon: Share2,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF9F5] border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            From details to your own link.
          </h2>
          <p className="mt-3 text-base text-stone-600">
            No complex website builders, hosting setups, or code required. We take care of the entire craft.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white border border-stone-200/90 rounded-2xl p-7 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-lg bg-stone-900 text-white font-mono text-xs font-semibold flex items-center justify-center">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-stone-100 text-stone-600">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-stone-700 leading-snug mb-3">
                    "{step.description}"
                  </p>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                  Step {idx + 1} of 3
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
