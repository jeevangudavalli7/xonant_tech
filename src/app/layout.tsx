import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Atmosphere } from "@/components/xonant/Atmosphere";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XONANT TECH — Independent Technology & Digital Product Agency",
  description:
    "We design and engineer digital products, AI systems, software and experiences for ambitious businesses. BUILD. SOLVE. EVOLVE.",
  keywords: [
    "Xonant Tech",
    "Digital Product Studio",
    "AI Engineering",
    "SaaS Development",
    "Full-Stack Development",
    "Next.js Development",
    "Software Architecture",
  ],
  authors: [{ name: "XONANT TECH" }],
  openGraph: {
    title: "XONANT TECH — BUILD. SOLVE. EVOLVE.",
    description:
      "We design and engineer digital products, AI systems, software and experiences for ambitious businesses.",
    url: "https://xonant.tech",
    siteName: "XONANT TECH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XONANT TECH — BUILD. SOLVE. EVOLVE.",
    description:
      "We design and engineer digital products, AI systems, software and experiences for ambitious businesses.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased min-h-screen overflow-x-hidden selection:bg-accent/20 selection:text-accent relative">
        <Atmosphere />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
