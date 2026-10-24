import React from "react";
import { Navbar } from "@/components/xonant/Navbar";
import { Footer } from "@/components/xonant/Footer";
import { Hero } from "@/components/xonant/sections/Hero";
import { Trust } from "@/components/xonant/sections/Trust";
import { SelectedWork } from "@/components/xonant/sections/SelectedWork";
import { Services } from "@/components/xonant/sections/Services";
import { Technology } from "@/components/xonant/sections/Technology";
import { WhyXonant } from "@/components/xonant/sections/WhyXonant";
import { Process } from "@/components/xonant/sections/Process";
import { About } from "@/components/xonant/sections/About";
import { Results } from "@/components/xonant/sections/Results";
import { Testimonials } from "@/components/xonant/sections/Testimonials";
import { Industries } from "@/components/xonant/sections/Industries";
import { Pricing } from "@/components/xonant/sections/Pricing";
import { Insights } from "@/components/xonant/sections/Insights";
import { FAQ } from "@/components/xonant/sections/FAQ";
import { StartProject } from "@/components/xonant/sections/StartProject";
import { FinalCTA } from "@/components/xonant/sections/FinalCTA";
import { ScrollRevealProvider } from "@/components/xonant/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div className="relative min-h-screen bg-[#050505] text-[#F4F4F5] flex flex-col">
        {/* Floating Glass Navigation */}
        <Navbar />

        {/* Content floats above atmosphere */}
        <main className="relative z-10">
          <Hero />
          <Trust />
          <SelectedWork />
          <Services />
          <Technology />
          <WhyXonant />
          <Process />
          <About />
          <Results />
          <Testimonials />
          <Industries />
          <Pricing />
          <Insights />
          <FAQ />
          <StartProject />
          <FinalCTA />
        </main>

        {/* Glass Footer */}
        <Footer />
      </div>
    </ScrollRevealProvider>
  );
}
