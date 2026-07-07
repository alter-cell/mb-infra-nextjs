import { Star, Quote, Sparkles, ArrowRight } from "lucide-react";

const testimonials = [
  { name: "Amit Sharma", role: "Luxury Villa Owner", initials: "AS", review: "MB Infra delivered exactly what they promised. The process was transparent, professional and stress-free." },
  { name: "Neha Verma", role: "Real Estate Investor", initials: "NV", review: "Investing with MB Infra has been one of our best financial decisions." },
  { name: "Rahul Mehta", role: "Commercial Client", initials: "RM", review: "Outstanding workmanship and attention to detail with on-time delivery." },
];

const stats = [
  { value: "4.9★", label: "Average Rating" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Testimonials() {
  return (
    // 1. Unified Background System: White canvas with bare minimum soft sky-blue ambient gradient
    <section 
      id="testimonials" 
      className="relative overflow-hidden bg-[#FFFFFF] py-[100px] sm:py-[120px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,198,255,0.04),transparent_35%)] pointer-events-none" />
      
      <div className="container-shell relative z-10">
        
        {/* Section Header Layout */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-emerald/20 bg-brand-emerald/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-emerald" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-emerald uppercase">TESTIMONIALS</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-heading">
            Trusted By <span className="text-brand-emerald">Families & Investors</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body max-w-2xl mx-auto leading-relaxed">
            Every successful project begins with trust and ends with delighted clients.
          </p>
        </div>

        {/* Highlight Stats Micro Track System */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div 
              key={s.label} 
              className="rounded-brand-card border border-slate-200/60 bg-white p-6 sm:p-8 text-center shadow-brand-luxury"
            >
              {/* Green highlights numbers strictly */}
              <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-emerald tracking-tight">{s.value}</h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-secondary font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Cards Family Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article 
              key={t.name} 
              className="group flex flex-col justify-between rounded-brand-card bg-[#FFFFFF] border border-slate-200/60 p-6 sm:p-8 shadow-brand-luxury transition-all duration-500 ease-out hover:-translate-y-2 transform-gpu"
            >
              <div>
                <Quote className="mb-5 h-8 w-8 text-brand-emerald/10" />
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#16C55F" className="text-brand-emerald" />
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-brand-body font-normal">
                  “{t.review}”
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-4">
                {/* Standardized Initials Icon Frame */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy font-bold text-sm text-white shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-heading">{t.name}</h4>
                  <p className="text-xs text-brand-secondary font-medium">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Unified Button Layout Component Pass */}
        <div className="mt-16 flex justify-center">
          <a 
            href="#contact" 
            className="button-primary inline-flex items-center justify-center gap-2 rounded-brand-interactive"
          >
            <span>Become Our Next Success Story</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
