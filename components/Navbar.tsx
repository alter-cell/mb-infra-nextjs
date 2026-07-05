"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Properties", href: "/properties" },
    { name: "Investment", href: "/#investment" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full px-3 pt-3 transition-all duration-300 sm:px-4 lg:px-6 ${
          scrolled
            ? "bg-slate-950/55 backdrop-blur-[24px]"
            : "bg-white/10 backdrop-blur-[20px]"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 shadow-[0_14px_40px_rgba(3,13,53,0.16)] backdrop-blur-[24px] sm:px-6 lg:px-7">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/40 shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition duration-300 hover:shadow-[0_0_18px_rgba(0,200,83,0.25)]">
              <Image
                src="/logo/mb-logo.png"
                alt="MB Infra"
                width={32}
                height={32}
                priority
              />
            </div>

            <div>
              <h1 className="text-base font-extrabold tracking-[0.22em] text-white sm:text-lg">
                MB INFRA
              </h1>

              <p className="text-[9px] uppercase tracking-[0.35em] text-cyan-100/80">
                BUILDING TRUST
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.href}>
                  <span className="cursor-pointer text-[14px] font-medium text-white/90 transition duration-300 group-hover:text-[#00C853]">
                    {item.name}
                  </span>
                </Link>

                <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#00C853] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <button className="hidden rounded-full bg-[#00C853] px-4.5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(0,200,83,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00E676] hover:shadow-[0_0_24px_rgba(0,200,83,0.28)] lg:block">
              Schedule Site Visit
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed left-0 top-[84px] z-40 mx-3 w-[calc(100%-24px)] rounded-[24px] border border-white/20 bg-slate-950/80 px-4 py-5 shadow-[0_20px_60px_rgba(2,8,23,0.24)] backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 transition hover:text-emerald-300"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-1 rounded-full bg-[#00C853] px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(0,200,83,0.24)]">
              Schedule Site Visit
            </button>
          </div>
        </div>
      )}
    </>
  );
}