import React from 'react';
import { User, Compass, Briefcase, MessageSquare } from 'lucide-react';

export const EditorialStory: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Your Story',
      description: 'Introduce yourself beyond a job title.',
      detail: 'Share your background, what drives your work, and the unique perspective you bring to every project or consultation.',
      icon: User,
    },
    {
      num: '02',
      title: 'Your Experience',
      description: 'Show your journey, skills and expertise clearly.',
      detail: 'Chronicle key milestones, career transitions, leadership roles, and core competencies with clean, readable hierarchy.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Your Work',
      description: 'Present projects, achievements and services beautifully.',
      detail: 'Highlight real outcomes, client case studies, publications, or advisory capabilities without cluttered attachments.',
      icon: Briefcase,
    },
    {
      num: '04',
      title: 'Your Contact',
      description: 'Make it easy for people to reach you.',
      detail: 'Direct 1-tap WhatsApp messaging, curated email inquiries, social channels, and downloadable verified documents.',
      icon: MessageSquare,
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-stone-200/60 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Headline */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight text-balance">
            One link.<br />Everything about you.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            Stop sending the same resume, LinkedIn profile and scattered links. Give people one place to understand who you are and what you do.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="group relative bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Editorial clean index & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold tracking-wider text-stone-400 group-hover:text-stone-900 transition-colors">
                      {card.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-medium text-stone-800 leading-snug mb-3">
                    "{card.description}"
                  </p>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
