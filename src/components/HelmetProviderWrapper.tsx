'use client';

import { HelmetProvider } from 'react-helmet-async';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HelmetProviderWrapper({ children }: Props) {
  return <HelmetProvider>{children}</HelmetProvider>;
}