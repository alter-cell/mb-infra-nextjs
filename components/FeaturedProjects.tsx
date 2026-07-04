import Image from "next/image";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Luxury Villa",
    location: "Dehradun",
    price: "₹1 Cr",
    image: "/images/villa.png",
    tag: "Ready to Move",
  },
  {
    title: "Premium Plots",
    location: "Dehradun",
    price: "₹16 Thousand / sq.ft",
    image: "/images/plots.jpg",
    tag: "Investment",
  },
  {
    title: "Resort Investment",
    location: "Dehradun",
    price: "12% Expected ROI",
    image: "/images/resort.jpg",
    tag: "Limited Units",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0F1115] py-20 text-white">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm">
            FEATURED PROJECTS
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Discover Your Next Investment
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg leading-8">
            Explore premium developments designed for modern living,
            long-term appreciation and exceptional returns.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-[#171A20] border border-white/5 hover:border-[#C89B3C] hover:ring-1 hover:ring-[#C89B3C]/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(200,155,60,0.18)]"
            >

              {/* Image */}

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute top-5 left-5 bg-[#C89B3C] text-black text-xs font-semibold px-4 py-2 rounded-full">
                  {project.tag}
                </span>

              </div>

              {/* Content */}

              <div className="p-5">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-gray-400">

                  <MapPin size={16} />

                  <span>{project.location}</span>

                </div>

                {/* Price */}

                <div className="mt-6">

                  {project.price.includes("ROI") ? (
                    <p className="text-2xl font-bold text-[#C89B3C]">
                      {project.price}
                    </p>
                  ) : (
                    <>
                      <p className="text-xs uppercase tracking-[3px] text-gray-500">
                        Starting From
                      </p>

                      <p className="text-3xl font-bold text-[#C89B3C] mt-1">
                        {project.price}
                      </p>
                    </>
                  )}

                </div>

                <button className="mt-8 bg-[#C89B3C] text-black px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,155,60,0.45)]">
                    View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
