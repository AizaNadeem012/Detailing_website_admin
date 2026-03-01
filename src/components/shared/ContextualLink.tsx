import Link from 'next/link';
import type { ReactNode } from 'react';

interface ContextualLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * ContextualLink — styled inline anchor for body copy internal links.
 *
 * Renders a green underlined link consistent with the SRV Detailing brand
 * palette. Use inside paragraphs and content sections to add topical
 * cross-links without breaking reading flow.
 *
 * @example
 * <p>
 *   We offer{' '}
 *   <ContextualLink href="/manchester/car-detailing/ceramic-coating">
 *     ceramic coating in Manchester
 *   </ContextualLink>{' '}
 *   with a long-term hydrophobic finish.
 * </p>
 */
export function ContextualLink({ href, children, className = '' }: ContextualLinkProps) {
  return (
    <Link
      href={href}
      className={`text-primary font-medium underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
