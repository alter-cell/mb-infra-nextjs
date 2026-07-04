import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Luxury Villa Owner",
    initials: "AS",
    review: "MB Infra delivered exactly what they promised. The entire process was transparent, professional and stress-free. The quality exceeded our expectations.",
  },
  {
    name: "Neha Verma",
    role: "Real Estate Investor",
    initials: "NV",
    review: "Investing with MB Infra has been one of our best financial decisions. Their communication, planning and execution were exceptional.",
  },
  {
    name: "Rahul Mehta",
    role: "Commercial Client",
    initials: "RM",
    review: "Outstanding workmanship and attention to detail. Every milestone was completed on time, and the team kept us informed throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#111318] text-white section-shell">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title mt-3">Trusted By Families & Investors</h2>
          <p className="section-copy mt-3">
            Every successful project begins with trust. Here&apos;s what our clients say about working with MB Infra.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-[#C89B3C]">4.9★</h3>
            <p className="mt-2 text-gray-400">Average Rating</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-[#C89B3C]">500+</h3>
            <p className="mt-2 text-gray-400">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-[#C89B3C]">98%</h3>
            <p className="mt-2 text-gray-400">Client Satisfaction</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="group card-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#C89B3C]/50">
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="#C89B3C" className="text-[#C89B3C]" />
                ))}
              </div>

              <p className="text-lg leading-8 text-gray-300">“{item.review}”</p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B3C] text-lg font-bold text-black">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
