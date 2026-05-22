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
    <div className="relative min-h-[100dvh] antialiased overflow-x-hidden">
      {/* Engineering grid system */}
      <EngineeringGrid />
      
      {/* Ambient background engine */}
      <AmbientBackground />
      
      {/* Cursor-reactive lighting */}
      <CursorSpotlight />

      <Navbar />

      <main className="relative z-10 pt-14 lg:pt-0 pb-36 lg:pb-0">
        {/* Hero Section - Full viewport */}
        <HeroSection />
        
        {/* Content Sections - Optimized spacing */}
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 pb-12 pt-8 sm:pt-12 space-y-12 md:space-y-16">
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