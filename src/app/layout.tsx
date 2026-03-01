import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

// ─── Site-wide metadata (child layouts/pages override individual keys) ────────
export const metadata: Metadata = {
  // metadataBase resolves all relative image/URL strings in metadata
  metadataBase: new URL("https://www.srvdetailing.co.uk"),

  applicationName: "SRV Detailing",
  title: {
    default:
      "Professional Mobile Car Valeting & Detailing in Manchester | SRV Detailing",
    // Child pages can set: title: "Page Title" and it renders as "Page Title | SRV Detailing"
    template: "%s | SRV Detailing",
  },
  description:
    "Stockport-based mobile car valeting and detailing serving all Manchester. Paint correction, ceramic coating, interior deep cleaning. 22 years experience. Book your home or workplace visit.",
  authors: [{ name: "SRV Detailing", url: "https://www.srvdetailing.co.uk" }],
  keywords: [
    "car valeting",
    "car detailing",
    "mobile car service",
    "Manchester",
    "Stockport",
    "paint correction",
    "ceramic coating",
    "mobile valeting Manchester",
  ],

  
  // Canonical homepage — child pages set their own canonical
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/",
  },
  manifest: "/manifest.json",
  // Instruct crawlers — index all, follow all links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ─── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SRV Detailing",
    url: "https://www.srvdetailing.co.uk/",
    title:
      "Professional Mobile Car Valeting & Detailing in Manchester | SRV Detailing",
    description:
      "Stockport-based mobile car valeting and detailing serving all Manchester. Paint correction, ceramic coating, interior deep cleaning. 22 years experience.",
    // Resolved against metadataBase → https://www.srvdetailing.co.uk/mobile-van.jpg
    images: [
      {
        url: "/mobile-van.jpg",
        width: 1200,
        height: 630,
        alt: "SRV Detailing mobile valeting van serving Manchester and Stockport",
      },
    ],
  },
  // ─── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@srvdetailing",
    creator: "@srvdetailing",
    title:
      "Professional Mobile Car Valeting & Detailing in Manchester | SRV Detailing",
    description:
      "Stockport-based mobile car valeting and detailing. Paint correction, ceramic coating. 22 years experience.",
    images: ["/mobile-van.jpg"],
  },
};

// ─── Site-wide JSON-LD (entity hub — business identity only) ─────────────────
// FAQ schema is intentionally NOT included here; it lives on individual pages
// that display FAQ content so Google associates it with the correct URL.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Primary entity — AutoDetailing subtype of LocalBusiness
    {
      "@type": "AutoDetailing",
      "@id": "https://www.srvdetailing.co.uk/#business",
      "name": "SRV Detailing",
      "url": "https://www.srvdetailing.co.uk/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.srvdetailing.co.uk/logo.png",
        "width": 512,
        "height": 512,
      },
      "image": "https://www.srvdetailing.co.uk/mobile-van.jpg",
      "telephone": "+44 7375 759686",
      "priceRange": "££",
      "description":
        "SRV Detailing provides professional mobile car valeting and detailing services across Manchester, Greater Manchester, Stockport, and Tameside. With over 22 years of experience, we deliver showroom-quality results including paint correction, ceramic coatings, and full interior and exterior detailing.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Globe House, Globe Lane",
        "addressLocality": "Dukinfield",
        "addressRegion": "Greater Manchester",
        "postalCode": "SK16 4RG",
        "addressCountry": "GB",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.4746",
        "longitude": "-2.0873",
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Manchester" },
        { "@type": "AdministrativeArea", "name": "Greater Manchester" },
        { "@type": "AdministrativeArea", "name": "Stockport" },
        { "@type": "AdministrativeArea", "name": "Tameside" },
      ],
      "sameAs": [
        "https://share.google/AZFyOF2xIb3XaZetX",
      ],
      "hasMap": "https://share.google/AZFyOF2xIb3XaZetX",
    },
    // Service entity — linked to business via provider
    {
      "@type": "Service",
      "@id": "https://www.srvdetailing.co.uk/#services",
      "provider": { "@id": "https://www.srvdetailing.co.uk/#business" },
      "serviceType": "Mobile Car Detailing & Valeting",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater Manchester",
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceLocation": { "@type": "Place", "name": "Customer Location" },
      },
    },
    // Offer catalogue — surface in rich results
    {
      "@type": "OfferCatalog",
      "name": "Car Detailing & Valeting Services",
      "provider": { "@id": "https://www.srvdetailing.co.uk/#business" },
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Car Detailing",
            "url": "https://www.srvdetailing.co.uk/manchester/car-detailing",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Car Valeting",
            "url": "https://www.srvdetailing.co.uk/manchester/car-valeting",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Correction & Gloss Enhancement",
            "url": "https://www.srvdetailing.co.uk/manchester/car-detailing/paint-correction",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating Protection",
            "url": "https://www.srvdetailing.co.uk/manchester/car-detailing/ceramic-coating",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Deep Cleaning",
            "url": "https://www.srvdetailing.co.uk/manchester/car-detailing/interior-detailing",
          },
        },
      ],
    },
    // WebSite entity — enables Sitelinks Search Box eligibility
    {
      "@type": "WebSite",
      "@id": "https://www.srvdetailing.co.uk/#website",
      "url": "https://www.srvdetailing.co.uk/",
      "name": "SRV Detailing",
      "description":
        "Professional mobile car valeting and detailing in Manchester and Stockport",
      "publisher": { "@id": "https://www.srvdetailing.co.uk/#business" },
      "inLanguage": "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        {/* Preconnect to Google Maps origins used by MapEmbed iframes.
            Establishes TCP + TLS handshake early, cutting ~200-400ms per map. */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch as fallback for browsers that skip preconnect */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TooltipProvider>
          {children}
          {/* <Toaster /> */}
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
