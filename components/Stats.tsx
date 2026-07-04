export default function Stats() {
  const stats = [
    {
      number: "25+",
      title: "Years",
      subtitle: "Experience",
    },
    {
      number: "500+",
      title: "Projects",
      subtitle: "Completed",
    },
    {
      number: "₹300Cr+",
      title: "Investment",
      subtitle: "Value",
    },
    {
      number: "98%",
      title: "Client",
      subtitle: "Satisfaction",
    },
  ];

  return (
    <section className="bg-[#111318] py-14">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="uppercase tracking-[4px] text-[#C89B3C] text-xs">
            OUR LEGACY
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
  Our Legacy in Numbers
</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Decades of engineering excellence, premium developments and
            long-term trust built through consistent results.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item) => (
            <div
              key={item.number}
              className="bg-[#171A20] rounded-2xl border border-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_0_35px_rgba(200,155,60,0.15)]"
            >
              <h2 className="text-5xl font-bold text-[#C89B3C]">
                {item.number}
              </h2>

              <p className="text-white text-2xl mt-4 font-semibold">
                {item.title}
              </p>

              <p className="text-gray-400 mt-1 text-sm">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
