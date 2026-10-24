"use client";

import React, { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { servicesData } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";
import { GlassButton } from "../GlassButton";
import { cn } from "@/lib/utils";

export const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>("web-dev");

  return (
    <section id="services" className="relative z-10 xon-section">
      <div className="xon-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Heading (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 reveal">
            <SectionHeader
              eyebrow="CAPABILITIES"
              title="WHAT WE"
              accentWord="BUILD."
              description="From high-speed web flagships and multi-tenant SaaS platforms to proprietary AI pipelines and enterprise software systems."
              className="mb-0"
            />

            <div className="hidden lg:block pt-4">
              <a
                href="#estimator"
                className="btn-primary justify-center"
              >
                Initiate Project
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Typographic List with Hairline Dividers (8 cols) */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {servicesData.map((service) => {
              const isOpen = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className="py-6 sm:py-8 transition-colors"
                >
                  {/* Service Row Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveServiceId(isOpen ? "" : service.id)
                    }
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-6 sm:gap-8 min-w-0 pr-4">
                      <span className="font-mono text-sm sm:text-base text-foreground-muted/50 group-hover:text-accent transition-colors flex-shrink-0">
                        {service.number}
                      </span>
                      <h3
                        className={cn(
                          "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors",
                          isOpen
                            ? "text-accent"
                            : "text-foreground group-hover:text-white"
                        )}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Plus icon rotating 45° into an × with custom easing */}
                    <div
                      className={cn(
                        "h-9 w-9 rounded-full flex items-center justify-center border flex-shrink-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen
                          ? "bg-accent text-background border-accent rotate-45 shadow-[0_0_20px_rgba(180,255,57,0.4)]"
                          : "bg-transparent text-foreground-muted border-white/[0.1] group-hover:border-white/30 group-hover:text-foreground rotate-0"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Smooth Expanding Accordion using CSS Grid (grid-template-rows: 0fr -> 1fr) */}
                  <div
                    className={cn(
                      "grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-6 sm:mt-8"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-12 sm:pl-16 space-y-8 pb-2">
                        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed font-sans font-light max-w-2xl">
                          {service.fullDesc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                          {/* Problem Solved */}
                          <div className="space-y-2">
                            <span className="font-mono text-xs tracking-widest text-accent uppercase font-semibold block">
                              PROBLEM WE SOLVE
                            </span>
                            <p className="text-xs sm:text-sm text-foreground-muted font-sans font-light leading-relaxed">
                              {service.problemSolved}
                            </p>
                          </div>

                          {/* Deliverables */}
                          <div className="space-y-2">
                            <span className="font-mono text-xs tracking-widest text-foreground uppercase font-semibold block">
                              DELIVERABLES
                            </span>
                            <ul className="space-y-1 text-xs sm:text-sm text-foreground-muted font-sans font-light">
                              {service.deliverables.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                  <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech, Timeline, & CTA Bar */}
                        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-foreground-muted">
                            <span className="text-white/60">STACK:</span>
                            {service.technologies.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white transition-colors"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-6">
                            <span className="font-mono text-xs text-foreground-muted">
                              {service.timeline}
                            </span>
                            <a
                              href="#estimator"
                              className="link-arrow font-mono text-xs text-accent uppercase tracking-wider font-semibold"
                            >
                              <span>COMMISSION THIS</span>
                              <ArrowUpRight className="arrow-icon h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
