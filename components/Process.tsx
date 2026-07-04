import {
  MessageSquare,
  FileText,
  PenTool,
  Hammer,
  KeyRound,
} from "lucide-react";

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
    <section className="bg-[#0F1115] py-24 text-white">

      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm">
            OUR PROCESS
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Building Made Simple
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            A transparent process from your first consultation to the final handover.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="text-center group"
              >

                <div className="mx-auto w-20 h-20 rounded-full bg-[#171A20] border border-white/5 flex items-center justify-center group-hover:bg-[#C89B3C] transition">

                  <Icon
                    size={34}
                    className="text-[#C89B3C] group-hover:text-black transition"
                  />

                </div>

                <div className="w-8 h-8 rounded-full bg-[#C89B3C] text-black font-bold flex items-center justify-center mx-auto mt-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
