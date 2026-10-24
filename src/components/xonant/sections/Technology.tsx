"use client";

import React from "react";
import { techClusters } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";

export const Technology: React.FC = () => {
  return (
    <section className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="TECHNICAL INDEX"
            title="ENGINEERED WITH"
            accentWord="MODERN TECHNOLOGY."
            description="We avoid transient hype and obsolete bloat. We build strictly with battle-tested modern frameworks and edge-native architectures."
          />
        </div>

        {/* Editorial Technical Index: Multi-Column Typographic Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 pt-8">
          {techClusters.map((cluster, idx) => (
            <div
              key={cluster.category}
              className={`space-y-6 group reveal reveal-delay-${(idx % 5) + 1}`}
            >
              {/* Category Header */}
              <div className="space-y-1 pb-4 border-b border-white/[0.08]">
                <span className="font-body text-[11px] tracking-widest text-[#8A8A8E]/50 block">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-base font-bold tracking-wider text-[#F4F4F5] uppercase group-hover:text-[#B4FF39] transition-colors">
                  {cluster.category}
                </h3>
              </div>

              {/* Skills Typographic List with Glass Hover Brightening */}
              <ul className="space-y-2 font-body text-xs tracking-wider">
                {cluster.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[#8A8A8E] hover:text-white px-3 py-1.5 rounded-lg border border-transparent hover:border-white/[0.15] hover:bg-white/[0.05] hover:shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_12px_-2px_rgba(180,255,57,0.12)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default flex items-center gap-2 group/item"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover/item:bg-[#B4FF39] transition-colors" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
