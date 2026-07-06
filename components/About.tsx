"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// --- Data Types & Mock Structures ---
interface FeatureItem {
  title: string;
  text: string;
}

interface StatItem {
  value: string;
  label: string;
  position: string;
}

interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

const features: FeatureItem[] = [
  {
    title: "Engineering Excellence",
    text: "Every project is executed with precision, premium materials and uncompromising quality standards.",
  },
  {
    title: "Transparent Investment",
    text: "Clear documentation, honest communication and investment opportunities built for long-term value.",
  },
  {
    title: "End-to-End Delivery",
    text: "From planning and approvals to construction and handover, everything is managed under one roof.",
  },
  {
    title: "Trusted Partnerships",
    text: "Hundreds of successful projects have built lasting relationships across Uttarakhand.",
  },
];

const stats: StatItem[] = [
  {
    value: "25+",
    label: "Years",
    position: "top-4 left-4 sm:top-8 sm:-left-6 lg:-left-10",
  },
  {
    value: "500+",
    label: "Projects",
    position: "bottom-12 left-4 sm:bottom-24 sm:-left-8",
  },
  {
    value: "98%",
    label: "Satisfaction",
    position: "top-12 right-4 sm:top-20 sm:-right-6",
  },
];

const timelineItems: TimelineItem[] = [
  {
    year: "1997",
    title: "Company Founded",
    text: "The beginning of MB Infra's journey in Uttarakhand.",
  },
  {
    year: "2010",
    title: "Expansion",
    text: "Expanded into residential and commercial developments.",
  },
  {
    year: "2018",
    title: "Premium Projects",
    text: "Luxury villas and premium investment opportunities.",
  },
  {
    year: "Today",
    title: "Future Vision",
    text: "Building tomorrow with innovation and trust.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_45%,#eef8ff_100%)] py-12 sm:py-20 lg:py-24"
    >
      {/* Background Blobs Optimized (WGPU-friendly blur radii reduction to avoid frame drops on mobile Safari) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-0 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#0D4FD8]/5 blur-[60px] sm:blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#00C853]/5 blur-[60px] sm:blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT: HERO IMAGE & VISUAL BADGES SECTION */}
          <div className="relative order-2 lg:order-1">
            
            {/* Dynamic Absolute Stacked Badges Layer */}
            {stats.map((item) => (
              <div
                key={item.value}
                className={`absolute z-20 rounded-xl sm:rounded-2xl border border-white/60 bg-white/95 px-3 py-2.5 sm:px-5 sm:py-4 shadow-[0_12px_36px_rgba(13,59,122,0.08)] backdrop-blur-xl transition-transform duration-300 hover:scale-105 ${item.position}`}
              >
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#0D3B7A] tracking-tight">
                  {item.value}
                </h3>
                <p className="mt-0.5 text-[10px] sm:text-sm font-semibold text-slate-500 whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}

            {/* Core Architectural Showcase Frame */}
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/70 bg-white p-2 sm:p-3 shadow-[0_30px_80px_rgba(13,59,122,0.1)]">
              <div className="absolute inset-0 rounded-[22px] sm:rounded-[34px] bg-[radial-gradient(circle_at_top_left,_rgba(0,200,83,.12),transparent_35%)] z-10 pointer-events-none" />
              
              <div className="relative h-[380px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden rounded-[18px] sm:rounded-[28px]">
                <Image
                  src="/images/about.jpg"
                  alt="MB Infra Legacy Showcase"
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Visual Identity Shading scrim for text protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Desktop and Tablet Only: Main Floating Glass Overlay */}
            <div className="hidden sm:block absolute -bottom-8 right-6 rounded-[24px] border border-white/70 bg-white/95 px-6 py-5 shadow-[0_20px_50px_rgba(13,59,122,0.12)] backdrop-blur-xl z-20">
              <div className="flex items-center gap-2 text-[#00C853]">
                <Sparkles size={13} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                  Since 1997
                </span>
              </div>
              <h3 className="mt-2 text-3xl font-black text-slate-900 tracking-tight">
                25+
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Years of Building Excellence
              </p>
            </div>
          </div>

          {/* RIGHT: TEXTUAL INFORMATION AND COPY LAYOUT */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/20 bg-[#00C853]/10 px-4 py-1.5 sm:px-5 sm:py-2">
                <Sparkles size={13} className="text-[#00C853]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#00C853]">
                  Our Legacy
                </span>
              </div>
              
              <h2 className="mt-4 text-[34px] sm:text-[48px] lg:text-[58px] font-black leading-[1.05] sm:leading-[0.95] tracking-tight text-slate-900">
                Building <br />
                Uttarakhand's <br />
                <span className="text-[#00C853]">Future.</span>
              </h2>
            </div>

            {/* Trust Numeric Array Matrix */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200/60 py-5">
              <div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#0D3B7A] tracking-tight">500+</h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Projects</p>
              </div>
              <div className="border-x border-slate-200/60 px-4">
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#0D3B7A] tracking-tight">300Cr+</h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Value</p>
              </div>
              <div className="pl-2">
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#0D3B7A] tracking-tight">98%</h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Satisfaction</p>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-slate-600 font-normal">
              For over two decades, MB Infra has shaped residential communities,
              premium developments and investment opportunities across
              Uttarakhand through engineering excellence, transparent practices
              and uncompromising quality.
            </p>

            {/* Core Modular Grid Layout Blocks */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[20px] border border-slate-200/80 bg-white p-5 sm:p-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00C853]/40 hover:shadow-[0_16px_36px_rgba(13,59,122,0.08)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853] transition-transform duration-300 group-hover:scale-105">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/properties"
                className="group flex min-h-[48px] sm:inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#00C853] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(0,200,83,0.2)] transition-transform duration-150 active:scale-[0.98] lg:hover:-translate-y-0.5 lg:hover:shadow-[0_12px_30px_rgba(0,200,83,0.35)]"
              >
                Explore Our Journey
                <ArrowRight size={16} className="transition-transform duration-200 will-change-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

        {/* SECTION 2: VERTICAL/HORIZONTAL STRATIFIED TIMELINE */}
        <div className="relative mt-20 sm:mt-28">
          <div className="mb-10 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D4FD8]/10 bg-[#0D4FD8]/5 px-4 py-1.5">
              <Sparkles size={13} className="text-[#0D4FD8]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0D4FD8]">
                Our Journey
              </span>
            </div>
            
            <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Building Trust, <br className="sm:hidden" /> One Milestone at a Time.
            </h3>
          </div>

          {/* Desktop Only Connective Timeline Trajectory */}
          <div className="absolute left-0 right-0 top-[88px] hidden h-[2px] bg-gradient-to-r from-[#00C853] via-[#0D4FD8]/30 to-[#00C853] lg:block" aria-hidden="true" />

          {/* Cards Wrapper System */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timelineItems.map((item) => (
              <div
                key={item.year}
                className="relative rounded-[20px] sm:rounded-[24px] border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.03)] transition-all duration-300 will-change-transform lg:hover:-translate-y-1.5 lg:hover:border-[#00C853]/40 lg:hover:shadow-[0_24px_50px_rgba(13,59,122,0.1)]"
              >
                {/* Structural desktop pin overlay */}
                <div className="absolute -top-3.5 left-8 hidden h-7 w-7 rounded-full border-4 border-white bg-[#00C853] shadow-[0_0_0_6px_rgba(0,200,83,0.1)] lg:block" aria-hidden="true" />

                <p className="text-xs font-bold uppercase tracking-widest text-[#00C853]">
                  {item.year}
                </p>
                <h4 className="mt-3 text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: BOTTOM CALL TO ACTION TRUST CONVERSION BANNER */}
        <div className="mt-16 sm:mt-24 overflow-hidden rounded-[24px] sm:rounded-[36px] bg-gradient-to-r from-[#081C3A] via-[#0D4FD8] to-[#081C3A] p-[1px] shadow-xl">
          <div className="rounded-[23px] sm:rounded-[35px] bg-[linear-gradient(135deg,#07193d,#0b2b68)] px-5 py-8 sm:px-10 sm:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-white tracking-tight">
                  Building More Than Structures. <br /> Building Trust.
                </h3>
                <p className="max-w-2xl text-xs sm:text-base leading-relaxed sm:leading-7 text-white/75 font-light">
                  Every home, villa, commercial development and investment
                  opportunity reflects our commitment to engineering excellence,
                  transparency and long-term value.
                </p>
              </div>

              <div>
                <a
                  href="#contact"
                  className="group flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#00C853] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(0,200,83,0.25)] transition-transform duration-100 active:scale-[0.98] lg:hover:-translate-y-0.5 lg:hover:shadow-[0_12px_24px_rgba(0,200,83,0.4)]"
                >
                  Talk To Our Team
                  <ArrowRight size={16} className="transition-transform duration-200 will-change-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
