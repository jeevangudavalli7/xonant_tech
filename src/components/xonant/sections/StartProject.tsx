"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Send,
  Sparkles,
  RefreshCw,
  Layers,
  Clock,
  DollarSign,
  Briefcase,
  Terminal,
} from "lucide-react";
import { estimatorSchema, EstimatorInput } from "@/lib/validation";
import { SectionHeader } from "../SectionHeader";
import { GlassPanel } from "../GlassPanel";
import { GlassInput, GlassTextarea } from "../GlassInput";
import { GlassButton } from "../GlassButton";
import { Badge } from "../Badge";

const PROJECT_TYPES = [
  "Website",
  "Web App",
  "Mobile App",
  "AI & ML System",
  "SaaS Platform",
  "E-commerce",
  "UI/UX Design",
  "Other / Custom",
];

const PROJECT_STAGES = [
  "Idea / Concept",
  "Planning & Specs",
  "Existing Codebase",
  "Complete Redesign",
  "Scaling Infrastructure",
];

const BUDGET_RANGES = [
  "<$2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
];

const TIMELINES = [
  "ASAP (Rush)",
  "1 – 2 Months",
  "2 – 4 Months",
  "4+ Months (Flexible)",
];

export const StartProject: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EstimatorInput>({
    resolver: zodResolver(estimatorSchema),
    defaultValues: {
      projectType: "Web App",
      projectStage: "Idea / Concept",
      budget: "$5,000 – $10,000",
      timeline: "1 – 2 Months",
      description: "",
      name: "",
      email: "",
      company: "",
      phone: "",
    },
    mode: "onBlur",
  });

  const selectedType = watch("projectType");
  const selectedStage = watch("projectStage");
  const selectedBudget = watch("budget");
  const selectedTimeline = watch("timeline");
  const descriptionValue = watch("description");

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: EstimatorInput) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit transmission.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      setApiError(
        err instanceof Error ? err.message : "An unexpected transmission error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setCurrentStep(1);
    setIsSuccess(false);
    setApiError(null);
  };

  return (
    <section id="estimator" className="relative z-10 xon-section">
      <div className="xon-container">
        <div className="reveal">
          <SectionHeader
            eyebrow="ONBOARDING MATRIX"
            title="LET'S BUILD"
            accentWord="SOMETHING."
            description="Answer 6 quick questions to initialize your architectural scoping. We formulate a customized technical roadmap within 24 hours."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Multi-Step Form (8 cols) */}
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <GlassPanel glow={true} className="p-6 sm:p-10 relative glass-02">
              {isSuccess ? (
                /* Success State Screen */
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="h-16 w-16 rounded-full bg-accent/20 border border-accent/60 text-accent flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(180,255,57,0.4)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <Badge variant="accent" size="md">
                      STATUS: ENCRYPTED & LOGGED
                    </Badge>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground uppercase pt-2">
                      TRANSMISSION RECEIVED.
                    </h3>
                    <p className="text-foreground-muted text-base max-w-md mx-auto font-sans leading-relaxed">
                      We've safely received your project specifications. Our principal engineers will review your architecture and respond within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <GlassButton
                      onClick={handleReset}
                      variant="secondary"
                      size="md"
                      icon={<RefreshCw className="h-4 w-4" />}
                    >
                      START NEW INQUIRY
                    </GlassButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Step Header & Progress Indicator */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                    <div className="flex items-center gap-3">
                      <span className="h-7 w-7 rounded-full bg-accent/20 border border-accent/40 font-mono text-xs font-bold text-accent flex items-center justify-center">
                        0{currentStep}
                      </span>
                      <span className="font-mono text-xs text-foreground tracking-widest uppercase font-semibold">
                        STEP 0{currentStep} / 06
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-32 sm:w-48 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-300 rounded-full"
                        style={{ width: `${(currentStep / 6) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* STEP 01: Project Type */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-foreground">
                          WHAT ARE YOU BUILDING?
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans mt-1">
                          Select the primary digital product or technical domain.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setValue("projectType", type, { shouldValidate: true });
                            }}
                            className={`p-4 rounded-xl text-left font-mono text-xs tracking-wider transition-all duration-200 border cursor-pointer ${
                              selectedType === type
                                ? "bg-accent/15 border-accent text-accent shadow-[0_0_20px_rgba(180,255,57,0.2)] font-semibold"
                                : "bg-white/[0.025] border-white/[0.08] text-foreground-muted hover:border-white/20 hover:text-foreground"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 02: Project Stage */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-foreground">
                          PROJECT STAGE
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans mt-1">
                          Where does the project currently stand?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {PROJECT_STAGES.map((stage) => (
                          <button
                            key={stage}
                            type="button"
                            onClick={() => {
                              setValue("projectStage", stage, { shouldValidate: true });
                            }}
                            className={`p-4 rounded-xl text-left font-mono text-xs tracking-wider transition-all duration-200 border cursor-pointer ${
                              selectedStage === stage
                                ? "bg-accent/15 border-accent text-accent shadow-[0_0_20px_rgba(180,255,57,0.2)] font-semibold"
                                : "bg-white/[0.025] border-white/[0.08] text-foreground-muted hover:border-white/20 hover:text-foreground"
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 03: Budget */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-foreground">
                          TARGET BUDGET
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans mt-1">
                          Approximate capital allocated for this development phase.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {BUDGET_RANGES.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => {
                              setValue("budget", b, { shouldValidate: true });
                            }}
                            className={`p-4 rounded-xl text-left font-mono text-xs tracking-wider transition-all duration-200 border cursor-pointer ${
                              selectedBudget === b
                                ? "bg-accent/15 border-accent text-accent shadow-[0_0_20px_rgba(180,255,57,0.2)] font-semibold"
                                : "bg-white/[0.025] border-white/[0.08] text-foreground-muted hover:border-white/20 hover:text-foreground"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 04: Timeline */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-foreground">
                          TARGET TIMELINE
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans mt-1">
                          Estimated release window (planning range, not fixed guarantee).
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {TIMELINES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => {
                              setValue("timeline", t, { shouldValidate: true });
                            }}
                            className={`p-4 rounded-xl text-left font-mono text-xs tracking-wider transition-all duration-200 border cursor-pointer ${
                              selectedTimeline === t
                                ? "bg-accent/15 border-accent text-accent shadow-[0_0_20px_rgba(180,255,57,0.2)] font-semibold"
                                : "bg-white/[0.025] border-white/[0.08] text-foreground-muted hover:border-white/20 hover:text-foreground"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 05: Project Details */}
                  {currentStep === 5 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-foreground">
                          PROJECT DETAILS
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans mt-1">
                          Describe what you want to build, the problem you're solving, your goals and anything else we should know.
                        </p>
                      </div>

                      <GlassTextarea
                        rows={6}
                        placeholder="Tell us about the features, target users, technical requirements, or existing architectures..."
                        error={errors.description?.message}
                        {...register("description")}
                      />
                    </div>
                  )}

                  {/* STEP 06: Contact Info */}
                  {currentStep === 6 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-foreground">
                          CONTACT INFORMATION
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans mt-1">
                          Where should we transmit your technical proposal?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <GlassInput
                          label="Your Name *"
                          placeholder="Elena Rostova"
                          error={errors.name?.message}
                          {...register("name")}
                        />
                        <GlassInput
                          label="Work Email *"
                          type="email"
                          placeholder="elena@company.com"
                          error={errors.email?.message}
                          {...register("email")}
                        />
                        <GlassInput
                          label="Company / Organization"
                          placeholder="Nexus AI Corp"
                          error={errors.company?.message}
                          {...register("company")}
                        />
                        <GlassInput
                          label="Phone Number (Optional)"
                          placeholder="+1 (555) 000-0000"
                          error={errors.phone?.message}
                          {...register("phone")}
                        />
                      </div>

                      {apiError && (
                        <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 font-mono text-xs">
                          {apiError}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step Control Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                    {currentStep > 1 ? (
                      <GlassButton
                        type="button"
                        onClick={prevStep}
                        variant="ghost"
                        size="md"
                        icon={<ArrowLeft className="h-4 w-4" />}
                        iconPosition="left"
                      >
                        BACK
                      </GlassButton>
                    ) : (
                      <div />
                    )}

                    {currentStep < 6 ? (
                      <GlassButton
                        type="button"
                        onClick={nextStep}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="h-4 w-4" />}
                      >
                        CONTINUE
                      </GlassButton>
                    ) : (
                      <GlassButton
                        type="submit"
                        loading={isSubmitting}
                        variant="primary"
                        size="md"
                        icon={<Send className="h-4 w-4" />}
                      >
                        TRANSMIT INQUIRY
                      </GlassButton>
                    )}
                  </div>
                </form>
              )}
            </GlassPanel>
          </div>

          {/* Right Column: Live Dynamic Project Summary Panel (4 cols) */}
          <div className="lg:col-span-4 reveal reveal-delay-2">
            <div className="rounded-3xl glass-02 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs text-foreground uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-accent" />
                  PROJECT SUMMARY
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              </div>

              {/* Dynamic Badges */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-foreground-muted flex items-center gap-2">
                    <Layers className="h-3.5 w-3.5 text-accent" /> TYPE:
                  </span>
                  <span className="text-foreground font-semibold">
                    {selectedType || "Pending"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-foreground-muted flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-accent" /> STAGE:
                  </span>
                  <span className="text-foreground font-semibold">
                    {selectedStage || "Pending"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-foreground-muted flex items-center gap-2">
                    <DollarSign className="h-3.5 w-3.5 text-accent" /> BUDGET:
                  </span>
                  <span className="text-accent font-semibold">
                    {selectedBudget || "Pending"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-foreground-muted flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-accent" /> TIMELINE:
                  </span>
                  <span className="text-foreground font-semibold">
                    {selectedTimeline || "Pending"}
                  </span>
                </div>
              </div>

              {descriptionValue && (
                <div className="pt-2 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-widest block mb-1">
                    SCOPING NOTES:
                  </span>
                  <p className="text-xs text-foreground font-sans line-clamp-3 italic">
                    "{descriptionValue}"
                  </p>
                </div>
              )}

              <div className="pt-2">
                <p className="text-[11px] text-foreground-muted font-sans leading-relaxed">
                  ● Direct NDA protection guaranteed on all transmitted materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
