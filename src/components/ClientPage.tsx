"use client";

import { I18nProvider } from "@/lib/i18n-context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Posts from "@/components/Posts";
import Influence from "@/components/Influence";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import type { RepoStats } from "@/lib/github";

interface ClientPageProps {
  stars: RepoStats;
}

export default function ClientPage({ stars }: ClientPageProps) {
  return (
    <I18nProvider>
      <div className="noise-overlay">
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <TechStack />
          <SectionDivider />
          <Projects stars={stars} />
          <SectionDivider />
          <Posts />
          <SectionDivider />
          <Influence />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
