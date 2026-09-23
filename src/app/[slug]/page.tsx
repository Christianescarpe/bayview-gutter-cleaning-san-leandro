import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { sitePages, getPageBySlug, services, locations } from '@/data/siteContent';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ImageCollageSection from '@/components/ImageCollageSection';
import ServiceAccordionSection from '@/components/ServiceAccordionSection';
import PackageCardsSection from '@/components/PackageCardsSection';
import TestimonialsTrustSection from '@/components/TestimonialsTrustSection';
import CtaBanner from '@/components/CtaBanner';
import ContentRenderer from '@/components/ContentRenderer';
import { getHeroImageForSlug, images } from '@/data/imageMap';
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Droplet,
  Check,
  Phone,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sitePages
    .filter((p) => p.slug !== '' && p.slug !== 'faq' && p.slug !== 'contact')
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.focusKeywords,
  };
}

export default async function GenericContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const isLocation = page.type === 'location' || page.type === 'location-hub';
  const heroImg = getHeroImageForSlug(page.slug);

  const collageImgs = isLocation ? images.collageLocation : images.collageService;

  const firstSection = page.sections[0];
  const secondSection = page.sections[1];
  const middleSections = page.sections.slice(2, -1);
  const lastSection = page.sections[page.sections.length - 1];

  return (
    <div>
      {/* 1. HERO SECTION (Dark theme with Floating Phone Card & Trust Bar) */}
      <HeroSection
        badgeText={
          isLocation
            ? `Bayview Gutter Cleaning • ${page.title} Service Area`
            : `Bayview Gutter Cleaning San Leandro • ${page.title}`
        }
        headline={page.parsedH1 || page.title}
        subheadline={page.introHtml || page.metaDescription}
        heroImage={heroImg}
        imageAlt={`${page.title} - Bayview Gutter Cleaning San Leandro`}
        defaultService={isLocation ? 'Gutter Cleaning' : page.title}
        defaultLocation={isLocation ? page.title : 'San Leandro'}
      />

      {/* Trust Badges Bar */}
      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* 2. IMAGE COLLAGE SECTION (Why Choose Us / First Core Section) */}
      {firstSection && (
        <ImageCollageSection
          badge={isLocation ? `${page.title} Coverage` : 'Service Standards'}
          title={firstSection.title}
          descriptionHtml={firstSection.content}
          checkmarks={
            firstSection.listItems.length > 0
              ? firstSection.listItems
              : [
                  'Hand-clearing leaves, silt, and tree debris',
                  'High-flow downspout flushing & blockage check',
                  'Roof valley and shingle debris removal',
                  'Before and after photo documentation',
                  '100% full debris haul-away from property',
                ]
          }
          images={collageImgs}
        />
      )}

      {/* 3. INTERACTIVE ACCORDION / DARK SECTION */}
      {secondSection && (
        <section className="relative bg-[#070C18] text-white py-24 sm:py-32 overflow-hidden border-t border-b border-slate-800/80">
          {/* Background Watermark */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-slate-800/10 font-black text-[100px] md:text-[200px] lg:text-[260px] whitespace-nowrap leading-none z-0 uppercase"
            aria-hidden="true"
          >
            {isLocation ? 'AREA' : 'CARE'}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  <span>{isLocation ? 'Local Insights' : 'Detailed Process'}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                  {secondSection.title}
                </h2>

                <div
                  className="sheet-prose sheet-prose-dark text-slate-300 text-base sm:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: secondSection.content }}
                />

                <div className="pt-2">
                  <a
                    href={COMPANY_CONFIG.phoneTel}
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-brand-blue/30 transition-all hover:scale-[1.02]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call to Book: {COMPANY_CONFIG.phone}</span>
                  </a>
                </div>
              </div>

              {/* Side Card: Quick Directory of Other Offerings */}
              <div className="lg:col-span-5">
                <div className="bg-[#0D1527] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                    {isLocation ? 'Services Available in This Area' : 'Related Gutter Services'}
                  </h3>

                  <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                    {services.map((s) => (
                      <Link
                        key={s.url}
                        href={s.url}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-brand-blue/20 text-slate-300 hover:text-white transition-all text-sm group"
                      >
                        <span className="font-medium">{s.title}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>

                  {isLocation && (
                    <div className="mt-6 pt-4 border-t border-slate-800">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Nearby East Bay Cities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {locations.map((loc) => (
                          <Link
                            key={loc.url}
                            href={loc.url}
                            className="text-xs bg-slate-800 hover:bg-brand-blue hover:text-white text-slate-300 px-3 py-1 rounded-full transition-colors"
                          >
                            {loc.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. PACKAGE COMPARISON CARDS */}
      <PackageCardsSection
        badge="Gutter Care Options"
        title="Find the Right Package for Your Roofline"
        subtitle={`Every visit in ${isLocation ? page.title : 'San Leandro'} includes ladder safety, full hand clearing, downspout testing, and zero yard mess.`}
      />

      {/* 5. IN-DEPTH SHEET CONTENT SECTIONS */}
      {middleSections.length > 0 && (
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {middleSections.map((sec, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-4 ${idx % 2 === 1 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                    {sec.title}
                  </h2>
                  <div
                    className="sheet-prose text-slate-600"
                    dangerouslySetInnerHTML={{ __html: sec.content }}
                  />
                  <div className="pt-2">
                    <a
                      href={COMPANY_CONFIG.phoneTel}
                      className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call for service: {COMPANY_CONFIG.phone}</span>
                    </a>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-100">
                    <Image
                      src={
                        idx % 3 === 0
                          ? '/images/gutter-cleaning/gutter-cleaning-with-brush-and-pole-in-suburbia.webp'
                          : idx % 3 === 1
                          ? '/images/gutter-cleaning/man-cleaning-gutters-on-house-with-vacuum.webp'
                          : '/images/gutter-cleaning/rooftop-gutter-protection-system-on-a-residential.webp'
                      }
                      alt={sec.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. TESTIMONIALS & PROOF */}
      <TestimonialsTrustSection />

      {/* 7. VIBRANT BLUE PRE-FOOTER CTA BANNER */}
      <CtaBanner
        title={lastSection ? lastSection.title : `Ready to Clear Your Gutters in ${page.title}?`}
        description="Don't wait for the next storm to discover a clogged gutter. Call Bayview Gutter Cleaning San Leandro today for prompt, same-week phone scheduling."
        imageSrc="/images/gutter-cleaning/male-technician-in-blue-uniform-climbing-ladder-on.webp"
      />
    </div>
  );
}
