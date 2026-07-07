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
    // 1. Unified Background System: White canvas with soft, atmospheric sky-blue radial gradients
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFFFF] py-[100px] sm:py-[120px]"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-brand-asmani/5 blur-[100px] sm:blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-brand-asmani/3 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="container-shell relative z-10">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT: HERO IMAGE & VISUAL BADGES SECTION */}
          <div className="relative order-2 lg:order-1">
            
            {/* Dynamic Absolute Stacked Badges Layer - Fixed to crisp 18px radius tokens */}
            {stats.map((item) => (
              <div
                key={item.value}
                className={`absolute z-20 rounded-[18px] border border-slate-200/60 bg-white/95 px-4 py-3 shadow-brand-luxury backdrop-blur-md transition-transform duration-300 hover:scale-105 ${item.position}`}
              >
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-emerald tracking-tight">
                  {item.value}
                </h3>
                <p className="mt-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-secondary whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}

            {/* Core Architectural Showcase Frame - Strict 28px card constraints */}
            <div className="relative overflow-hidden rounded-brand-card border border-slate-200/60 bg-white p-2 shadow-brand-luxury">
              <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(22,197,95,0.06),transparent_35%)] z-10 pointer-events-none" />
              
              <div className="relative h-[380px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/images/about.jpg"
                  alt="MB Infra Legacy Showcase"
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Info Plate Overlay - 28px rounded shell */}
            <div className="hidden sm:block absolute -bottom-6 right-6 rounded-brand-card border border-slate-200/60 bg-white/95 px-6 py-5 shadow-brand-luxury backdrop-blur-md z-20">
              <div className="flex items-center gap-2 text-brand-emerald">
                <Sparkles size={13} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                  Since 1997
                </span>
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-brand-heading tracking-tight">
                25+
              </h3>
              <p className="mt-0.5 text-xs font-medium text-brand-secondary">
                Years of Building Excellence
              </p>
            </div>
          </div>

          {/* RIGHT: TEXTUAL INFORMATION AND COPY LAYOUT */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-emerald/20 bg-brand-emerald/10 px-4 py-1.5">
                <Sparkles size={13} className="text-brand-emerald" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-emerald">
                  Our Legacy
                </span>
              </div>
              
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-heading leading-[1.1]">
                Building <br />
                Uttarakhand's <br />
                <span className="text-brand-emerald">Future.</span>
              </h2>
            </div>

            {/* Trust Numeric Array Matrix */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200/60 py-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald tracking-tight">500+</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mt-1">Projects</p>
              </div>
              <div className="border-x border-slate-200/60 px-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald tracking-tight">300Cr+</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mt-1">Value</p>
              </div>
              <div className="pl-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald tracking-tight">98%</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mt-1">Satisfaction</p>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-brand-body font-normal">
              For over two decades, MB Infra has shaped residential communities, premium developments and investment opportunities across Uttarakhand through engineering excellence, transparent practices and uncompromising quality.
            </p>

            {/* Core Modular Grid Layout Blocks - Unified 28px card shells */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-brand-card border border-slate-200/80 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-emerald/40 hover:shadow-brand-luxury transform-gpu"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald transition-transform duration-300 group-hover:scale-105">
                    <CheckCircle2 size={18} className="stroke-[2.5]" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-heading tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-brand-body">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action Trigger Link - 18px interactive radius standard */}
            <div className="pt-2">
              <a
                href="/properties"
                className="button-primary group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-brand-interactive"
              >
                <span>Explore Our Journey</span>
                <ArrowRight size={16} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

        {/* SECTION 2: VERTICAL/HORIZONTAL STRATIFIED TIMELINE */}
        <div className="relative mt-24 sm:mt-28">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-asmani/20 bg-brand-asmani/10 px-4 py-1.5">
              <Sparkles size={13} className="text-brand-navy" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-navy">
                Our Journey
              </span>
            </div>
            
            <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-heading">
              Building Trust, One Milestone at a Time.
            </h3>
          </div>

          {/* Desktop Timeline Trajectory Axis */}
          <div className="absolute left-0 right-0 top-[96px] hidden h-[2px] bg-gradient-to-r from-brand-emerald via-slate-200 to-brand-emerald lg:block" aria-hidden="true" />

          {/* Timeline Cards Grid Loop - Standardized to 28px outer curves */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timelineItems.map((item) => (
              <div
                key={item.year}
                className="relative rounded-brand-card border border-slate-200 bg-white p-6 shadow-brand-luxury transition-all duration-300 ease-out lg:hover:-translate-y-1.5 lg:hover:border-brand-emerald/40 transform-gpu"
              >
                {/* Structural desktop indicator nodes */}
                <div className="absolute -top-3.5 left-8 hidden h-7 w-7 rounded-full border-4 border-white bg-brand-emerald shadow-[0_0_0_6px_rgba(22,197,95,0.1)] lg:block" aria-hidden="true" />

                <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
                  {item.year}
                </p>
                <h4 className="mt-2 text-base sm:text-lg font-bold text-brand-heading tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-brand-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: BOTTOM CALL TO ACTION TRUST CONVERSION BANNER - Deep Navy Dark Layer */}
        <div className="mt-24 overflow-hidden rounded-brand-card bg-brand-navy border border-white/[0.06] shadow-2xl">
          <div className="surface-dark-section flex flex-col items-center justify-between gap-6 px-8 py-8 sm:px-10 sm:py-10 lg:flex-row">
            
            <div className="text-left w-full lg:w-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Building More Than Structures. <br /> Building Trust.
              </h3>
              <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
                Every home, villa, commercial development and investment opportunity reflects our commitment to engineering excellence, transparency and long-term value.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <a
                href="#contact"
                className="button-primary group w-full inline-flex items-center justify-center gap-2 rounded-brand-interactive"
              >
                <span>Talk To Our Team</span>
                <ArrowRight size={16} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}