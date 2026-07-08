import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Maximize2, ArrowUpRight } from "lucide-react";

// --- Data Contract Model ---
export interface Property {
  id: number;
  title: string;
  category: string;
  location: string;
  price: string;
  area: string;
  bedrooms?: string;
  status: string;
  image: string;
}

// --- Data Array Isolation (Mapped to local production paths) ---
const properties: Property[] = [
  { id: 1, title: "Luxury Villa", category: "Villa", location: "Dehradun", price: "₹1.25 Cr", area: "3,200 sq.ft", bedrooms: "4 BHK", status: "Ready to Move", image: "/images/villa.png" },
  { id: 2, title: "Premium Plot", category: "Plot", location: "Mussoorie", price: "₹16,000 / sq.ft", area: "2,400 sq.ft", status: "Investment", image: "/images/plots.jpg" },
  { id: 3, title: "Hill Farm House", category: "Farm House", location: "Farm House", price: "₹2.40 Cr", area: "5,200 sq.ft", bedrooms: "5 BHK", status: "New Launch", image: "/images/resort.jpg" },
  { id: 4, title: "Commercial Space", category: "Commercial", location: "Dehradun", price: "₹95 Lakh", area: "1,800 sq.ft", status: "Available", image: "/images/villa.png" },
  { id: 5, title: "Luxury Resort Unit", category: "Investment", location: "Mussoorie", price: "12% ROI", area: "850 sq.ft", bedrooms: "Studio", status: "Limited Units", image: "/images/resort.jpg" },
  { id: 6, title: "Executive Villa", category: "Villa", location: "Haridwar", price: "₹1.75 Cr", area: "3,600 sq.ft", bedrooms: "5 BHK", status: "Premium", image: "/images/villa.png" },
];

interface PropertyGridProps {
  activeCategory?: string;
}

export default function PropertyGrid({ activeCategory = "all" }: PropertyGridProps) {
  
  // High-Performance Filter Matching Normalization
  const filteredProperties = properties.filter((property) => {
    const normalizedActive = activeCategory.toLowerCase().trim();
    if (normalizedActive === "all" || normalizedActive === "all portfolios" || normalizedActive === "all types") {
      return true;
    }
    return property.category.toLowerCase().trim() === normalizedActive;
  });

  return (
    // Background Canvas: Premium neutral lookbook framing that lets white cards pop
    <section id="properties" className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-16 bg-[#FAFAFA]">
      
      {/* 
        NOTE: Redundant inner text headers removed completely. 
        Flow directly transitions from your page main title into the filtered inventory cards cleanly.
      */}

      {/* Grid Container - Calibrated layout column tracks across mobile, tablets, and laptops */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-100 transition-all duration-500 ease-out hover:shadow-xl hover:border-gray-200/60 transform-gpu"
          >
            
            {/* Cinematic Image Frame with Precise Curved Outlines */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                src={property.image}
                alt={`${property.title} for Sale in ${property.location} by MB Infra`}
                fill
                sizes="(max-w-7xl) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] transform-gpu"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              
              {/* Premium Floating Badge Status */}
              <span className="absolute top-4 left-4 h-6 inline-flex items-center bg-brand-navy text-white text-[9px] uppercase tracking-widest font-bold px-2.5 rounded shadow-sm">
                {property.status}
              </span>
            </div>

            {/* Asset Details Wrapper Container */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
              <div>
                <p className="text-brand-emerald uppercase tracking-[0.2em] text-[10px] font-bold mb-1.5">
                  {property.category}
                </p>
                {/* Structural Card Title Heading optimized to H3 for hierarchy crawling */}
                <h3 className="text-xl font-bold tracking-tight text-brand-navy group-hover:text-brand-emerald transition-colors duration-300">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-1.5 mt-2 text-gray-400 text-xs font-medium">
                  <MapPin size={13} className="text-brand-navy" />
                  <span>{property.location}, Uttarakhand</span>
                </div>

                {/* Specification Grid with layout shift blocking */}
                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-50 text-gray-500 text-xs font-semibold min-h-[44px]">
                  {property.bedrooms ? (
                    <div className="flex items-center gap-2">
                      <BedDouble size={15} className="text-gray-400" />
                      <span>{property.bedrooms}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 font-light italic">Premium Tier Land Asset</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Maximize2 size={15} className="text-gray-400" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Pricing Column Container Block */}
              <div className="flex items-end justify-between mt-8 pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Investment Value
                  </span>
                  <span className="text-2xl font-extrabold text-brand-navy tracking-tight mt-0.5">
                    {property.price}
                  </span>
                </div>

                {/* Tactile Micro-interactive Action Button Container */}
                <Link
                  href={`/properties/${property.id}`}
                  aria-label={`View full specifications and pricing details for ${property.title} in ${property.location}`}
                  className="group/btn flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald text-white transition-all duration-300 hover:bg-[#12b050] hover:scale-105 active:scale-95 shadow-md transform-gpu"
                >
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover/btn:rotate-45" />
                </Link>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
