import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  active = false,
  onClick,
  className,
}) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-mono tracking-wider transition-all duration-200",
        onClick ? "cursor-pointer select-none" : "cursor-default",
        active
          ? "bg-accent/15 text-accent border border-accent/40 shadow-[0_0_12px_rgba(180,255,57,0.18)]"
          : "bg-white/[0.025] text-foreground-muted border border-white/[0.08] hover:border-white/20 hover:text-foreground",
        "rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
};
