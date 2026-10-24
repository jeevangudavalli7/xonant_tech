"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { selectedProjects } from "@/data/siteData";
import { SectionHeader } from "../SectionHeader";
import { GlassButton } from "../GlassButton";

export const SelectedWork: React.FC = () => {
  const [p1, p2, p3, p4] = selectedProjects;

  return (
    <section id="work" className="relative z-10 xon-section">
      <div className="xon-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 reveal">
          <SectionHeader
            eyebrow="PORTFOLIO ARCHIVE"
            title="SELECTED"
            accentWord="WORK."
            description="Bespoke digital products, software infrastructure, and autonomous AI systems engineered for global impact."
            className="mb-0"
          />

          <div className="hidden md:block">
            <a
              href="#estimator"
              className="btn-glass justify-center"
            >
              Commission a Project
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Art-Directed Asymmetric Portfolio Layout */}
        <div className="space-y-12 md:space-y-16">
          {/* Project 01: Dominant Full-Width Architectural Showcase */}
          <div className="group relative rounded-3xl glass-02 glass-hover overflow-hidden p-8 sm:p-12 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Frame */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl bg-surface-elevated border border-white/[0.08] overflow-hidden flex items-center justify-center p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 tech-grid opacity-[0.2] pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto h-48 w-48 rounded-full blur-3xl bg-accent/15 opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none"
                />
                <span className="font-display text-8xl sm:text-9xl font-bold tracking-tight text-white/[0.08] group-hover:text-accent/20 transition-colors select-none">
                  {p1.number}
                </span>

                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-foreground-muted uppercase">
                  PROJECT // {p1.year}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-accent uppercase">
                  {p1.industry}
                </div>
              </div>

              {/* Editorial Narrative */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
                    {p1.number} — {p1.industry}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground group-hover:text-white transition-colors">
                    {p1.title}
                  </h3>
                  <p className="font-mono text-xs text-foreground-muted">
                    {p1.subtitle}
                  </p>
                </div>

                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed font-sans font-light">
                  {p1.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {p1.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-foreground-muted/80 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <a
                    href="#estimator"
                    className="link-arrow font-mono text-xs tracking-widest uppercase text-accent font-semibold"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="arrow-icon h-3.5 w-3.5" />
                  </a>
                  {p1.metrics && (
                    <span className="font-mono text-xs text-foreground-muted">
                      {p1.metrics.value}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Projects 02 & 03: Asymmetric 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {[p2, p3].map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-02 glass-hover overflow-hidden p-8 flex flex-col justify-between reveal reveal-delay-1"
              >
                {/* Visual Area */}
                <div className="relative h-64 sm:h-72 rounded-2xl bg-surface-elevated border border-white/[0.08] overflow-hidden flex items-center justify-center p-6">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 tech-grid opacity-[0.2] pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto h-40 w-40 rounded-full blur-3xl bg-accent/15 opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none"
                  />
                  <span className="font-display text-8xl font-bold tracking-tight text-white/[0.08] group-hover:text-accent/20 transition-colors select-none">
                    {project.number}
                  </span>

                  <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-foreground-muted uppercase">
                    {project.number} // {project.year}
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-accent uppercase">
                    {project.industry}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
                      {project.industry}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground-muted text-sm leading-relaxed font-sans font-light line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href="#estimator"
                      className="link-arrow font-mono text-xs tracking-widest uppercase text-accent font-semibold"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="arrow-icon h-3.5 w-3.5" />
                    </a>
                    {project.metrics && (
                      <span className="font-mono text-xs text-foreground-muted">
                        {project.metrics.value}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project 04: Wide Complementary Showcase */}
          <div className="group relative rounded-3xl glass-02 glass-hover overflow-hidden p-8 sm:p-12 reveal reveal-delay-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Narrative */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
                    {p4.number} — {p4.industry}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground group-hover:text-white transition-colors">
                    {p4.title}
                  </h3>
                  <p className="font-mono text-xs text-foreground-muted">
                    {p4.subtitle}
                  </p>
                </div>

                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed font-sans font-light">
                  {p4.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {p4.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-foreground-muted/80 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <a
                    href="#estimator"
                    className="link-arrow font-mono text-xs tracking-widest uppercase text-accent font-semibold"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="arrow-icon h-3.5 w-3.5" />
                  </a>
                  {p4.metrics && (
                    <span className="font-mono text-xs text-foreground-muted">
                      {p4.metrics.value}
                    </span>
                  )}
                </div>
              </div>

              {/* Visual Frame */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl bg-surface-elevated border border-white/[0.08] overflow-hidden flex items-center justify-center p-8 order-1 lg:order-2">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 tech-grid opacity-[0.2] pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto h-48 w-48 rounded-full blur-3xl bg-accent/15 opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none"
                />
                <span className="font-display text-8xl sm:text-9xl font-bold tracking-tight text-white/[0.08] group-hover:text-accent/20 transition-colors select-none">
                  {p4.number}
                </span>

                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-foreground-muted uppercase">
                  PROJECT // {p4.year}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-accent uppercase">
                  {p4.industry}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
