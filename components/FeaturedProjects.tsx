"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, Heart, MapPin, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "Luxury Villa",
    location: "Dehradun",
    price: "₹1 Cr",
    roi: "8.4% Annual Growth",
    possession: "Ready by Q4 2026",
    image: "/images/villa.png",
    tag: "Ready to Move",
    description: "A sculpted private residence with panoramic views, concierge service and world-class amenities.",
  },
  {
    title: "Premium Plots",
    location: "Dehradun",
    price: "₹16 Thousand / sq.ft",
    roi: "12% Expected ROI",
    possession: "Immediate Booking",
    image: "/images/plots.jpg",
    tag: "Investment",
    description: "Strategically positioned plots in a high-growth district with premium infrastructure access.",
  },
  {
    title: "Resort Investment",
    location: "Dehradun",
    price: "₹2.4 Cr",
    roi: "10% Expected ROI",
    possession: "Limited Units",
    image: "/images/resort.jpg",
    tag: "Limited Units",
    description: "A rare hospitality-led investment with curated leisure, wellness and rental potential.",
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const visibleProjects = useMemo(() => {
    if (projects.length <= 1) return projects;
    return [
      projects[activeIndex],
      projects[(activeIndex + 1) % projects.length],
      projects[(activeIndex + 2) % projects.length],
    ];
  }, [activeIndex]);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;

    const endX = event.changedTouches[0]?.clientX ?? 0;
    const delta = touchStart - endX;

    if (delta > 50) handleNext();
    if (delta < -50) handlePrev();
    setTouchStart(null);
  };

  return (
    // 1. Background System: Clean light background with subtle sky-blue radial lighting
    <section id="projects" className="relative overflow-hidden bg-[#FFFFFF] py-[100px] sm:py-[120px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,198,255,0.04),transparent_35%)] pointer-events-none" />

      <div className="container-shell relative mx-auto max-w-[1400px]">
        
        {/* Title Content Header Area */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-emerald">
              FEATURED PROPERTIES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-heading mt-2">
              Discover Your Next Investment
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-body max-w-xl mt-4">
              Explore premium developments designed for modern living, long-term appreciation and exceptional returns.
            </p>
          </div>

          {/* Interactive Navigation Triggers System */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Show previous properties"
              onClick={handlePrev}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-brand-navy shadow-brand-luxury transition duration-300 hover:border-brand-emerald hover:text-brand-emerald lg:flex"
            >
              <ArrowLeft size={16} className="stroke-[2.5]" />
            </button>
            
            {/* View All Button: Styled to match Primary Green 18px boundary parameter */}
            <Link
              href="/properties"
              className="button-primary inline-flex items-center justify-center gap-2 rounded-brand-interactive"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            
            <button
              type="button"
              aria-label="Show next properties"
              onClick={handleNext}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-brand-navy shadow-brand-luxury transition duration-300 hover:border-brand-emerald hover:text-brand-emerald lg:flex"
            >
              <ArrowRight size={16} className="stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Deck Window */}
        <div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              // Outer Framework: Absolute Card Radius (28px) and Soft Luxury Shadows
              className="group relative flex flex-col rounded-brand-card overflow-hidden border border-[#E5E7EB]/70 bg-white shadow-brand-luxury transition duration-500 ease-out hover:-translate-y-2 transform-gpu"
            >
              {/* Card Image Block Mask */}
              <div className="relative h-64 overflow-hidden bg-brand-navy/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent opacity-80" />
                
                {/* System Tag Component Style - Enforced 18px radius consistency[cite: 1] */}
                <span className="absolute left-4 top-4 h-7 inline-flex items-center bg-brand-navy text-white text-[10px] uppercase tracking-widest font-bold px-3 rounded-[18px] shadow-md">
                  {project.tag}
                </span>

                {/* Wishlist Interactive Node Button */}
                <button
                  type="button"
                  aria-label={`Add ${project.title} to wishlist`}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/80 text-brand-navy shadow-md backdrop-blur-sm transition duration-300 hover:bg-white hover:text-brand-emerald"
                >
                  <Heart size={14} className="stroke-[2]" />
                </button>
              </div>

              {/* Asset Information Body Context Panel */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white relative z-10 -mt-2 rounded-t-brand-card border-t border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-3 min-h-[28px]">
                    <div className="flex items-center gap-1.5 text-brand-secondary text-xs font-medium">
                      <MapPin size={14} className="text-brand-navy" />
                      <span>{project.location}, Uttarakhand</span>
                    </div>
                    {/* Status Badge Component Type - 18px boundary parameter[cite: 1] */}
                    <span className="inline-flex h-6 items-center gap-1 rounded-brand-badge bg-brand-emerald/10 px-2.5 text-[9px] font-bold uppercase tracking-widest text-brand-emerald">
                      <BadgeCheck size={11} className="stroke-[2.5]" />
                      RERA Verified
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-brand-heading group-hover:text-brand-navy transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brand-body font-normal">
                    {project.description}
                  </p>

                  {/* Pricing and Performance ROI Stats Loop */}
                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    <span className="h-7 inline-flex items-center rounded-[18px] border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-brand-navy">
                      {project.price}
                    </span>
                    <span className="h-7 inline-flex items-center rounded-[18px] border border-brand-emerald/15 bg-brand-emerald/10 px-3 text-xs font-bold text-brand-emerald">
                      {project.roi}
                    </span>
                  </div>
                </div>

                {/* Sub-label Bottom Line Block */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-secondary">
                    <Sparkles size={14} className="text-brand-emerald" />
                    <span>{project.possession}</span>
                  </div>

                  {/* Dual Call To Actions Strategy Layer */}
                  <div className="flex items-center gap-2">
                    <Link
                      href="/properties"
                      className="h-9 inline-flex items-center justify-center rounded-[18px] border border-slate-200 bg-white px-3 text-xs font-bold uppercase tracking-wider text-brand-navy transition duration-300 hover:border-brand-navy"
                    >
                      Details
                    </Link>
                    <button
                      type="button"
                      className="h-9 inline-flex items-center justify-center rounded-[18px] bg-brand-emerald px-3 text-xs font-bold uppercase tracking-wider text-white shadow-brand-emerald transition duration-300 hover:bg-[#12b050]"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
