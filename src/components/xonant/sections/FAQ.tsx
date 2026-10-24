"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";
import { cn } from "@/lib/utils";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="INQUIRIES"
            title="FREQUENTLY ASKED"
            accentWord="QUESTIONS."
            description="Direct answers regarding our architectural practices, timelines, commercial agreements, and engineering methodologies."
          />
        </div>

        {/* Minimalist Open Accordion with Hairline Dividers */}
        <div className="max-w-4xl divide-y divide-white/[0.08] border-y border-white/[0.08] mt-12">
          {faqItems.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`py-6 sm:py-8 transition-colors reveal reveal-delay-${(idx % 4) + 1}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-baseline gap-6 sm:gap-8 min-w-0 pr-4">
                    <span className="font-body text-xs sm:text-sm text-[#8A8A8E]/50 group-hover:text-[#B4FF39] transition-colors flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <h3
                      className={cn(
                        "font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors",
                        isOpen ? "text-[#B4FF39]" : "text-[#F4F4F5] group-hover:text-white"
                      )}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "h-8 w-8 rounded-full border border-white/[0.1] flex items-center justify-center transition-all duration-300 flex-shrink-0",
                      isOpen
                        ? "bg-[#B4FF39] text-[#050505] border-[#B4FF39]"
                        : "text-[#8A8A8E] group-hover:border-white/30 group-hover:text-white"
                    )}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pl-12 sm:pl-16 text-body text-[#8A8A8E] font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
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

export default FAQ;
