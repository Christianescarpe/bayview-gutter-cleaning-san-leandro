import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/siteContent';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import PackageCardsSection from '@/components/PackageCardsSection';
import TestimonialsTrustSection from '@/components/TestimonialsTrustSection';
import CtaBanner from '@/components/CtaBanner';
import { images } from '@/data/imageMap';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gutter Cleaning & Repair Services San Leandro CA',
  description: 'Complete gutter care services in San Leandro and the East Bay. Gutter cleaning, downspout snaking, gutter guards, repairs, and commercial maintenance.',
};

export default function ServicesHubPage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        badgeText="Our Capabilities"
        headline="Gutter Cleaning &"
        highlightText="Repair Services"
        subheadline="From single-family homes near the San Leandro Marina to multi-story commercial buildings, Bayview Gutter Cleaning provides ladder-safe, insured, and thorough gutter care across the East Bay."
        heroImage={images.heroHome}
        imageAlt="Bayview Gutter Cleaning San Leandro service catalog"
        defaultService="Gutter Cleaning"
        defaultLocation="San Leandro"
      />

      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* Complete 14 Services Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/50">
              Full Service Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Comprehensive Gutter Solutions for Every Roofline
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every job includes ladder safety protocols, hand clearing of debris, water flow testing, and 100% haul-away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.url}
                className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-7 sm:p-8 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Droplets className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-brand-blue transition-colors">
                    <Link href={service.url}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <Link
                    href={service.url}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={COMPANY_CONFIG.phoneTel}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-brand-blue bg-white border border-slate-200 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Phone className="w-3 h-3 text-brand-blue" />
                    <span>Call to Book</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Package comparison cards */}
      <PackageCardsSection
        badge="Packages & Options"
        title="Find the Right Service Package"
        subtitle="Choose the level of gutter and downspout protection that fits your home's tree cover and roof design."
      />

      {/* Testimonials */}
      <TestimonialsTrustSection />

      {/* Pre-footer CTA */}
      <CtaBanner
        title="Call for Your Free Gutter Cleaning Quote in San Leandro"
        description="Schedule a fast, friendly gutter cleaning visit with our insured local crew today."
        imageSrc="/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp"
      />
    </div>
  );
}
