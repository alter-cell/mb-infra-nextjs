import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    // 1. Unified Background System: Deep Navy with soft Asmani Blue and Emerald ambient gradient glows
    <footer 
      id="contact" 
      className="surface-dark-section relative overflow-hidden border-t border-white/5 bg-brand-navy text-white"
    >
      {/* Soft atmospheric radial lighting textures */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,197,95,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(110,198,255,0.08),transparent_40%)] pointer-events-none" />
      
      <div className="container-shell relative z-10 py-[100px] sm:py-[120px]">
        
        {/* Upper Premium Invitation Block: Strict 28px card shape */}
        <div className="mb-16 rounded-brand-card border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-brand-badge border border-brand-emerald/20 bg-brand-emerald/10 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-brand-emerald" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-brand-emerald uppercase">Let's Connect</span>
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Building Tomorrow, Together.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Whether you're planning a villa, commercial project or investment, our team is ready to help.
              </p>
            </div>
            
            {/* Primary Button Style - 18px Radius[cite: 1] */}
            <a 
              href="#contact" 
              className="button-primary group w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-brand-interactive"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Informational Columns Loop Area */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Identity Descriptor Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Image src="/logo/mb-logo.png" alt="MB Infra Logo" width={26} height={26} className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-wider text-white">MB INFRA</h3>
                <p className="text-[9px] uppercase tracking-[0.25em] text-brand-emerald font-bold">Building Trust</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Premium construction, luxury real estate and investment opportunities across Uttarakhand.
            </p>
            {/* Social Links System Grid */}
            <div className="flex gap-3 pt-2">
              {[
                { I: FaFacebookF, h: "#" },
                { I: FaInstagram, h: "#" },
                { I: FaLinkedinIn, h: "#" },
              ].map(({ I, h }, i) => (
                <a 
                  key={i} 
                  href={h} 
                  className="flex h-10 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:bg-brand-emerald hover:text-white hover:border-brand-emerald"
                >
                  <I size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="transition duration-300 hover:text-brand-emerald">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Contact Coordinates Column */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <div className="space-y-4 text-sm font-medium text-slate-300">
              <div className="flex gap-3">
                <MapPin size={18} className="text-brand-emerald shrink-0 mt-0.5" />
                <span>Dehradun<br /><span className="text-xs text-slate-400 font-normal">Uttarakhand, India</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-emerald shrink-0" />
                <span>+91 9557427877</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-emerald shrink-0" />
                <span className="break-all">mbinfraa426@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Premium Newsletter Box Form Component */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-slate-300">Receive project launches and investment updates.</p>
            <form className="flex h-12 overflow-hidden rounded-brand-interactive border border-white/10 bg-white/[0.03] backdrop-blur-md focus-within:border-brand-emerald/50 transition-all duration-300">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button 
                type="submit"
                aria-label="Subscribe to updates"
                className="bg-brand-emerald px-4 text-white flex items-center justify-center hover:bg-[#12b050] transition-colors duration-200"
              >
                <ArrowRight size={16} className="stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Metadata Block Area */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs font-medium text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 MB Infra Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-brand-emerald transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-brand-emerald transition duration-200">Terms & Conditions</a>
            <a href="#" className="hover:text-brand-emerald transition duration-200">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
