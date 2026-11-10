import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Target, 
  Activity, 
  Trophy, 
  ChevronRight,
  Info,
  Flame
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { coachingPrograms } from '../../data/programs';
import { academyInfo } from '../../data/academyInfo';

export const ProgramsSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('baseball-coaching');

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'baseball':
        return Target;
      case 'softball':
        return Trophy;
      case 'fitness':
        return Activity;
      case 'competition':
        return Flame;
      default:
        return Target;
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0B0F1D] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F36B16]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FFB21A]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Structured Athlete Development"
          title="COACHING"
          highlight="PROGRAMS"
          subtitle="Specialized developmental pathways designed to take players from foundational mechanics to national-caliber competition."
        />

        {/* Age Groups Prominent Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#11172B] border border-[#242F52] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F36B16]/20 border border-[#F36B16]/30 flex items-center justify-center text-[#FFB21A] shrink-0">
              <Users className="w-5 h-5 text-[#F36B16]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#A7A7AD] font-semibold">Eligible Age Categories</p>
              <h4 className="text-sm sm:text-base font-bold text-[#F5F1E9]">Comprehensive Coaching for All Growth Stages</h4>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["UNDER-14", "UNDER-17", "UNDER-19", "SENIOR"].map((group, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-[#08070B] text-xs sm:text-sm font-black tracking-wider text-[#FFB21A] border border-[#F36B16]/30 shadow-sm"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Distinct Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coachingPrograms.map((program) => {
            const Icon = getProgramIcon(program.iconName);
            const isSelected = selectedProgram === program.id;

            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#18213D] border-2 border-[#F36B16] shadow-glow-orange transform -translate-y-2'
                    : 'bg-[#11172B] border border-[#242F52] hover:border-[#FFB21A]/50 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#08070B] border border-white/10 flex items-center justify-center text-[#FFB21A] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#F36B16]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white/5 text-[#FFB21A] border border-white/10">
                      {program.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-[#F5F1E9] uppercase mb-1 leading-tight group-hover:text-[#FFB21A] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F36B16] mb-3">
                    {program.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#A7A7AD] leading-relaxed mb-5">
                    {program.description}
                  </p>

                  {/* Skills Covered */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#F5F1E9]">
                      Key Skill Areas:
                    </p>
                    <ul className="space-y-1.5">
                      {program.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-[#A7A7AD]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F36B16] shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA button */}
                <div className="pt-4 border-t border-[#242F52]">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all bg-[#08070B] text-[#F5F1E9] hover:bg-[#F36B16] hover:text-white border border-white/10"
                  >
                    Enquire for this Program
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Operational Clarification Notice (Transparent & Professional) */}
        <div className="mt-12 p-6 rounded-2xl bg-[#08070B] border border-[#242F52] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFB21A]/10 border border-[#FFB21A]/30 flex items-center justify-center text-[#FFB21A] shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#F5F1E9]">
                Training Schedules, Fees & Trial Assessment Notice
              </h4>
              <p className="text-xs sm:text-sm text-[#A7A7AD] mt-1 max-w-3xl leading-relaxed">
                In accordance with official academy policy, batch timings, training schedules, venue sessions, and fee structures are tailored according to player age, skill category, and tournament calendar. Connect directly with Head Coach Meet Dabhi to schedule a preliminary skills evaluation and discuss batch availability.
              </p>
            </div>
          </div>

          <a
            href={academyInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange hover:shadow-orange-500/40 transition-all"
          >
            Ask for Batch Timings
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
