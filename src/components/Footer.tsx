import React from 'react';
import Link from 'next/link';
import { services, locations } from '@/data/siteContent';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#070C18] text-white pt-20 pb-12 overflow-hidden border-t border-slate-800/80">
      {/* Background Watermark Typography */}
      <div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 select-none pointer-events-none text-slate-800/10 font-black text-[100px] md:text-[180px] lg:text-[230px] whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        BAYVIEW
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Info, Services, Areas, Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="text-2xl font-black tracking-tight text-white block">
                Bayview Gutter Cleaning
              </span>
              <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase block mt-0.5">
                San Leandro, CA
              </span>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Locally owned gutter care company built around keeping your gutters, downspouts, and rooflines flowing properly year-round in San Leandro and the surrounding East Bay communities.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <a
                href={COMPANY_CONFIG.phoneTel}
                className="flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-base">Direct: {COMPANY_CONFIG.phone}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span>San Leandro, CA 94577 (Serving San Leandro & East Bay)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Monday – Saturday: Standard Business Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Licensed, Trained & Insured Ladder Crews</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={COMPANY_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-brand-blue/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_CONFIG.phone}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-medium px-4 py-2.5 rounded-full border border-white/10 transition-all"
              >
                <span>Online Quote</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              Gutter Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {services.slice(0, 8).map((s) => (
                <li key={s.url}>
                  <Link
                    href={s.url}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-block pt-1"
                >
                  View All 14 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/areas-we-serve"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  All Areas We Serve
                </Link>
              </li>
              {locations.map((loc) => (
                <li key={loc.url}>
                  <Link
                    href={loc.url}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {loc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Google Map Embed (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                Our Location
              </h3>
              <a
                href="https://maps.app.goo.gl/w1PB7fvwjkCy7mZZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-medium"
              >
                <span>Open Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900">
              <iframe
                title="Bayview Gutter Cleaning San Leandro Location"
                src="https://maps.google.com/maps?q=Bayview+Gutter+Cleaning+San+Leandro&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            <p className="text-xs text-slate-400 mt-2 text-center">
              Bayview Gutter Cleaning San Leandro on Google Maps
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Bayview Gutter Cleaning San Leandro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
