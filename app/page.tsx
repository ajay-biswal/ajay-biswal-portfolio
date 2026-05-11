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
        
        {/* Content Sections - Optimized spacing */}
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8 space-y-16 md:space-y-20">
          <SkillsSection />
          
          <ProjectsSection />
          
          <ExperienceSection />
          
          <ContactSection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}