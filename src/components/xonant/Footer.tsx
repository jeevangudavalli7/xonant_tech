import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-surface/90 backdrop-blur-2xl pt-16 md:pt-24 pb-12 overflow-hidden">
      {/* Top Hairline Accent Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#B4FF39]/30 to-transparent"
      />

      <div className="xon-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 md:mb-20">
          {/* Brand Column (2 cols on large) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-accent relative">
                  <span className="animate-ping absolute inset-0 rounded-full bg-accent opacity-75" />
                </div>
                <span className="font-display font-bold tracking-tight text-2xl text-foreground">
                  XONANT <span className="text-foreground-muted font-normal">TECH</span>
                </span>
              </Link>
              <p className="font-mono text-xs tracking-widest text-accent font-semibold">
                {siteConfig.tagline}
              </p>
            </div>

            <p className="text-foreground-muted text-sm leading-relaxed max-w-sm font-sans">
              {siteConfig.mission}
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-[10px] tracking-wider text-foreground uppercase">
                {siteConfig.status}
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs tracking-widest text-foreground uppercase font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs tracking-widest text-foreground uppercase font-semibold">
              TRANSMISSIONS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-foreground-muted hover:text-accent transition-colors block font-mono text-xs"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-foreground-muted hover:text-accent transition-colors block font-mono text-xs"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-foreground-muted/70 text-xs font-mono pt-1">
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>

          {/* Ecosystem / Socials Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs tracking-widest text-foreground uppercase font-semibold">
              ECOSYSTEM
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-muted hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground-muted/60">
          <p>© {new Date().getFullYear()} XONANT TECH LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              PRIVACY POLICY
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              TERMS OF SERVICE
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              SECURITY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
