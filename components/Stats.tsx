import { Sparkles, ArrowRight } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "25+", title: "Years", subtitle: "Industry Experience" },
    { number: "500+", title: "Projects", subtitle: "Successfully Delivered" },
    { number: "₹300Cr+", title: "Investment", subtitle: "Development Value" },
    { number: "98%", title: "Client", subtitle: "Satisfaction Rate" },
  ];

  return (
    // 1. Unified Background System: Pure white surface with barely visible soft sky-blue lighting
    <section 
      id="stats" 
      className="relative overflow-hidden bg-[#FFFFFF] py-[100px] sm:py-[120px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(110,198,255,0.04),transparent_40%)] pointer-events-none" />
      
      <div className="container-shell relative z-10">
        
        {/* Section Header Layout */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-emerald/20 bg-brand-emerald/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-emerald" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-emerald">OUR IMPACT</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-heading">
            Building <span className="text-brand-emerald">Trust</span> Through Results
          </h2>
          <p className="mx-auto mt-4 text-sm sm:text-base leading-relaxed text-brand-body max-w-2xl">
            Every milestone reflects years of engineering excellence, premium developments and long-term relationships.
          </p>
        </div>

        {/* Statistics Grid: Numbers instantly capture attention */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div 
              key={item.number} 
              className="group rounded-brand-card border border-slate-200/60 bg-white p-6 sm:p-8 text-center shadow-brand-luxury transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand-emerald/40 transform-gpu"
            >
              {/* Green highlights numbers strictly */}
              <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-emerald tracking-tight transition-colors duration-300">
                {item.number}
              </h3>
              <h4 className="mt-3 text-lg font-bold text-brand-heading">
                {item.title}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-brand-secondary font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Premium CTA Invitation Box: Enforcing Dark Section Contrast rules */}
        <div className="mt-20 overflow-hidden rounded-brand-card bg-brand-navy border border-white/[0.06] shadow-2xl">
          <div className="surface-dark-section flex flex-col items-center justify-between gap-6 px-8 py-8 sm:px-10 sm:py-10 lg:flex-row">
            <div className="text-left w-full lg:w-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Ready to Build Something Exceptional?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Let's discuss your next project.
              </p>
            </div>
            
            {/* Emerald Green Primary Button Style - 18px Radius */}
            <a 
              href="#contact" 
              className="button-primary group w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-brand-interactive"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
