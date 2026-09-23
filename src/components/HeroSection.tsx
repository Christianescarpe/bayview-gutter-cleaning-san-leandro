import React from 'react';
import Image from 'next/image';
import FloatingQuoteForm from './FloatingQuoteForm';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { ShieldCheck, Phone, PhoneCall } from 'lucide-react';

interface HeroSectionProps {
  badgeText?: string;
  headline: string;
  highlightText?: string;
  subheadline: string;
  heroImage: string;
  imageAlt?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  defaultService?: string;
  defaultLocation?: string;
}

export default function HeroSection({
  badgeText = 'Bayview Gutter Cleaning San Leandro',
  headline,
  highlightText,
  subheadline,
  heroImage,
  imageAlt = 'Bayview Gutter Cleaning San Leandro technicians on site',
  defaultService = 'Gutter Cleaning',
  defaultLocation = 'San Leandro',
}: HeroSectionProps) {
  return (
    <section className="relative bg-[#070C18] text-white pt-28 sm:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* 50% Opacity Optimized Hero Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        aria-hidden="true"
      />

      {/* Subtle overlay gradient to keep text crystal clear and readable */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#070C18]/50 via-[#070C18]/75 to-[#070C18] pointer-events-none"
        aria-hidden="true"
      />

      {/* Background Watermark Typography */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-slate-800/20 font-black text-[110px] md:text-[200px] lg:text-[260px] whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        GUTTER
      </div>

      {/* Subtle Glow Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column hero top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/25 border border-brand-blue/40 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span>{badgeText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-md">
              {headline}
              {highlightText && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-blue to-blue-300">
                  {highlightText}
                </span>
              )}
            </h1>

            {/* Subtitle / Intro paragraph */}
            <div
              className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl drop-shadow-sm"
              dangerouslySetInnerHTML={{ __html: subheadline }}
            />

            {/* Action Buttons: Pure Phone CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY_CONFIG.phoneTel}
                className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-brand-blue/35 hover:shadow-brand-blue/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Call {COMPANY_CONFIG.phone}</span>
              </a>

              <a
                href={COMPANY_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <PhoneCall className="w-4 h-4 text-blue-300" />
                <span>Call for Instant Quote</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/70 shadow-2xl shadow-black/60 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] bg-slate-800">
                <Image
                  src={heroImage}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C18]/70 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#070C18]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Insured East Bay Crews</div>
                      <div className="text-slate-400">Ladder Safety & Debris Haul-Away</div>
                    </div>
                  </div>
                  <a
                    href={COMPANY_CONFIG.phoneTel}
                    className="p-2.5 rounded-xl bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors shrink-0"
                    title="Call Now"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Quick Phone Card */}
        <div className="relative z-20 -mb-8 sm:-mb-12">
          <FloatingQuoteForm
            defaultService={defaultService}
            defaultLocation={defaultLocation}
          />
        </div>

      </div>
    </section>
  );
}
