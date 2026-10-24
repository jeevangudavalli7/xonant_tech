"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { XonantCore3D } from "../XonantCore3D";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 xon-section">
      <div className="xon-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Abstract 3D Digital Sculpture Frame (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px] lg:min-h-[520px] reveal">
            <div className="w-full h-full rounded-3xl glass-02 p-6 relative overflow-hidden flex flex-col justify-between">
              {/* Coordinate label */}
              <div className="flex items-center justify-between font-body text-[10px] text-[#8A8A8E] tracking-widest uppercase z-10">
                <span>XONANT // CORE SCULPTURE</span>
                <span className="text-[#B4FF39]">[ACTIVE]</span>
              </div>

              {/* 3D Viewport */}
              <div className="relative w-full h-72 sm:h-88 overflow-hidden flex items-center justify-center my-auto">
                <XonantCore3D variant="about" />
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-body text-[10px] text-[#8A8A8E] tracking-widest uppercase z-10">
                <span>SYSTEM // ARCHITECTURE</span>
                <span>PHYSICAL SPEC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Studio Profile (7 cols) */}
          <div className="lg:col-span-7 space-y-8 reveal reveal-delay-2">
            <SectionHeader
              eyebrow="STUDIO IDENTITY"
              title="A SMALL TEAM."
              accentWord="BIG DIGITAL THINKING."
              description="Xonant Tech is an independent technology studio focused on turning ideas into scalable digital products and long-term proprietary software."
              className="mb-0"
            />

            <div className="space-y-6 text-[#8A8A8E] text-body-lg font-light leading-relaxed">
              <p>
                We do not operate as an outsourced assembly line or a generic web development shop. We partner with ambitious founders and engineering leaders to design, architect, and deploy software that creates measurable, enduring enterprise value.
              </p>
              <p>
                Our long-term trajectory is deliberately expansive: growing from a premier technology solutions firm into an independent technology company that designs, launches, and operates its own software products, SaaS platforms, and autonomous AI systems.
              </p>
            </div>

            {/* Long-Term Architecture Index */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <span className="text-label text-[#8A8A8E] block">
                ORGANIZATIONAL HORIZONS
              </span>
              <div className="flex flex-wrap gap-4 font-body text-xs tracking-wider">
                <span className="text-[#F4F4F5]">01 DIGITAL SERVICES</span>
                <span className="text-white/30">•</span>
                <span className="text-[#F4F4F5]">02 PROPRIETARY SAAS</span>
                <span className="text-white/30">•</span>
                <span className="text-[#F4F4F5]">03 AI PRODUCTS</span>
                <span className="text-white/30">•</span>
                <span className="text-[#B4FF39] font-semibold">04 XONANT LABS</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#estimator"
                className="btn-primary justify-center"
              >
                Start a Conversation
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
