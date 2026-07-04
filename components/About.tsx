import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "25+ Years of Engineering Excellence",
  "Premium Construction & Real Estate",
  "Transparent Investment Opportunities",
  "End-to-End Project Delivery",
];

export default function About() {
  return (
    <section className="bg-[#111318] text-white py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="relative">

            <div className="relative h-[560px] rounded-3xl overflow-hidden">

              <Image
                src="/images/about.jpg"
                alt="MB Infra"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 bg-[#171A20] border border-[#C89B3C]/20 rounded-3xl px-8 py-7 shadow-2xl">

              <p className="text-[#C89B3C] text-5xl font-bold">
                25+
              </p>

              <p className="text-gray-300 mt-2">
                Years of Building Excellence
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm">
              ABOUT MB INFRA
            </p>

            <h2 className="text-5xl font-bold leading-tight mt-5">
              Building Uttarakhand's Future,
              <br />
              One Landmark at a Time.
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-8">
              MB Infra has spent decades delivering premium construction,
              luxury real estate developments and investment opportunities
              built on trust, engineering excellence and long-term value.
            </p>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              From dream homes to investment-ready developments,
              every project reflects our commitment to quality,
              transparency and customer satisfaction.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#C89B3C] mt-1 shrink-0"
                  />

                  <span className="text-gray-300">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <button className="mt-10 bg-[#C89B3C] text-black px-7 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">

              Learn More

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
