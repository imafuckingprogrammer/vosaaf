"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  { name: "Germany", href: "/countries/germany", flag: "🇩🇪" },
  { name: "United Kingdom", href: "/countries/united-kingdom", flag: "🇬🇧" },
  { name: "Ireland", href: "/countries/ireland", flag: "🇮🇪" },
  { name: "France", href: "/countries/france", flag: "🇫🇷" },
  { name: "United States", href: "/countries/united-states", flag: "🇺🇸" },
  { name: "Canada", href: "/countries/canada", flag: "🇨🇦" },
  { name: "Australia", href: "/countries/australia", flag: "🇦🇺" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Minimal Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+919727616668"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-sm">+91 97276 16668</span>
            </a>
            <a
              href="mailto:flyskyeuropevisa@gmail.com"
              className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="text-sm">flyskyeuropevisa@gmail.com</span>
            </a>
          </div>
          <div className="text-xs md:text-sm text-primary-foreground/80">
            Study Abroad Experts • Vadodara
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              FlySky Europe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}

            {/* Countries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCountriesOpen(true)}
              onMouseLeave={() => setCountriesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md">
                Countries
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    countriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {countriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-1 w-56 bg-popover rounded-lg shadow-lg border py-2 z-50"
                  >
                    {countries.map((country) => (
                      <Link
                        key={country.name}
                        href={country.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <span className="text-base">{country.flag}</span>
                        <span>{country.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">
                Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t bg-background overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div>
                  <button
                    onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    Countries
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileCountriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileCountriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-1 space-y-1 overflow-hidden"
                      >
                        {countries.map((country) => (
                          <Link
                            key={country.name}
                            href={country.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileCountriesOpen(false);
                            }}
                          >
                            <span>{country.flag}</span>
                            <span>{country.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-xl mb-4 text-foreground">
                FlySky Europe
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Your trusted partner for study abroad and visa consultancy in Vadodara, Gujarat.
              </p>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  2nd Floor, Platinum Hub, 201, Tulsidham Char Rasta, Manjalpur, Vadodara 390011
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Study Destinations</h4>
              <ul className="space-y-2.5 text-sm">
                {countries.slice(0, 5).map((country) => (
                  <li key={country.name}>
                    <Link
                      href={country.href}
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+919727616668"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+91 97276 16668</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:flyskyeuropevisa@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="break-all">flyskyeuropevisa@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} FlySky Europe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}
