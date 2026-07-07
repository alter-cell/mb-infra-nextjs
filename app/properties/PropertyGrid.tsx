import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Maximize2, ArrowUpRight } from "lucide-react";

// 1. Data Contract Model definition 
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

// 2. Data Array Isolation
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

export default function PropertyGrid({ activeCategory = "All Types" }: PropertyGridProps) {
  
  // 3. High Performance Category Filter Matching Logic
  const filteredProperties = properties.filter((property) => {
    if (activeCategory === "All Types") return true;
    return property.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    // Background Canvas: Pure crisp white layout space
    <section id="properties" className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 bg-[#FFFFFF]">
      
      {/* Editorial Header Block */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-4">
        <p className="uppercase tracking-[0.25em] text-brand-emerald text-xs font-bold">
          Curated Portfolios
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-heading">
          Explore Premium Properties
        </h2>
        <p className="text-sm text-brand-body max-w-2xl font-normal leading-relaxed">
          Carefully selected villas, premium plots, commercial spaces, and high-yield investment structures across key Himalayan hubs.
        </p>
      </div>

      {/* Grid Container - 28px card constraints */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="group flex flex-col rounded-brand-card overflow-hidden bg-[#FFFFFF] border border-[#E5E7EB]/70 transition-all duration-500 ease-out hover:shadow-brand-luxury transform-gpu"
          >
            
            {/* Cinematic Image Frame with Strict 28px Upper Curves */}
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="(max-w-7xl) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02] transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent opacity-80" />
              
              {/* Unified Brand Tag Component */}
              <span className="absolute top-4 left-4 h-7 inline-flex items-center bg-brand-navy text-white text-[10px] uppercase tracking-widest font-bold px-3 rounded-brand-badge shadow-md">
                {property.status}
              </span>
            </div>

            {/* Asset Details Wrapper */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
              <div>
                <p className="text-brand-emerald uppercase tracking-[0.2em] text-[10px] font-bold mb-1.5">
                  {property.category}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-brand-heading group-hover:text-brand-navy transition-colors duration-300">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-1.5 mt-2 text-brand-secondary text-xs font-medium">
                  <MapPin size={14} className="text-brand-navy" />
                  <span>{property.location}, Uttarakhand</span>
                </div>

                {/* Specification Grid with fixed-height constraint to block structural layout shifts */}
                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-[#F5F7FA] text-brand-body text-xs font-semibold min-h-[44px]">
                  {property.bedrooms ? (
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} className="text-brand-secondary/60" />
                      <span>{property.bedrooms}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-brand-secondary/50 font-light italic">Premium Tier Land Asset</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Maximize2 size={16} className="text-brand-secondary/60" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Pricing Call To Action Elements */}
              <div className="flex items-end justify-between mt-8 pt-4 border-t border-[#F5F7FA]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-brand-secondary font-bold">
                    Investment Value
                  </span>
                  <span className="text-2xl font-extrabold text-brand-navy tracking-tight mt-0.5">
                    {property.price}
                  </span>
                </div>

                {/* Dynamic High-Yield Action Trigger Component Button: Emerald Green */}
                <Link
                  href={`/properties/${property.id}`}
                  className="group/btn flex h-11 w-11 items-center justify-center rounded-brand-interactive bg-brand-emerald text-white transition-all duration-300 hover:bg-[#12b050] hover:scale-105 shadow-brand-emerald transform-gpu"
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
