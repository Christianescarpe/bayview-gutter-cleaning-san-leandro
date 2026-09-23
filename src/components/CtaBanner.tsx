import React from 'react';
import Image from 'next/image';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { PhoneCall, Phone } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
}

export default function CtaBanner({
  title = 'Where Clean Gutters Meet Total Protection',
  description = 'Stop worrying about clogged gutters before the next storm rolls in. Call Bayview Gutter Cleaning San Leandro today for an instant phone estimate and same-week scheduling.',
  imageSrc = '/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp',
}: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-blue rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl shadow-blue-500/30 p-8 sm:p-12 lg:p-16">
          
          {/* Subtle background glow circle */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Heading & Pure Phone CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-white">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-white">
                  Fast Same-Week Scheduling
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-100">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct: {COMPANY_CONFIG.phone}</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
                {title}
              </h2>

              <p className="text-blue-50 text-base sm:text-lg leading-relaxed max-w-xl">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={COMPANY_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-brand-blue font-black px-8 py-4 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-base"
                >
                  <PhoneCall className="w-5 h-5 text-brand-blue" />
                  <span>Call {COMPANY_CONFIG.phone}</span>
                </a>

                <a
                  href={COMPANY_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2 bg-blue-700/60 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-full border border-white/20 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Instant Quote</span>
                </a>
              </div>
            </div>

            {/* Right Column: Inset Technician Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-blue-900">
                  <Image
                    src={imageSrc}
                    alt="Bayview Gutter Cleaning professional clearing debris"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
