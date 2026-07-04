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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/mb-logo.png"
              alt="MB Infra"
              width={48}
              height={48}
              priority
            />

            <div>
              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                MB INFRA
              </h1>

              <p className="text-[10px] uppercase tracking-[3px] text-[#C89B3C]">
                BUILDING TRUST
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <ul className="hidden lg:flex items-center gap-10 text-white">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link href={item.href}>
                  <span className="cursor-pointer transition duration-300 group-hover:text-[#C89B3C] group-hover:drop-shadow-[0_0_8px_rgba(200,155,60,0.7)]">
                    {item.name}
                  </span>
                </Link>

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-[#C89B3C]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <button
              className="
                hidden
                lg:block
                bg-[#C89B3C]
                text-black
                px-6
                py-3
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(200,155,60,.45)]
              "
            >
              Schedule Site Visit
            </button>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed top-[82px] left-0 w-full bg-black/95 backdrop-blur-xl z-40 lg:hidden">

          <div className="flex flex-col p-8 gap-6 text-white text-lg">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#C89B3C] transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button
              className="
                mt-4
                bg-[#C89B3C]
                text-black
                py-4
                rounded-xl
                font-semibold
              "
            >
              Schedule Site Visit
            </button>

          </div>
        </div>
      )}
    </>
  );
}