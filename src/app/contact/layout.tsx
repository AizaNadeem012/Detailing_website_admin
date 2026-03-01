import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SRV Detailing | Book Car Valeting Manchester",
  description:
    "Contact SRV Detailing to book professional mobile car valeting and detailing in Manchester and Stockport. Call 07375 759686 or send a message.",
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/contact",
  },
  openGraph: {
    title: "Contact SRV Detailing | Book Car Valeting Manchester",
    description:
      "Contact SRV Detailing to book professional mobile car valeting and detailing in Manchester and Stockport.",
    url: "https://www.srvdetailing.co.uk/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SRV Detailing | Book Car Valeting Manchester",
    description:
      "Book professional mobile car valeting and detailing in Manchester. Call 07375 759686.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
