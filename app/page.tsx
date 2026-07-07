import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // 1. Unified Background System: Shift away from arbitrary dark grays to the clean brand canvas
    <main className="overflow-x-hidden bg-[#FFFFFF] antialiased selection:bg-[#16C55F]/20">
      
      {/* Structural layout remains 100% untouched */}
      <Navbar />
      
      {/* Dark Section Area (Pre-configured inside hero with deep navy gradient & asmani blue atmospheric glow) */}
      <Hero />
      
      {/* Under-the-fold content blocks: Standardized on light white sections with barely visible sky-blue radial lighting */}
      <div className="bg-[#FFFFFF]">
        <Stats />
        <Services />
        <FeaturedProjects />
        <About />
        <Testimonials />
        <Process />
      </div>
      
      {/* Dark Premium Invitation Block[cite: 1] */}
      <CTA />
      
      {/* Dark Footer Element[cite: 1] */}
      <Footer />
      
    </main>
  );
}
