import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "var(--font-space-grotesk)", "sans-serif"],
        body: ["Inter", "var(--font-inter)", "sans-serif"],
        heading: ["Space Grotesk", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
        sans: ["Inter", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        xon: {
          base: "#050505",
          surface: "#0B0B0D",
          white: "#F4F4F5",
          gray: "#8A8A8E",
          charcoal: "#1A1A1D",
          line: "#2A2A2E",
          accent: "#B4FF39",
        },
        background: "#050505",
        surface: {
          DEFAULT: "#0B0B0D",
          elevated: "#121216",
          subtle: "#18181D",
        },
        foreground: {
          DEFAULT: "#F4F4F5",
          muted: "#8A8A8E",
          subtle: "#5A5A62",
        },
        accent: {
          DEFAULT: "#B4FF39",
          hover: "#C5FF61",
          dim: "#8ACE20",
          glow: "rgba(180, 255, 57, 0.15)",
        },
        glass: {
          1: "rgba(255, 255, 255, 0.025)",
          2: "rgba(255, 255, 255, 0.04)",
          3: "rgba(255, 255, 255, 0.06)",
          border1: "rgba(255, 255, 255, 0.06)",
          border2: "rgba(255, 255, 255, 0.09)",
          border3: "rgba(255, 255, 255, 0.13)",
          borderAccent: "rgba(180, 255, 57, 0.35)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-elevated":
          "0 12px 40px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "accent-glow": "0 0 60px -10px rgba(180, 255, 57, 0.3)",
        "accent-subtle": "0 0 20px -3px rgba(180, 255, 57, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
