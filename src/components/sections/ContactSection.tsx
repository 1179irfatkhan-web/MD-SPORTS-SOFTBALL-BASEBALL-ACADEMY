import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Flame,
  Building2,
  Navigation
} from 'lucide-react';
import { academyInfo } from '../../data/academyInfo';

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    ageGroup: 'Under-14',
    interestedIn: 'Both Baseball & Softball',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct formatted WhatsApp message
    const waText = encodeURIComponent(
      `*New Coaching Enquiry - MD Sports Academy*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Age Category:* ${formData.ageGroup}\n` +
      `*Interested In:* ${formData.interestedIn}\n` +
      (formData.message ? `*Message:* ${formData.message}\n\n` : `\n`) +
      `_Submitted via MD Sports Academy Official Website_`
    );

    const waUrl = `https://wa.me/919727402731?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0F1D] relative overflow-hidden">
      {/* Background radial flame glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#F36B16]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading: CTA & Contact */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#F36B16]/30 bg-[#F36B16]/10 text-[#FFB21A]">
            <Flame className="w-3.5 h-3.5 text-[#F36B16] fill-[#F36B16]" />
            START YOUR SPORTING JOURNEY
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F1E9] leading-tight">
            YOUR SPORTING JOURNEY{' '}
            <span className="bg-gradient-to-r from-[#F36B16] to-[#FFB21A] bg-clip-text text-transparent">
              STARTS HERE.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A7A7AD] leading-relaxed">
            "Ready to develop your skills, strengthen your mindset, and take your game to the next level? Connect with MD Sports Baseball & Softball Academy."
          </p>

          <div className="flex items-center justify-center gap-1.5 mt-5">
            <div className="w-12 h-1 bg-[#F36B16] rounded-full"></div>
            <div className="w-3 h-1 bg-[#FFB21A] rounded-full"></div>
            <div className="w-1.5 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Quick Contact Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <a
            href={`tel:${academyInfo.contact.phone}`}
            className="p-4 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#F36B16] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F36B16]/20 text-[#F36B16] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F1E9]">Click to Call</span>
            <span className="text-[11px] text-[#A7A7AD] mt-0.5">{academyInfo.contact.displayPhone}</span>
          </a>

          <a
            href={academyInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#25D366] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F1E9]">WhatsApp Enquiry</span>
            <span className="text-[11px] text-[#A7A7AD] mt-0.5">Instant Chat</span>
          </a>

          <a
            href={academyInfo.contact.officeMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#FFB21A] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFB21A]/20 text-[#FFB21A] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F1E9]">Visit Our Office</span>
            <span className="text-[11px] text-[#A7A7AD] mt-0.5">Sahibaug, Ahmedabad</span>
          </a>

          <a
            href={academyInfo.contact.practiceGroundMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#F36B16] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F36B16]/20 text-[#F36B16] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Navigation className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F1E9]">Find Our Practice Ground</span>
            <span className="text-[11px] text-[#A7A7AD] mt-0.5">Training Venue Maps</span>
          </a>
        </div>

        {/* Main Grid: Enquiry Form (Left) & Location / Contact Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#11172B] border border-[#242F52] p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFB21A]">Direct Enquiry Form</span>
              <h3 className="text-2xl font-black uppercase text-[#F5F1E9] mt-1">
                ENQUIRE ABOUT COACHING
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7AD] mt-1">
                Fill out the form below. Your request connects instantly with Head Coach Meet Dabhi.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-start gap-3 text-xs sm:text-sm text-[#F5F1E9]">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#25D366] block">WhatsApp Message Created!</strong>
                  Your coaching inquiry details have been drafted. You can now tap send in WhatsApp, or call directly at +91 97274 02731.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Parent/Player Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F1E9] mb-2">
                  Parent / Player Name <span className="text-[#F36B16]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Patel / Aarav Patel"
                  className="w-full px-4 py-3 rounded-xl bg-[#08070B] border border-[#242F52] text-[#F5F1E9] text-sm focus:outline-none focus:border-[#F36B16] focus:ring-1 focus:ring-[#F36B16] transition-all placeholder:text-[#A7A7AD]/40"
                />
              </div>

              {/* Phone Number & Age Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F1E9] mb-2">
                    Phone / WhatsApp Number <span className="text-[#F36B16]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-[#08070B] border border-[#242F52] text-[#F5F1E9] text-sm focus:outline-none focus:border-[#F36B16] focus:ring-1 focus:ring-[#F36B16] transition-all placeholder:text-[#A7A7AD]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F1E9] mb-2">
                    Age Group <span className="text-[#F36B16]">*</span>
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08070B] border border-[#242F52] text-[#F5F1E9] text-sm focus:outline-none focus:border-[#F36B16] focus:ring-1 focus:ring-[#F36B16] transition-all"
                  >
                    <option value="Under-14">Under-14 (Sub-Junior)</option>
                    <option value="Under-17">Under-17 (Junior)</option>
                    <option value="Under-19">Under-19</option>
                    <option value="Senior">Senior Player</option>
                  </select>
                </div>
              </div>

              {/* Interested In: Baseball / Softball / Both */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F1E9] mb-2">
                  Interested In <span className="text-[#F36B16]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: 'Baseball', val: 'Baseball' },
                    { label: 'Softball', val: 'Softball' },
                    { label: 'Both', val: 'Both Baseball & Softball' },
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.label}
                      onClick={() => setFormData({ ...formData, interestedIn: option.val })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                        formData.interestedIn === option.val
                          ? 'bg-[#F36B16] text-white border-[#F36B16] shadow-glow-orange'
                          : 'bg-[#08070B] text-[#A7A7AD] border-[#242F52] hover:text-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F1E9] mb-2">
                  Message / Prior Experience (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the athlete's current level, school, or specific training goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#08070B] border border-[#242F52] text-[#F5F1E9] text-sm focus:outline-none focus:border-[#F36B16] focus:ring-1 focus:ring-[#F36B16] transition-all placeholder:text-[#A7A7AD]/40 resize-none"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white font-extrabold text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-orange-500/50 transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  SUBMIT ENQUIRY VIA WHATSAPP
                </button>

                <p className="text-[11px] text-[#A7A7AD] text-center leading-relaxed">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F36B16] inline mr-1" />
                  Privacy Note: Your details are kept strictly confidential and only used by Coach Meet Dabhi to respond to your coaching enquiry.
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[#FFB21A] hover:underline ml-1 font-semibold"
                  >
                    Read Privacy Policy
                  </button>
                </p>
              </div>
            </form>

          </div>

          {/* Right Column: Academy Office & Dedicated Practice Ground Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Official Academy Office */}
            <div className="rounded-3xl bg-[#11172B] border border-[#242F52] p-6 sm:p-7 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB21A]/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB21A]/10 border border-[#FFB21A]/30 text-[11px] font-bold uppercase tracking-wider text-[#FFB21A]">
                  <Building2 className="w-3.5 h-3.5" />
                  Official Academy Office
                </span>
                <span className="text-[10px] uppercase font-bold text-[#A7A7AD] tracking-widest">
                  Administrative
                </span>
              </div>

              <div>
                <h4 className="text-xl font-black uppercase text-[#F5F1E9]">
                  Academy Office Address
                </h4>
                <p className="text-xs text-[#A7A7AD] mt-1">
                  For administrative enquiries, admissions, player counseling, and document verification.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#A7A7AD]">
                <div className="p-3.5 rounded-xl bg-[#08070B] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB21A]">Registered Office Address</span>
                  <p className="font-semibold text-[#F5F1E9] text-xs sm:text-sm leading-relaxed">
                    {academyInfo.officeAddress.fullAddress}
                  </p>
                  <p className="text-[11px] text-[#A7A7AD] flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3 h-3 text-[#FFB21A]" />
                    Landmark: Near Girdharnagar Post Office, Sahibaug
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#08070B] border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F36B16] block">Head Coach</span>
                    <span className="font-bold text-[#F5F1E9] text-xs">Meet Dabhi</span>
                    <span className="text-[10px] text-[#A7A7AD] block mt-0.5">+91 97274 02731</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#08070B] border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB21A] block">Location</span>
                    <span className="font-bold text-[#F5F1E9] text-xs">Sahibaug</span>
                    <span className="text-[10px] text-[#A7A7AD] block mt-0.5">Ahmedabad, Gujarat</span>
                  </div>
                </div>
              </div>

              {/* Action Button 1: Visit Our Office */}
              <div className="pt-2">
                <a
                  href={academyInfo.contact.officeMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FFB21A] to-[#F36B16] text-[#08070B] font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-orange-500/20 hover:scale-[1.01] transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#08070B]" />
                  Visit Our Office
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Practice Ground Location (Dedicated Section) */}
            <div className="rounded-3xl bg-[#11172B] border-2 border-[#F36B16]/50 p-6 sm:p-7 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F36B16]/10 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F36B16]/20 border border-[#F36B16]/50 text-[11px] font-bold uppercase tracking-wider text-[#F36B16]">
                  <Navigation className="w-3.5 h-3.5 text-[#F36B16]" />
                  Dedicated Training Field
                </span>
                <span className="text-[10px] uppercase font-bold text-[#FFB21A] tracking-widest">
                  Live Ground
                </span>
              </div>

              <div>
                <h4 className="text-xl font-black uppercase text-[#F5F1E9] flex items-center gap-2">
                  Practice Ground Location
                </h4>
                <p className="text-xs text-[#A7A7AD] mt-1 leading-relaxed">
                  Official practice and training ground for MD Sports Baseball & Softball Academy. Dedicated outdoor sports facility equipped for batting drills, bullpen pitching, fielding, and competitive match simulations.
                </p>
              </div>

              {/* Clear notice separating Office and Practice Ground */}
              <div className="p-3.5 rounded-xl bg-[#F36B16]/10 border border-[#F36B16]/30 text-xs text-[#F5F1E9] flex items-start gap-2.5">
                <Flame className="w-4 h-4 text-[#F36B16] shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#F5F1E9]/90 leading-relaxed">
                  <span className="font-bold text-[#FFB21A]">Training Location Notice:</span> All athlete on-field coaching, batting practice, and trials take place exclusively at our Practice Ground, not at the administrative office.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#08070B] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F36B16]">Training Facilities</span>
                  <span className="text-[10px] text-[#A7A7AD]">U-14 • U-17 • U-19 • Senior</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#F5F1E9]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F36B16]"></span>
                    Batting Cages & Drills
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F36B16]"></span>
                    Bullpen & Pitching Mounds
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F36B16]"></span>
                    Infield & Outfield Fielding
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F36B16]"></span>
                    Match Practice & Simulations
                  </div>
                </div>
              </div>

              {/* Action Button 2: Find Our Practice Ground */}
              <div className="pt-2">
                <a
                  href={academyInfo.contact.practiceGroundMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#F36B16] hover:bg-[#E05A05] text-white font-black text-xs uppercase tracking-wider shadow-glow-orange hover:scale-[1.01] transition-all"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  Find Our Practice Ground
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links / Social Support */}
            <div className="p-4 rounded-2xl bg-[#11172B]/60 border border-[#242F52] flex items-center justify-between gap-3 text-xs">
              <a
                href={academyInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A7A7AD] hover:text-pink-400 font-semibold transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@m.d._sports_academy</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`mailto:${academyInfo.contact.email}`}
                className="flex items-center gap-2 text-[#A7A7AD] hover:text-[#FFB21A] font-semibold transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-[#FFB21A]" />
                <span className="truncate">{academyInfo.contact.email}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
