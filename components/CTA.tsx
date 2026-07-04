import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Image */}

      <Image
        src="/images/cta.jpg"
        alt="MB Infra"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Gold Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#C89B3C]/20 via-transparent to-[#C89B3C]/10" />

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center text-white">

        <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm">
          START YOUR JOURNEY
        </p>

        <h2 className="text-5xl lg:text-7xl font-bold leading-tight mt-6">
          Ready To Build
          <br />
          Your Dream Project?
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-9">
          Whether you're planning a luxury villa, investing in premium
          real estate or starting a commercial project, MB Infra is
          ready to bring your vision to life.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <button className="bg-[#C89B3C] text-black px-10 py-5 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C89B3C]/40 flex items-center gap-3">

            Schedule Site Visit

            <ArrowRight size={20} />

          </button>

          <button className="border border-white/30 px-10 py-5 rounded-xl text-lg hover:bg-white hover:text-black transition-all duration-300">

            Call Our Experts

          </button>

        </div>

      </div>

    </section>
  );
}