import { Metadata } from "next";
import PropertiesClientContainer from "./PropertiesClientContainer";

// Phase 1 & 2 SEO High-Intent Keyword Targeting Matrix
export const metadata: Metadata = {
  title: "Luxury Villa in Dehradun & Premium Plots | MB Infra Properties",
  description: "Explore premium residential real estate, luxury villas in Dehradun, and prime investment plots for sale in Mussoorie with guaranteed transparency and long-term value.",
  alternates: {
    canonical: "https://mbinfra.in/properties",
  },
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] antialiased">
      {/* Editorial Page Hero Header Section - Pre-rendered on the server for Google */}
      <section className="w-full bg-white pt-32 pb-12 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-emerald mb-3">
            Available Inventory
          </p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-navy max-w-4xl leading-[1.15] mb-6">
            Find Your <span className="font-extrabold">Luxury Villa in Dehradun</span> <span className="font-light text-gray-400">&amp;</span> Premium Tier Assets
          </h1>
          
          <div className="w-12 h-[1px] bg-brand-emerald mb-6" />
          
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl font-normal leading-relaxed tracking-wide">
            Browse our verified, premium real estate listings across Uttarakhand's elite Himalayan hubs. Crafted with absolute transparency, legal compliance, and engineering excellence.
          </p>
          
        </div>
      </section>

      {/* Renders your fully functioning, animated client logic safely under your server header */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <PropertiesClientContainer />
      </div>
    </main>
  );
}
