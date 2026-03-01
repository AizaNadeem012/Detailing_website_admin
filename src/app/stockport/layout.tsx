import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/stockport',
  },
};

export default function StockportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
