"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

/* =======================
   NAV LINKS
======================= */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/manchester", label: "Manchester" },
  { href: "/stockport", label: "Stockport" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-us", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/admin", label: "Admin" },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={logo}
              alt="SRV Detailing"
              width={64}
              height={64}
              quality={100}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-heading font-bold text-2xl md:text-3xl text-foreground hidden sm:block">
            Detailing
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${pathname === link.href
                ? "text-primary"
                : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {/* GOOGLE REVIEWS */}
          <a
            href="https://share.google/PfnRYKg7cZGw1Ozcq"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-primary transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Reviews"
              className="w-3 h-3"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-xs">5.0</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/srv.detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* PHONE */}
          <a
            href="tel:+447375759686"
            className="hidden xl:flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-primary"
          >
            <Phone className="w-3 h-3" />
            <span className="text-xs">+44 7375...</span>
          </a>

          {/* Mobile Phone Icon (Medium screens and smaller) */}
          <a
            href="tel:+447375759686"
            className="flex xl:hidden items-center text-muted-foreground hover:text-primary"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* CTA BUTTON */}
          <Button variant="hero" size="sm" asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        {/* MOBILE GOOGLE REVIEWS + HAMBURGER */}
        <div className="md:hidden flex items-center gap-3">
          {/* GOOGLE REVIEWS */}
          <a
            href="https://share.google/PfnRYKg7cZGw1Ozcq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Reviews"
              className="w-4 h-4"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </a>

          {/* HAMBURGER BUTTON */}
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border mt-2"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* MOBILE SOCIAL & PHONE */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com/srv.detailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="tel:+447375759686"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>+44 7375 759686</span>
                </a>
              </div>

              <Button variant="hero" asChild className="mt-2">
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
