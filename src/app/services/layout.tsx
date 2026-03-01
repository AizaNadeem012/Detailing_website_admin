import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Valeting & Detailing Services | SRV Detailing Manchester",
  description:
    "Professional car valeting and detailing services in Manchester. Mobile valeting, paint correction, ceramic coating, interior deep cleaning. 22 years experience.",
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/services",
  },
  openGraph: {
    title: "Car Valeting & Detailing Services | SRV Detailing Manchester",
    description:
      "Professional car valeting and detailing services in Manchester. Mobile valeting, paint correction, ceramic coating, interior deep cleaning.",
    url: "https://www.srvdetailing.co.uk/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Valeting & Detailing Services | SRV Detailing",
    description:
      "Professional car valeting and detailing services in Manchester. 22 years experience.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
