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
  Flame
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
            href={`mailto:${academyInfo.contact.email}`}
            className="p-4 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#FFB21A] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFB21A]/20 text-[#FFB21A] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F1E9]">Send Email</span>
            <span className="text-[11px] text-[#A7A7AD] mt-0.5">meetdabhi511@gmail.com</span>
          </a>

          <a
            href={academyInfo.contact.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#11172B] border border-[#242F52] hover:border-[#4285F4] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4285F4]/20 text-[#4285F4] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F1E9]">Google Maps</span>
            <span className="text-[11px] text-[#A7A7AD] mt-0.5">Gurukul Circle, Nikol</span>
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

          {/* Right Column: Academy Coordinates & Location Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Coordinates Box */}
            <div className="rounded-3xl bg-[#11172B] border border-[#242F52] p-6 sm:p-7 shadow-xl space-y-4">
              <h4 className="text-lg font-black uppercase text-[#F5F1E9] border-l-2 border-[#F36B16] pl-3">
                Academy Headquarters
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-[#A7A7AD]">
                <div className="p-3.5 rounded-xl bg-[#08070B] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB21A]">Institution</span>
                  <p className="font-bold text-[#F5F1E9] text-sm">MD Sports Baseball & Softball Academy</p>
                  <p className="text-xs text-[#A7A7AD]">Founded 2017 • Nikol, Ahmedabad</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08070B] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F36B16]">Founder & Head Coach</span>
                  <p className="font-bold text-[#F5F1E9] text-sm">Meet Dabhi</p>
                  <p className="text-xs text-[#A7A7AD]">M.P.Ed • NIC Athletics Coaching • B.P.Ed</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08070B] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB21A]">Location & Landmark</span>
                  <p className="font-bold text-[#F5F1E9] text-sm">Gurukul Circle, Nikol</p>
                  <p className="text-xs text-[#A7A7AD]">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={academyInfo.contact.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#4285F4]/20 text-[#F5F1E9] hover:text-[#4285F4] border border-white/10 hover:border-[#4285F4]/40 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#4285F4]" />
                  Open in Google Maps Application
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={academyInfo.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-pink-500/20 text-[#F5F1E9] hover:text-pink-400 border border-white/10 hover:border-pink-500/40 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  Follow @m.d._sports_academy
                </a>
              </div>
            </div>

            {/* Embedded Responsive Interactive Map */}
            <div className="rounded-3xl bg-[#11172B] border border-[#242F52] overflow-hidden shadow-xl">
              <div className="p-3 bg-[#08070B] border-b border-[#242F52] flex items-center justify-between text-xs">
                <span className="font-bold text-[#F5F1E9] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F36B16]" />
                  Location: Nikol, Ahmedabad
                </span>
                <span className="text-[10px] text-[#A7A7AD]">Gurukul Circle</span>
              </div>
              <div className="h-64 sm:h-72 w-full bg-[#08070B]">
                <iframe
                  title="MD Sports Academy Location at Gurukul Circle, Nikol, Ahmedabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14684.520478065448!2d72.6685848!3d23.0556847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d34b5c777d%3A0x6b1393dbbb53199c!2sNikol%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
