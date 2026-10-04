import React, { useState } from 'react';
import {
  ArrowLeft,
  Share2,
  Mail,
  Linkedin,
  MessageCircle,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  MapPin,
  Check,
  CheckCircle2
} from 'lucide-react';
import { DemoProfileItem } from '../types/profile';
import { getWhatsAppUrl } from '../config/whatsapp';

interface ProfilePageProps {
  profile: DemoProfileItem;
  onBackToHome: () => void;
  onCreateProfile: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  onBackToHome,
  onCreateProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'work' | 'skills' | 'contact'>('about');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} — ${profile.profession}`,
          text: profile.tagline,
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleWhatsAppDirect = () => {
    window.open(getWhatsAppUrl(profile.socials.whatsappText), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 flex flex-col">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-30 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-stone-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Aboutly</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 py-1.5 px-3 rounded-lg shadow-2xs transition-colors cursor-pointer"
              title="Share profile link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onCreateProfile}
              className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              Get Your Profile
            </button>
          </div>
        </div>
      </header>

      {/* Main Profile Canvas */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 md:py-16">
        
        {/* Profile Header Block */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-5">
              {/* Profile Monogram / Photo */}
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl text-white font-bold text-2xl sm:text-3xl flex items-center justify-center shadow-sm shrink-0 tracking-tight"
                style={{ backgroundColor: profile.accentColor }}
              >
                {profile.avatarInitials}
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                    {profile.name}
                  </h1>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active & Available" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-stone-700">
                  {profile.profession}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Prominent WhatsApp CTA & Secondary Actions */}
            <div className="flex flex-col sm:items-end gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#0E7064] rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp Me</span>
              </button>

              <div className="flex items-center gap-2 text-xs">
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {profile.socials.email && (
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="p-2 rounded-lg bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                    title="Email me"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('section-contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-stone-100 text-stone-700 hover:text-stone-900 text-xs font-medium transition-colors"
                >
                  Contact Info
                </button>
              </div>
            </div>
          </div>

          {/* Tagline quote */}
          <div className="pt-6">
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal italic border-l-2 border-stone-800 pl-4">
              "{profile.tagline}"
            </p>
          </div>
        </div>

        {/* Profile Internal Section Navigation Bar */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-2 p-1.5 bg-stone-200/50 rounded-xl mb-8">
          {[
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'work', label: 'Selected Work' },
            { id: 'skills', label: 'Skills & Services' },
            { id: 'contact', label: 'Contact & Resume' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Content Panels */}
        <div className="space-y-8">
          
          {/* About Tab */}
          {(activeTab === 'about' || activeTab === 'all' as any) && (
            <section id="section-about" className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-bold text-stone-900">About Me</h2>
              <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
                {profile.aboutStory.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Education subsection */}
              <div className="pt-6 border-t border-stone-100">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Education & Credentials
                </h3>
                <div className="space-y-3">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <GraduationCap className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-stone-800">{edu.degree}</div>
                        <div className="text-xs text-stone-500">{edu.institution} · {edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Experience Tab */}
          {(activeTab === 'experience' || activeTab === 'all' as any) && (
            <section id="section-experience" className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-stone-900 mb-6">Experience & Journey</h2>
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-stone-200">
                {profile.experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-stone-900 border-2 border-white shadow-2xs" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-sm font-bold text-stone-900">{exp.role}</h3>
                      <span className="text-xs font-mono text-stone-500">{exp.period}</span>
                    </div>

                    <div className="text-xs font-semibold text-stone-700 mb-2">
                      {exp.company}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {exp.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[11px] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Selected Work Tab */}
          {(activeTab === 'work' || activeTab === 'all' as any) && (
            <section id="section-work" className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-stone-900 mb-6">Selected Work & Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {profile.selectedWork.map((work, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-stone-200/90 bg-stone-50/50 hover:bg-stone-50 hover:border-stone-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                        {work.category}
                      </div>
                      <h3 className="text-base font-bold text-stone-900 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3">
                        {work.description}
                      </p>
                    </div>

                    {work.outcome && (
                      <div className="pt-3 border-t border-stone-200/60 flex items-start gap-1.5 text-xs font-medium text-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{work.outcome}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills & Services Tab */}
          {(activeTab === 'skills' || activeTab === 'all' as any) && (
            <section id="section-skills" className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-stone-900 mb-4">Core Skills & Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {profile.services && profile.services.length > 0 && (
                <div className="pt-6 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-stone-900 mb-3">
                    Available For Services & Consulting
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.services.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-700 p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                        <Sparkles className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Contact & Resume Tab */}
          {(activeTab === 'contact' || activeTab === 'all' as any) && (
            <section id="section-contact" className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-stone-900 mb-2">Get in Touch</h2>
                <p className="text-xs sm:text-sm text-stone-600 mb-6">
                  Feel free to reach out via WhatsApp, email, or schedule a conversation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Direct Card */}
                  <div
                    onClick={handleWhatsAppDirect}
                    className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#128C7E] text-white flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-900">Direct WhatsApp</div>
                        <div className="text-[11px] text-stone-600">Quick response</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#128C7E]">Chat →</span>
                  </div>

                  {/* Email Direct Card */}
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="p-5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-stone-900 text-white flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-900">Email Inquiry</div>
                        <div className="text-[11px] text-stone-600 truncate max-w-[150px]">{profile.socials.email}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-stone-900">Send →</span>
                  </a>
                </div>
              </div>

              {/* Verified Resume Section */}
              <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">Curriculum Vitae / Resume</div>
                    <div className="text-[11px] text-stone-500">Updated for 2026 · PDF format</div>
                  </div>
                </div>

                <a
                  href="#download-resume"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Demo profile: In production, ${profile.name}'s verified PDF resume would download here.`);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </section>
          )}

        </div>

        {/* Small Profile Footer */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>Created with</span>
            <button
              onClick={onBackToHome}
              className="font-bold text-stone-900 hover:underline cursor-pointer"
            >
              Aboutly
            </button>
            <span>· One link for your entire career</span>
          </div>

          <button
            type="button"
            onClick={onCreateProfile}
            className="inline-flex items-center gap-1 font-semibold text-stone-900 hover:underline cursor-pointer"
          >
            <span>Create your own profile starting at ₹149</span>
            <span>→</span>
          </button>
        </div>

      </main>
    </div>
  );
};
