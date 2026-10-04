import React from 'react';
import { ArrowUpRight, Check, MapPin, Sparkles } from 'lucide-react';
import { DEMO_PROFILES } from '../data/demoProfiles';

interface ProfileExamplesProps {
  onSelectProfile: (slug: string) => void;
}

export const ProfileExamples: React.FC<ProfileExamplesProps> = ({ onSelectProfile }) => {
  const profileList = [
    DEMO_PROFILES.ayush,
    DEMO_PROFILES.neha,
    DEMO_PROFILES.arjun,
  ];

  return (
    <section id="examples" className="py-16 md:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Demo notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
              Curated Profiles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              See what your profile could look like.
            </h2>
            <p className="mt-2 text-base text-stone-600 max-w-xl">
              Explore interactive demo profiles designed for distinct professions. Click any card to view the live single-link experience.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Interactive Demo Profiles · Sample Data</span>
          </div>
        </div>

        {/* 3 Profile Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileList.map((pro) => (
            <div
              key={pro.slug}
              className="group bg-[#FAF9F5] border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,0.07)] hover:border-stone-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Monogram styled avatar */}
                    <div
                      className="w-13 h-13 rounded-xl text-white font-bold text-lg flex items-center justify-center shadow-xs tracking-tight transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: pro.accentColor }}
                    >
                      {pro.avatarInitials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 leading-snug">
                        {pro.name}
                      </h3>
                      <p className="text-xs font-semibold text-stone-700">
                        {pro.profession}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{pro.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-5 font-normal">
                  {pro.bio}
                </p>

                {/* Skills tags preview */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Core Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pro.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 text-[11px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {pro.skills.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-stone-200/50 text-stone-500 text-[11px]">
                        +{pro.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">
                  aboutly.me/p/{pro.slug}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectProfile(pro.slug)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-900 hover:text-white border border-stone-300 rounded-lg transition-all shadow-2xs cursor-pointer"
                >
                  View Example
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
