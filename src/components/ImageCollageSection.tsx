import React from 'react';
import Image from 'next/image';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { CheckCircle2, Phone, PhoneCall } from 'lucide-react';

interface ImageCollageSectionProps {
  badge?: string;
  title: string;
  descriptionHtml: string;
  checkmarks: string[];
  images: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ImageCollageSection({
  badge = 'Local Gutter Care',
  title,
  descriptionHtml,
  checkmarks,
  images,
}: ImageCollageSectionProps) {
  const mainImage = images[0] || '/images/gutter-cleaning/man-working-on-gutter-wearing-gloves-and-cap.webp';
  const topSmallImage = images[1] || '/images/gutter-cleaning/gutters-clogged-with-leaves-and-small-branches.webp';
  const bottomSmallImage = images[2] || '/images/gutter-cleaning/silver-gutter-system-on-a-brown-roof.webp';

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Staggered Multi-Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-md mx-auto sm:max-w-lg lg:max-w-none">
              
              {/* Main Anchor Image (Large rounded rect) */}
              <div className="relative w-[80%] sm:w-[75%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                <Image
                  src={mainImage}
                  alt="Bayview Gutter Cleaning technician at work"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Top Floating Image */}
              <div className="absolute top-2 right-2 sm:right-6 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 z-20 hover:scale-105 transition-transform duration-500">
                <Image
                  src={topSmallImage}
                  alt="Gutter inspection and debris removal"
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-cover"
                />
              </div>

              {/* Bottom Floating Image */}
              <div className="absolute -bottom-8 right-4 sm:right-12 w-[48%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 z-20 hover:scale-105 transition-transform duration-500">
                <Image
                  src={bottomSmallImage}
                  alt="Clean free-flowing gutters"
                  fill
                  sizes="(max-width: 768px) 45vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[40px] -z-10 transform -rotate-1"></div>
            </div>
          </div>

          {/* Right: Section Info & Checkmarks (6 cols) */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
              <span>{badge}</span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              {title}
            </h2>

            {/* Description Html from Sheet */}
            <div
              className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />

            {/* 2-Column Checkmark List */}
            {checkmarks && checkmarks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {checkmarks.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-3.5 hover:bg-blue-50/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Phone Only CTA Button */}
            <div className="pt-4">
              <a
                href={COMPANY_CONFIG.phoneTel}
                className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call to Schedule: {COMPANY_CONFIG.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
