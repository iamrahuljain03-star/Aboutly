import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'What is Aboutly?',
      a: 'Aboutly is a personal professional profile service. We take your background, experience, skills, and links, and craft a single, elegant web profile you can share anywhere with one simple link (like aboutly.me/p/yourname).',
    },
    {
      q: 'Who can create a profile?',
      a: 'Anyone with professional work to present — including working professionals, students, freelancers, consultants, lawyers, designers, engineers, founders, and creators. We tailor each profile to your field.',
    },
    {
      q: 'Is this a replacement for LinkedIn?',
      a: 'No. Think of it as your personal front door. While LinkedIn is a social network, your Aboutly profile is a focused, clutter-free personal website designed to make a memorable first impression with direct contact buttons.',
    },
    {
      q: 'Can I use my profile link on my resume?',
      a: 'Yes, absolutely. A single clean link at the top of your resume gives hiring managers, recruiters, and clients an interactive way to view your case studies, credentials, and projects on their mobile device or desktop.',
    },
    {
      q: 'Can I add WhatsApp and social links?',
      a: 'Yes. Every Aboutly profile features an integrated WhatsApp chat button, email contact button, plus links to your LinkedIn, Instagram, GitHub, portfolio, and downloadable PDF resume.',
    },
    {
      q: 'How long does it take?',
      a: 'Once you submit your details, our design team reviews your information and delivers your draft link via WhatsApp within 24 to 48 hours.',
    },
    {
      q: 'Can I request changes?',
      a: 'Yes. Every profile includes a review period where you can request revisions to your bio, experience, skills, photos, and links before finalizing.',
    },
    {
      q: 'Can I get a custom design?',
      a: 'Yes. While standard profiles start at ₹149, we also craft custom multi-section layouts, personalized color palettes, custom domains, and specialized portfolios for senior executives and independent practices upon request.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Everything you need to know about getting your Aboutly profile.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200/90 rounded-2xl overflow-hidden transition-colors bg-[#FAF9F5]/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-stone-800 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-stone-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-stone-700" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
