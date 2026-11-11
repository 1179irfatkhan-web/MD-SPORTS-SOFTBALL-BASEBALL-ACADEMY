import React from 'react';
import { 
  GraduationCap, 
  Target, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Flame, 
  ShieldCheck,
  Quote
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { coachData } from '../../data/coach';
import { academyInfo } from '../../data/academyInfo';

export const CoachSection: React.FC = () => {
  return (
    <section id="coach" className="py-20 lg:py-28 bg-[#08070B] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#F36B16]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFB21A]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Leadership & Mentorship"
          title="MEET THE"
          highlight="HEAD COACH"
          subtitle="Experienced Physical Education educator, professional Baseball and Softball strategist, and youth mentor."
        />

        {/* Main Coach Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Coach Credentials Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-[#11172B] border-2 border-[#242F52] p-6 sm:p-8 shadow-2xl overflow-hidden group hover:border-[#F36B16]/50 transition-all">
              
              {/* Background stripes */}
              <div className="absolute inset-0 sports-stripes opacity-30 pointer-events-none"></div>

              {/* Header inside card */}
              <div className="relative flex items-center justify-between pb-4 border-b border-[#242F52]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFB21A] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F36B16]" />
                  Verified Coach Profile
                </span>
                <span className="text-[11px] text-[#A7A7AD]">Sahibaug, Ahmedabad</span>
              </div>

              {/* Coach Authentic Portrait Display */}
              <div className="relative my-6 text-center">
                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#F36B16]/50 shadow-glow-orange group-hover:border-[#FFB21A] transition-all duration-500 bg-[#08070B]">
                  <img
                    src={coachData.image}
                    alt="Meet Dabhi - Founder & Head Coach, MD Sports Baseball & Softball Academy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08070B]/90 via-[#08070B]/40 to-transparent flex items-end justify-center pb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB21A] bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                      FOUNDER & HEAD COACH
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F1E9] tracking-tight">
                    {coachData.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#F36B16] mt-1">
                    Founder & Head Coach • Physical Education Teacher
                  </p>
                  <p className="text-xs text-[#A7A7AD] mt-0.5">
                    Professional Baseball & Softball Coach
                  </p>
                </div>
              </div>

              {/* Contact Actions directly with coach */}
              <div className="relative pt-4 border-t border-[#242F52] space-y-2.5">
                <a
                  href={`tel:${academyInfo.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white text-xs font-bold uppercase tracking-wider shadow-glow-orange hover:shadow-orange-500/40 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Coach Meet Dabhi: {academyInfo.contact.displayPhone}
                </a>

                <a
                  href={academyInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Consultation
                </a>
              </div>
            </div>

            {/* Academic Qualifications Card */}
            <div className="rounded-3xl bg-[#11172B] border border-[#242F52] p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FFB21A]/10 border border-[#FFB21A]/30 flex items-center justify-center text-[#FFB21A]">
                  <GraduationCap className="w-5 h-5 text-[#FFB21A]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#FFB21A]">Educational Degrees</span>
                  <h4 className="text-base font-bold text-[#F5F1E9]">Qualifications & Credentials</h4>
                </div>
              </div>

              <div className="space-y-3">
                {coachData.qualifications.map((qual, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#08070B] border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-sm text-[#FFB21A] block">{qual.degree}</span>
                      <span className="text-xs text-[#A7A7AD]">{qual.field}</span>
                    </div>
                    {qual.institution && (
                      <span className="text-[10px] px-2 py-1 rounded bg-[#F36B16]/20 text-[#F36B16] font-bold border border-[#F36B16]/30">
                        {qual.institution}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Mission Statement, Specializations & Coaching Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Coaching Mission Statement Banner */}
            <div className="relative rounded-3xl bg-gradient-to-r from-[#18213D] to-[#11172B] border-2 border-[#FFB21A]/40 p-6 sm:p-8 shadow-2xl">
              <Quote className="w-10 h-10 text-[#F36B16]/30 absolute top-5 right-5 pointer-events-none" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FFB21A] block mb-2">
                COACHING MISSION STATEMENT
              </span>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-[#F5F1E9] italic leading-relaxed">
                "{coachData.missionStatement}"
              </p>
              <div className="mt-4 pt-3 border-t border-[#242F52] flex items-center justify-between text-xs text-[#A7A7AD]">
                <span className="font-bold text-[#FFB21A]">— Meet Dabhi</span>
                <span>Founder & Head Coach</span>
              </div>
            </div>

            {/* Coach Biography */}
            <div className="rounded-3xl bg-[#11172B] border border-[#242F52] p-6 sm:p-8 shadow-xl space-y-4">
              <h4 className="text-xl font-bold uppercase text-[#F5F1E9] flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#F36B16]" />
                Professional Background & Experience
              </h4>
              <p className="text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
                {coachData.bio}
              </p>
              <p className="text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
                In addition to founding MD Sports Academy, Meet Dabhi served as Assistant Professor and Coach at C. U. Shah Institute of BCA College, guiding the team to Gujarat University Runners-Up in 2022 and Gujarat University Champions in 2023. His coaching leadership has steered Gujarat State squads at the Under-14 Baseball Nationals in Delhi (Top 8 Quarter-Finals) and Sub-Junior Nationals in Bhubaneswar, Odisha (Top 5 Finish).
              </p>
            </div>

            {/* Coaching Specializations Grid */}
            <div className="rounded-3xl bg-[#11172B] border border-[#242F52] p-6 sm:p-8 shadow-xl">
              <h4 className="text-xl font-bold uppercase text-[#F5F1E9] mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FFB21A]" />
                Coaching Specializations
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coachData.specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#08070B] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#F36B16] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F5F1E9]/90 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coaching Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coachData.coachingPillars.map((pillar, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#F36B16]/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#08070B] border border-[#F36B16]/30 flex items-center justify-center text-[#FFB21A] text-xs font-black mb-3">
                    0{idx + 1}
                  </div>
                  <h5 className="font-bold text-sm text-[#F5F1E9] mb-1">{pillar.title}</h5>
                  <p className="text-xs text-[#A7A7AD] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
