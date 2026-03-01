import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/manchester",
  },
};

export default function ManchesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
