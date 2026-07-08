"use client";

import React, { useState } from "react";
import Filters from "./Filters";
import PropertyGrid from "./PropertyGrid";

export default function PropertiesClientLayout() {
  // Managing the dynamic real estate category filtering states cleanly on the client layer[cite: 1]
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <Filters 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      {/* Pass activeCategory down to your PropertyGrid so your listing array filters updates interactively![cite: 1] */}
      <PropertyGrid activeCategory={activeCategory} />
    </>
  );
}
