import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-start overflow-hidden bg-[#0B1F4D]">
      
      {/* 1. Cinematic Background Layer: Optimized Photography Mesh */}
      <div className="absolute inset-0 z-0 bg-[#0B1F4D]">
        <Image
          src="/images/hero-architecture.jpg" // Ensure you replace this with high-end architecture photography
          alt="Mount Build Infrastructure Premium Portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-luminosity scale-[1.01] transition-transform duration-[3000ms] ease-out"
        />
        {/* Subtle Brand Linear Mask: Restrained gradient framework for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D]/90 via-[#0B1F4D]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D] via-transparent to-transparent h-1/3 bottom-0" />
      </div>

      {/* 2. Structural Typography Box: Aligned to Editorial Lookbook Layouts */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-8 pt-12 pb-24 sm:pb-32">
        <div className="max-w-3xl space-y-6">
          
          {/* Micro Tag: Tracking Signal for Craftsmanship */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#43C86B] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
              Mount Build Infrastructure
            </span>
          </div>

          {/* Core Brand Headline[cite: 1] */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Engineering Excellence <br />
            <span className="text-white/60 font-light italic">In The Himalayas</span>
          </h1>

          {/* Subtitle Description Copy: Clear Reading Rhythm[cite: 1] */}
          <p className="text-base sm:text-lg text-white/70 max-w-xl font-normal leading-relaxed">
            Discover architectural precision, structural craftsmanship, and ultra-premium real estate investment structures built to deliver long-term legacy value across Dehradun and Mussoorie[cite: 1].
          </p>

        </div>
      </div>

    </section>
  );
}