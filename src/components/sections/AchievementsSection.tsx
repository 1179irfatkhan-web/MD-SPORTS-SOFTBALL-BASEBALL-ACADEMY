import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Star, 
  MapPin 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  stateChampionships, 
  universityAchievements, 
  universityEraAchievements, 
  nationalCoachingExperience, 
  nationalPlayerDevelopment 
} from '../../data/achievements';

export const AchievementsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sgfi' | 'university' | 'national'>('all');

  const getResultBadge = (result: string) => {
    switch (result) {
      case 'Champions':
        return {
          bg: 'bg-[#FFB21A]/20 text-[#FFB21A] border-[#FFB21A]/40',
          icon: Trophy,
          iconColor: 'text-[#FFB21A]',
          label: '1st Place • State Champions'
        };
      case 'Runners-Up':
        return {
          bg: 'bg-slate-300/20 text-slate-200 border-slate-300/40',
          icon: Medal,
          iconColor: 'text-slate-200',
          label: '2nd Place • State Runners-Up'
        };
      case 'Third Place':
        return {
          bg: 'bg-[#F36B16]/20 text-[#F36B16] border-[#F36B16]/40',
          icon: Award,
          iconColor: 'text-[#F36B16]',
          label: '3rd Place • Podium Finish'
        };
      default:
        return {
          bg: 'bg-white/10 text-white border-white/20',
          icon: Medal,
          iconColor: 'text-white',
          label: result
        };
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#0B0F1D] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFB21A]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#F36B16]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Documented Track Record"
          title="PROVEN"
          highlight="CHAMPIONSHIPS & ACHIEVEMENTS"
          subtitle="From university titles to consecutive SGFI state championships and over 75 national-level athletes, our track record represents verified competitive excellence."
        />

        {/* 75 National Players Hero Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-[#18213D] via-[#11172B] to-[#18213D] border-2 border-[#FFB21A]/60 p-6 sm:p-10 shadow-glow-gold relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#F36B16]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB21A]/15 text-[#FFB21A] text-xs font-bold uppercase tracking-wider border border-[#FFB21A]/30">
                <Star className="w-3.5 h-3.5 fill-[#FFB21A]" />
                National Player Development Milestone (2022–2026)
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#F5F1E9] tracking-tight">
                <span className="text-[#FFB21A]">75 ATHLETES</span> AT NATIONAL LEVEL
              </h3>
              <p className="text-sm sm:text-base text-[#F5F1E9]/90 leading-relaxed font-normal">
                {nationalPlayerDevelopment.statement}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {nationalPlayerDevelopment.categories.map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#08070B] text-xs font-bold text-[#FFB21A] border border-white/10">
                    ✓ {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="text-center p-6 rounded-2xl bg-[#08070B] border border-[#242F52] w-full max-w-xs shadow-2xl">
                <Trophy className="w-12 h-12 text-[#FFB21A] mx-auto mb-2 drop-shadow-md" />
                <span className="text-4xl sm:text-5xl font-black text-[#F5F1E9] font-display">75+</span>
                <span className="text-xs uppercase tracking-widest text-[#A7A7AD] block font-semibold mt-1">
                  National Competitors
                </span>
                <span className="text-[10px] text-[#F36B16] block mt-2 font-medium">
                  According to official academy records
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Achievements' },
            { id: 'sgfi', label: 'SGFI State Championships' },
            { id: 'university', label: 'University Titles & Era' },
            { id: 'national', label: 'National Coaching' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white shadow-glow-orange scale-105'
                  : 'bg-[#11172B] text-[#A7A7AD] hover:text-[#F5F1E9] border border-[#242F52]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section 1: SGFI State Championship Achievements */}
        {(filter === 'all' || filter === 'sgfi') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#242F52]">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFB21A]">Category C</span>
                <h3 className="text-2xl font-black uppercase text-[#F5F1E9]">
                  SGFI Gujarat State Championship Results
                </h3>
              </div>
              <span className="text-xs text-[#A7A7AD] hidden sm:block">
                School Games Federation of India (SGFI)
              </span>
            </div>

            {/* Featured Authentic Championship Showcase: 2026 SGFI U-19 Gujarat State Softball Champions */}
            <div className="mb-10 rounded-3xl bg-gradient-to-br from-[#18213D] via-[#11172B] to-[#08070B] border-2 border-[#FFB21A] p-6 sm:p-8 lg:p-10 shadow-glow-gold relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB21A]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Photo: Authentic Championship Team & Banner */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFB21A]/60 shadow-2xl bg-black aspect-[16/9] group-hover:border-[#FFB21A] transition-all">
                    <img
                      src="/images/sgfi-u19-champions-2026.jpg"
                      alt="SGFI U-19 Gujarat State Softball Championship 2026 - Team Ahmedabad Rural"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-bold text-white bg-black/70 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-sm">
                        70th All India School Games (SGFI) • 2025–26
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB21A]/20 text-[#FFB21A] text-xs font-extrabold uppercase tracking-wider border border-[#FFB21A]/40">
                    <Trophy className="w-4 h-4 text-[#F36B16]" />
                    Featured Championship Victory
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F1E9] leading-tight">
                    SGFI U-19 Gujarat State Softball Championship – 2026 🥎
                  </h3>

                  <div className="p-4 rounded-2xl bg-[#08070B]/80 border border-[#242F52] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🥇</span>
                      <h4 className="text-lg font-black text-[#FFB21A]">
                        Team Ahmedabad Rural – Gujarat State Champions
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#F5F1E9]/90 leading-relaxed font-normal">
                      The SGFI Under-19 Softball Team of Ahmedabad Rural secured 1st Position and became Gujarat State Champions. (2026)
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                    <span className="text-[#A7A7AD] font-medium flex items-center gap-1.5">
                      <span>👨‍🏫</span> Head Coach:
                    </span>
                    <strong className="text-[#FFB21A] font-bold text-base">Meet Dabhi</strong>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-lg bg-[#FFB21A]/10 text-xs font-bold text-[#FFB21A] border border-[#FFB21A]/20">
                      🥇 1st Position (Gold)
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#F36B16]/10 text-xs font-bold text-[#F36B16] border border-[#F36B16]/20">
                      Under-19 Softball
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 text-xs font-semibold text-[#A7A7AD] border border-white/10">
                      Gir Somnath / SGFI Gujarat
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block rounded-2xl bg-[#11172B] border border-[#242F52] overflow-hidden shadow-xl mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#08070B] text-xs font-bold uppercase tracking-wider text-[#A7A7AD] border-b border-[#242F52]">
                  <tr>
                    <th className="py-4 px-6">Year</th>
                    <th className="py-4 px-6">Category & Discipline</th>
                    <th className="py-4 px-6">Championship Result</th>
                    <th className="py-4 px-6">Verified Details / Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242F52]">
                  {stateChampionships.map((item, idx) => {
                    const badge = getResultBadge(item.result);
                    const BadgeIcon = badge.icon;
                    return (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 font-display font-black text-lg text-[#FFB21A]">
                          {item.year}
                        </td>
                        <td className="py-4 px-6 font-bold text-[#F5F1E9]">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F36B16]"></span>
                            {item.category}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${badge.bg}`}>
                            <BadgeIcon className={`w-3.5 h-3.5 ${badge.iconColor}`} />
                            {item.resultFull}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-xs text-[#A7A7AD] max-w-md">
                          {item.note ? (
                            <span className="text-[#F5F1E9]/90 italic">{item.note}</span>
                          ) : (
                            <span>Official SGFI State Tournament Placement</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {stateChampionships.map((item, idx) => {
                const badge = getResultBadge(item.result);
                const BadgeIcon = badge.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#11172B] border border-[#242F52] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-[#FFB21A] font-display">{item.year}</span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge.bg}`}>
                        <BadgeIcon className="w-3 h-3" />
                        {item.result}
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-[#F5F1E9]">{item.category}</h4>
                    <p className="text-xs text-[#FFB21A] font-medium">{item.resultFull}</p>
                    {item.note && (
                      <p className="text-xs text-[#A7A7AD] pt-2 border-t border-white/5 italic">
                        {item.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 2: University Achievements (2022–2023) */}
        {(filter === 'all' || filter === 'university') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#242F52]">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFB21A]">Category B</span>
                <h3 className="text-2xl font-black uppercase text-[#F5F1E9]">
                  Gujarat University Championships (2022–2023)
                </h3>
              </div>
              <span className="text-xs text-[#FFB21A] hidden sm:block">
                Coach Meet Dabhi • C. U. Shah Institute of BCA College
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {universityAchievements.map((item, idx) => (
                <div key={idx} className={`p-6 sm:p-8 rounded-3xl bg-[#11172B] border-2 transition-all flex flex-col justify-between ${item.image ? 'border-[#FFB21A]/70 shadow-glow-gold' : 'border-[#242F52] hover:border-[#FFB21A]/50'}`}>
                  <div>
                    {item.image && (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-5 aspect-[4/3] bg-black">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                          <span className="text-xs font-bold text-white bg-black/70 px-3 py-1 rounded-md border border-white/20 backdrop-blur-sm">
                            Gujarat University Squad • {item.year}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-[#FFB21A] font-display">{item.year}</span>
                      <span className="px-3 py-1 rounded-full bg-[#F36B16]/20 text-[#FFB21A] text-xs font-bold border border-[#F36B16]/40">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-[#F5F1E9] uppercase mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-[#A7A7AD] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.players && (
                      <div className="my-4 p-4 rounded-2xl bg-[#08070B] border border-white/10 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FFB21A] block">
                          ⭐ Representing Players:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {item.players.map((player, pIdx) => (
                            <div key={pIdx} className="px-3 py-1.5 rounded-lg bg-[#11172B] border border-white/5 text-xs text-white font-semibold flex items-center gap-1.5">
                              <span className="text-[#F36B16] font-bold">{pIdx + 1}.</span> {player}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-[#FFB21A] italic pt-1">
                          Heartiest Congratulations to all three players for this remarkable achievement! 👏
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#242F52] text-xs text-[#A7A7AD] flex items-center justify-between flex-wrap gap-2">
                    <span><strong className="text-white">Institution: </strong>{item.institution}</span>
                    <span className="text-[#FFB21A] font-bold">Coach: Meet Dabhi</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: University Era Foundations (2017–2019) */}
        {(filter === 'all' || filter === 'university') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#242F52]">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFB21A]">Category A</span>
                <h3 className="text-2xl font-black uppercase text-[#F5F1E9]">
                  University Era All India Selections (2017–2019)
                </h3>
              </div>
              <span className="text-xs text-[#A7A7AD] hidden sm:block">
                All India University Softball & Baseball
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {universityEraAchievements.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#11172B] border border-[#242F52] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#FFB21A] font-display">{item.year}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-[#A7A7AD]">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#F5F1E9]">{item.title}</h4>
                  <p className="text-xs text-[#A7A7AD] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: National-Level Coaching Experience */}
        {(filter === 'all' || filter === 'national') && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#242F52]">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFB21A]">Category E</span>
                <h3 className="text-2xl font-black uppercase text-[#F5F1E9]">
                  National-Level Coaching Benchmarks
                </h3>
              </div>
              <span className="text-xs text-[#FFB21A] hidden sm:block">
                Head Coach Meet Dabhi Leading Gujarat State Contingents
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {nationalCoachingExperience.map((exp, idx) => (
                <div key={idx} className={`p-6 sm:p-8 rounded-3xl bg-[#11172B] border-2 transition-all flex flex-col justify-between ${exp.image ? 'border-[#FFB21A]/70 shadow-glow-gold' : 'border-[#242F52] hover:border-[#F36B16]/50'}`}>
                  {exp.image && (
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-5 aspect-[16/9] bg-black">
                      <img
                        src={exp.image}
                        alt={exp.tournament}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                        <span className="text-xs font-bold text-white bg-black/70 px-3 py-1 rounded-md border border-white/20 backdrop-blur-sm">
                          {exp.organizer || "National Championship"} • {exp.year}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#FFB21A]/20 text-[#FFB21A] text-xs font-bold border border-[#FFB21A]/40 flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-[#F36B16]" />
                        {exp.result}
                      </span>
                      {exp.year && (
                        <span className="text-xs font-black text-[#FFB21A] bg-[#08070B] px-2.5 py-1 rounded-md border border-white/10">
                          {exp.year}
                        </span>
                      )}
                      {exp.location && (
                        <span className="text-xs text-[#A7A7AD] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#F36B16]" /> {exp.location}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black uppercase text-[#F5F1E9]">
                      {exp.tournament}
                    </h4>

                    <p className="text-sm text-[#A7A7AD] leading-relaxed">
                      {exp.significance}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#242F52] flex items-center justify-between text-xs text-[#A7A7AD] flex-wrap gap-2">
                    <span>Represented: <strong className="text-white">{exp.team}</strong></span>
                    <span className="text-[#FFB21A] font-bold">Coach: Meet Dabhi</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white font-extrabold text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-orange-500/40 transition-all"
          >
            TRAIN WITH CHAMPIONS — ENQUIRE TODAY
            <Trophy className="w-4 h-4 text-[#FFB21A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
