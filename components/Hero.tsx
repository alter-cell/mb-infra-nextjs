import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0F1115] text-white min-h-screen pt-28 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-10 py-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-sm mb-5">
            25+ Years of Building Excellence
          </p>

          <h1 className="text-5xl lg:text-[64px] font-bold leading-[1.05]">
            We Build More
            <br />
            Than Structures.
            <br />
            <span className="text-[#C89B3C]">
              We Build Trust.
            </span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">
            Premium construction, luxury real estate and smart investment
            opportunities crafted with engineering excellence,
            transparency and long-term value.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">

            <button className="bg-[#C89B3C] text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-[#C89B3C]/40 transition-all duration-300">
              Explore Properties
            </button>

            <button className="border border-[#C89B3C] text-[#C89B3C] px-8 py-4 rounded-xl hover:bg-[#C89B3C] hover:text-black hover:scale-105 transition-all duration-300">
              Our Legacy
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">

          <Image
            src="/images/villa.png"
            alt="Luxury Villa"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Floating Property Card */}
          <div className="absolute bottom-8 left-8 bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-7 py-5 shadow-2xl">

            <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs">
              PREMIUM RESIDENCE
            </p>

            <h3 className="text-3xl font-bold mt-2">
              Luxury Villa
            </h3>

            <p className="text-gray-300 mt-1">
              Dehradun, Uttarakhand
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}