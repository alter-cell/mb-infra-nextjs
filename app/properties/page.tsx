import { Metadata } from "next";
import PropertiesClientLayout from "./PropertiesClientLayout";

// Complete Phase 1 & 2 SEO High-Intent Keyword Targeting Matrix
export const metadata: Metadata = {
  title: "Luxury Villa in Dehradun & Premium Plots | MB Infra Properties",
  description: "Explore premium residential real estate, luxury villas in Dehradun, and prime investment plots for sale in Mussoorie with guaranteed transparency and long-term value.",
  alternates: {
    canonical: "https://mbinfra.in/properties",
  },
};

export default function PropertiesPage() {
  return (
    <main className="pt-24 bg-white">
      {/* Structural On-Page SEO Heading Hierarchy remains on the Server for search engines[cite: 1] */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy mb-4">
          Find Your Luxury Villa in Dehradun & Premium Tier Assets
        </h1>
        <p className="text-sm text-brand-body max-w-2xl font-normal leading-relaxed">
          Browse our verified, premium real estate listings across Uttarakhand's elite Himalayan hubs. Built with absolute transparency and engineering excellence[cite: 1].
        </p>
      </section>

      {/* This new client sub-layout manages the interactive filtering state cleanly[cite: 1] */}
      <PropertiesClientLayout />
    </main>
  );
}
