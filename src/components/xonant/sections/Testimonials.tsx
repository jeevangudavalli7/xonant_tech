"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 reveal">
          <SectionHeader
            eyebrow="CLIENT TRANSMISSIONS"
            title="VERIFIED"
            accentWord="IMPACT."
            description="Direct feedback from founders, CTOs, and engineering leaders who trusted Xonant Tech with their core digital systems."
            className="mb-0"
          />

          {/* Minimalist Arrow Controls */}
          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-[#8A8A8E]">
              0{activeIndex + 1} / 0{testimonialsData.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="h-10 w-10 rounded-full border border-white/[0.15] flex items-center justify-center text-[#F4F4F5] hover:border-[#B4FF39] hover:text-[#B4FF39] transition-colors focus:outline-none cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="h-10 w-10 rounded-full border border-white/[0.15] flex items-center justify-center text-[#F4F4F5] hover:border-[#B4FF39] hover:text-[#B4FF39] transition-colors focus:outline-none cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Editorial Quotation */}
        <div className="max-w-5xl space-y-10 reveal reveal-delay-2">
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#F4F4F5] leading-[1.25]">
            "{current.quote}"
          </blockquote>

          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-display text-lg font-bold text-[#F4F4F5]">
                {current.author}
              </div>
              <div className="font-body text-xs text-[#8A8A8E]">
                {current.role} — <span className="text-white">{current.company}</span>
              </div>
            </div>

            <span className="text-label text-[#B4FF39]">
              {current.industry}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
