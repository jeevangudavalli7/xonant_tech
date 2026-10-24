import React from "react";
import { resultsStats } from "@/data/siteData";

export const Results: React.FC = () => {
  return (
    <section className="relative z-10 xon-section border-t border-white/[0.08] overflow-hidden">
      {/* Very subtle ambient depth in background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto h-[450px] w-full max-w-4xl rounded-full blur-[160px] bg-accent/[0.08] pointer-events-none"
      />

      <div className="xon-container relative z-10">
        {/* Editorial Section Eyebrow */}
        <div className="mb-20 text-center sm:text-left reveal">
          <span className="text-label text-[#B4FF39] font-semibold block mb-3">
            MEASURABLE SCALE
          </span>
          <h2 className="text-h1 text-[#F4F4F5] uppercase">
            NUMBERS THAT REFLECT RIGOR.
          </h2>
        </div>

        {/* 4 Massive Open Typography Columns — No Enclosing Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {resultsStats.map((item, idx) => (
            <div
              key={item.label}
              className={`space-y-3 group reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <div className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-[#F4F4F5] group-hover:text-[#B4FF39] transition-colors">
                {item.value}
              </div>
              <div className="font-body text-xs sm:text-sm font-semibold tracking-widest text-[#F4F4F5] uppercase pt-2 border-t border-white/[0.08]">
                {item.label}
              </div>
              <p className="text-small text-[#8A8A8E] font-light leading-relaxed">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
