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
    <section className="bg-[color:var(--section)] section-shell">
      <div className="container-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
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
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:border-[color:var(--primary)]/20 group-hover:bg-[color:var(--primary)]/10">
                  <Icon size={32} className="text-[color:var(--primary)] transition-all group-hover:text-[color:var(--primary)]" />
                </div>

                <div className="mx-auto mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--primary)] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[color:var(--heading)]">{step.title}</h3>
                <p className="mt-2 leading-7 text-[color:var(--body)]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
