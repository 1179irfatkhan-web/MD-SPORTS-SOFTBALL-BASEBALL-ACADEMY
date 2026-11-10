import React from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { journeyMilestones } from '../../data/journey';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#08070B] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F36B16]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Nine Years of Athletic Excellence"
          title="OUR"
          highlight="JOURNEY (2017 – 2026)"
          subtitle="Explore the progression of MD Sports Academy from university-era roots to dominant Gujarat State and National-level prominence."
        />

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Central Vertical Spine Line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#F36B16] via-[#FFB21A] to-[#F36B16] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-10 lg:space-y-12">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card (Half width on desktop) */}
                  <div className={`w-full lg:w-[46%] ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <div className="rounded-3xl bg-[#11172B] border border-[#242F52] hover:border-[#FFB21A]/50 p-6 sm:p-8 shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                      
                      {/* Top Meta */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className="px-2.5 py-1 rounded bg-[#F36B16]/20 text-[#FFB21A] text-xs font-bold uppercase tracking-wider border border-[#F36B16]/30">
                          {item.tag}
                        </span>
                        <span className="text-xs text-[#A7A7AD] uppercase tracking-wider font-semibold">
                          {item.phase}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F5F1E9] mb-2 group-hover:text-[#FFB21A] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className={`space-y-2 pt-3 border-t border-[#242F52] text-left`}>
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F5F1E9]/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F36B16] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Central Node Marker on Spine */}
                  <div className="my-4 lg:my-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#08070B] border-4 border-[#F36B16] shadow-glow-orange flex flex-col items-center justify-center p-1 group-hover:scale-110 transition-transform">
                      <span className="text-xs sm:text-sm font-black text-[#FFB21A] font-display leading-none">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer for alternating sides */}
                  <div className="hidden lg:block w-full lg:w-[46%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#11172B] border border-[#242F52] text-xs sm:text-sm text-[#F5F1E9]">
            <Flame className="w-4 h-4 text-[#F36B16]" />
            <span>The story continues — Preparing athletes for upcoming State & National trials.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
