import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { GalleryItem } from '../../data/gallery';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#11172B] border border-[#242F52] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#242F52] bg-[#08070B]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#F36B16]/20 text-[#FFB21A] border border-[#F36B16]/30">
              {item.category}
            </span>
            <span className="text-xs text-[#A7A7AD]">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-[#F36B16]/20 hover:text-[#F36B16] text-[#A7A7AD] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[60vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
          />

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#F36B16] text-white border border-white/10 transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#F36B16] text-white border border-white/10 transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Caption & details */}
        <div className="p-4 sm:p-6 bg-[#11172B]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F1E9]">{item.title}</h3>
              <p className="text-sm text-[#A7A7AD] mt-1">{item.caption}</p>
            </div>
            {item.tag && (
              <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded bg-[#FFB21A]/10 text-[#FFB21A] text-xs font-semibold border border-[#FFB21A]/30 whitespace-nowrap">
                <Award className="w-3.5 h-3.5 text-[#F36B16]" />
                {item.tag}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

