import { Star, Quote, Sparkles, ArrowRight } from "lucide-react";

const testimonials=[
{name:"Amit Sharma",role:"Luxury Villa Owner",initials:"AS",review:"MB Infra delivered exactly what they promised. The process was transparent, professional and stress-free."},
{name:"Neha Verma",role:"Real Estate Investor",initials:"NV",review:"Investing with MB Infra has been one of our best financial decisions."},
{name:"Rahul Mehta",role:"Commercial Client",initials:"RM",review:"Outstanding workmanship and attention to detail with on-time delivery."},
];

const stats=[
{value:"4.9★",label:"Average Rating"},
{value:"500+",label:"Projects Delivered"},
{value:"98%",label:"Client Satisfaction"},
];

export default function Testimonials(){
return(
<section id="testimonials" className="relative overflow-hidden bg-[linear-gradient(180deg,#081C3A_0%,#0D3B7A_45%,#f8fbff_100%)] py-24">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,.14),transparent_28%)]"/>
<div className="container-shell relative">
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2">
<Sparkles className="h-4 w-4 text-[#00C853]"/>
<span className="text-xs font-semibold tracking-[0.3em] text-[#00C853]">TESTIMONIALS</span>
</div>
<h2 className="mt-6 text-5xl font-bold text-white">Trusted By <span className="text-[#00C853]">Families & Investors</span></h2>
<p className="mt-6 text-lg text-slate-300">Every successful project begins with trust and ends with delighted clients.</p>
</div>

<div className="mt-14 grid gap-6 md:grid-cols-3">
{stats.map((s)=>(
<div key={s.label} className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl">
<h3 className="text-5xl font-bold text-[#00C853]">{s.value}</h3>
<p className="mt-3 text-slate-300">{s.label}</p>
</div>
))}
</div>

<div className="mt-16 grid gap-8 lg:grid-cols-3">
{testimonials.map((t)=>(
<article key={t.name} className="group rounded-[30px] bg-white p-8 shadow-[0_25px_70px_rgba(8,28,58,.18)] transition-all hover:-translate-y-2">
<Quote className="mb-5 h-10 w-10 text-[#00C853]/20"/>
<div className="mb-4 flex gap-1">{[...Array(5)].map((_,i)=><Star key={i} size={18} fill="#D4AF37" className="text-[#D4AF37]"/>)}</div>
<p className="leading-8 text-slate-600">“{t.review}”</p>
<div className="mt-8 flex items-center gap-4">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00C853] to-[#0D3B7A] font-bold text-white">{t.initials}</div>
<div><h4 className="font-semibold">{t.name}</h4><p className="text-sm text-slate-500">{t.role}</p></div>
</div>
</article>
))}
</div>

<div className="mt-16 flex justify-center">
<a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-8 py-4 font-semibold text-white">Become Our Next Success Story<ArrowRight className="h-5 w-5"/></a>
</div>
</div>
</section>
);}
