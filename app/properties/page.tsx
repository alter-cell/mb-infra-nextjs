import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Luxury Properties & Plots for Sale",
  description: "Explore curated residential luxury villas, high-growth investment plots, and commercial properties across Dehradun and Mussoorie with guaranteed compliance.",
  alternates: {
    canonical: "https://mbinfra.in/properties",
  },
};


use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, Search } from "lucide-react";

// 1. Core Performance Architecture: Maintain fast compilation loops via dynamic lazy boundaries
const Hero = dynamic(() => import("@/app/properties/Hero"), { ssr: true });
const PropertyGrid = dynamic(() => import("./PropertyGrid"), {
  ssr: false,
  loading: () => <div className="h-96 bg-brand-navy/5 animate-pulse rounded-brand-card" />
});

export default function PropertiesPage() {
  // State management for custom UI panels to track selections natively
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedBudget, setSelectedBudget] = useState("Budget Range");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const filterSectionRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterSectionRef.current && !filterSectionRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
     
    <main className="min-h-screen bg-[#FFFFFF] text-brand-body antialiased selection:bg-brand-emerald/20">
      
      {/* 50% Visual Presence: Deep Navy Cinematic Hero Segment[cite: 1] */}
      <Hero />

      {/* 10% Action Accent Layer: Luxury Filter Search Bar System with Strict 28px/18px Radii System[cite: 1] */}
      <section ref={filterSectionRef} className="max-w-[1400px] mx-auto px-6 sm:px-8 -mt-12 relative z-20">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB]/80 rounded-brand-card p-4 shadow-brand-luxury">
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-brand-sm lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
            
            {/* Search Input Box - Enforced 18px Radius & 54px Height[cite: 1] */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-brand-secondary/60 pointer-events-none" />
              <input
                type="text"
                placeholder="Search estates (e.g., Mussoorie Villa)..."
                className="w-full h-[54px] bg-[#FFFFFF] text-brand-heading placeholder-brand-secondary/60 border border-[#E5E7EB] rounded-brand-interactive pl-11 pr-4 py-3.5 text-sm tracking-wide outline-none focus:border-brand-navy/30 transition-all duration-300"
              />
            </div>

            {/* Property Type Selector Dropdown[cite: 1] */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown("type")}
                className="w-full h-[54px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-brand-interactive px-4 text-sm text-left text-brand-secondary flex items-center justify-between hover:border-brand-secondary/40 transition-all duration-300 focus:outline-none"
              >
                <span className="text-brand-heading font-medium">{selectedType}</span>
                <ChevronDown className={`w-4 h-4 text-brand-secondary/80 transition-transform duration-300 transform-gpu pointer-events-none ${activeDropdown === "type" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "type" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#FFFFFF] border border-[#E5E7EB]/80 rounded-brand-interactive shadow-brand-luxury z-30 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {["All Types", "Luxury Villas", "Premium Plots", "Commercial Construction"].map((item) => (
                    <button 
                      key={item} 
                      type="button"
                      onClick={() => { setSelectedType(item); setActiveDropdown(null); }}
                      className="w-full text-left px-3 py-2.5 text-sm rounded-lg text-brand-heading hover:bg-brand-navy/[0.03] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Budget Selector Dropdown[cite: 1] */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown("budget")}
                className="w-full h-[54px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-brand-interactive px-4 text-sm text-left text-brand-secondary flex items-center justify-between hover:border-brand-secondary/40 transition-all duration-300 focus:outline-none"
              >
                <span className="text-brand-heading font-medium">{selectedBudget}</span>
                <ChevronDown className={`w-4 h-4 text-brand-secondary/80 transition-transform duration-300 transform-gpu pointer-events-none ${activeDropdown === "budget" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "budget" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#FFFFFF] border border-[#E5E7EB]/80 rounded-brand-interactive shadow-brand-luxury z-30 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {["Budget Range", "Under ₹1 Cr", "₹1 Cr - ₹2.5 Cr", "Above ₹2.5 Cr"].map((item) => (
                    <button 
                      key={item} 
                      type="button"
                      onClick={() => { setSelectedBudget(item); setActiveDropdown(null); }}
                      className="w-full text-left px-3 py-2.5 text-sm rounded-lg text-brand-heading hover:bg-brand-navy/[0.03] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Selector Dropdown[cite: 1] */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown("location")}
                className="w-full h-[54px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-brand-interactive px-4 text-sm text-left text-brand-secondary flex items-center justify-between hover:border-brand-secondary/40 transition-all duration-300 focus:outline-none"
              >
                <span className="text-brand-heading font-medium">{selectedLocation}</span>
                <ChevronDown className={`w-4 h-4 text-brand-secondary/80 transition-transform duration-300 transform-gpu pointer-events-none ${activeDropdown === "location" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "location" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#FFFFFF] border border-[#E5E7EB]/80 rounded-brand-interactive shadow-brand-luxury z-30 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {["Select Location", "Dehradun", "Mussoorie", "Rishikesh"].map((item) => (
                    <button 
                      key={item} 
                      type="button"
                      onClick={() => { setSelectedLocation(item); setActiveDropdown(null); }}
                      className="w-full text-left px-3 py-2.5 text-sm rounded-lg text-brand-heading hover:bg-brand-navy/[0.03] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* High-Yield Action CTA Button: Enforced Primary Emerald Green[cite: 1] */}
            <button 
              type="submit" 
              className="h-[54px] relative overflow-hidden bg-brand-emerald text-white font-bold tracking-widest text-xs uppercase rounded-brand-interactive px-9 py-3.5 shadow-brand-emerald transition-all duration-300 ease-out hover:bg-[#12b050] active:scale-[0.98] transform-gpu focus:outline-none"
            >
              Discover
            </button>

          </form>
        </div>
      </section>

      {/* 35% Pure Luxury Contrast: Property Display Grid Area[cite: 1] */}
      <div className="py-24 bg-[#FFFFFF]">
        <PropertyGrid />
      </div>
    </main>
  );
}