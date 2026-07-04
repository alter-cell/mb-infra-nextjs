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
    <main className="overflow-x-hidden bg-[#0F1115]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <About />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}