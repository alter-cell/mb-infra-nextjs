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
    <section id="projects" className="bg-[color:var(--section)] section-shell">
      <div className="container-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title mt-3">Discover Your Next Investment</h2>
          <p className="section-copy mt-3">
            Explore premium developments designed for modern living, long-term appreciation and exceptional returns.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--primary)]/20"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--heading)]/70 via-[color:var(--heading)]/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--heading)]">
                  {project.tag}
                </span>
              </div>

              <div className="p-6 sm:p-6">
                <h3 className="text-2xl font-semibold text-[color:var(--heading)]">{project.title}</h3>

                <div className="mt-3 flex items-center gap-2 text-[color:var(--body)]">
                  <MapPin size={16} className="text-[color:var(--primary)]" />
                  <span>{project.location}</span>
                </div>

                <div className="mt-5">
                  {project.price.includes("ROI") ? (
                    <p className="text-2xl font-semibold text-[color:var(--primary)]">{project.price}</p>
                  ) : (
                    <>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--body)]">Starting From</p>
                      <p className="mt-1 text-3xl font-semibold text-[color:var(--primary)]">{project.price}</p>
                    </>
                  )}
                </div>

                <button type="button" className="button-primary mt-6 w-full sm:w-auto">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
