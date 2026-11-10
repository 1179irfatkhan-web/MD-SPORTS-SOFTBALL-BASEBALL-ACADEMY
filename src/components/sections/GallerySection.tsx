import React, { useState } from 'react';
import { 
  Maximize2, 
  ShieldCheck 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { galleryCategories, galleryItems, GalleryItem } from '../../data/gallery';
import { LightboxModal } from '../ui/LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#08070B] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F36B16]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Authentic Action & Honors"
          title="ACADEMY"
          highlight="PHOTO GALLERY"
          subtitle="A visual tribute to the grit, training intensity, and championship memories forged by our athletes and coaches."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#F36B16] to-[#E05A05] text-white shadow-glow-orange scale-105'
                  : 'bg-[#11172B] text-[#A7A7AD] hover:text-[#F5F1E9] border border-[#242F52]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#11172B] border border-[#242F52] hover:border-[#FFB21A]/50 shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-[#08070B]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-[#FFB21A] border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 border border-white/20">
                    <Maximize2 className="w-4 h-4 text-[#FFB21A]" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-base font-bold text-[#F5F1E9] group-hover:text-[#FFB21A] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A7A7AD] mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Child Safety & Consent Advisory Note (as specifically mandated in prompt) */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A7A7AD] inline-flex items-center gap-1.5 bg-[#11172B] px-4 py-2 rounded-full border border-[#242F52]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F36B16]" />
            Athlete Safety Compliance: Photography complies with youth media safety guidelines and parent/guardian permissions.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </section>
  );
};
