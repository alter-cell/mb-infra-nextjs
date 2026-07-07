import { MessageSquare, FileText, PenTool, Hammer, KeyRound, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We understand your vision, location, budget and investment goals." },
  { icon: FileText, title: "Planning", desc: "Project feasibility, timelines, costing and documentation are prepared." },
  { icon: PenTool, title: "Design", desc: "Architects and engineers craft spaces that balance beauty and function." },
  { icon: Hammer, title: "Construction", desc: "Premium materials, skilled teams and quality control at every stage." },
  { icon: KeyRound, title: "Handover", desc: "A transparent delivery with final inspection and long-term support." },
];

export default function Process() {
  return (
    // 1. Unified Background System: White canvas with soft sky-blue ambient gradient
    <section 
      id="process" 
      className="relative overflow-hidden bg-[#FFFFFF] py-[100px] sm:py-[120px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,198,255,0.05),transparent_40%)] pointer-events-none" />
      
      <div className="container-shell relative z-10">
        
        {/* Section Header Track */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-emerald/20 bg-brand-emerald/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-emerald" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-emerald">OUR PROCESS</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-heading">
            From Vision to <span className="text-brand-emerald">Reality</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body max-w-2xl mx-auto leading-relaxed">
            A transparent journey designed to keep every client informed from the first meeting to the final handover.
          </p>
        </div>

        {/* Process Steps Track Layout */}
        <div className="relative mt-20">
          {/* Timeline Connector Line using restrained brand elements */}
          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-gradient-to-r from-brand-emerald via-brand-navy/10 to-brand-emerald xl:block" />
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title} 
                  className="group relative rounded-brand-card border border-slate-200/60 bg-white p-6 sm:p-8 text-center shadow-brand-luxury transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand-emerald/40 transform-gpu"
                >
                  {/* Icon Indicator Circle */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald transition-all duration-300 group-hover:bg-brand-emerald group-hover:text-white shadow-sm">
                    <Icon size={26} className="stroke-[2]" />
                  </div>
                  
                  {/* Step Number Circle Token */}
                  <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy font-bold text-xs text-white ring-4 ring-brand-navy/10">
                    {index + 1}
                  </div>
                  
                  <h3 className="mt-4 text-lg font-bold text-brand-heading">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brand-body">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium CTA Invitation Block: Dark Section Deep Navy Surface */}
        <div className="mt-20 overflow-hidden rounded-brand-card bg-brand-navy border border-white/[0.06] shadow-2xl">
          <div className="surface-dark-section flex flex-col items-center justify-between gap-6 px-8 py-8 sm:px-10 sm:py-10 lg:flex-row">
            <div className="text-left w-full lg:w-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Ready to Start Your Project?
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                Let's discuss your vision and build something that lasts for generations.
              </p>
            </div>
            
            {/* Unified Button Component: Emerald Green 18px Radius[cite: 1] */}
            <a 
              href="#contact" 
              className="button-primary group w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-brand-interactive"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
