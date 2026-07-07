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
    // 1. Unified Background System: White canvas with bare minimum soft sky-blue ambient gradient
    <section 
      id="services" 
      className="relative overflow-hidden bg-[#FFFFFF] py-[100px] sm:py-[120px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,198,255,0.04),transparent_35%)] pointer-events-none" />

      <div className="container-shell relative z-10 mx-auto max-w-[1400px]">
        
        {/* Section Title Header Layout */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="section-label">OUR EXPERTISE</p>
          <h2 className="section-title mt-2 text-brand-heading">
            Services Built Around Your Vision
          </h2>
          <p className="section-copy mt-4 max-w-2xl mx-auto">
            From concept to completion, MB Infra delivers premium construction, luxury real estate and investment opportunities with engineering excellence.
          </p>
        </div>

        {/* Services Grid Tracking Track */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                // Enforced absolute card structural radius system (28px) and soft luxury shadows
                className="group relative flex flex-col justify-between overflow-hidden rounded-brand-card border border-slate-200/60 bg-[#FFFFFF] p-6 sm:p-7 shadow-brand-luxury transition duration-500 ease-out hover:-translate-y-2 transform-gpu"
              >
                <div>
                  {/* Icon Frame: Configured to strict 18px radius bounds[cite: 1] */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-brand-interactive bg-brand-navy/[0.04] text-brand-navy transition duration-300 group-hover:bg-brand-emerald/10 group-hover:text-brand-emerald">
                    <Icon size={24} className="stroke-[2]" />
                  </div>

                  {/* Core Heading Hierarchy[cite: 1] */}
                  <h3 className="text-xl font-bold text-brand-heading">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-body">{service.description}</p>

                  {/* Specification Bullets Tracker: Highlight numbers/accents safely via Emerald Green[cite: 1] */}
                  <ul className="mt-5 space-y-2.5 text-sm text-brand-body font-medium">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Subdued Premium Action Button Line - Strict color contrast matching[cite: 1] */}
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy transition duration-300 group-hover:text-brand-emerald">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>

                  {/* Under-line accent effect restricted to clean subtle brand gradients[cite: 1] */}
                  <div className="mt-5 h-[2px] w-full rounded-full bg-gradient-to-r from-brand-emerald/0 via-brand-emerald to-brand-emerald/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
