"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Filter({ activeCategory, onCategoryChange }: FilterProps) {
  // Curated list aligning perfectly with the core luxury business verticals
  const categories = [
    "All Portfolios",
    "Villa",
    "Plot",
    "Farm House",
    "Commercial",
    "Investment",
  ];

  return (
    <section 
      id="portfolio-filter" 
      className="bg-[#FFFFFF] py-5 border-b border-[#E5E7EB]/60 relative z-20 shadow-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Mobile: Smooth native swipe navigation | Desktop: Centered editorial lookbook track */}
        <div className="flex items-center justify-start md:justify-center gap-8 sm:gap-12 overflow-x-auto snap-x flex-nowrap pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {categories.map((category) => {
            const isActive = 
              activeCategory.toLowerCase() === category.toLowerCase() ||
              (category === "All Portfolios" && activeCategory === "All Types");

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category === "All Portfolios" ? "All Types" : category)}
                className="group relative py-3 px-1 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 flex-shrink-0 snap-align-start focus:outline-none select-none transform-gpu"
              >
                {/* Text Layer: Luxury Editorial Contrast Shifting */}
                <span className={`relative z-10 transition-colors duration-300 ease-out ${
                  isActive ? "text-[#0B1F4D]" : "text-[#6B7280] group-hover:text-[#111827]"
                }`}>
                  {category}
                </span>

                {/* Shared Micro-Interaction Slider Indicator */}
                {isActive ? (
                  <motion.span 
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0B1F4D] rounded-full transform-gpu"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : (
                  // Subtle hover line transition for non-active states
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