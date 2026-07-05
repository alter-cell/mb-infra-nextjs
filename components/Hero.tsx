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
      className="relative isolate overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,_#07153f_0%,_#0d3b7a_42%,_#43a7ff_100%)] text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-6%] h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:140px_140px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute left-8 top-20 h-44 w-44 rounded-full border border-white/15 opacity-70"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute right-0 top-0 h-[280px] w-[460px] rounded-full border border-cyan-200/15 opacity-60"
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[560px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-100 backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-emerald-300" />
            Luxury Real Estate • Crafted to Last
          </motion.div>

          <h1 className="text-[44px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[58px]">
            We Build More
            <br />
            Than Structures.
            <br />
            <span className="text-[#00C853] transition duration-300 hover:drop-shadow-[0_0_18px_rgba(0,200,83,0.45)]">We Build Trust.</span>
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-7 text-slate-200/90 sm:text-[18px]">
            Premium construction, luxury real estate and smart investment opportunities crafted with engineering excellence, transparency and long-term value.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/properties"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#00C853] px-5 py-2.75 text-[15px] font-semibold text-slate-950 shadow-[0_10px_30px_rgba(0,200,83,0.28)] transition duration-300 hover:bg-[#00E676] hover:shadow-[0_0_24px_rgba(0,200,83,0.35)]"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)]" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Properties
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.75 text-[15px] font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
              >
                Our Legacy
              </a>
            </motion.div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.16 + index * 0.06 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-3.5 py-2.5 shadow-[0_10px_30px_rgba(2,8,23,0.16)] backdrop-blur-2xl"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00C853]/20 text-[#00C853]">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{item.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-200/80">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="group relative mx-auto w-full max-w-[600px]"
        >
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -left-3 top-7 z-10 hidden rounded-2xl border border-white/15 bg-slate-950/45 px-3.5 py-2.5 shadow-[0_16px_45px_rgba(2,8,23,0.2)] backdrop-blur-xl md:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300">Signature Grand</p>
            <p className="mt-1 text-xl font-semibold text-white">12+ Villas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="absolute -right-3 bottom-7 z-10 hidden rounded-2xl border border-white/15 bg-white/10 px-3.5 py-2.5 shadow-[0_16px_45px_rgba(2,8,23,0.2)] backdrop-blur-xl md:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-100">Trusted By</p>
            <p className="mt-1 text-xl font-semibold text-white">4.9/5 Rated</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01, y: -4, rotate: -0.3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative h-[400px] overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-1.5 shadow-[0_28px_90px_rgba(3,13,53,0.36)] backdrop-blur-xl sm:h-[440px] lg:h-[500px]"
          >
            <div className="relative h-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/villa.png"
                alt="Luxury villa exterior at an MB Infra development"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 saturate-[1.05] brightness-[1.08]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,21,63,0.04)_0%,_rgba(7,21,63,0.35)_55%,_rgba(7,21,63,0.76)_100%)]" />

              <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/20 bg-white/15 p-4 shadow-[0_18px_55px_rgba(3,13,53,0.25)] backdrop-blur-xl sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
                  Premium Residence
                </p>
                <h3 className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">Luxury Villa</h3>
                <p className="mt-1 text-sm text-slate-200/90">Dehradun, Uttarakhand</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}