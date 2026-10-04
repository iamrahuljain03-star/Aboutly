import React from 'react';
import { Briefcase, GraduationCap, Laptop, Sparkles, Scale, Palette } from 'lucide-react';

interface WhoIsItForProps {
  onSelectCategory?: (category: string) => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'Professionals',
      title: 'Professionals',
      subtitle: 'Turn your career experience into a profile worth sharing.',
      icon: Briefcase,
    },
    {
      id: 'Students',
      title: 'Students',
      subtitle: 'Stand out beyond a traditional resume.',
      icon: GraduationCap,
    },
    {
      id: 'Freelancers',
      title: 'Freelancers',
      subtitle: 'Show clients what you do before the first conversation.',
      icon: Laptop,
    },
    {
      id: 'Consultants',
      title: 'Consultants',
      subtitle: 'Put your expertise and services in one place.',
      icon: Sparkles,
    },
    {
      id: 'Lawyers',
      title: 'Lawyers',
      subtitle: 'Present your practice, experience and contact details professionally.',
      icon: Scale,
    },
    {
      id: 'Creators',
      title: 'Creators',
      subtitle: 'Give your work a home beyond social media.',
      icon: Palette,
    },
  ];

  return (
    <section id="for-everyone" className="py-16 md:py-24 bg-[#FAF9F5] border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
            Tailored For You
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Built for people who do things.
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Whether you are advancing in your career, advising clients, or stepping into your next venture.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group p-6 bg-white border border-stone-200/70 rounded-2xl hover:border-stone-400/70 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-5 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 group-hover:text-stone-900 font-medium transition-colors">
                  <span>Start with this template</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
