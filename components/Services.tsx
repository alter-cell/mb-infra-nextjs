import {
  Building2,
  Landmark,
  TrendingUp,
  PencilRuler,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction",
    description:
      "Premium residential, commercial and infrastructure projects built with uncompromising quality.",
  },
  {
    icon: Landmark,
    title: "Real Estate",
    description:
      "Luxury villas, premium plots and investment-ready properties in prime locations.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "High-growth real estate opportunities designed for long-term wealth creation.",
  },
  {
    icon: PencilRuler,
    title: "Architecture",
    description:
      "Modern architecture and intelligent planning that combines beauty with functionality.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0F1115] text-white py-20">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="uppercase tracking-[4px] text-[#C89B3C] text-xs">
            OUR EXPERTISE
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Services We Offer
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base leading-7">
            From concept to completion, MB Infra delivers premium construction,
            luxury real estate and investment opportunities with engineering excellence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-[#171A20] rounded-2xl p-7 border border-white/5 hover:border-[#C89B3C] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(200,155,60,0.12)]"
              >

                <div className="w-14 h-14 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89B3C] transition-all duration-500">

                  <Icon
                    size={26}
                    className="text-[#C89B3C] group-hover:text-black transition-all"
                  />

                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-[15px] leading-7">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}