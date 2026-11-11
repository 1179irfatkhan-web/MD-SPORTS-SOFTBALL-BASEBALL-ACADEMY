import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import { academyInfo } from '../../data/academyInfo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Meet the Coach', href: '#coach', id: 'coach' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Our Journey', href: '#journey', id: 'journey' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top micro bar for direct contact info */}
      <div className="bg-[#08070B] border-b border-[#242F52]/50 text-xs text-[#A7A7AD] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#F36B16]" />
              Sahibaug, Ahmedabad, Gujarat
            </span>
            <span className="flex items-center gap-1.5 text-[#FFB21A]">
              ★ Established 2017 • U-14 | U-17 | U-19 | Senior
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${academyInfo.contact.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#F36B16] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F36B16]" />
              {academyInfo.contact.displayPhone}
            </a>
            <a 
              href={academyInfo.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08070B]/95 backdrop-blur-md shadow-xl border-b border-[#242F52]'
            : 'bg-[#08070B]/80 backdrop-blur-sm border-b border-[#242F52]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Academy Logo & Name */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#F36B16]/40 shadow-glow-orange group-hover:border-[#FFB21A] transition-all duration-300 bg-black flex items-center justify-center p-0.5 shrink-0">
                <img
                  src="/logo/md-sports-logo.jpg"
                  alt="MD Sports Academy Lion Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-[#F5F1E9] group-hover:text-[#FFB21A] transition-colors leading-none">
                  MD SPORTS
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#F36B16] mt-1 leading-none">
                  BASEBALL & SOFTBALL ACADEMY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-lg relative ${
                      isActive
                        ? 'text-[#FFB21A] font-semibold bg-[#11172B]'
                        : 'text-[#F5F1E9]/80 hover:text-[#F5F1E9] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F36B16] rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white font-bold text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-orange-500/40 hover:from-[#E05A05] hover:to-[#F36B16] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Join Academy
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={academyInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#11172B] text-[#F5F1E9] border border-[#242F52] hover:text-[#F36B16] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#08070B] border-b border-[#242F52] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="p-3 mb-2 rounded-xl bg-[#11172B] border border-[#242F52] flex items-center justify-between">
              <span className="text-xs text-[#FFB21A] font-semibold">
                Coach Meet Dabhi • Sahibaug, Ahmedabad
              </span>
              <a
                href={`tel:${academyInfo.contact.phone}`}
                className="text-xs text-[#F36B16] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> Call
              </a>
            </div>
            
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#11172B] text-[#FFB21A] border-l-4 border-[#F36B16]'
                      : 'text-[#F5F1E9] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-[#A7A7AD]" />
                </a>
              );
            })}

            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#FFB21A] text-white font-bold text-center uppercase tracking-wider shadow-glow-orange"
              >
                Join the Academy
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

