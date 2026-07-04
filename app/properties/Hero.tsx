import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] text-white pt-20 pb-10">

      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/villa.png"
          alt="Luxury Property"
          fill
          priority
          className="object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-black/85" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.12),_transparent_45%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[3px] text-[#C89B3C] text-xs mb-2">
            Premium Properties
          </p>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Find Your Perfect
            <br />
            Property in
            <span className="text-[#C89B3C]"> Uttarakhand.</span>
          </h1>

          <p className="mt-4 text-base text-gray-300 leading-7 max-w-xl">
            Browse luxury villas, premium plots, commercial spaces and
            investment opportunities across Uttarakhand.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            <Link
              href="#properties"
              className="inline-flex items-center justify-center rounded-lg bg-[#C89B3C] px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105"
            >
              Browse
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C89B3C] px-4 py-2 text-sm font-medium text-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C] hover:text-black"
            >
              Visit
              <ArrowRight size={14} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
