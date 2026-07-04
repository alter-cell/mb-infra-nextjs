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
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-[color:var(--border)] bg-[color:var(--surface)]/90 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12 lg:py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <Image
                src="/logo/mb-logo.png"
                alt="MB Infra"
                width={34}
                height={34}
                priority
              />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-[0.22em] text-[color:var(--heading)] sm:text-2xl">
                MB INFRA
              </h1>

              <p className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--accent)]">
                BUILDING TRUST
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.href}>
                  <span className="cursor-pointer text-[15px] font-medium text-[color:var(--heading)] transition duration-300 group-hover:text-[color:var(--primary)]">
                    {item.name}
                  </span>
                </Link>

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[color:var(--primary)] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--primary-hover)] lg:block">
              Schedule Site Visit
            </button>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--heading)] shadow-[0_10px_30px_rgba(15,23,42,0.08)] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed left-0 top-[74px] z-40 w-full border-b border-[color:var(--border)] bg-[color:var(--surface)]/95 backdrop-blur-2xl shadow-[0_18px_55px_rgba(15,23,42,0.10)] lg:hidden">
          <div className="flex flex-col gap-5 p-6 text-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[color:var(--heading)] transition hover:text-[color:var(--primary)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-2 rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)]">
              Schedule Site Visit
            </button>
          </div>
        </div>
      )}
    </>
  );
}