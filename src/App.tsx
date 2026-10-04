import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStory } from './components/EditorialStory';
import { WhoIsItFor } from './components/WhoIsItFor';
import { ProfileExamples } from './components/ProfileExamples';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { RequestProfileForm } from './components/RequestProfileForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProfilePage } from './components/ProfilePage';
import { DEMO_PROFILES } from './data/demoProfiles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Synchronize with browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    navigateTo('/');
  };

  const handleSelectProfile = (slug: string) => {
    navigateTo(`/p/${slug}`);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = () => {
    handleScrollToSection('request-form');
  };

  // Check if current route is /p/:slug
  const profileMatch = currentPath.match(/^\/p\/([a-zA-Z0-9_-]+)/);
  if (profileMatch) {
    const slug = profileMatch[1].toLowerCase();
    const profileData = DEMO_PROFILES[slug] || DEMO_PROFILES.ayush;

    return (
      <ProfilePage
        profile={profileData}
        onBackToHome={handleNavigateHome}
        onCreateProfile={() => handleScrollToSection('request-form')}
      />
    );
  }

  // Otherwise, render Aboutly Landing Page
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onNavigateHome={handleNavigateHome}
        isProfilePage={false}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAyushProfile={() => handleSelectProfile('ayush')}
          onScrollToForm={() => handleScrollToSection('request-form')}
          onScrollToExamples={() => handleScrollToSection('examples')}
        />

        {/* Section 7: "One link. Everything about you." */}
        <EditorialStory />

        {/* Section 8: "Built for people who do things." */}
        <WhoIsItFor onSelectCategory={handleSelectCategory} />

        {/* Section 9: "See what your profile could look like." */}
        <ProfileExamples onSelectProfile={handleSelectProfile} />

        {/* Section 11: "From details to your own link." */}
        <HowItWorks />

        {/* Section 16: "Simple pricing. No complicated plans." */}
        <Pricing onScrollToForm={() => handleScrollToSection('request-form')} />

        {/* Section 12: "Ready to have your own profile?" */}
        <RequestProfileForm />

        {/* Section 17: FAQ */}
        <FAQ />

        {/* Section 18: Final CTA */}
        <FinalCTA onScrollToForm={() => handleScrollToSection('request-form')} />
      </main>

      {/* Section 19: Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
}
