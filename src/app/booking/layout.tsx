import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Service | SRV Detailing',
  description: 'Book your car detailing or valeting service with SRV Detailing. Professional mobile service across Manchester and Stockport.',
  alternates: { canonical: 'https://www.srvdetailing.co.uk/booking' },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}