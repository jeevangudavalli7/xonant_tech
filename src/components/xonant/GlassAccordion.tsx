"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  number?: string;
  title: string;
  category?: string;
  children: React.ReactNode;
}

interface GlassAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export const GlassAccordion: React.FC<GlassAccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl transition-all duration-300 overflow-hidden",
              isOpen
                ? "bg-white/[0.06] border border-white/[0.18] shadow-glass-elevated shadow-[inset_0_1px_0_rgba(180,255,57,0.15)]"
                : "bg-white/[0.025] border border-white/[0.08] hover:bg-white/[0.045] hover:border-white/[0.14]"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-6 py-5 md:py-6 text-left cursor-pointer select-none group"
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0 pr-4">
                {item.number && (
                  <span className="font-mono text-xs md:text-sm text-foreground-muted/60 group-hover:text-accent transition-colors flex-shrink-0">
                    {item.number}
                  </span>
                )}
                <div className="min-w-0">
                  {item.category && (
                    <span className="block text-[10px] font-mono text-foreground-muted tracking-widest uppercase mb-1">
                      {item.category}
                    </span>
                  )}
                  <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-foreground group-hover:text-white transition-colors truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div
                className={cn(
                  "flex-shrink-0 h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-all duration-300 border",
                  isOpen
                    ? "bg-accent text-background border-accent rotate-45 shadow-[0_0_15px_rgba(180,255,57,0.4)]"
                    : "bg-white/[0.04] text-foreground-muted border-white/[0.1] group-hover:border-white/30 group-hover:text-foreground"
                )}
              >
                <Plus className="h-4 w-4 md:h-5 md:w-5 transition-transform" />
              </div>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:pb-8 pt-2 border-t border-white/[0.06]">
                  {item.children}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
