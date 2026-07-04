import Hero from "@/app/properties/Hero";
import Filters from "@/app/properties/Filters";
import PropertyGrid from "./PropertyGrid";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-white">

      {/* Hero Section */}
      <Hero />
      <Filters />
      <PropertyGrid />

     {/* Filters */}

<section className="max-w-[1400px] mx-auto px-8 mt-10">

  <div className="bg-[#171A20] border border-white/10 rounded-2xl p-5">

    <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr_1fr_auto]">

      {/* Search */}

      <input
        type="text"
        placeholder="Search property..."
        className="bg-[#0F1115] border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-[#C89B3C]"
      />

      {/* Property Type */}

      <select className="bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#C89B3C]">
        <option>All Types</option>
        <option>Luxury Villa</option>
        <option>Premium Plot</option>
        <option>Farm House</option>
        <option>Commercial</option>
      </select>

      {/* Budget */}

      <select className="bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#C89B3C]">
        <option>Budget</option>
        <option>Under ₹50L</option>
        <option>₹50L - ₹1Cr</option>
        <option>₹1Cr+</option>
      </select>

      {/* Location */}

      <select className="bg-[#0F1115] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#C89B3C]">
        <option>Location</option>
        <option>Dehradun</option>
        <option>Mussoorie</option>
        <option>Rishikesh</option>
        <option>Haridwar</option>
      </select>

      {/* Search Button */}

      <button className="bg-[#C89B3C] text-black font-semibold rounded-xl px-7 py-3 hover:scale-105 transition">
        Search
      </button>

    </div>

  </div>

</section>
      
       
    </main>
  );
}