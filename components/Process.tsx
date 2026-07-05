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
    <section id="process" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_45%,#eef8ff_100%)] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,79,216,.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,200,83,.08),transparent_30%)]"/>
      <div className="container-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/20 bg-[#00C853]/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-[#00C853]"/>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00C853]">OUR PROCESS</span>
          </div>
          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">From Vision to <span className="text-[#00C853]">Reality</span></h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">A transparent journey designed to keep every client informed from the first meeting to the final handover.</p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-gradient-to-r from-[#00C853] via-[#0D3B7A]/30 to-[#00C853] xl:block"/>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step,index)=>{
              const Icon=step.icon;
              return (
                <div key={step.title} className="group relative rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-500 hover:-translate-y-3 hover:border-[#00C853]/40 hover:shadow-[0_30px_80px_rgba(13,59,122,.12)]">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#00C853] group-hover:text-white">
                    <Icon size={34}/>
                  </div>
                  <div className="mx-auto mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D3B7A] font-bold text-white ring-8 ring-[#0D3B7A]/10">{index+1}</div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#081C3A] via-[#0D3B7A] to-[#081C3A] p-[1px]">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[31px] bg-[#081C3A] px-10 py-10 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold text-white">Ready to Start Your Project?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">Let's discuss your vision and build something that lasts for generations.</p>
            </div>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(0,200,83,.35)] transition-all hover:-translate-y-1">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
