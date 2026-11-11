import React from 'react';
import { 
  Trophy, 
  ChevronRight, 
  PhoneCall, 
  Flame, 
  MapPin, 
  Shield, 
  Award 
} from 'lucide-react';
import { academyInfo } from '../../data/academyInfo';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#08070B] pt-8 pb-16 lg:py-24">
      {/* Background Graphic Grid & Flame Glows */}
      <div className="absolute inset-0 bg-sports-grid opacity-25 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F36B16]/15 rounded-full blur-[120px] pointer-events-none animate-flame-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FFB21A]/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* Cinematic Sports Background Texture with Subtle Overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-center bg-cover mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1508802271842-80b19366a445?auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070B]/90 via-[#08070B]/95 to-[#08070B]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F36B16]/15 text-[#FFB21A] border border-[#F36B16]/30 shadow-glow-orange">
                <Flame className="w-3.5 h-3.5 text-[#F36B16] fill-[#F36B16]" />
                Established 2017
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#11172B] text-[#F5F1E9] border border-[#242F52]">
                <MapPin className="w-3.5 h-3.5 text-[#F36B16]" />
                Sahibaug, Ahmedabad, Gujarat
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#11172B] text-[#FFB21A] border border-[#242F52]">
                <Award className="w-3.5 h-3.5" />
                State Champions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-[#F5F1E9] leading-[1.08]">
              BUILDING <span className="bg-gradient-to-r from-[#F36B16] via-[#FFB21A] to-[#F36B16] bg-clip-text text-transparent">CHAMPIONS.</span><br />
              ONE GAME AT A TIME.
            </h1>

            {/* Tagline & Subheading */}
            <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-[#FFB21A]">
              "{academyInfo.tagline}"
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A7A7AD] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {academyInfo.heroSupportingText}
            </p>

            {/* Coach & Academy Meta Info Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-[#F5F1E9]/90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F36B16]"></div>
                <span>Founder & Head Coach: <strong className="text-white">Meet Dabhi</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFB21A]"></div>
                <span>Categories: <strong className="text-[#FFB21A]">U-14 • U-17 • U-19 • Senior</strong></span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-glow-orange hover:shadow-orange-500/50 hover:from-[#E05A05] hover:to-[#F36B16] transition-all transform hover:-translate-y-1"
              >
                JOIN THE ACADEMY
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="#achievements"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#11172B] hover:bg-[#18213D] text-[#F5F1E9] font-bold text-sm sm:text-base uppercase tracking-wider border border-[#242F52] hover:border-[#FFB21A]/50 transition-all transform hover:-translate-y-0.5"
              >
                <Trophy className="w-5 h-5 text-[#FFB21A]" />
                EXPLORE OUR ACHIEVEMENTS
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-[#242F52]/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#FFB21A]">2017</p>
                <p className="text-[11px] sm:text-xs text-[#A7A7AD] uppercase tracking-wider font-medium">Established</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#F36B16]">75+</p>
                <p className="text-[11px] sm:text-xs text-[#A7A7AD] uppercase tracking-wider font-medium">National Players</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#F5F1E9]">Dual</p>
                <p className="text-[11px] sm:text-xs text-[#A7A7AD] uppercase tracking-wider font-medium">Baseball & Softball</p>
              </div>
            </div>

          </div>

          {/* Right Column: Academy Brand Showcase & Logo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Flame aura halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F36B16]/30 to-[#FFB21A]/20 rounded-3xl blur-2xl transform scale-105 pointer-events-none"></div>

              {/* Main Brand Shield Card */}
              <div className="relative rounded-3xl bg-[#11172B]/90 border-2 border-[#242F52] p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-[#F36B16]/50 transition-all duration-500">
                
                {/* Diagonal stripes texture */}
                <div className="absolute inset-0 sports-stripes opacity-30 pointer-events-none"></div>

                {/* Top card pill */}
                <div className="relative flex items-center justify-between pb-4 border-b border-[#242F52]">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFB21A] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#F36B16]" />
                    Official Academy Crest
                  </span>
                  <span className="text-[11px] text-[#A7A7AD] font-medium">
                    Sahibaug • Ahmedabad
                  </span>
                </div>

                {/* The Uploaded Official Logo Artwork */}
                <div className="relative my-6 flex items-center justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#F36B16]/40 shadow-glow-orange bg-black flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/logo/md-sports-logo.jpg"
                      alt="MD Sports Baseball & Softball Academy Official Lion Crest"
                      className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(243,107,22,0.4)]"
                    />
                  </div>
                </div>

                {/* Card Bottom Highlights */}
                <div className="relative space-y-3 pt-4 border-t border-[#242F52]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A7A7AD] font-medium">Discipline:</span>
                    <span className="text-[#F5F1E9] font-bold">Baseball & Fastpitch Softball</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A7A7AD] font-medium">Coaching Lead:</span>
                    <span className="text-[#FFB21A] font-bold">Meet Dabhi (M.P.Ed, NIC)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A7A7AD] font-medium">Competitions:</span>
                    <span className="text-[#F36B16] font-bold">SGFI State & National Trials</span>
                  </div>
                </div>

                {/* Direct quick action */}
                <div className="relative mt-6 pt-3">
                  <a
                    href={`tel:${academyInfo.contact.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#F36B16]/20 text-[#F5F1E9] hover:text-[#FFB21A] border border-white/10 hover:border-[#F36B16]/40 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F36B16]" />
                    Call Head Coach Direct: {academyInfo.contact.displayPhone}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
