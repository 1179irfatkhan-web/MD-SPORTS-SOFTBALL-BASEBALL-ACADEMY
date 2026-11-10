import React, { useEffect } from 'react';
import { X, Shield, Lock, Users, PhoneCall } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#11172B] border border-[#242F52] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[#242F52] bg-[#08070B]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F36B16]/20 flex items-center justify-center text-[#F36B16] border border-[#F36B16]/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F5F1E9]">Privacy & Athlete Safety Policy</h3>
              <p className="text-xs text-[#A7A7AD]">MD Sports Baseball & Softball Academy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-[#F36B16]/20 hover:text-[#F36B16] text-[#A7A7AD] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#A7A7AD] leading-relaxed">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <Lock className="w-5 h-5 text-[#FFB21A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#F5F1E9] mb-1">Enquiry Data Usage</h4>
              <p>
                Any contact information submitted through this website (such as parent/player name, contact phone number, age category, and preferences) is used exclusively by MD Sports Academy for direct coaching consultation, answering training inquiries, and scheduling skill assessments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <Users className="w-5 h-5 text-[#F36B16] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#F5F1E9] mb-1">Youth Athlete Protection & Media Consent</h4>
              <p>
                MD Sports Academy adheres strictly to child safety guidelines. We do not publish identifiable photographs or personal details of minor athletes without verified parental or guardian consent. All imagery presented on this platform represents training drills, sanctioned competitions, and generic sports action.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <PhoneCall className="w-5 h-5 text-[#FFB21A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#F5F1E9] mb-1">Direct Verification & Direct Contact</h4>
              <p>
                No user credentials, cookies for tracking, or third-party marketing trackers are stored. For any questions regarding your data or to request removal of an enquiry, please contact Head Coach Meet Dabhi directly at <span className="text-[#FFB21A]">meetdabhi511@gmail.com</span> or call <span className="text-[#FFB21A]">+91 97274 02731</span>.
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-[#A7A7AD]/80 pt-2 border-t border-[#242F52]">
            Location: Gurukul Circle, Nikol, Ahmedabad, Gujarat, India • Established 2017
          </p>
        </div>

        <div className="p-4 bg-[#08070B] border-t border-[#242F52] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#F36B16] hover:bg-[#E05A05] text-white text-sm font-semibold transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

