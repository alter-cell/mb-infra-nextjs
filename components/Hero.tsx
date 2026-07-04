import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[color:var(--background)] text-[color:var(--heading)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.10),_transparent_42%)]" />

      <div className="container-shell relative grid items-center gap-10 py-16 pt-24 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="section-label mb-4">25+ Years of Building Excellence</p>

          <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[color:var(--heading)] sm:text-5xl lg:text-[64px]">
            We Build More
            <br />
            Than Structures.
            <br />
            <span className="text-[color:var(--accent)]">We Build Trust.</span>
          </h1>

          <p className="section-copy mt-6 max-w-xl">
            Premium construction, luxury real estate and smart investment opportunities crafted with engineering excellence, transparency and long-term value.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:gap-5">
            <Link href="/properties" className="button-primary">
              Explore Properties
            </Link>
            <a href="#about" className="button-secondary">
              Our Legacy
            </a>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-[620px]">
          <div className="relative h-[430px] overflow-hidden rounded-[32px] border border-[color:var(--border)] shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:h-[500px] lg:h-[560px]">
            <Image
              src="/images/villa.png"
              alt="Luxury villa exterior at an MB Infra development"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--heading)]/75 via-[color:var(--heading)]/10 to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)]/90 px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:bottom-8 sm:left-8 sm:px-7 sm:py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Premium Residence
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[color:var(--heading)] sm:text-3xl">Luxury Villa</h3>
              <p className="mt-1 text-sm text-[color:var(--body)] sm:text-base">Dehradun, Uttarakhand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}