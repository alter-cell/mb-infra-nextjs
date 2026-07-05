import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const features = [
  {
    title: "Engineering Excellence",
    text: "Every project is executed with precision, premium materials and uncompromising quality standards.",
  },
  {
    title: "Transparent Investment",
    text: "Clear documentation, honest communication and investment opportunities built for long-term value.",
  },
  {
    title: "End-to-End Delivery",
    text: "From planning and approvals to construction and handover, everything is managed under one roof.",
  },
  {
    title: "Trusted Partnerships",
    text: "Hundreds of successful projects have built lasting relationships across Uttarakhand.",
  },
];

const stats = [
  {
    value: "25+",
    label: "Years",
    position:
      "top-8 -left-6 lg:-left-10",
  },
  {
    value: "500+",
    label: "Projects",
    position:
      "bottom-24 -left-8",
  },
  {
    value: "98%",
    label: "Satisfaction",
    position:
      "top-20 -right-6",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_45%,#eef8ff_100%)] py-24"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0D4FD8]/5 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#00C853]/5 blur-[130px]" />

      </div>

      <div className="container-shell relative mx-auto max-w-[1400px]">

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1fr]">

          {/* LEFT */}

          <div className="relative">

            {/* Floating Stats */}

            {stats.map((item) => (

              <div
                key={item.value}
                className={`absolute z-20 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-[0_20px_60px_rgba(13,59,122,.12)] backdrop-blur-xl ${item.position}`}
              >

                <h3 className="text-3xl font-bold text-[#0D3B7A]">

                  {item.value}

                </h3>

                <p className="mt-1 text-sm font-medium text-slate-500">

                  {item.label}

                </p>

              </div>

            ))}

            {/* Image */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white p-3 shadow-[0_40px_120px_rgba(13,59,122,.16)]">

              <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_left,_rgba(0,200,83,.18),transparent_35%)]" />

              <Image
                src="/images/about.jpg"
                alt="MB Infra"
                width={700}
                height={850}
                className="h-[620px] w-full rounded-[28px] object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#081C3A]/75 via-transparent to-transparent" />

            </div>

            {/* Main Glass Card */}

            <div className="absolute -bottom-10 right-8 rounded-[28px] border border-white/70 bg-white/90 px-8 py-7 shadow-[0_25px_70px_rgba(13,59,122,.18)] backdrop-blur-xl">

              <div className="flex items-center gap-2 text-[#00C853]">

                <Sparkles size={15} />

                <span className="text-xs font-semibold uppercase tracking-[0.28em]">

                  Since 1997

                </span>

              </div>

              <h3 className="mt-3 text-5xl font-bold text-slate-900">

                25+

              </h3>

              <p className="mt-2 text-sm text-slate-500">

                Years of Building Excellence

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/20 bg-[#00C853]/10 px-5 py-2">

              <Sparkles
                size={14}
                className="text-[#00C853]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00C853]">

                Our Legacy

              </span>

            </div>

            <h2 className="mt-6 text-[58px] font-bold leading-[0.95] tracking-[-0.04em] text-slate-900">

              Building

              <br />

              Uttarakhand's

              <br />

              <span className="text-[#00C853]">

                Future.

              </span>

            </h2>

            {/* Trust Metrics */}

            <div className="mt-8 flex flex-wrap gap-8">

              <div>

                <h3 className="text-3xl font-bold text-[#0D3B7A]">

                  500+

                </h3>

                <p className="text-sm text-slate-500">

                  Projects

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#0D3B7A]">

                  ₹300Cr+

                </h3>

                <p className="text-sm text-slate-500">

                  Development Value

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#0D3B7A]">

                  98%

                </h3>

                <p className="text-sm text-slate-500">

                  Client Satisfaction

                </p>

              </div>

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              For over two decades, MB Infra has shaped residential communities,
              premium developments and investment opportunities across
              Uttarakhand through engineering excellence, transparent practices
              and uncompromising quality.

            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature.title}
                  className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#00C853]/40 hover:shadow-[0_24px_60px_rgba(13,59,122,.12)]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853] transition group-hover:rotate-6">

                    <CheckCircle2 size={20} />

                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">

                    {feature.title}

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">

                    {feature.text}

                  </p>

                </div>

              ))}

            </div>

            <a
              href="#projects"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,200,83,.35)]"
            >

              Explore Our Journey

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </a>

            

          </div>

        </div>

        {/* Premium Timeline */}

        <div className="relative mt-28">

          <div className="mb-12 text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D4FD8]/10 bg-[#0D4FD8]/5 px-5 py-2">

              <Sparkles
                size={14}
                className="text-[#0D4FD8]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0D4FD8]">

                Our Journey

              </span>

            </div>

            <h3 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-slate-900">

              Building Trust,
              <br />

              One Milestone at a Time.

            </h3>

          </div>

          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-[88px] hidden h-[2px] bg-gradient-to-r from-[#00C853] via-[#0D4FD8]/40 to-[#00C853] lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">

            {[
              {
                year: "1997",
                title: "Company Founded",
                text: "The beginning of MB Infra's journey in Uttarakhand.",
              },
              {
                year: "2010",
                title: "Expansion",
                text: "Expanded into residential and commercial developments.",
              },
              {
                year: "2018",
                title: "Premium Projects",
                text: "Luxury villas and premium investment opportunities.",
              },
              {
                year: "Today",
                title: "Future Vision",
                text: "Building tomorrow with innovation and trust.",
              },
            ].map((item) => (

              <div
                key={item.year}
                className="relative rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#00C853]/40 hover:shadow-[0_35px_80px_rgba(13,59,122,.12)]"
              >

                <div className="absolute -top-4 left-8 hidden h-8 w-8 rounded-full border-4 border-white bg-[#00C853] shadow-[0_0_0_8px_rgba(0,200,83,.12)] lg:block" />

                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00C853]">

                  {item.year}

                </p>

                <h4 className="mt-5 text-xl font-semibold text-slate-900">

                  {item.title}

                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Trust Banner */}

        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#081C3A] via-[#0D4FD8] to-[#081C3A] p-[1px]">

          <div className="rounded-[35px] bg-[linear-gradient(135deg,#07193d,#0b2b68)] px-10 py-12">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>

                <h3 className="text-4xl font-bold leading-tight text-white">

                  Building More Than Structures.

                  <br />

                  Building Trust.

                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">

                  Every home, villa, commercial development and investment
                  opportunity reflects our commitment to engineering excellence,
                  transparency and long-term value.

                </p>

              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,200,83,.35)]"
              >

                Talk To Our Team

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}