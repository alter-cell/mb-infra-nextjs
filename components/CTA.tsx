import Image from "next/image";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24">
      <Image
        src="/images/cta.jpg"
        alt="MB Infra luxury development"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-[#081C3A]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,83,.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(13,79,216,.20),transparent_35%)]" />

      <div className="relative z-10 container-shell">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/10 px-8 py-16 text-center backdrop-blur-xl lg:px-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-[#00C853]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00C853]">
              START YOUR JOURNEY
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Let's Build Something
            <br />
            <span className="text-[#00C853]">Extraordinary.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Whether you're planning a luxury villa, investing in premium real estate
            or developing a commercial project, MB Infra combines engineering,
            transparency and craftsmanship to bring your vision to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(0,200,83,.35)] transition-all duration-300 hover:-translate-y-1"
            >
              Schedule Site Visit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+919557427877"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#081C3A]"
            >
              <Phone className="h-5 w-5" />
              Call Our Experts
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold text-[#00C853]">25+</h3>
              <p className="mt-2 text-slate-300">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#00C853]">500+</h3>
              <p className="mt-2 text-slate-300">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#00C853]">98%</h3>
              <p className="mt-2 text-slate-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
