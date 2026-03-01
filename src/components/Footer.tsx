import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

/**
 * Footer — SEO meta hint (50–90 chars):
 * "Expert mobile car detailing & valeting — Manchester & Stockport."
 */
export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16" aria-label="Site footer">
      <div className="container mx-auto px-4">

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* ── Brand & description ──────────────────────────────────── */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">SRV</span>
              </div>
              <span className="font-heading font-bold text-xl">Detailing</span>
            </div>

            {/* Primary description — keywords embedded naturally */}
            <p className="text-background/70 mb-3 max-w-sm leading-relaxed">
              Expert mobile car valeting and premium detailing across Greater Manchester.
              Specialising in ceramic coating, paint correction, and showroom finish
              detailing — fully mobile, at your home or workplace.
            </p>

            {/* Local SEO — service areas */}
            <p className="text-background/50 text-sm mb-6 max-w-sm">
              Proudly serving Stockport, Cheadle Hulme, Bramhall, Heaton Moor,
              and all surrounding Greater Manchester areas.
            </p>

            {/* ── Social & business listing icons ──────────────────── */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/srv.detailing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Instagram"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/showroomvaleting.srv/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Facebook"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>

              {/* Google My Business */}
              <a
                href="https://share.google/TQvh6CIzVf4Y4als3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Google — leave us a review"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors font-bold text-sm"
              >
                G
              </a>

              {/* Yell.com */}
              <a
                href="https://www.yell.com/biz/srv-detailing-dukinfield-11004489/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing listed on Yell.com"
                className="h-10 px-4 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-semibold tracking-wide uppercase"
              >
                Yell
              </a>
            </div>
          </div>

          {/* ── Services ─────────────────────────────────────────────── */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/manchester/car-detailing" className="text-background/70 hover:text-primary transition-colors">
                  Car Detailing
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-valeting" className="text-background/70 hover:text-primary transition-colors">
                  Car Valeting
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/ceramic-coating" className="text-background/70 hover:text-primary transition-colors">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/paint-correction" className="text-background/70 hover:text-primary transition-colors">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/interior-detailing" className="text-background/70 hover:text-primary transition-colors">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-background/70 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Explore ──────────────────────────────────────────────── */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/manchester" className="text-background/70 hover:text-primary transition-colors">Manchester</Link>
              </li>
              <li>
                <Link href="/stockport" className="text-background/70 hover:text-primary transition-colors">Stockport</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-background/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/guides" className="text-background/70 hover:text-primary transition-colors">Guides</Link>
              </li>
              <li>
                <Link href="/faq" className="text-background/70 hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/booking" className="text-background/70 hover:text-primary transition-colors">Booking</Link>
              </li>
            </ul>
          </div>

          {/* ── Contact / NAP ────────────────────────────────────────── */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>

            {/* NAP — Name/Address/Phone wrapped for schema readability */}
            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+447375759686"
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                    aria-label="Call SRV Detailing"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span>+44 7375 759686</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:srv_detailing@icloud.com"
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                    aria-label="Email SRV Detailing"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span>srv_detailing@icloud.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-background/70">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">
                    Globe House, Globe Lane<br />
                    Dukinfield<br />
                    Greater Manchester, SK16 4RG
                  </span>
                </li>
              </ul>
            </address>

            {/* CTA — book online */}
            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Your Detail Online →
              </Link>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} SRV Detailing. All rights reserved.
            {" "}Professional mobile car valeting &amp; detailing, Manchester.
          </p>
          <nav aria-label="Footer utility links" className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            <a
              href="https://share.google/TQvh6CIzVf4Y4als3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-primary transition-colors"
            >
              Google Reviews
            </a>
            <a
              href="https://www.yell.com/biz/srv-detailing-dukinfield-11004489/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-primary transition-colors"
            >
              Yell.com
            </a>
            <Link href="/booking" className="text-background/50 hover:text-primary transition-colors">Book Now</Link>
            <Link href="/faq" className="text-background/50 hover:text-primary transition-colors">FAQ</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
