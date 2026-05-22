import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { FeaturedProductGrid } from "@/app/components/sections/FeaturedProductGrid";
import { BanterSystemShowcase } from "@/app/components/sections/BanterSystemShowcase";
import { ExperienceSection } from "@/app/components/sections/ExperienceSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { CursorSpotlight } from "@/components/shared/CursorSpotlight";
import { EngineeringGrid } from "@/components/shared/EngineeringGrid";

export default function HomePage() {
  return (
    <div className="relative min-h-screen antialiased lg:pt-0 pt-16">
      {/* Engineering grid system */}
      <EngineeringGrid />
      
      {/* Ambient background engine */}
      <AmbientBackground />
      
      {/* Cursor-reactive lighting */}
      <CursorSpotlight />

      <Navbar />

      <main>
        {/* Hero Section - Full viewport */}
        <HeroSection />
        
        {/* Content Sections - Optimized spacing */}
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8 space-y-12 md:space-y-16">
          <SkillsSection />
          
          <ProjectsSection />
          
          <div className="-mt-8">
            <FeaturedProductGrid />
          </div>
          
          <ExperienceSection />
          
          <ContactSection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}