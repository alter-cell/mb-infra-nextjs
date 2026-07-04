import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[color:var(--border)] bg-[color:var(--heading)] text-white">
      <div className="container-shell py-16">
        <div className="grid gap-14 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo/mb-logo.png" alt="MB Infra" width={52} height={52} />
              <div>
                <h3 className="text-2xl font-semibold">MB INFRA</h3>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--accent)]">Building Trust</p>
              </div>
            </div>

            <p className="mt-8 leading-8 text-slate-300">
              Premium construction, luxury real estate and smart investment opportunities across Uttarakhand.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a href="#home" className="transition hover:text-[color:var(--accent)]">Home</a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-[color:var(--accent)]">About</a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-[color:var(--accent)]">Services</a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-[color:var(--accent)]">Projects</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-[color:var(--accent)]">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Contact</h4>
            <div className="space-y-6 text-slate-300">
              <div className="flex gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-[color:var(--accent)]" />
                <span>
                  Dehradun,
                  <br />
                  Uttarakhand
                </span>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="shrink-0 text-[color:var(--accent)]" />
                <span>+91 9557427877</span>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="shrink-0 text-[color:var(--accent)]" />
                <span>mbinfraa426@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Stay Updated</h4>
            <p className="mb-6 leading-7 text-slate-300">
              Get the latest property launches, investment opportunities and construction insights.
            </p>

            <form className="flex">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-full border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none ring-0 placeholder:text-slate-400"
              />
              <button type="submit" className="rounded-r-full bg-[color:var(--accent)] px-5 transition hover:bg-[color:var(--accent)]/90" aria-label="Subscribe for updates">
                <ArrowRight className="text-[color:var(--heading)]" />
              </button>
            </form>

            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-[color:var(--accent)] hover:text-[color:var(--heading)]">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-[color:var(--accent)] hover:text-[color:var(--heading)]">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-[color:var(--accent)] hover:text-[color:var(--heading)]">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-400 lg:flex-row">
          <p>© 2026 MB Infra Pvt. Ltd. All Rights Reserved.</p>

          <div className="mt-4 flex flex-wrap gap-6 lg:mt-0">
            <a href="#" className="transition hover:text-[color:var(--accent)]">Privacy Policy</a>
            <a href="#" className="transition hover:text-[color:var(--accent)]">Terms & Conditions</a>
            <a href="#" className="transition hover:text-[color:var(--accent)]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
