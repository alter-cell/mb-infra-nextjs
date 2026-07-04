import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Luxury Villa Owner",
    initials: "AS",
    review:
      "MB Infra delivered exactly what they promised. The entire process was transparent, professional and stress-free. The quality exceeded our expectations.",
  },
  {
    name: "Neha Verma",
    role: "Real Estate Investor",
    initials: "NV",
    review:
      "Investing with MB Infra has been one of our best financial decisions. Their communication, planning and execution were exceptional.",
  },
  {
    name: "Rahul Mehta",
    role: "Commercial Client",
    initials: "RM",
    review:
      "Outstanding workmanship and attention to detail. Every milestone was completed on time, and the team kept us informed throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#111318] text-white py-24">

      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Trusted By Families & Investors
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg leading-8">
            Every successful project begins with trust. Here's what our
            clients say about working with MB Infra.
          </p>

        </div>

        {/* Top Stats */}

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-14">

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#C89B3C]">4.9★</h3>
            <p className="text-gray-400 mt-2">Average Rating</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#C89B3C]">500+</h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#C89B3C]">98%</h3>
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>

        </div>

        {/* Testimonial Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group bg-[#171A20] border border-white/5 rounded-3xl p-8 hover:border-[#C89B3C] hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(200,155,60,0.15)]"
            >

              {/* Stars */}

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="#C89B3C"
                    className="text-[#C89B3C]"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="text-gray-300 leading-8 text-lg">
                "{item.review}"
              </p>

              {/* Client */}

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-[#C89B3C] flex items-center justify-center text-black font-bold text-lg">

                  {item.initials}

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
