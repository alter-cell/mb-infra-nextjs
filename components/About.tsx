import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "25+ Years of Engineering Excellence",
  "Premium Construction & Real Estate",
  "Transparent Investment Opportunities",
  "End-to-End Project Delivery",
];

export default function About() {
  return (
    <section id="about" className="bg-[color:var(--section)] section-shell">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative h-[460px] overflow-hidden rounded-[32px] border border-[color:var(--border)] shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:h-[520px] lg:h-[560px]">
              <Image src="/images/about.jpg" alt="MB Infra team and project execution" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--heading)]/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:-bottom-8 sm:-right-8 sm:px-8 sm:py-7">
              <p className="text-4xl font-semibold text-[color:var(--accent)] sm:text-5xl">25+</p>
              <p className="mt-2 text-sm text-[color:var(--body)] sm:text-base">Years of Building Excellence</p>
            </div>
          </div>

          <div>
            <p className="section-label">About MB Infra</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[color:var(--heading)] sm:text-4xl lg:text-5xl">
              Building Uttarakhand&apos;s Future,
              <br />
              One Landmark at a Time.
            </h2>

            <p className="section-copy mt-6">
              MB Infra has spent decades delivering premium construction, luxury real estate developments and investment opportunities built on trust, engineering excellence and long-term value.
            </p>

            <p className="section-copy mt-4">
              From dream homes to investment-ready developments, every project reflects our commitment to quality, transparency and customer satisfaction.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/80 p-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-[color:var(--secondary)]" />
                  <span className="text-[color:var(--body)]">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#projects" className="button-primary mt-8 inline-flex gap-2">
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
