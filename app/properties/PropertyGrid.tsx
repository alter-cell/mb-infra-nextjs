"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Maximize2, ArrowUpRight } from "lucide-react";

interface Property {
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

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa",
    category: "Villa",
    location: "Dehradun",
    price: "₹1.25 Cr",
    area: "3,200 sq.ft",
    bedrooms: "4 BHK",
    status: "Ready to Move",
    image: "/images/villa.png",
  },
  {
    id: 2,
    title: "Premium Plot",
    category: "Plot",
    location: "Mussoorie",
    price: "₹16,000 / sq.ft",
    area: "2,400 sq.ft",
    status: "Investment",
    image: "/images/plots.jpg",
  },
  {
    id: 3,
    title: "Hill Farm House",
    category: "Farm House",
    location: "Rishikesh",
    price: "₹2.40 Cr",
    area: "5,200 sq.ft",
    bedrooms: "5 BHK",
    status: "New Launch",
    image: "/images/resort.jpg",
  },
  {
    id: 4,
    title: "Commercial Space",
    category: "Commercial",
    location: "Dehradun",
    price: "₹95 Lakh",
    area: "1,800 sq.ft",
    status: "Available",
    image: "/images/villa.png",
  },
  {
    id: 5,
    title: "Luxury Resort Unit",
    category: "Investment",
    location: "Mussoorie",
    price: "12% ROI",
    area: "850 sq.ft",
    bedrooms: "Studio",
    status: "Limited Units",
    image: "/images/resort.jpg",
  },
  {
    id: 6,
    title: "Executive Villa",
    category: "Villa",
    location: "Haridwar",
    price: "₹1.75 Cr",
    area: "3,600 sq.ft",
    bedrooms: "5 BHK",
    status: "Premium",
    image: "/images/villa.png",
  },
];

export default function PropertyGrid() {
  return (
    <section id="properties" className="max-w-[1400px] mx-auto px-6 sm:px-8 py-20 bg-[#F5F7FA]">
      
      {/* Editorial Header Block */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
        <p className="uppercase tracking-[0.25em] text-[#43C86B] text-xs font-bold">
          Curated Portfolios
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
          Explore Premium Properties
        </h2>
        <p className="text-sm text-[#6B7280] max-w-2xl font-normal leading-relaxed">
          Carefully selected villas, premium plots, commercial spaces, and high-yield investment structures across key Himalayan hubs.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="group flex flex-col rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#E5E7EB] transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#0B1F4D]/5"
          >
            
            {/* Cinematic Image Frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F7FA]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="(max-w-7xl) 33vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />
              
              {/* Institutional Deep Navy Status Indicator */}
              <span className="absolute top-4 left-4 bg-[#0B1F4D] border border-white/10 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-md shadow-md">
                {property.status}
              </span>
            </div>

            {/* Asset Details Wrapper */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[#43C86B] uppercase tracking-[0.2em] text-[10px] font-bold mb-1.5">
                  {property.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] group-hover:text-[#0B1F4D] transition-colors duration-300">
                  {property.title}
                </h3>
                
                {/* Geographic Anchor Link */}
                <div className="flex items-center gap-1.5 mt-2 text-[#6B7280] text-xs font-medium">
                  <MapPin size={14} className="text-[#0B1F4D]" />
                  <span>{property.location}, Uttarakhand</span>
                </div>

                {/* Intelligent Specification Layout Grid */}
                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-[#F5F7FA] text-[#6B7280] text-xs font-semibold">
                  {property.bedrooms && (
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} className="text-[#6B7280]/60" />
                      <span>{property.bedrooms}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Maximize2 size={16} className="text-[#6B7280]/60" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Pricing Call To Action Anchor Section */}
              <div className="flex items-end justify-between mt-8 pt-4 border-t border-[#F5F7FA]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B7280] font-bold">
                    Investment Value
                  </span>
                  <span className="text-2xl font-extrabold text-[#0B1F4D] tracking-tight mt-0.5">
                    {property.price}
                  </span>
                </div>

                {/* Emerald Green Tactical Button Action Component */}
                <Link
                  href={`/properties/${property.id}`}
                  className="group/btn flex h-11 w-11 items-center justify-center rounded-xl bg-[#43C86B] text-white shadow-md shadow-[#43C86B]/20 transition-all duration-300 hover:bg-[#3bb15e] hover:scale-105"
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
