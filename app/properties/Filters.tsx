"use client";

import React from "react";

interface FilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Filter({ activeCategory, onCategoryChange }: FilterProps) {
  const categories = [
    { name: "All Portfolios", value: "all" },
    { name: "Villa", value: "villa" },
    { name: "Plot", value: "plot" },
    { name: "Farm House", value: "farm house" },
    { name: "Commercial", value: "commercial" },
    { name: "Investment", value: "investment" },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-10">
      {/* Clean Horizontal Track with soft background capsule framing */}
      <div className="flex items-center justify-start gap-3 overflow-x-auto overflow-y-hidden py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x flex-nowrap w-full">
        
        {categories.map((category) => {
          const isActive = activeCategory.toLowerCase().trim() === category.value.toLowerCase().trim();

          return (
            <button
              key={category.value}
              type="button"
              onClick={() => onCategoryChange(category.value)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-full transition-all duration-300 flex-shrink-0 snap-align-start focus:outline-none select-none border transform-gpu active:scale-[0.97] ${
                isActive 
                  ? "bg-brand-navy text-white border-brand-navy shadow-sm" 
                  : "bg-white text-gray-400 border-gray-100 hover:text-brand-navy hover:border-gray-300"
              }`}
            >
              {category.name}
            </button>
          );
        })}

      </div>
    </div>
  );
}