import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Premium Typography Mapping matching global design rules
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope", // Leveraged directly within the Tailwind layer
  display: "swap", // Forces text-rendering optimization to speed up layout paints
});

export const metadata: Metadata = {
  title: {
    default: "Mount Build Infrastructure | Premium Construction & Real Estate",
    template: "%s | MB Infra"
  },
  description: "Crafting luxury villas, premium plots, commercial developments, and strategic real estate investment opportunities built to deliver long-term value across Dehradun and Mussoorie, Uttarakhand.",
  keywords: ["Luxury Construction", "Premium Villas Dehradun", "Mussoorie Real Estate", "MB Infra", "Uttarakhand Real Estate Development"],
  openGraph: {
    title: "Mount Build Infrastructure Pvt. Ltd.",
    description: "Engineering excellence, transparency, and architectural craftsmanship across Uttarakhand.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body 
        className={`${manrope.className} bg-white text-brand-body min-h-screen antialiased text-rendering-optimizeLegibility`}
      >
        {children}
      </body>
    </html>
  );
}
