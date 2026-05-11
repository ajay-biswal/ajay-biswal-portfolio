import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { BanterSystemShowcase } from "@/app/components/sections/BanterSystemShowcase";
import { ExperienceSection } from "@/app/components/sections/ExperienceSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { CursorSpotlight } from "@/components/shared/CursorSpotlight";

export default function HomePage() {
  return (
    <div className="relative min-h-screen antialiased">
      {/* Ambient background engine */}
      <AmbientBackground />
      
      {/* Cursor-reactive lighting */}
      <CursorSpotlight />

      <Navbar />

      <main>
        {/* Hero Section - Full viewport */}
        <HeroSection />
        
        {/* Section separator */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.1), transparent)" }} />
        </div>

        {/* Content Sections */}
        <div className="mx-auto max-w-7xl px-4 pb-15 pt-10 sm:px-6 sm:pt-20 lg:px-8 space-y-20 md:space-y-24">
          <SkillsSection />
          
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.08), transparent)" }} />
          
          <ProjectsSection />
          
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.08), transparent)" }} />
          
          {/* Banter - Real-Time System Showcase
          <BanterSystemShowcase /> */}
          
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.08), transparent)" }} />
          
          <ExperienceSection />
          
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.08), transparent)" }} />
          
          <ContactSection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}