import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#081C3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(13,79,216,.15),transparent_35%)]"/>
      <div className="container-shell relative py-20">
        <div className="mb-14 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#00C853]"/>
                <span className="text-xs font-semibold tracking-[0.3em] text-[#00C853] uppercase">Let's Connect</span>
              </div>
              <h2 className="mt-5 text-4xl font-bold">Building Tomorrow, Together.</h2>
              <p className="mt-4 max-w-2xl text-slate-300">Whether you're planning a villa, commercial project or investment, our team is ready to help.</p>
            </div>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(0,200,83,.35)] transition hover:-translate-y-1">
              Book Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1"/>
            </a>
          </div>
        </div>

        <div className="grid gap-14 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo/mb-logo.png" alt="MB Infra" width={56} height={56}/>
              <div>
                <h3 className="text-2xl font-bold">MB INFRA</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-[#00C853]">Building Trust</p>
              </div>
            </div>
            <p className="mt-6 leading-8 text-slate-300">Premium construction, luxury real estate and investment opportunities across Uttarakhand.</p>
            <div className="mt-8 flex gap-3">
              {[
                {I:FaFacebookF,h:"#"},
                {I:FaInstagram,h:"#"},
                {I:FaLinkedinIn,h:"#"},
              ].map(({I,h},i)=>(
                <a key={i} href={h} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-[#00C853] hover:text-white">
                  <I/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-4 text-slate-300">
              {["Home","About","Services","Projects","Contact"].map(item=>(
                <li key={item}><a href={`#${item.toLowerCase()}`} className="transition hover:text-[#00C853]">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Contact</h4>
            <div className="space-y-5 text-slate-300">
              <div className="flex gap-3"><MapPin className="mt-1 text-[#00C853]"/><span>Dehradun<br/>Uttarakhand, India</span></div>
              <div className="flex gap-3"><Phone className="text-[#00C853]"/><span>+91 9557427877</span></div>
              <div className="flex gap-3"><Mail className="text-[#00C853]"/><span>mbinfraa426@gmail.com</span></div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Newsletter</h4>
            <p className="mb-5 text-slate-300">Receive project launches and investment updates.</p>
            <form className="flex overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-400"/>
              <button className="bg-[#00C853] px-5 text-white"><ArrowRight/></button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 MB Infra Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-[#00C853]">Privacy Policy</a>
            <a href="#" className="hover:text-[#00C853]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#00C853]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
