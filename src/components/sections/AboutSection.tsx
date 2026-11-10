import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Flame, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Award
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'philosophy' | 'approach'>('story');

  const corePillars = [
    { title: "Technical Skill", desc: "Refined mechanics in batting stance, windmill/overhand delivery, pop-time, and glove transitions." },
    { title: "Physical Fitness", desc: "Rotational torso conditioning, linear speed, rotator cuff preservation, and agility stamina." },
    { title: "Teamwork & Loyalty", desc: "Fostering diamond brotherhood, mutual trust, selfless game situations, and unified leadership." },
    { title: "Rigorous Discipline", desc: "Punctuality, practice ethics, respect for opponents and umpires, and elite athletic character." },
    { title: "Match Preparation", desc: "Live-arm simulations, tactical count awareness, defensive cut-offs, and tournament pressure drills." },
    { title: "Competitive Performance", desc: "Championship mindset translating intense practice into state and national podium triumphs." },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#08070B] relative overflow-hidden">
      {/* Subtle athletic flame glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#F36B16]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading as requested */}
        <SectionHeading
          badge="Our Identity & Purpose"
          title="MORE THAN ACADEMIC TRAINING."
          highlight="A JOURNEY OF CHAMPIONS."
          subtitle="Founded by Meet Dabhi in 2017 to develop technically skilled, disciplined, confident, and championship-ready athletes in Nikol, Ahmedabad."
        />

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#F36B16]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#08070B] border border-[#F36B16]/30 flex items-center justify-center text-[#FFB21A] mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-xs font-black text-[#F36B16]">0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-sm text-[#F5F1E9] mb-1.5 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#A7A7AD] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tabbed Story / Mission / Vision / Philosophy Box */}
        <div className="rounded-3xl bg-[#11172B] border border-[#242F52] overflow-hidden shadow-2xl">
          
          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap border-b border-[#242F52] bg-[#08070B]/60 p-2 sm:p-3 gap-2">
            {[
              { id: 'story', label: 'Our Story: The Beginning of a Dream', icon: Flame },
              { id: 'mission', label: 'Mission & Vision', icon: Target },
              { id: 'philosophy', label: 'Coaching Philosophy', icon: Compass },
              { id: 'approach', label: 'Player Development Approach', icon: Zap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white shadow-glow-orange'
                      : 'text-[#A7A7AD] hover:text-[#F5F1E9] hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-10 lg:p-12">
            
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F36B16]/10 text-[#FFB21A] text-xs font-bold uppercase tracking-wider border border-[#F36B16]/20">
                    <Flame className="w-3.5 h-3.5 text-[#F36B16]" />
                    Est. 2017 • Nikol, Ahmedabad
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F1E9] leading-tight">
                    The Journey of MD Sports Baseball & Softball Academy
                  </h3>

                  <p className="text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
                    The journey of <strong className="text-white">MD Sports Baseball & Softball Academy</strong> began in 2017 with a bold vision to develop talented athletes and create authentic opportunities for players to represent Gujarat at University, State, and National levels.
                  </p>

                  <p className="text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
                    Founded by <strong className="text-[#FFB21A]">Meet Dabhi</strong>, the journey started with university-level Baseball and Softball coaching. Through relentless dedication, structured training, and a deep commitment to player development, the programme gradually expanded into school-level sports, particularly SGFI Baseball and Softball championships.
                  </p>

                  <p className="text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
                    Today, the academy continues to focus on developing technically skilled, disciplined, and competitive athletes who compete with distinction across Gujarat and India.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href="#journey"
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#FFB21A] hover:text-[#F36B16] transition-colors"
                    >
                      Explore Complete Timeline (2017–2026) <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-[#242F52] shadow-2xl bg-[#08070B] p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F36B16]/10 border border-[#F36B16]/30 flex items-center justify-center text-[#F36B16]">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#F5F1E9]">Key Milestones at a Glance</h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-[#A7A7AD]">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F36B16] shrink-0 mt-0.5" />
                        <span><strong>2017:</strong> First female player selected for All India University Softball.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F36B16] shrink-0 mt-0.5" />
                        <span><strong>2023:</strong> Gujarat University Softball Champions Trophy.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F36B16] shrink-0 mt-0.5" />
                        <span><strong>2024–2026:</strong> Multiple SGFI State Champions in U14, U17 & U19 categories.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FFB21A] shrink-0 mt-0.5" />
                        <span><strong>75 Athletes:</strong> Competed in National-level competitions (2022–2026).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#08070B]/80 border border-[#242F52] relative overflow-hidden group hover:border-[#F36B16]/40 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#F36B16]/10 border border-[#F36B16]/30 flex items-center justify-center text-[#F36B16] mb-6">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFB21A] block mb-2">
                    Our Mission
                  </span>
                  <h3 className="text-2xl font-black text-[#F5F1E9] uppercase mb-4">
                    Nurturing Skill & Pride
                  </h3>
                  <blockquote className="text-base sm:text-lg text-[#F5F1E9]/90 italic leading-relaxed border-l-2 border-[#F36B16] pl-4">
                    "To provide quality Baseball and Softball coaching, nurture young talent, and prepare disciplined, confident athletes to represent Gujarat and India with pride."
                  </blockquote>
                  <p className="mt-4 text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                    Every practice session is rooted in deliberate skill building, tactical understanding, and physical resilience.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#08070B]/80 border border-[#242F52] relative overflow-hidden group hover:border-[#FFB21A]/40 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB21A]/10 border border-[#FFB21A]/30 flex items-center justify-center text-[#FFB21A] mb-6">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F36B16] block mb-2">
                    Our Vision
                  </span>
                  <h3 className="text-2xl font-black text-[#F5F1E9] uppercase mb-4">
                    Gujarat's Premier Diamond Center
                  </h3>
                  <blockquote className="text-base sm:text-lg text-[#F5F1E9]/90 italic leading-relaxed border-l-2 border-[#FFB21A] pl-4">
                    "To establish MD Sports Baseball & Softball Academy as a leading centre for Baseball and Softball development in Gujarat and create opportunities for future State, National, and International-level athletes."
                  </blockquote>
                  <p className="mt-4 text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                    Building an enduring sports legacy where young talents from Ahmedabad and Gujarat reach the pinnacle of domestic and international competition.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F36B16]/10 border border-[#F36B16]/30 flex items-center justify-center text-[#F36B16]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#FFB21A]">Coaching Credo</span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F1E9]">Beyond Winning Matches</h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#F5F1E9]/95 leading-relaxed bg-[#08070B] p-6 rounded-2xl border border-[#242F52] italic">
                  "Coaching is about more than winning matches. The academy focuses on technical skills, physical fitness, discipline, teamwork, leadership, mental strength, competitive preparation, sportsmanship, and continuous improvement. The goal is to help every athlete reach their potential and progress towards State and National-level competitions."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#08070B]/50 border border-white/5">
                    <h5 className="font-bold text-[#FFB21A] text-sm mb-1">Character & Respect</h5>
                    <p className="text-xs text-[#A7A7AD]">Developing humble winners, gracious competitors, and disciplined leaders who respect the sport, their teammates, and game officials.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#08070B]/50 border border-white/5">
                    <h5 className="font-bold text-[#F36B16] text-sm mb-1">Continuous Improvement</h5>
                    <p className="text-xs text-[#A7A7AD]">Focusing on incremental mastery, video review, mechanical consistency, and athletic longevity without shortcuts.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFB21A]/10 border border-[#FFB21A]/30 flex items-center justify-center text-[#FFB21A]">
                    <Zap className="w-6 h-6 text-[#F36B16]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#FFB21A]">Structured Pathway</span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F1E9]">Player Development Model</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                  {[
                    { step: "01", title: "Assessment", desc: "Evaluating initial athletic agility, hand-eye coordination, arm velocity, and batting mechanics." },
                    { step: "02", title: "Fundamentals", desc: "Rigorous daily repetition of footwork, throwing form, stance balance, and defensive cut-offs." },
                    { step: "03", title: "Conditioning", desc: "Sport-specific speed, core torque, explosive power, and injury-prevention arm maintenance." },
                    { step: "04", title: "Competition", desc: "Live match simulation, tournament exposure in SGFI & State trials, and national selection preparation." },
                  ].map((phase, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#08070B] border border-[#242F52] hover:border-[#FFB21A]/40 transition-all">
                      <span className="text-xs font-black text-[#F36B16] block mb-2">{phase.step}</span>
                      <h4 className="font-bold text-base text-[#F5F1E9] mb-1">{phase.title}</h4>
                      <p className="text-xs text-[#A7A7AD] leading-relaxed">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Banner */}
          <div className="bg-[#08070B] border-t border-[#242F52] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#A7A7AD] text-center sm:text-left">
              Interested in training under Coach Meet Dabhi in Nikol, Ahmedabad?
            </span>
            <div className="flex items-center gap-3">
              <a
                href="#coach"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#F5F1E9] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                MEET YOUR COACH
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-[#F36B16] hover:bg-[#E05A05] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-glow-orange"
              >
                DISCOVER OUR STORY
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
