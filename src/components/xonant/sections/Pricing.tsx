"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { pricingPlans } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";
import { cn } from "@/lib/utils";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="COMMERCIAL MODELS"
            title="PREDICTABLE"
            accentWord="INVESTMENT."
            description="Fixed-scope milestones and dedicated squad retainers engineered for architectural clarity with zero hidden costs."
          />
        </div>

        {/* 3 Architectural Columns with glass-hover brightening */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-16">
          {pricingPlans.map((plan, idx) => {
            const isGrowth = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={cn(
                  "p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative glass-02 glass-hover reveal",
                  `reveal-delay-${idx + 1}`,
                  isGrowth
                    ? "glass-accent-border lg:-translate-y-3"
                    : ""
                )}
              >
                {/* Plan Header */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-label text-[#8A8A8E]">
                      MODEL // 0{plan.id === "starter" ? "1" : plan.id === "growth" ? "2" : "3"}
                    </span>
                    {isGrowth && (
                      <span className="font-body text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#B4FF39] text-[#050505] font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F5]">
                      {plan.name}
                    </h3>
                    <p className="text-small text-[#8A8A8E] font-light mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="py-4 border-y border-white/[0.08] flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-[#B4FF39] tracking-wide">
                      {plan.priceLabel}
                    </span>
                    <span className="font-body text-xs text-[#8A8A8E] flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#B4FF39]" />
                      {plan.timeline}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-small text-[#8A8A8E] font-light"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#B4FF39] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope Target & CTA */}
                <div className="pt-8 border-t border-white/[0.08] mt-8 space-y-4">
                  <p className="font-body text-xs text-[#8A8A8E]/80">
                    <strong className="text-[#F4F4F5] font-medium block mb-1">
                      IDEAL FOR:
                    </strong>
                    {plan.whoItsFor}
                  </p>

                  <a
                    href="#estimator"
                    className={cn(
                      "w-full justify-center",
                      isGrowth ? "btn-primary" : "btn-glass"
                    )}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scoping Footer Bar */}
        <div className="mt-16 p-8 rounded-2xl border border-white/[0.08] glass-01 glass-hover flex flex-col sm:flex-row items-center justify-between gap-6 reveal reveal-delay-3">
          <div className="space-y-1">
            <h4 className="font-display text-lg font-bold text-[#F4F4F5]">
              NEED A CUSTOM TECHNICAL PROPOSAL?
            </h4>
            <p className="text-small text-[#8A8A8E] font-light">
              Use our interactive 6-step project estimator for architectural alignment within 24 hours.
            </p>
          </div>
          <a href="#estimator" className="btn-primary justify-center">
            Launch Estimator →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
