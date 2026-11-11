import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  ExternalLink, 
  ShieldCheck, 
  Award,
  ChevronRight 
} from 'lucide-react';
import { academyInfo } from '../../data/academyInfo';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#050407] text-[#A7A7AD] border-t border-[#242F52] relative overflow-hidden">
      {/* Subtle flame glow in footer corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F36B16]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#F36B16]/40 shadow-glow-orange bg-black p-1 shrink-0">
                <img
                  src="/logo/md-sports-logo.jpg"
                  alt="MD Sports Academy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-[#F5F1E9] tracking-wider uppercase">
                  MD SPORTS ACADEMY
                </h3>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#F36B16]">
                  BASEBALL & SOFTBALL ACADEMY
                </p>
                <p className="text-xs text-[#FFB21A] mt-0.5">
                  Established 2017 • Sahibaug, Ahmedabad
                </p>
              </div>
            </div>

            <p className="text-sm text-[#F5F1E9]/80 leading-relaxed max-w-md">
              "{academyInfo.tagline}"
            </p>
            <p className="text-xs text-[#A7A7AD] leading-relaxed max-w-md">
              Founded and led by Head Coach Meet Dabhi to develop technically skilled, disciplined, and championship-ready Baseball and Softball athletes across Gujarat.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={academyInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11172B] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#F5F1E9] border border-[#242F52] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={academyInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11172B] hover:bg-[#25D366] text-[#F5F1E9] hover:text-white border border-[#242F52] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={academyInfo.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11172B] hover:bg-[#4285F4] text-[#F5F1E9] hover:text-white border border-[#242F52] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${academyInfo.contact.email}`}
                className="w-10 h-10 rounded-xl bg-[#11172B] hover:bg-[#F36B16] text-[#F5F1E9] hover:text-white border border-[#242F52] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-[#F5F1E9] border-l-2 border-[#F36B16] pl-2.5">
              Academy Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Our Journey', href: '#about' },
                { label: 'Meet Coach Meet Dabhi', href: '#coach' },
                { label: 'Coaching Programs', href: '#programs' },
                { label: 'Championship Achievements', href: '#achievements' },
                { label: 'Academy Timeline', href: '#journey' },
                { label: 'Photo Gallery', href: '#gallery' },
                { label: 'Contact & Enquiries', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFB21A] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#F36B16] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-[#F5F1E9] border-l-2 border-[#FFB21A] pl-2.5">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-sm">
              {/* Official Office Address */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#11172B]/60 border border-[#242F52]">
                <MapPin className="w-5 h-5 text-[#F36B16] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-[#F5F1E9] text-xs uppercase tracking-wider">Office Address</p>
                  <p className="text-xs text-[#A7A7AD] leading-relaxed">
                    {academyInfo.officeAddress.fullAddress}
                  </p>
                  <a
                    href={academyInfo.contact.officeMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#FFB21A] hover:underline font-semibold pt-0.5"
                  >
                    Visit Our Office <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Practice Ground Location */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#18213D]/60 border border-[#FFB21A]/40">
                <MapPin className="w-5 h-5 text-[#FFB21A] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-[#FFB21A] text-xs uppercase tracking-wider">Practice Ground Location</p>
                  <p className="text-xs text-[#A7A7AD] leading-relaxed">
                    Official training & practice ground for batting, pitching, and match preparation.
                  </p>
                  <a
                    href={academyInfo.contact.practiceGroundMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#F36B16] hover:underline font-bold pt-0.5"
                  >
                    Find Our Practice Ground <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#11172B]/60 border border-[#242F52]">
                <Phone className="w-5 h-5 text-[#FFB21A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F5F1E9]">Head Coach: Meet Dabhi</p>
                  <a
                    href={`tel:${academyInfo.contact.phone}`}
                    className="text-xs text-[#A7A7AD] hover:text-[#F36B16] transition-colors font-medium block"
                  >
                    Direct Call: {academyInfo.contact.displayPhone}
                  </a>
                  <a
                    href={academyInfo.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] hover:underline transition-colors font-medium inline-flex items-center gap-1 mt-0.5"
                  >
                    <MessageCircle className="w-3 h-3" /> WhatsApp Enquiry
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#11172B]/60 border border-[#242F52]">
                <Mail className="w-5 h-5 text-[#F36B16] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F5F1E9]">Official Email</p>
                  <a
                    href={`mailto:${academyInfo.contact.email}`}
                    className="text-xs text-[#A7A7AD] hover:text-[#FFB21A] transition-colors font-medium break-all"
                  >
                    {academyInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#242F52] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A7AD]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} MD Sports Baseball & Softball Academy. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#FFB21A] transition-colors inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F36B16]" />
              Privacy & Child Safety Policy
            </button>
            <span className="text-[#242F52]">•</span>
            <span className="inline-flex items-center gap-1 text-[#FFB21A]/80">
              <Award className="w-3.5 h-3.5" />
              Gujarat State Champions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

