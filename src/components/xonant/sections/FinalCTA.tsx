"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { XonantCore3D } from "../XonantCore3D";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative z-10 xon-section border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambient Spotlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto h-[450px] w-[450px] rounded-full blur-[140px] bg-accent/15 pointer-events-none"
      />

      {/* Abstract 3D Digital Sculpture Backdrop */}
      <div className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] opacity-30 pointer-events-none hidden md:block">
        <XonantCore3D variant="cta" />
      </div>

      <div className="xon-container relative z-10">
        <div className="max-w-3xl space-y-8 reveal">
          <span className="text-label text-[#B4FF39] font-semibold block">
            INITIATE COLLABORATION
          </span>

          <h2 className="text-display text-[#F4F4F5] uppercase">
            HAVE AN IDEA? <br />
            <span className="text-[#B4FF39] accent-text-glow">
              LET'S BUILD IT.
            </span>
          </h2>

          <p className="text-body-lg text-[#8A8A8E] font-light leading-relaxed max-w-xl">
            Transform your visionary concept into high-performance, market-ready digital software with world-class engineering and design rigor.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a href="#estimator" className="btn-primary justify-center">
              Start a Project
              <ArrowUpRight size={15} />
            </a>
            <a href="#work" className="btn-glass justify-center">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
