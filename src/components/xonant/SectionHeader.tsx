import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  accentWord,
  description,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-14 md:mb-20",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-label text-[#B4FF39] font-semibold block mb-3">
          {eyebrow}
        </span>
      )}

      <h2 className="text-h1 text-[#F4F4F5] uppercase">
        {title}{" "}
        {accentWord && (
          <span className="text-[#B4FF39] inline-block">{accentWord}</span>
        )}
      </h2>

      {description && (
        <p className="mt-5 md:mt-6 text-[#8A8A8E] text-body-lg font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
