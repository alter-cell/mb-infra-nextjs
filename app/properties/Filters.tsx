"use client";

import React from "react";
import { motion } from "framer-motion";

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
    // Background Canvas: Pure white surface utilizing soft luxury layout rules
    <section 
      id="portfolio-filter" 
      className="bg-[#FFFFFF] py-4 border-b border-[#E5E7EB]/70 relative z-20 shadow-brand-luxury"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Mobile: Smooth native swipe navigation | Desktop: Centered editorial lookbook track */}
        <div className="flex items-center justify-start md:justify-center gap-8 sm:gap-10 overflow-x-auto snap-x flex-nowrap pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {categories.map((category) => {
            const isActive = 
              activeCategory.toLowerCase() === category.toLowerCase() ||
              (category === "All Portfolios" && activeCategory === "All Types");

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category === "All Portfolios" ? "All Types" : category)}
                // Standard uppercase styling, letter spacing, and tactile micro-interactions[cite: 1]
                className="group relative py-3.5 px-2 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 flex-shrink-0 snap-align-start focus:outline-none select-none transform-gpu active:scale-[0.98]"
              >
                {/* Text Layer: Balanced Contrast Shifting with Primary Brand Tokens[cite: 1] */}
                <span className={`relative z-10 transition-colors duration-300 ease-out ${
                  isActive ? "text-brand-navy" : "text-brand-secondary hover:text-brand-heading"
                }`}>
                  {category}
                </span>

                {/* Intentional Shared Motion Indicator System using Emerald Green[cite: 1] */}
                {isActive ? (
                  <motion.span 
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-emerald rounded-brand-badge transform-gpu shadow-brand-emerald"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : (
                  /* Subtle atmospheric hover highlight using light secondary slate parameters[cite: 1] */
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-navy/0 rounded-brand-badge transition-all duration-300 ease-out group-hover:bg-brand-navy/10 transform-gpu" />
                )}
              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}