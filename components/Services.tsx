import { Building2, Landmark, TrendingUp, PencilRuler } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction",
    description: "Premium residential, commercial and infrastructure projects built with uncompromising quality.",
  },
  {
    icon: Landmark,
    title: "Real Estate",
    description: "Luxury villas, premium plots and investment-ready properties in prime locations.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description: "High-growth real estate opportunities designed for long-term wealth creation.",
  },
  {
    icon: PencilRuler,
    title: "Architecture",
    description: "Modern architecture and intelligent planning that combines beauty with functionality.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0F1115] text-white section-shell">
      <div className="container-shell">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="section-label">Our Expertise</p>
          <h2 className="section-title mt-2">Services We Offer</h2>
          <p className="section-copy mt-3">
            From concept to completion, MB Infra delivers premium construction, luxury real estate and investment opportunities with engineering excellence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group card-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C89B3C]/50"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-[18px] bg-[#C89B3C]/10 transition-all duration-500 group-hover:bg-[#C89B3C]">
                  <Icon size={26} className="text-[#C89B3C] transition-all group-hover:text-black" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-[15px] leading-7 text-gray-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}