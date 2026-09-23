'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/siteContent';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { ChevronDown, ArrowUpRight, Phone, Check, Droplets } from 'lucide-react';

interface ServiceAccordionSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceAccordionSection({
  badge = 'East Bay Care',
  title = 'Our Gutter Cleaning Packages & Services',
  description = 'Every service follows our ladder-safe, thorough hand-cleaning and downspout flushing standard. Explore our full range of residential and commercial gutter solutions.',
}: ServiceAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const accordionServices = services.slice(0, 7);

  return (
    <section className="relative bg-[#070C18] text-white py-24 sm:py-32 overflow-hidden border-t border-b border-slate-800/80">
      {/* Background Watermark Typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-slate-800/10 font-black text-[100px] md:text-[200px] lg:text-[260px] whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        SERVICES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
              <span>{badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-5 lg:pl-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            <div>
              <a
                href={COMPANY_CONFIG.phoneTel}
                className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-brand-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Book: {COMPANY_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-t border-slate-800 divide-y divide-slate-800/80">
          {accordionServices.map((service, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={service.url}
                className={`transition-colors ${
                  isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left group gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                      {service.title}
                    </span>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:border-brand-blue group-hover:text-white transition-all shrink-0 ${
                      isOpen ? 'bg-brand-blue text-white border-brand-blue rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="pb-8 pt-2 pl-8 sm:pl-12 pr-4 sm:pr-8 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>{service.metaDescription}</p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href={COMPANY_CONFIG.phoneTel}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover px-5 py-2.5 rounded-full transition-colors shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call to Book This Service: {COMPANY_CONFIG.phone}</span>
                      </a>

                      <Link
                        href={service.url}
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-semibold underline underline-offset-4"
                      >
                        <span>Learn more about {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
