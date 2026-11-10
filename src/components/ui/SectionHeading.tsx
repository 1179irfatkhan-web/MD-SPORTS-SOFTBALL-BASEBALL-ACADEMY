import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#F36B16]/30 bg-[#F36B16]/10 text-[#FFB21A]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F36B16] animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F1E9] leading-tight">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-[#F36B16] to-[#FFB21A] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A7A7AD] leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative athletic bar */}
      <div className={`flex items-center gap-1.5 mt-5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-1 bg-[#F36B16] rounded-full"></div>
        <div className="w-3 h-1 bg-[#FFB21A] rounded-full"></div>
        <div className="w-1.5 h-1 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
};

