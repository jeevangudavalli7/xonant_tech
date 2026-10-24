"use client";

import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import DigitalMatter from "../DigitalMatter";

const HUD_ELEMENTS = [
  {
    id: "status",
    label: "SYSTEM STATUS",
    value: "OPERATIONAL",
    position: "top-[8%] right-[6%]",
    dot: true,
  },
  {
    id: "01",
    label: "01",
    value: "PRODUCT",
    position: "bottom-[18%] left-[2%]",
  },
  {
    id: "02",
    label: "02",
    value: "AI",
    position: "top-[30%] left-[0%]",
  },
  {
    id: "03",
    label: "03",
    value: "SOFTWARE",
    position: "bottom-[8%] right-[8%]",
  },
];

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden z-10">
      <div className="xon-container relative pt-[100px] lg:pt-[120px] pb-16 min-h-screen flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center justify-between mb-10 lg:mb-16 reveal">
          <div className="font-body text-[11px] tracking-[0.16em] uppercase text-[#8A8A8E] flex items-center gap-3 font-medium">
            <span className="w-2 h-2 bg-[#B4FF39] rounded-full animate-pulse" />
            Independent Technology &amp; Digital Product Agency
          </div>
          <div className="hidden lg:block font-body text-[11px] tracking-[0.16em] uppercase text-[#8A8A8E] font-medium">
            EST. 2024 / GLOBAL
          </div>
        </div>

        {/* Main grid — 12 columns on desktop */}
        <div className="flex-1 grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left: Typography */}
          <div className="lg:col-span-7 relative z-10">
            <h1 className="text-display-xl text-[#F4F4F5] reveal">
              BUILD.
              <br />
              SOLVE.
              <br />
              <span className="text-[#B4FF39] accent-text-glow">EVOLVE.</span>
            </h1>

            <div className="mt-8 lg:mt-10 max-w-xl reveal reveal-delay-2">
              <p className="text-body-lg text-[#F4F4F5]/65">
                We don't just make websites. We build technology — designing and
                engineering digital products, AI systems, software and experiences
                for ambitious businesses.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
              <a href="#estimator" className="btn-primary justify-center">
                Start a Project
                <ArrowUpRight size={15} />
              </a>
              <a href="#work" className="btn-glass justify-center">
                View Our Work
              </a>
            </div>
          </div>

          {/* Right: XONANT CORE 3D + HUD */}
          <div className="lg:col-span-5 relative h-[340px] sm:h-[440px] lg:h-[560px] reveal reveal-delay-2 min-w-0">
            {/* Accent glow behind the 3D object */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[80%] h-[80%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(180,255,57,0.12), transparent 65%)",
                  filter: "blur(40px)",
                }}
              />
            </div>
            <div className="absolute inset-0">
              <DigitalMatter className="w-full h-full" />
            </div>

            {/* Floating glass HUD elements */}
            {HUD_ELEMENTS.map((hud) => (
              <div
                key={hud.id}
                className={`absolute ${hud.position} glass-01 rounded-xl px-3 py-2 animate-float-slow hidden sm:block`}
                style={{ animationDelay: `${(hud.id.charCodeAt(0) % 3) * 0.8}s` }}
              >
                <div className="flex items-center gap-2">
                  {hud.dot && (
                    <span className="w-1.5 h-1.5 bg-[#B4FF39] rounded-full" />
                  )}
                  <span className="font-body text-[9px] tracking-[0.14em] uppercase text-[#8A8A8E] font-medium">
                    {hud.label}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.1em] text-[#F4F4F5] font-medium">
                    {hud.value}
                  </span>
                </div>
              </div>
            ))}

            {/* Metadata corners */}
            <div className="absolute top-0 right-0 font-body text-[9px] tracking-[0.14em] uppercase text-[#8A8A8E] text-right hidden sm:block">
              [ INTERACTIVE 3D ]
              <br />
              XONANT CORE / 001
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="mt-12 flex items-center justify-between reveal reveal-delay-4">
          <div className="font-body text-[10px] tracking-[0.16em] uppercase text-[#8A8A8E] flex items-center gap-2">
            <ArrowDown size={12} className="animate-bounce" />
            Scroll to explore
          </div>
          <div className="font-body text-[10px] tracking-[0.16em] uppercase text-[#8A8A8E] hidden sm:block">
            01 / 16
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
