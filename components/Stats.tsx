import { Sparkles, ArrowRight } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "25+", title: "Years", subtitle: "Industry Experience" },
    { number: "500+", title: "Projects", subtitle: "Successfully Delivered" },
    { number: "₹300Cr+", title: "Investment", subtitle: "Development Value" },
    { number: "98%", title: "Client", subtitle: "Satisfaction Rate" },
  ];

  return (
    <section id="stats" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_45%,#eef8ff_100%)] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,79,216,.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,200,83,.08),transparent_30%)]"/>
      <div className="container-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/20 bg-[#00C853]/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-[#00C853]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00C853]">OUR IMPACT</span>
          </div>
          <h2 className="mt-6 text-5xl font-bold text-slate-900">Building <span className="text-[#00C853]">Trust</span> Through Results</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Every milestone reflects years of engineering excellence, premium developments and long-term relationships.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item)=>(
            <div key={item.number} className="group rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-[0_25px_70px_rgba(15,23,42,.06)] transition-all duration-500 hover:-translate-y-3 hover:border-[#00C853]/40">
              <h3 className="text-5xl font-bold text-[#0D3B7A] group-hover:text-[#00C853]">{item.number}</h3>
              <h4 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-slate-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#081C3A] via-[#0D3B7A] to-[#081C3A] p-[1px]">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[31px] bg-[#081C3A] px-10 py-10 lg:flex-row">
            <div><h3 className="text-3xl font-bold text-white">Ready to Build Something Exceptional?</h3><p className="mt-3 text-slate-300">Let's discuss your next project.</p></div>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white">Get Started<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
