"use client";

import React, { useState } from "react";
import Hero from "@/app/properties/Hero";
import PropertyGrid from "./PropertyGrid";
import { ChevronDown, Search } from "lucide-react";

export default function PropertiesPage() {
  // State management for custom UI dropdown panels
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    // Realigned background shell to the official Light Gray supporting palette color
    <main className="min-h-screen bg-[#F5F7FA] text-[#111827] antialiased selection:bg-[#43C86B]/20">
      
      {/* 50% Visual Presence: Deep Navy Cinematic Hero Segment */}
      <Hero />

      {/* 10% Action Accent Layer: Luxury Filter Search Bar System */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 -mt-12 relative z-20">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 shadow-xl shadow-[#0B1F4D]/5">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
            
            {/* Search Input Box */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#6B7280]/60 pointer-events-none" />
              <input
                type="text"
                placeholder="Search estates (e.g., Mussoorie Villa)..."
                className="w-full bg-[#F5F7FA] text-[#111827] placeholder-[#6B7280]/60 border border-[#E5E7EB] rounded-lg pl-11 pr-4 py-3.5 text-sm tracking-wide outline-none focus:border-[#0B1F4D]/40 transition-all duration-500 ease-out"
              />
            </div>

            {/* Property Type Custom Dropdown Selector Toggle */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("type")}
                className="w-full bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-[#6B7280] flex items-center justify-between hover:border-[#6B7280]/40 transition-all duration-300"
              >
                <span className="text-[#111827] font-medium">All Types</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-300 ${activeDropdown === "type" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Budget Custom Dropdown Selector Toggle */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("budget")}
                className="w-full bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-[#6B7280] flex items-center justify-between hover:border-[#6B7280]/40 transition-all duration-300"
              >
                <span className="text-[#111827] font-medium">Budget Range</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-300 ${activeDropdown === "budget" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Location Custom Dropdown Selector Toggle */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("location")}
                className="w-full bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-[#6B7280] flex items-center justify-between hover:border-[#6B7280]/40 transition-all duration-300"
              >
                <span className="text-[#111827] font-medium">Select Location</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-300 ${activeDropdown === "location" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Sophisticated Search Action CTA Button aligned to official Brand Palette */}
            <button className="relative overflow-hidden group bg-[#0B1F4D] border border-transparent text-white font-bold tracking-widest text-xs uppercase rounded-lg px-9 py-3.5 transition-all duration-500 ease-out shadow-md shadow-[#0B1F4D]/10 hover:shadow-lg">
              {/* Sliding background interaction layer using active Emerald Green */}
              <span className="absolute inset-0 w-full h-full bg-[#43C86B] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
              {/* Label text positioned cleanly above the slider layer */}
              <span className="relative z-10 transition-colors duration-500 ease-out">
                Discover
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* 35% Pure Luxury Contrast: Property Display Grid Area */}
      <div className="pt-8 pb-24">
        <PropertyGrid />
      </div>
    </main>
  );
}