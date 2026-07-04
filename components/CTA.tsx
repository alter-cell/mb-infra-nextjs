import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image src="/images/cta.jpg" alt="MB Infra project and development setting" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#C89B3C]/20 via-transparent to-[#C89B3C]/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center text-white sm:px-8 sm:py-18 lg:py-20">
        <p className="section-label">Start Your Journey</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
          Ready To Build
          <br />
          Your Dream Project?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
          Whether you&apos;re planning a luxury villa, investing in premium real estate or starting a commercial project, MB Infra is ready to bring your vision to life.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#projects" className="button-primary inline-flex gap-2">
            Schedule Site Visit
            <ArrowRight size={18} />
          </a>
          <a href="tel:+919557427877" className="button-secondary">
            Call Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}