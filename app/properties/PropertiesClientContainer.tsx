"use client";

import React, { useState } from "react";
import Filter from "./Filters"; 
import PropertyGrid from "./PropertyGrid";

export default function PropertiesClientContainer() {
  // Synchronized category filter state engine
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16 transition-all duration-500 ease-out">
      {/* Premium Horizontal Navigation Capsule Filter Track */}
      <Filter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      {/* Asset Display Portfolio Grid Framework */}
      <PropertyGrid activeCategory={activeCategory} />
    </div>
  );
}
