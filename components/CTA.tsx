import Image from "next/image";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

export default function CTA() {
  return (
    // 1. Unified Background System: Deep Navy overlay gradient matrix with atmospheric Asmani Blue glow
    <section
      id="cta-section"
      className="surface-dark-section relative isolate overflow-hidden border-t border-b border-white/5 bg-brand-navy text-white py-[100px] sm:py-[120px]"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image 
          src="/images/cta.jpg" 
          alt="MB Infra luxury construction development showcase" 
          fill
          priority
          className="object-cover scale-102 opacity-25 mix-blend-luminosity" 
        />
        {/* Soft Radial Textures & Ambient Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-[#041230]/95 to-brand-navy" />
        <div className="absolute top-[-10%] left-[-5%] h-96 w-96 rounded-full bg-brand-asmani/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-brand-asmani/5 blur-[130px]" />
      </div>

      <div className="relative z-10 container-shell">
        {/* Main Interface Wrapper Container: Enforced absolute Card Radius (28px) */}
        <div className="mx-auto max-w-5xl rounded-brand-card border border-white/10 bg-white/[0.03] px-6 py-14 text-center backdrop-blur-xl sm:px-8 sm:py-16 lg:px-16">
          
          {/* Micro Tag Label Badge Component */}
          <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-emerald/20 bg-brand-emerald/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-emerald" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-emerald uppercase">
              START YOUR JOURNEY
            </span>
          </div>

          {/* Core Invitation Header Block */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's Build Something
            <br />
            <span className="text-brand-emerald">Extraordinary.</span>
          </h2>

          {/* Balanced Reading Body Copy */}
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
            Whether you're planning a villa, commercial project or investment, our team is ready to help you craft assets with engineering excellence, absolute transparency, and long-term value.
          </p>

          {/* Interactive Button Selection System: Enforcing 18px boundary masks across styles */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Style Button: Emerald Green */}
            <a
              href="#contact"
              className="button-primary group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-brand-interactive"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Button Style: White Outline backdrop frame */}
            <a
              href="#contact"
              className="button-secondary w-full lg:w-auto inline-flex items-center justify-center border-2 border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.12] hover:border-white/30 rounded-brand-interactive"
            >
              Our Legacy
            </a>
          </div>

          {/* Embedded Internal Statistics Subtrack: Highlight values via Green strictly */}
          <div className="mt-12 grid gap-6 border-t border-white/5 pt-8 sm:grid-cols-3">
            {[
              { value: "4.9★", label: "Average Rating" },
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <h3 className="text-3xl font-extrabold text-brand-emerald tracking-tight">{s.value}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
