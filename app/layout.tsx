import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Premium Typography Mapping matching global design rules
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope", // Leveraged directly within the Tailwind layer
  display: "swap", // Forces text-rendering optimization to speed up layout paints[cite: 1]
});

// Comprehensive Meta Tag Matrix Configuration for Phase 1[cite: 1]
export const metadata: Metadata = {
  title: {
    default: "Mount Build Infrastructure | Premium Construction & Real Estate",
    template: "%s | MB Infra"
  },
  description: "Crafting luxury villas, premium plots, commercial developments, and strategic real estate investment opportunities built to deliver long-term value across Dehradun and Mussoorie, Uttarakhand.",
  keywords: [
    "Luxury Construction", 
    "Premium Villas Dehradun", 
    "Mussoorie Real Estate", 
    "MB Infra", 
    "Uttarakhand Real Estate Development",
    "Construction Company Dehradun",
    "Luxury Property Uttarakhand",
    "High Yield Real Estate India"
  ],
  authors: [{ name: "Mount Build Infrastructure Pvt. Ltd.", url: "https://mbinfra.in" }],
  creator: "MB Infra Engineering Team",
  publisher: "Mount Build Infrastructure Pvt. Ltd.",
  metadataBase: new URL("https://mbinfra.in"), // Pointing directly to your primary launch staging domain[cite: 1]
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mount Build Infrastructure | Premium Construction & Real Estate",
    description: "Engineering excellence, transparency, and architectural craftsmanship built for long-term value across Uttarakhand.",
    url: "https://mbinfra.in",
    siteName: "MB Infra",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure to drop a 1200x630 share card preview banner in your public/images directory[cite: 1]
        width: 1200,
        height: 630,
        alt: "Mount Build Infrastructure - Premium Real Estate Portfolio Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Build Infrastructure | Premium Real Estate",
    description: "Crafting luxury residences and high-yield infrastructure investments with engineering excellence in Uttarakhand.",
    images: ["/images/og-image.jpg"],
  },
};

// Viewport controls decoupled from Metadata configuration standard
export const viewport: Viewport = {
  themeColor: "#0B1F4D", // Primary Luxury Brand Navy
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD Schema: Maps identity rules directly for crawlers and search AI loops[cite: 1]
  const corporateSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mbinfra.in/#organization",
        "name": "Mount Build Infrastructure Pvt. Ltd.",
        "url": "https://mbinfra.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mbinfra.in/logo/mb-logo.png",
          "caption": "Mount Build Infrastructure Logo"
        },
        "sameAs": [
          "https://www.facebook.com/share/mbinfra", // Replace with your corporate endpoints
          "https://www.instagram.com/mbinfra",
          "https://www.linkedin.com/company/mbinfra"
        ]
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://mbinfra.in/#localbusiness",
        "name": "Mount Build Infrastructure Pvt. Ltd.",
        "image": "https://mbinfra.in/images/about.jpg",
        "telePhone": "+919557427877",
        "email": "mbinfraa426@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dehradun Core Corporate Suite",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "postalCode": "248001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.3165", 
          "longitude": "78.0322"
        },
        "url": "https://mbinfra.in",
        "priceRange": "₹区域₹₹",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <head>
        {/* Injecting structured microdata right into the document header node */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
        />
      </head>
      <body 
        className={`${manrope.className} bg-white text-brand-body min-h-screen antialiased text-rendering-optimizeLegibility`}
      >
        {children}
      </body>
    </html>
  );
}
