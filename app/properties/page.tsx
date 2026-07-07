"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, Search } from "lucide-react";

// 1. Core Performance Architecture: Maintain fast compilation loops via dynamic lazy boundaries
const Hero = dynamic(() => import("@/app/properties/Hero"), { ssr: true });
const PropertyGrid = dynamic(() => import("./PropertyGrid"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white/5 animate-pulse rounded-xl" />
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

  // Close open filter panels smoothly if a user clicks anywhere outside the bar [cite: 64, 115, 231]
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
    // Premium editorial canvas using structural off-white background [cite: 38, 80]
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827] antialiased selection:bg-[#0B1F4D]/10">
      
      {/* 50% Visual Presence: Deep Navy Cinematic Hero Segment [cite: 38, 165] */}
      <Hero />

      {/* 10% Action Accent Layer: Luxury Filter Search Bar System [cite: 132, 133] */}
      <section ref={filterSectionRef} className="max-w-[1400px] mx-auto px-6 sm:px-8 -mt-12 relative z-20">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB]/80 rounded-xl p-4 shadow-xl shadow-[#0B1F4D]/5">
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
            
            {/* Search Input Box */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#6B7280]/60 pointer-events-none" />
              <input
                type="text"
                placeholder="Search estates (e.g., Mussoorie Villa)..."
                className="w-full bg-[#FAF9F6] text-[#111827] placeholder-[#6B7280]/60 border border-[#E5E7EB] rounded-lg pl-11 pr-4 py-3.5 text-sm tracking-wide outline-none focus:border-[#0B1F4D]/30 transition-all duration-300"
              />
            </div>

            {/* Property Type Selector Dropdown [cite: 13, 14, 15] */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown("type")}
                className="w-full bg-[#FAF9F6] border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-[#6B7280] flex items-center justify-between hover:border-[#6B7280]/40 transition-all duration-300 focus:outline-none"
              >
                <span className="text-[#111827] font-medium">{selectedType}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-300 transform-gpu pointer-events-none ${activeDropdown === "type" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "type" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-xl z-30 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {["All Types", "Luxury Villas", "Premium Plots", "Commercial Construction"].map((item) => (
                    <button 
                      key={item} 
                      type="button"
                      onClick={() => { setSelectedType(item); setActiveDropdown(null); }}
                      className="w-full text-left px-3 py-2 text-sm rounded-md text-[#111827] hover:bg-gray-50 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Budget Selector Dropdown [cite: 17] */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown("budget")}
                className="w-full bg-[#FAF9F6] border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-[#6B7280] flex items-center justify-between hover:border-[#6B7280]/40 transition-all duration-300 focus:outline-none"
              >
                <span className="text-[#111827] font-medium">{selectedBudget}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-300 transform-gpu pointer-events-none ${activeDropdown === "budget" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "budget" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-xl z-30 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {["Budget Range", "Under ₹1 Cr", "₹1 Cr - ₹2.5 Cr", "Above ₹2.5 Cr"].map((item) => (
                    <button 
                      key={item} 
                      type="button"
                      onClick={() => { setSelectedBudget(item); setActiveDropdown(null); }}
                      className="w-full text-left px-3 py-2 text-sm rounded-md text-[#111827] hover:bg-gray-50 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Selector Dropdown [cite: 19] */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown("location")}
                className="w-full bg-[#FAF9F6] border border-[#E5E7EB] rounded-lg px-4 py-3.5 text-sm tracking-wide text-left text-[#6B7280] flex items-center justify-between hover:border-[#6B7280]/40 transition-all duration-300 focus:outline-none"
              >
                <span className="text-[#111827] font-medium">{selectedLocation}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform duration-300 transform-gpu pointer-events-none ${activeDropdown === "location" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "location" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-xl z-30 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {["Select Location", "Dehradun", "Mussoorie", "Rishikesh"].map((item) => (
                    <button 
                      key={item} 
                      type="button"
                      onClick={() => { setSelectedLocation(item); setActiveDropdown(null); }}
                      className="w-full text-left px-3 py-2 text-sm rounded-md text-[#111827] hover:bg-gray-50 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Subdued Luxury Action CTA Button [cite: 80, 142, 143] */}
            <button 
              type="submit" 
              className="relative overflow-hidden bg-[#0B1F4D] text-white font-bold tracking-widest text-xs uppercase rounded-lg px-9 py-3.5 transition-all duration-300 ease-out shadow-md hover:bg-[#122c66] active:scale-[0.98] transform-gpu focus:outline-none"
            >
              Discover
            </button>

          </form>
        </div>
      </section>

      {/* 35% Pure Luxury Contrast: Property Display Grid Area [cite: 132, 133] */}
      <div className="pt-8 pb-24">
        <PropertyGrid />
      </div>
    </main>
  );
}
