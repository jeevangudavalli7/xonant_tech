"use client";

import React from "react";
import { whyPrinciples } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";

export const WhyXonant: React.FC = () => {
  return (
    <section className="relative z-10 xon-section">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="ENGINEERING PHILOSOPHY"
            title="WHY"
            accentWord="XONANT TECH."
            description="We are not a template agency or a gig marketplace. We operate as a high-conviction technology partner building software engineered to scale."
          />
        </div>

        {/* Architectural Editorial Matrix with Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
          {whyPrinciples.map((principle, idx) => (
            <div
              key={principle.number}
              className={`p-8 sm:p-12 border-b border-r border-white/[0.08] flex flex-col justify-between space-y-6 group hover:bg-white/[0.02] transition-colors reveal reveal-delay-${(idx % 5) + 1}`}
            >
              <div className="space-y-4">
                <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white/[0.12] group-hover:text-[#B4FF39]/30 transition-colors block">
                  {principle.number}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F4F5] group-hover:text-white transition-colors">
                  {principle.title}
                </h3>

                <p className="text-body text-[#8A8A8E] leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 font-body text-[10px] tracking-widest text-[#8A8A8E]/60 uppercase">
                TENET // {principle.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyXonant;
