"use client";

import React, { useState } from "react";
import { processSteps } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative z-10 xon-section border-t border-white/[0.08]">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="METHODOLOGY"
            title="FROM IDEA TO"
            accentWord="IMPACT."
            description="A disciplined 7-phase delivery architecture engineered to eliminate ambiguity, enforce code rigor, and ship on schedule."
          />
        </div>

        {/* Desktop: Horizontal Progressive Storyline */}
        <div className="hidden lg:block space-y-12">
          {/* Timeline Track */}
          <div className="relative flex items-center justify-between pb-6">
            {/* Background Line */}
            <div
              aria-hidden="true"
              className="absolute top-5 left-6 right-6 h-[1px] bg-white/[0.12]"
            >
              {/* Active Lime Progress Bar */}
              <div
                className="h-full bg-accent transition-all duration-500 shadow-[0_0_12px_rgba(180,255,57,0.5)]"
                style={{
                  width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                }}
              />
            </div>

            {processSteps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              const isPassed = idx <= activeStep;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 border",
                      isCurrent
                        ? "bg-accent text-background border-accent shadow-[0_0_20px_rgba(180,255,57,0.4)] scale-110"
                        : isPassed
                        ? "bg-surface-elevated text-accent border-accent/50"
                        : "bg-surface text-foreground-muted border-white/[0.15] group-hover:border-white/40"
                    )}
                  >
                    {step.step}
                  </div>
                  <span
                    className={cn(
                      "mt-3 font-mono text-xs tracking-wider uppercase transition-colors",
                      isCurrent
                        ? "text-accent font-semibold"
                        : "text-foreground-muted group-hover:text-foreground"
                    )}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Open Editorial Presentation */}
          <div className="pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-accent uppercase tracking-widest">
                    PHASE {processSteps[activeStep].step} // {processSteps[activeStep].phase}
                  </span>
                  <span className="font-mono text-xs text-foreground-muted flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {processSteps[activeStep].duration}
                  </span>
                </div>

                <h3 className="font-display text-4xl font-bold text-foreground">
                  {processSteps[activeStep].name}
                </h3>

                <p className="text-lg text-foreground-muted font-sans font-light leading-relaxed max-w-2xl">
                  {processSteps[activeStep].description}
                </p>
              </div>

              {/* Deliverables Column */}
              <div className="lg:col-span-4 space-y-3 p-6 rounded-2xl bg-surface border border-white/[0.08]">
                <span className="font-mono text-xs text-foreground uppercase tracking-widest block font-semibold">
                  CORE DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs font-mono text-foreground-muted">
                  {processSteps[activeStep].deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Storyline */}
        <div className="lg:hidden relative pl-6 border-l border-white/[0.12] space-y-10">
          {processSteps.map((step) => (
            <div key={step.step} className="relative space-y-2">
              <span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-surface border-2 border-accent" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {step.step} — {step.name}
                </h3>
                <span className="font-mono text-xs text-foreground-muted">
                  {step.duration}
                </span>
              </div>
              <span className="font-mono text-xs text-accent block">
                {step.phase}
              </span>
              <p className="text-sm text-foreground-muted font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
