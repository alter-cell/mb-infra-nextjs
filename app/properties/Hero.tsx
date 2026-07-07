'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Signature Villas", value: "12+", icon: Sparkles },
    { label: "Client Satisfaction", value: "4.9/5", icon: ShieldCheck },
    { label: "Long-Term Value", value: "25Y+", icon: TrendingUp },
  ];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/5 bg-gradient-to-b from-brand-navy via-[#041230] to-brand-navy text-white"
    >
      {/* BACKGROUND ENVIRONMENT SYSTEM: Atmospheric Asmani Glow and Radial Textures */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Radial Background Tones */}
        <div className="absolute left-[-8%] top-[-10%] h-96 w-96 rounded-full bg-brand-asmani/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-6%] h-[450px] w-[450px] rounded-full bg-brand-asmani/5 blur-[140px]" />
        
        {/* Architectural Linear Meshes */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />
        
        {/* Restrained Motion Accents */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute left-8 top-20 h-44 w-44 rounded-full border border-white/[0.04] opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute right-0 top-0 h-[280px] w-[460px] rounded-full border border-brand-asmani/[0.04] opacity-40"
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] items-center gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-16">
        
        {/* LEFT COLUMN: HERO TYPOGRAPHY & CTA LAYOUT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[560px]"
        >
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-6 inline-flex items-center gap-2 rounded-brand-badge border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-brand-emerald" />
            Luxury Real Estate • Crafted to Last
          </motion.div>

          {/* Master Heading */}
          <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[58px]">
            We Build More
            <br />
            Than Structures.
            <br />
            <span className="text-brand-emerald">We Build Trust.</span>
          </h1>

          {/* Body Text Contrast */}
          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300/90 font-normal">
            Premium construction, luxury real estate and smart investment opportunities crafted with engineering excellence, transparency and long-term value.
          </p>

          {/* Interactive Button Group Elements */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="flex">
              <Link
                href="/properties"
                className="button-primary relative inline-flex items-center gap-2"
              >
                <span>Explore Properties</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="flex">
              <a
                href="#about"
                className="button-secondary inline-flex items-center justify-center border-2 border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.12] hover:border-white/30"
              >
                Our Legacy
              </a>
            </motion.div>
          </div>

          {/* Micro Stat Badges Track */}
          <div className="mt-10 flex flex-wrap gap-3">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.16 + index * 0.06 }}
                  className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 shadow-brand-luxury backdrop-blur-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-white tracking-tight">{item.value}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: VISUAL RESIDENCE SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="group relative mx-auto w-full max-w-[600px] mt-8 lg:mt-0"
        >
          {/* Floating Context Token A */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -left-3 top-7 z-10 hidden rounded-xl border border-white/10 bg-brand-navy/80 px-4 py-3 shadow-brand-luxury backdrop-blur-md md:block"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald">Signature Grand</p>
            <p className="mt-0.5 text-lg font-extrabold text-white tracking-tight">12+ Villas</p>
          </motion.div>

          {/* Floating Context Token B */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="absolute -right-3 bottom-7 z-10 hidden rounded-xl border border-white/10 bg-brand-navy/80 px-4 py-3 shadow-brand-luxury backdrop-blur-md md:block"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-brand-asmani">Trusted By</p>
            <p className="mt-0.5 text-lg font-extrabold text-white tracking-tight">4.9/5 Rated</p>
          </motion.div>

          {/* Core Architecture Lookbook Frame */}
          <div
            className="relative h-[400px] overflow-hidden rounded-brand-card border border-white/10 bg-white/[0.02] p-1.5 shadow-brand-luxury backdrop-blur-xl sm:h-[460px] lg:h-[510px]"
          >
            <div className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src="/images/villa.png"
                alt="Luxury villa exterior at an MB Infra development"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-103 mix-blend-normal"
              />

              {/* Dark Linear Mask overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />

              {/* Integrated Inside Context Panel Box */}
              <div className="absolute bottom-4 left-4 right-4 rounded-brand-interactive border border-white/10 bg-brand-navy/60 p-4 shadow-brand-luxury backdrop-blur-md sm:p-5">
                <p className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald">
                  Premium Residence
                </p>
                <h3 className="mt-1 text-lg font-extrabold text-white sm:text-xl">Luxury Villa</h3>
                <p className="mt-0.5 text-xs text-slate-300">Dehradun, Uttarakhand</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
