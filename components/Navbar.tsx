"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Building2,
  Briefcase,
  Landmark,
  ArrowRight,
  Phone,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";

// --- Types & Interfaces ---
interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// --- Navigation Data ---
const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Our Legacy", href: "/#about", icon: Building2 },
  { name: "Services", href: "/#services", icon: Briefcase },
  { name: "Projects", href: "/properties", icon: Landmark },
  { name: "Investment", href: "/#investment", icon: ArrowRight },
  { name: "Contact", href: "/#contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // --- Scroll Detection for Sticky Behaviors ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Mobile Drawer Body Lock & Accessibility Focus Management ---
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // --- Keyboard Event: Escape Key Closes Drawer ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeDrawer = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      {/* DESKTOP & MOBILE WRAPPER HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500">
        <div
          className={`mx-auto flex h-[64px] sm:h-[68px] lg:h-[76px] max-w-[1440px] items-center justify-between rounded-full border transition-all duration-500 px-5 sm:px-6 lg:px-8 ${
            scrolled
              ? "border-brand-navy/10 bg-brand-navy/95 shadow-brand-luxury backdrop-blur-xl"
              : "border-white/15 bg-white/10 shadow-brand-luxury backdrop-blur-2xl"
          }`}
          
        >
          {/* Brand Identity Branding Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald rounded-brand-interactive"
            aria-label="MB Infra Homepage"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-xl border border-white/20 bg-brand-navy/40 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo/mb-logo.png"
                alt="MB Infra Logo"
                width={26}
                height={26}
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] sm:text-[15px] lg:text-base font-extrabold tracking-[0.18em] text-white">
                MB INFRA
              </span>
              <span className="text-[8px] uppercase tracking-[0.22em] text-brand-emerald font-bold">
                BUILDING TRUST
              </span>
            </div>
          </Link>

          {/* Desktop Links Menu Items */}
          <nav className="hidden items-center lg:flex" aria-label="Desktop Primary Navigation">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} className="group relative py-2">
                    <Link
                      href={item.href}
                      className={`text-[14px] font-bold uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald rounded ${
                        isActive ? "text-brand-emerald" : "text-white/90 hover:text-brand-emerald"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-brand-emerald transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right Call to Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden h-[44px] inline-flex items-center justify-center rounded-[18px] border-2 border-white/20 bg-transparent px-5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/5 hover:border-white lg:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Call Our Experts
            </Link>

            <Link
              href="/schedule"
              className="hidden h-[44px] inline-flex items-center justify-center rounded-[18px] bg-brand-emerald px-5 text-xs font-bold uppercase tracking-widest text-white shadow-brand-emerald transition-all duration-300 hover:bg-[#12b050] hover:-translate-y-0.5 lg:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
            >
              Schedule Site Visit
            </Link>

            {/* Mobile Menu Action Trigger Toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open primary navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-drawer"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
            >
              <Menu size={20} className="stroke-[2]" />
            </button>
          </div>
        </div>
      </header>

      {/* PREMIUM MOBILE DRAWER NAVIGATION OVERLAY SYSTEM */}
      <div
        id="mobile-menu-drawer"
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Full-screen Blur Layer Backing */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ease-out ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
          aria-hidden="true"
        />

        {/* Slide-In Structural Panel Wrapper Container */}
        <div
          ref={drawerRef}
          tabIndex={-1}
          className={`absolute right-0 top-0 bottom-0 flex h-full w-[85%] max-w-[360px] flex-col bg-brand-navy shadow-[0_30px_80px_rgba(0,0,0,.6)] transition-transform duration-500 ease-out will-change-transform focus:outline-none ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Section Header Identity Container */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Image
                  src="/logo/mb-logo.png"
                  alt="MB Infra Logo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-[0.15em] text-white">
                  MB INFRA
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-brand-emerald font-bold">
                  Building Trust
                </span>
              </div>
            </div>

            {/* Exit Dismiss Trigger Toggle Button */}
            <button
              type="button"
              onClick={closeDrawer}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              aria-label="Close primary navigation menu"
            >
              <X size={18} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Core Structural Drawer Content Scroller Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile Drawer Navigation">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeDrawer}
                      className={`group flex min-h-[52px] w-full items-center justify-between rounded-brand-interactive px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                        isActive
                          ? "bg-brand-emerald/15 text-brand-emerald"
                          : "text-white/90 hover:bg-white/5 hover:text-brand-emerald"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <IconComponent
                          className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                            isActive ? "text-brand-emerald" : "text-white/70 group-hover:text-brand-emerald"
                          }`}
                        />
                        <span className="text-sm font-bold uppercase tracking-wider">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 will-change-transform group-hover:translate-x-0.5 ${
                          isActive ? "text-brand-emerald" : "text-white/40 group-hover:text-brand-emerald"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Intermediate Action CTA Controls Block Layout */}
          <div className="border-t border-white/10 bg-slate-950/20 px-6 py-6 space-y-3">
            <Link
              href="/schedule"
              onClick={closeDrawer}
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[18px] bg-brand-emerald px-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-brand-emerald transition-transform duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
            >
              <Calendar className="h-4 w-4" />
              Schedule Site Visit
            </Link>

            <Link
              href="/#contact"
              onClick={closeDrawer}
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-white/20 bg-white/5 px-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="h-4 w-4 text-white/90" />
              Call Our Experts
            </Link>
          </div>

          {/* Premium Bottom Context Info & Footer Metadata Status Details */}
          <div className="border-t border-white/10 bg-slate-950/40 p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              {/* Regional Office Coordinates */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-emerald">
                  Office
                </span>
                <p className="flex items-center gap-1.5 text-xs font-light text-white/90">
                  <MapPin className="h-3 w-3 text-brand-emerald" />
                  Dehradun, Uttarakhand
                </p>
              </div>

              {/* Status Indicator Consultation Element */}
              <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-emerald opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-emerald"></span>
                </span>
                <span className="text-[10px] font-medium text-white/90 whitespace-nowrap">
                  Available for Consultation
                </span>
              </div>
            </div>

            {/* Micro Tagline Details Subtext */}
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-white/5 pt-4 text-[9px] font-bold uppercase tracking-wider text-white/40">
              <span>Construction</span>
              <span>•</span>
              <span>Real Estate</span>
              <span>•</span>
              <span>Investment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
