import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "pulse";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full font-mono font-medium uppercase tracking-[0.16em] transition-colors";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px] leading-4",
    md: "px-3.5 py-1 text-[11px] leading-5",
  };

  const variantStyles = {
    default:
      "bg-white/[0.04] text-foreground-muted border border-white/[0.08] backdrop-blur-md",
    accent:
      "bg-accent/[0.1] text-accent border border-accent/30 shadow-[0_0_12px_rgba(180,255,57,0.15)]",
    outline:
      "bg-transparent text-foreground-muted border border-white/[0.12]",
    pulse:
      "bg-white/[0.03] text-foreground-muted border border-white/[0.08] backdrop-blur-md",
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {variant === "pulse" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
};
