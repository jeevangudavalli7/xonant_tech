"use client";

import React, { useState } from "react";
import { industriesData } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Industries: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="DOMAIN VERTICALS"
            title="BUILT FOR"
            accentWord="AMBITION."
            description="Specialized digital systems engineered for the performance, regulatory, and scale requirements of high-growth sectors."
          />
        </div>

        {/* Large Typographic List with Hairline Dividers — Zero Cards, Glass brightening on hover */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] mt-12">
          {industriesData.map((ind, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={ind.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={cn(
                  "py-8 md:py-10 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] reveal",
                  `reveal-delay-${(idx % 5) + 1}`,
                  isHovered
                    ? "bg-white/[0.07] border border-white/[0.18] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(180,255,57,0.06)] translate-x-1"
                    : "border border-transparent"
                )}
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-body text-xs sm:text-sm text-[#8A8A8E]/50 group-hover:text-[#B4FF39] transition-colors">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3
                      className={cn(
                        "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-colors",
                        isHovered ? "text-[#B4FF39]" : "text-[#F4F4F5] group-hover:text-white"
                      )}
                    >
                      {ind.name}
                    </h3>
                    <p className="text-small text-[#8A8A8E] font-light mt-1 max-w-xl">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-label text-[#8A8A8E] group-hover:text-white transition-colors">
                    {ind.tag}
                  </span>
                  <div
                    className={cn(
                      "h-9 w-9 rounded-full flex items-center justify-center border transition-all duration-300",
                      isHovered
                        ? "bg-[#B4FF39] text-[#050505] border-[#B4FF39] shadow-[0_0_15px_rgba(180,255,57,0.4)]"
                        : "border-white/[0.1] text-[#8A8A8E] group-hover:border-white/30"
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
