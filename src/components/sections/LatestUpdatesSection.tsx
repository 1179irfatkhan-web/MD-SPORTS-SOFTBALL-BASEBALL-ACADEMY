import React from 'react';
import { 
  Calendar, 
  ExternalLink, 
  Instagram, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { academyUpdates } from '../../data/updates';
import { academyInfo } from '../../data/academyInfo';

export const LatestUpdatesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0F1D] relative overflow-hidden border-t border-b border-[#242F52]">
      {/* Background glow */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#FFB21A]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading as explicitly requested */}
        <SectionHeading
          badge="Static Bulletin & News"
          title="LATEST FROM"
          highlight="THE ACADEMY"
          subtitle="Stay informed with our most recent tournament milestones, state triumphs, and coaching announcements."
        />

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academyUpdates.map((update) => (
            <div
              key={update.id}
              className="rounded-3xl bg-[#11172B] border border-[#242F52] hover:border-[#F36B16]/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#F36B16]/20 text-[#FFB21A] border border-[#F36B16]/30">
                    {update.badge}
                  </span>
                  <span className="text-xs text-[#A7A7AD] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#F36B16]" /> {update.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-[#F5F1E9] uppercase mb-2 leading-snug group-hover:text-[#FFB21A] transition-colors">
                  {update.title}
                </h4>

                {/* Summary */}
                <p className="text-xs text-[#A7A7AD] leading-relaxed mb-4">
                  {update.summary}
                </p>

                {/* Highlights */}
                {update.highlightPoints && (
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-white/5">
                    {update.highlightPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#F5F1E9]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F36B16] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action link */}
              {update.externalLink ? (
                <div className="pt-4 border-t border-[#242F52]">
                  <a
                    href={update.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB21A] hover:text-[#F36B16] transition-colors"
                  >
                    {update.externalLinkLabel || "Learn More"}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-[#242F52] text-[11px] text-[#A7A7AD]">
                  <span>Verified Academy Record</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram Follow Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#08070B] border border-[#242F52] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-lg">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F5F1E9]">Follow Regular Updates on Instagram</h4>
              <p className="text-xs text-[#A7A7AD]">
                Watch daily practice drills, tournament stories, and match photos on <strong className="text-white">@m.d._sports_academy</strong>
              </p>
            </div>
          </div>

          <a
            href={academyInfo.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:opacity-90 transition-all shrink-0"
          >
            Visit Instagram Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
