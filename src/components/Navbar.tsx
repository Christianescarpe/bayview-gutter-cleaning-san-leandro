'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services, locations } from '@/data/siteContent';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { ChevronDown, Menu, X, Phone, ShieldCheck, Droplets } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070C18]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
          : 'bg-[#070C18] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-blue-400 flex items-center justify-center text-white shadow-md shadow-brand-blue/30 group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white tracking-tight block leading-tight">
                Bayview Gutter Cleaning
              </span>
              <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block">
                San Leandro, CA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/'
                  ? 'text-white bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-brand-blue' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-[#0D1527] border border-slate-700/60 rounded-2xl p-3 shadow-2xl backdrop-blur-xl">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1 border-b border-slate-800">
                      Gutter Services
                    </div>
                    <div className="max-h-[380px] overflow-y-auto pr-1 space-y-0.5">
                      {services.map((s) => (
                        <Link
                          key={s.url}
                          href={s.url}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-brand-blue/20 hover:pl-4 transition-all"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={locationsOpen}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                Service Areas
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    locationsOpen ? 'rotate-180 text-brand-blue' : ''
                  }`}
                />
              </button>

              {locationsOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#0D1527] border border-slate-700/60 rounded-2xl p-3 shadow-2xl backdrop-blur-xl">
                    <Link
                      href="/areas-we-serve"
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-blue-400 hover:bg-brand-blue/20 mb-1"
                    >
                      Overview: Areas We Serve
                    </Link>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1 border-b border-slate-800">
                      East Bay Cities
                    </div>
                    {locations.map((loc) => (
                      <Link
                        key={loc.url}
                        href={loc.url}
                        className="block px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-brand-blue/20 hover:pl-4 transition-all"
                      >
                        {loc.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/faq'
                  ? 'text-white bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith('/blog')
                  ? 'text-white bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/contact'
                  ? 'text-white bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA: Replaced with Call Us button with phone number */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY_CONFIG.phoneTel}
              className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <span>Call Us: {COMPANY_CONFIG.phone}</span>
            </a>
          </div>

          {/* Mobile menu and Call Us button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY_CONFIG.phoneTel}
              className="inline-flex items-center gap-1.5 bg-brand-blue text-white px-3 py-1.5 rounded-full text-xs font-bold"
            >
              <Phone className="w-3 h-3" />
              <span>Call Us</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070C18] border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10"
            >
              Home
            </Link>

            {/* Mobile Services list */}
            <div className="py-2 border-t border-slate-800/80">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                Gutter Services
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {services.map((s) => (
                  <Link
                    key={s.url}
                    href={s.url}
                    className="px-3 py-1.5 rounded text-sm text-slate-300 hover:text-white hover:bg-brand-blue/20"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Service Areas */}
            <div className="py-2 border-t border-slate-800/80">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                Service Areas
              </div>
              <Link
                href="/areas-we-serve"
                className="block px-3 py-1.5 rounded text-sm font-semibold text-white hover:bg-brand-blue/20 pl-4"
              >
                All Areas We Serve
              </Link>
              <div className="grid grid-cols-2 gap-1 pl-2 mt-1">
                {locations.map((loc) => (
                  <Link
                    key={loc.url}
                    href={loc.url}
                    className="px-3 py-1.5 rounded text-sm text-slate-300 hover:text-white hover:bg-brand-blue/20"
                  >
                    {loc.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 space-y-1">
              <Link
                href="/faq"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10"
              >
                Blog & Guides
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            {/* Prominent Call Us Button in Mobile Drawer */}
            <div className="pt-4 space-y-2">
              <a
                href={COMPANY_CONFIG.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-blue/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now: {COMPANY_CONFIG.phone}</span>
              </a>

              <Link
                href="/contact"
                className="w-full block text-center bg-white/10 hover:bg-white/15 text-white py-2.5 rounded-xl font-medium text-xs border border-white/10"
              >
                Request Free Online Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
