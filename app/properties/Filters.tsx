export default function Filters() {
  const categories = [
    "All",
    "Luxury Villas",
    "Premium Plots",
    "Farm Houses",
    "Commercial",
    "Investment",
  ];

  return (
    <section
      id="properties"
      className="bg-[#0F1115] py-8"
    >
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="flex flex-wrap justify-center gap-3">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-[#C89B3C] text-black"
                  : "bg-[#171A20] text-white border border-white/10 hover:border-[#C89B3C] hover:text-[#C89B3C]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
