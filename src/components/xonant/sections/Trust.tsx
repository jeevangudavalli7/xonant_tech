import React from "react";
import { trustStats } from "@/data/siteData";

export const Trust: React.FC = () => {
  const clientLogos = [
    "NEXUS LABS",
    "KINETIC CAPITAL",
    "AETHER CLOUD",
    "SYNAPSE MED",
    "HYPERION AI",
    "VECTOR DYNAMICS",
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 border-y border-white/[0.08] bg-surface/30 backdrop-blur-md">
      <div className="xon-container">
        {/* Editorial Client Association Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/[0.06] reveal">
          <span className="text-label text-[#8A8A8E]">
            TRUSTED BY FOUNDERS &amp; ENGINEERING TEAMS WORLDWIDE
          </span>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-body text-xs tracking-widest text-[#8A8A8E]/70">
            {clientLogos.map((client) => (
              <span
                key={client}
                className="hover:text-[#F4F4F5] transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Prominent Columns — Open, Typographic, Confident */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pt-12 md:pt-16">
          {trustStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`space-y-2 reveal reveal-delay-${(idx % 5) + 1}`}
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F5]">
                {stat.value}
              </div>
              <div className="text-label text-[#B4FF39]">
                {stat.label}
              </div>
              <p className="text-small text-[#8A8A8E] font-light leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
