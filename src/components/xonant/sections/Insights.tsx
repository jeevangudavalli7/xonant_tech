"use client";

import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { insightsArticles } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";

export const Insights: React.FC = () => {
  const [featured, ...secondary] = insightsArticles;

  return (
    <section id="insights" className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="EDITORIAL ARCHIVE"
            title="THINKING IN"
            accentWord="PUBLIC."
            description="Technical essays, architectural breakdowns, and engineering perspectives from the Xonant Tech squad."
          />
        </div>

        <div className="space-y-12 mt-12">
          {/* Dominant Featured Essay */}
          <div className="group rounded-3xl glass-02 glass-hover p-8 sm:p-12 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Canvas */}
              <div className="lg:col-span-7 h-64 sm:h-80 rounded-2xl bg-surface-elevated border border-white/[0.08] relative overflow-hidden flex flex-col justify-between p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 tech-grid opacity-[0.2] pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-3xl bg-accent/20 group-hover:bg-accent/35 transition-colors pointer-events-none"
                />

                <div className="flex items-center justify-between z-10 font-body text-xs">
                  <span className="text-[#B4FF39] font-semibold uppercase tracking-widest">
                    ESSAY // {featured.category}
                  </span>
                  <span className="text-[#8A8A8E]">{featured.date}</span>
                </div>

                <div className="z-10 font-body text-xs text-[#8A8A8E] flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#B4FF39]" />
                  <span>{featured.readTime}</span>
                </div>
              </div>

              {/* Narrative */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-label text-[#B4FF39] font-semibold block">
                  01 — FEATURED PUBLICATION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4F4F5] group-hover:text-white transition-colors leading-tight">
                  {featured.title}
                </h3>
                <p className="text-body text-[#8A8A8E] font-light leading-relaxed">
                  {featured.description}
                </p>
                <div className="pt-4 flex items-center gap-2 btn-link">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="arrow-icon h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondary.map((article, idx) => (
              <div
                key={article.id}
                className={`p-8 rounded-3xl glass-02 glass-hover flex flex-col justify-between space-y-6 group reveal reveal-delay-${idx + 1}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-body text-xs">
                    <span className="text-[#B4FF39] uppercase tracking-widest font-semibold">
                      {article.category}
                    </span>
                    <span className="text-[#8A8A8E]">{article.date}</span>
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F4F4F5] group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-small text-[#8A8A8E] font-light leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-body text-xs text-[#8A8A8E]">
                    <Clock className="h-3.5 w-3.5 text-[#B4FF39]" />
                    <span>{article.readTime}</span>
                  </div>

                  <div className="btn-link">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="arrow-icon h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
