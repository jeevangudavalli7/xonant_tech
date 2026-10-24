import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  glow = false,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl bg-surface/80 border border-white/[0.1] backdrop-blur-2xl p-6 md:p-10 shadow-glass-elevated",
        glow && "shadow-[0_0_50px_-10px_rgba(180,255,57,0.12)] border-accent/20",
        className
      )}
    >
      {/* Hairline subtle top highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      {children}
    </div>
  );
};
