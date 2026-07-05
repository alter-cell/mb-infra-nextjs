import { ArrowRight, Building2, Landmark, PencilRuler, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction",
    description: "Premium residential, commercial and infrastructure projects built with uncompromising quality.",
    bullets: ["Turnkey delivery", "Certified craft", "Long-term durability"],
  },
  {
    icon: Landmark,
    title: "Real Estate",
    description: "Luxury villas, premium plots and investment-ready properties in prime locations.",
    bullets: ["Prime locations", "High-value assets", "Lifestyle-led design"],
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description: "High-growth real estate opportunities designed for long-term wealth creation.",
    bullets: ["Transparent returns", "Strategic positioning", "Stable appreciation"],
  },
  {
    icon: PencilRuler,
    title: "Architecture",
    description: "Modern architecture and intelligent planning that combines beauty with functionality.",
    bullets: ["Concept planning", "Spatial elegance", "Future-ready design"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[linear-gradient(180deg,_#fbfdff_0%,_#f4faff_100%)] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,59,122,0.08),_transparent_28%)]" />

      <div className="container-shell relative mx-auto max-w-[1400px]">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-label">OUR EXPERTISE</p>
          <h2 className="section-title mt-2 text-[30px] sm:text-[36px] lg:text-[42px]">
            Services Built Around Your Vision
          </h2>
          <p className="section-copy mt-3 max-w-2xl">
            From concept to completion, MB Infra delivers premium construction, luxury real estate and investment opportunities with engineering excellence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(14,36,76,0.12)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#0D3B7A]/8 text-[#0D3B7A] transition duration-300 group-hover:rotate-6 group-hover:bg-[#00C853]/15 group-hover:text-[#00C853]">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900 transition duration-300 group-hover:text-[#00C853]">
                  Learn More
                  <ArrowRight size={16} />
                </div>

                <div className="mt-5 h-[2px] w-full rounded-full bg-gradient-to-r from-[#00C853]/0 via-[#00C853]/70 to-[#0D3B7A]/0 opacity-0 transition duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}