"use client";

import React, { useState } from "react";

interface FiltersProps {
  onCategoryChange?: (category: string) => void;
}

export default function Filters({ onCategoryChange }: FiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Luxury Villas",
    "Premium Plots",
    "Farm Houses",
    "Commercial",
    "Investment",
  ];

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <section 
      id="properties-filter" 
      className="bg-[#FFFFFF] py-6 border-b border-[#E5E7EB] shadow-sm relative z-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Mobile: Smooth horizontal swipe navigation | Desktop: Centered lookbook track */}
        <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none snap-x flex-nowrap pb-2 md:pb-0">
          
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className="group relative py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex-shrink-0 snap-align-start focus:outline-none"
              >
                {/* 
                  Text colors now alternate beautifully between:
                  Active -> Deep Navy (#0B1F4D)
                  Inactive -> Slate Gray (#6B7280)
                  Hover -> Charcoal Black (#111827)
                */}
                <span className={`transition-colors duration-300 ease-out ${
                  isActive ? "text-[#0B1F4D]" : "text-[#6B7280] group-hover:text-[#111827]"
                }`}>
                  {category}
                </span>

                {/* 
                  Premium underline micro-interaction mapping:
                  Active -> Full Emerald Green (#43C86B)
                  Hover -> Expands to 50% width cleanly
                */}
                <span className={`absolute bottom-0 left-0 h-[3px] bg-[#43C86B] rounded-full transition-all duration-500 ease-out ${
                  isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60"
                }`} />
              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}