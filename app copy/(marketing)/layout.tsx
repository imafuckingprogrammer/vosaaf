"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from "lucide-react";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2.5 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="tel:+919727616668"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 97276 16668</span>
            </a>
            <a
              href="mailto:flyskyeuropevisa@gmail.com"
              className="hidden md:flex items-center gap-2 hover:text-blue-100 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>flyskyeuropevisa@gmail.com</span>
            </a>
          </div>
          <div className="text-xs md:text-sm font-medium">
            <span>Study Abroad Experts in Vadodara</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
              FlySky Europe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors rounded-md hover:bg-blue-50"
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
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors rounded-md hover:bg-blue-50">
                Countries
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${countriesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {countriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                  >
                    <Link
                      href="/countries/europe"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Europe
                    </Link>
                    <div className="px-4 py-2">
                      <div className="text-xs font-semibold text-gray-500 mb-2">European Countries</div>
                      {["Germany", "United Kingdom", "Ireland", "France"].map((country) => (
                        <Link
                          key={country}
                          href={`/countries/${country.toLowerCase().replace(" ", "-")}`}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                        >
                          {country}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t my-2 mx-2"></div>
                    {["United States", "Canada", "Australia"].map((country) => (
                      <Link
                        key={country}
                        href={`/countries/${country.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {country}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors rounded-md hover:bg-blue-50"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <a href="tel:+919727616668" className="hidden xl:flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 97276 16668</span>
            </a>
            <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white shadow-md transition-all">
              <Link href="/contact">Free Consultation</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t bg-white overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 space-y-1">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div>
                  <button
                    onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Countries
                    <motion.div
                      animate={{ rotate: mobileCountriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileCountriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-1 space-y-1 overflow-hidden"
                      >
                        {["Europe", "Germany", "United Kingdom", "Ireland", "France", "United States", "Canada", "Australia"].map((country) => (
                          <Link
                            key={country}
                            href={`/countries/${country.toLowerCase().replace(" ", "-")}`}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileCountriesOpen(false);
                            }}
                          >
                            {country}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 pb-2">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Free Consultation</Link>
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
      <footer className="border-t bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">FlySky Europe</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Your trusted partner for study abroad and visa consultancy in Vadodara, Gujarat.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                <span>2nd Floor, Platinum Hub, 201, Tulsidham Char Rasta, Near Central Bank, Manjalpur, Vadodara, Gujarat 390011</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {["Home", "About", "Services", "Countries", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-700 hover:translate-x-1 inline-block transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Study Destinations</h4>
              <ul className="space-y-2.5 text-sm">
                {["Germany", "United Kingdom", "USA", "Canada", "Australia"].map((country) => (
                  <li key={country}>
                    <Link
                      href={`/countries/${country.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 hover:text-blue-700 hover:translate-x-1 inline-block transition-all"
                    >
                      {country}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="tel:+919727616668" className="flex items-center gap-3 text-gray-600 hover:text-blue-700 group transition-colors">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>+91 97276 16668</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:flyskyeuropevisa@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-700 group transition-colors">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="break-all">flyskyeuropevisa@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} FlySky Europe. All rights reserved. | Study Abroad Consultancy in Vadodara, Gujarat</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}
