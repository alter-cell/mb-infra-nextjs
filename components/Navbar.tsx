"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Legacy", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/properties" },
    { name: "Invest", href: "/#investment" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/60 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[60px] sm:h-[64px] lg:h-[72px] max-w-[1440px] items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 shadow-[0_14px_40px_rgba(3,13,53,.18)] backdrop-blur-2xl sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-xl border border-white/20 bg-slate-950/40">

              <Image
                src="/logo/mb-logo.png"
                alt="MB Infra"
                width={26}
                height={26}
                priority
              />

            </div>

            <div>

              <h1 className="text-[14px] sm:text-[15px] lg:text-lg font-extrabold tracking-[0.18em] text-white">

                MB INFRA

              </h1>

              <p className="text-[8px] uppercase tracking-[0.22em] text-cyan-100/80">

                BUILDING TRUST

              </p>

            </div>

          </Link>

          <ul className="hidden items-center gap-8 lg:flex">

            {navItems.map((item) => (

              <li key={item.name} className="group relative">

                <Link href={item.href}>

                  <span className="cursor-pointer text-[15px] font-medium text-white/90 transition duration-300 group-hover:text-[#00C853]">

                    {item.name}

                  </span>

                </Link>

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#00C853] transition-all duration-300 group-hover:w-full" />

              </li>

            ))}

          </ul>

          <div className="flex items-center gap-3">

            <button className="hidden rounded-xl bg-[#00C853] px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00D65A] lg:block">

              Schedule Site Visit

            </button>

            <button
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
            >

              {mobileOpen ? <X size={18} /> : <Menu size={18} />}

            </button>

          </div>

        </div>

      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div className="absolute right-0 top-0 h-screen w-[88%] max-w-[380px] bg-[#081C3A] px-8 py-24 shadow-[0_30px_80px_rgba(0,0,0,.45)]">

          <div className="flex flflex flex-col gap-7 pt-3ex-col gap-8">

        {navItems.map((item) => (
  <Link
    key={item.name}<div className="flex items-center gap-3">
  <span className="h-2 w-2 rounded-full bg-[#00C853]" />
  {item.name}
</div>

    href={item.href}
    onClick={() => setMobileOpen(false)}
    className="border-b border-white/10 pb-5 text-xl foclassName="border-b border-white/10 pb-5 text-[22px] font-semibold tracking-wide text-white transition-all duration-300 hover:translate-x-2 hover:text-[#00C853]" nt-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-[#00C853]"
  >
    {item.name}
  </Link>
))}

<button
  onClick={() => setMobileOpen(false)}
  className="mt-8 w-full rounded-xl bg-[#00C853] px-6 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(0,200,83,.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00D65A]"
>
  Schedule Site Visit
</button>

<p className="mt-12 border-t border-white/10 pt-8 text-sm leading-7 text-slate-400">
  Premium Construction
  <br />
  Luxury Real Estate
  <br />
  Investment Opportunities
</p>

          </div>
        </div>
      </div>
    </>
  );
}