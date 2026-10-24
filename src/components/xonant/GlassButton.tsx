import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  className,
  icon,
  iconPosition = "right",
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center font-display font-medium tracking-wide relative select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2 rounded-lg",
    md: "px-6 py-3 text-sm gap-2.5 rounded-xl",
    lg: "px-8 py-4 text-base gap-3 rounded-xl",
  };

  const variantStyles = {
    primary:
      "btn-primary font-semibold",
    secondary:
      "glass-02 glass-hover text-foreground hover:border-white/25 hover:text-white active:scale-[0.97]",
    ghost:
      "bg-transparent text-foreground-muted hover:text-foreground hover:bg-white/[0.04] active:scale-[0.97] transition-all duration-300",
    link: "btn-link p-0 text-foreground-muted font-mono text-xs tracking-widest uppercase",
  };

  const content = (
    <>
      {loading ? (
        <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-2" />
      ) : null}
      {icon && iconPosition === "left" && (
        <span className="arrow-icon transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="arrow-icon transition-transform duration-300 group-hover:translate-x-1.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {content}
    </button>
  );
};
