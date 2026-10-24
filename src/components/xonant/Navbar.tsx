"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { cn } from "@/lib/utils";
import { GlassButton } from "./GlassButton";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <div
        className={cn(
          "w-full max-w-6xl mx-auto rounded-full flex items-center justify-between px-5 sm:px-7 py-3 transition-all duration-500 pointer-events-auto",
          isScrolled
            ? "glass-03 py-2.5 sm:py-3 border-white/[0.14]"
            : "glass-02"
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={closeMobileMenu}
        >
          <div className="h-2.5 w-2.5 rounded-full bg-[#B4FF39] relative">
            <span className="animate-ping absolute inset-0 rounded-full bg-[#B4FF39] opacity-75" />
          </div>
          <span className="font-display font-bold tracking-tight text-lg sm:text-xl text-[#F4F4F5] group-hover:text-white transition-colors">
            XONANT <span className="text-[#8A8A8E] font-normal">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-body tracking-widest text-[#8A8A8E] hover:text-[#F4F4F5] hover:text-white transition-colors relative py-1 focus:outline-none focus:text-[#B4FF39]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#estimator"
            className="btn-primary py-2 px-5 text-[11px]"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden flex items-center justify-center h-9 w-9 rounded-full bg-white/[0.05] border border-white/[0.12] text-foreground hover:text-accent hover:border-accent/40 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Fullscreen Mobile Glass Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pointer-events-auto md:hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header inside modal */}
          <div className="flex items-center justify-between w-full max-w-md mx-auto">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2.5 font-display font-bold text-xl text-foreground"
            >
              <div className="h-2 w-2 rounded-full bg-accent" />
              XONANT TECH
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.15] flex items-center justify-center text-foreground hover:text-accent transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col items-center justify-center space-y-6 my-auto">
            {siteConfig.navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-display text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors py-1 flex items-center gap-3"
              >
                <span className="font-mono text-xs text-foreground-muted font-normal">
                  0{idx + 1}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="w-full max-w-md mx-auto space-y-4 pt-4 border-t border-white/[0.08]">
            <GlassButton
              href="#estimator"
              onClick={closeMobileMenu}
              variant="primary"
              size="lg"
              className="w-full"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              START A PROJECT
            </GlassButton>
            <p className="text-center font-mono text-[10px] text-foreground-muted tracking-widest uppercase">
              ● {siteConfig.status}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
