import React from 'react';
import { Calendar, Target, Users, Trophy, ShieldCheck } from 'lucide-react';
import { academyInfo } from '../../data/academyInfo';

export const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      number: "2017",
      label: "Established",
      title: "Founded in 2017",
      description: "Pioneering structured Baseball and Softball athletic training in Nikol, Ahmedabad for nearly a decade.",
      accent: "from-[#F36B16] to-[#FFB21A]",
      badge: "9+ Years of Journey",
    },
    {
      icon: Target,
      number: "Dual",
      label: "Specialization",
      title: "Baseball & Softball Coaching",
      description: "Comprehensive dual-discipline coaching covering technical batting, pitching, fielding, and high-intensity match play.",
      accent: "from-[#FFB21A] to-[#F36B16]",
      badge: "Technical Rigor",
    },
    {
      icon: Users,
      number: "4 Tiers",
      label: "Age Divisions",
      title: "U-14, U-17, U-19 & Senior",
      description: "Structured progressive pathways catering to young grassroots prodigies through collegiate and senior competitive athletes.",
      accent: "from-[#F36B16] to-[#E05A05]",
      badge: "Age Pathways",
    },
    {
      icon: Trophy,
      number: "75",
      label: "National Athletes",
      title: "75 National Competitors",
      description: academyInfo.nationalPlayersNote,
      accent: "from-[#FFB21A] to-[#FFD54F]",
      badge: "Official Academy Records",
      highlight: true,
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
                item.highlight
                  ? 'bg-[#18213D] border-2 border-[#FFB21A]/60 shadow-glow-gold'
                  : 'bg-[#11172B] border border-[#242F52] hover:border-[#F36B16]/50 shadow-xl'
              }`}
            >
              {/* Top Row: Icon & Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#08070B] border border-white/10 flex items-center justify-center text-[#FFB21A]">
                    <Icon className="w-6 h-6 text-[#F36B16]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white/5 text-[#FFB21A] border border-white/10">
                    {item.badge}
                  </span>
                </div>

                {/* Big Stat Number */}
                <div className="mb-2">
                  <span className={`text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r ${item.accent} bg-clip-text text-transparent font-display`}>
                    {item.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#A7A7AD] block font-semibold mt-1">
                    {item.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F5F1E9] mt-3 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A7A7AD]">
                <span className="flex items-center gap-1 font-medium text-white/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F36B16]" />
                  Verified Academy Milestone
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
