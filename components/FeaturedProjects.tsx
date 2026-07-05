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
    return [projects[activeIndex], projects[(activeIndex + 1) % projects.length], projects[(activeIndex + 2) % projects.length]];
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
    <section id="projects" className="relative overflow-hidden bg-[linear-gradient(135deg,_#f7fbff_0%,_#eef7ff_100%)] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,200,83,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(13,59,122,0.08),_transparent_24%)]" />

      <div className="container-shell relative mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">FEATURED PROPERTIES</p>
            <h2 className="section-title mt-3 text-[32px] sm:text-[38px] lg:text-[44px]">
              Discover Your Next Investment
            </h2>
            <p className="section-copy mt-3 max-w-xl">
              Explore premium developments designed for modern living, long-term appreciation and exceptional returns.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Show previous properties"
              onClick={handlePrev}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-[0_10px_30px_rgba(2,8,23,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#00C853]/40 hover:text-[#00C853] lg:flex"
            >
              <ArrowLeft size={18} />
            </button>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/20 bg-[#00C853] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(0,200,83,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#00E676] hover:shadow-[0_0_24px_rgba(0,200,83,0.24)]"
            >
              View All Properties
              <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              aria-label="Show next properties"
              onClick={handleNext}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-[0_10px_30px_rgba(2,8,23,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#00C853]/40 hover:text-[#00C853] lg:flex"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/85 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(14,36,76,0.16)]"
            >
              <div className="relative h-60 overflow-hidden sm:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,21,63,0.02)_0%,_rgba(7,21,63,0.35)_60%,_rgba(7,21,63,0.75)_100%)]" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-900 shadow-[0_10px_25px_rgba(2,8,23,0.12)]">
                  {project.tag}
                </span>
                <button
                  type="button"
                  aria-label={`Add ${project.title} to wishlist`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/85 text-slate-900 shadow-[0_12px_35px_rgba(2,8,23,0.18)] backdrop-blur transition duration-300 hover:-rotate-6 hover:text-[#00C853]"
                >
                  <Heart size={16} />
                </button>
              </div>

              <div className="relative -mt-4 rounded-[22px] border border-white/70 bg-white/70 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={15} className="text-[#00C853]" />
                    <span>{project.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#00C853]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#00C853]">
                    <BadgeCheck size={12} />
                    RERA Verified
                  </span>
                </div>

                <h3 className="mt-4 text-[22px] font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-700">
                    {project.price}
                  </span>
                  <span className="rounded-full border border-[#00C853]/15 bg-[#00C853]/10 px-3 py-1.5 font-medium text-[#00C853]">
                    {project.roi}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <Sparkles size={14} className="text-[#00C853]" />
                  <span>{project.possession}</span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-[#00C853]/30 hover:text-[#00C853]"
                  >
                    View Details
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-[#00C853] px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(0,200,83,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#00E676] hover:shadow-[0_0_22px_rgba(0,200,83,0.24)]"
                  >
                    Book Site Visit
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
