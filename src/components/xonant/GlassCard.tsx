import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  interactive?: boolean;
  accentBorder?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  level = 2,
  interactive = true,
  accentBorder = false,
  className,
  onClick,
}) => {
  const levelStyles = {
    1: "bg-white/[0.03] backdrop-blur-md border border-white/[0.08]",
    2: "glass-02",
    3: "glass-02 bg-white/[0.07] backdrop-blur-2xl border border-white/[0.18]",
  };

  const interactiveStyles = interactive ? "glass-hover cursor-pointer" : "";

  const accentStyles = accentBorder
    ? "border-accent/40 shadow-[0_0_30px_-5px_rgba(180,255,57,0.2),inset_0_1px_0_rgba(180,255,57,0.35)]"
    : "";

  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl relative overflow-hidden",
        levelStyles[level],
        interactiveStyles,
        accentStyles,
        className
      )}
    >
      {children}
    </div>
  );
};
