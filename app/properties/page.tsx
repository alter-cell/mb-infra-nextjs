"use client";

import React, { useState } from "react";
import Hero from "@/app/properties/Hero";
import PropertyGrid from "./PropertyGrid";
import { ChevronDown, Search } from "lucide-react";

export default function PropertiesPage() {
  // State management for custom UI dropdowns to avoid ugly browser native styling
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <main className="min-h-screen bg-[#0F1115] text-[#F3F4F6] selection:bg-[#C89B3C]/30 antialiased">
      {/* Cinematic Hero Segment */}
      <Hero />

      {/* Luxury Filter System */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 -mt-12 relative z-20">
        <div className="bg-[#16181E]/90 backdrop-blur-md border border-white/[0.06] rounded-xl p-4 shadow-2xl shadow-black/40">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
            
            {/* Search Input Box */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-white/30 pointer-events-none" />
              <input
                type="text"
                placeholder="Search estates (e.g., Mussoorie Villa)..."
                className="w-full bg-[#0E1013] text-white placeholder-white/30 border border-white/[0.04] rounded-lg pl-11 pr-4 py-3.5 text-sm tracking-wide outline-none focus:border-[#C89B3C]/50 transition-all duration-500 ease-out"
              />
            </div>

            {/* Property Type Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("type")}
                className="w-full bg-[#0E1013] border border-white/[0.04] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-white/70 flex items-center justify-between hover:border-white/20 transition-all duration-300"
              >
                <span>All Types</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform duration-300 ${activeDropdown === "type" ? "rotate-180" : ""}`} />
              </button>
              {/* Dropdown panel would render here conditionally based on state */}
            </div>

            {/* Budget Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("budget")}
                className="w-full bg-[#0E1013] border border-white/[0.04] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-white/70 flex items-center justify-between hover:border-white/20 transition-all duration-300"
              >
                <span>Budget Range</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform duration-300 ${activeDropdown === "budget" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("location")}
                className="w-full bg-[#0E1013] border border-white/[0.04] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-white/70 flex items-center justify-between hover:border-white/20 transition-all duration-300"
              >
                <span>Select Location</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform duration-300 ${activeDropdown === "location" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Sophisticated Search Action CTA Button */}
            <button className="relative overflow-hidden group bg-[#1B1E24] border border-[#C89B3C]/40 text-[#C89B3C] font-medium tracking-widest text-xs uppercase rounded-lg px-8 py-3.5 transition-all duration-500 ease-out shadow-lg hover:border-[#C89B3C] hover:text-black">
              {/* Sliding background layer */}
              <span className="absolute inset-0 w-full h-full bg-[#C89B3C] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
              {/* Label wrapper to sit cleanly above back layer */}
              <span className="relative z-10 transition-colors duration-500 ease-out">
                Discover
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* Property Display Grid */}
      <div className="pt-8 pb-24">
        <PropertyGrid />
      </div>
    </main>
  );
}