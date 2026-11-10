import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HighlightsSection } from './components/sections/HighlightsSection';
import { AboutSection } from './components/sections/AboutSection';
import { CoachSection } from './components/sections/CoachSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { JourneySection } from './components/sections/JourneySection';
import { LatestUpdatesSection } from './components/sections/LatestUpdatesSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';
import { PrivacyModal } from './components/ui/PrivacyModal';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { academyInfo } from './data/academyInfo';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'coach', 'programs', 'achievements', 'journey', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08070B] text-[#F5F1E9] flex flex-col relative selection:bg-[#F36B16] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section A: Hero */}
        <HeroSection />

        {/* Section B: Highlights Statistics */}
        <HighlightsSection />

        {/* Section C & About Us Detail */}
        <AboutSection />

        {/* Section E: Meet Head Coach Meet Dabhi */}
        <CoachSection />

        {/* Section D: Coaching Programs */}
        <ProgramsSection />

        {/* Section F & Full Achievements */}
        <AchievementsSection />

        {/* Section G: Academy Journey Timeline (2017–2026) */}
        <JourneySection />

        {/* Section 9: Latest From The Academy (Static Bulletin) */}
        <LatestUpdatesSection />

        {/* Section H: Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Section I & Contact & Enquiry */}
        <ContactSection onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

      {/* Floating Action Buttons: WhatsApp & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#11172B] hover:bg-[#F36B16] text-[#F5F1E9] border border-[#242F52] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={academyInfo.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#11172B] text-white text-xs font-bold border border-[#242F52] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Chat with Coach
          </span>
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default App;
