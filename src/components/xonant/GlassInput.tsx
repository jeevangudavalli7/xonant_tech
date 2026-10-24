import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface GlassInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ label, error, helperText, className, type = "text", ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-mono tracking-widest uppercase text-foreground-muted">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={type}
            className={cn(
              "w-full rounded-xl bg-white/[0.035] border border-white/[0.12] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground-muted/50 backdrop-blur-md outline-none transition-all duration-200",
              "focus:bg-white/[0.06] focus:border-accent/60 focus:shadow-[0_0_20px_-3px_rgba(180,255,57,0.25)]",
              error
                ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_20px_-3px_rgba(239,68,68,0.25)]"
                : "",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            {...props}
          />
        </div>
        {error ? (
          <p className="text-xs text-red-400 font-mono tracking-wide mt-1">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-foreground-muted/70 font-mono tracking-wide mt-1">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";

export interface GlassTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const GlassTextarea = forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ label, error, helperText, className, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-mono tracking-widest uppercase text-foreground-muted">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            rows={rows}
            className={cn(
              "w-full rounded-xl bg-white/[0.035] border border-white/[0.12] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground-muted/50 backdrop-blur-md outline-none transition-all duration-200 resize-none",
              "focus:bg-white/[0.06] focus:border-accent/60 focus:shadow-[0_0_20px_-3px_rgba(180,255,57,0.25)]",
              error
                ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_20px_-3px_rgba(239,68,68,0.25)]"
                : "",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            {...props}
          />
        </div>
        {error ? (
          <p className="text-xs text-red-400 font-mono tracking-wide mt-1">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-foreground-muted/70 font-mono tracking-wide mt-1">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

GlassTextarea.displayName = "GlassTextarea";
