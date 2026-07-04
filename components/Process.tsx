import { MessageSquare, FileText, PenTool, Hammer, KeyRound } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "Understand your vision, budget and investment goals.",
  },
  {
    icon: FileText,
    title: "Planning",
    desc: "Prepare project strategy, estimates and documentation.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Create premium architectural and engineering plans.",
  },
  {
    icon: Hammer,
    title: "Construction",
    desc: "Build with quality materials and experienced professionals.",
  },
  {
    icon: KeyRound,
    title: "Handover",
    desc: "Deliver your completed project with complete transparency.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#0F1115] text-white section-shell">
      <div className="container-shell">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="section-label">Our Process</p>
          <h2 className="section-title mt-3">Building Made Simple</h2>
          <p className="section-copy mt-3">
            A transparent process from your first consultation to the final handover.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="group text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#171A20] transition-all duration-300 group-hover:bg-[#C89B3C]">
                  <Icon size={32} className="text-[#C89B3C] transition-all group-hover:text-black" />
                </div>

                <div className="mx-auto mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#C89B3C] text-sm font-bold text-black">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 leading-7 text-gray-400">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
