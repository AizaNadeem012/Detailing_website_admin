import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Detailing Blog | Tips & Guides | SRV Detailing",
  description:
    "Expert car detailing tips, guides and industry insights from SRV Detailing Manchester. Ceramic coating, paint correction, valeting advice and seasonal car care.",
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/blog",
  },
  openGraph: {
    title: "Car Detailing Blog | Tips & Guides | SRV Detailing",
    description:
      "Expert car detailing tips, guides and industry insights from SRV Detailing Manchester.",
    url: "https://www.srvdetailing.co.uk/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Detailing Blog | SRV Detailing Manchester",
    description:
      "Expert car detailing tips and guides from SRV Detailing.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
