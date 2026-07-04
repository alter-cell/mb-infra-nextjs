export default function Stats() {
  const stats = [
    { number: "25+", title: "Years", subtitle: "Experience" },
    { number: "500+", title: "Projects", subtitle: "Completed" },
    { number: "₹300Cr+", title: "Investment", subtitle: "Value" },
    { number: "98%", title: "Client", subtitle: "Satisfaction" },
  ];

  return (
    <section className="bg-[#111318] section-shell">
      <div className="container-shell">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="section-label">Our Legacy</p>
          <h2 className="section-title mt-3">Our Legacy in Numbers</h2>
          <p className="section-copy mt-3">
            Decades of engineering excellence, premium developments and long-term trust built through consistent results.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.number}
              className="card-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/50"
            >
              <h3 className="text-4xl font-semibold text-[#C89B3C] sm:text-5xl">{item.number}</h3>
              <p className="mt-3 text-2xl font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
