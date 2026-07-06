"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
      className="bg-[#FFFFFF] py-4 border-b border-[#E5E7EB]/80 shadow-sm relative z-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Mobile: Smooth horizontal swipe | Desktop: Centered lookbook track */}
        <div className="flex items-center justify-start md:justify-center gap-8 sm:gap-12 overflow-x-auto snap-x flex-nowrap pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className="group relative py-4 px-2 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 flex-shrink-0 snap-align-start focus:outline-none select-none"
              >
                {/* Refined Typography Color Transitions */}
                <span className={`relative z-10 transition-colors duration-300 ease-out ${
                  isActive ? "text-[#0B1F4D]" : "text-[#6B7280] group-hover:text-[#111827]"
                }`}>
                  {category}
                </span>

                {/* Shared Motion Underline: Slides smoothly with weight and precision */}
                {isActive ? (
                  <motion.span 
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0B1F4D] rounded-full transform-gpu"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0B1F4D]/0 rounded-full transition-all duration-300 ease-out group-hover:bg-[#0B1F4D]/20 transform-gpu" />
                )}
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
}