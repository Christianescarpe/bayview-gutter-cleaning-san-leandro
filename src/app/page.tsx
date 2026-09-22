import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPageBySlug } from '@/data/siteContent';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ImageCollageSection from '@/components/ImageCollageSection';
import ServiceAccordionSection from '@/components/ServiceAccordionSection';
import PackageCardsSection from '@/components/PackageCardsSection';
import TestimonialsTrustSection from '@/components/TestimonialsTrustSection';
import CtaBanner from '@/components/CtaBanner';
import ContentRenderer from '@/components/ContentRenderer';
import { images } from '@/data/imageMap';
import { ArrowRight, CloudRain, CheckCircle, MapPin, Building, Home, Shield } from 'lucide-react';

const homePageData = getPageBySlug('')!;

export const metadata: Metadata = {
  title: homePageData.seoTitle,
  description: homePageData.metaDescription,
  keywords: homePageData.focusKeywords,
};

export default function HomePage() {
  // Extract specific sections from home content
  const whyChooseSection = homePageData.sections.find(s => 
    s.title.includes('Why San Leandro Homeowners Choose')
  );

  const rainySeasonSection = homePageData.sections.find(s => 
    s.title.includes('Rainy Season')
  );

  const thoroughSection = homePageData.sections.find(s => 
    s.title.includes('Thorough')
  );

  const resCommSection = homePageData.sections.find(s => 
    s.title.includes('Residential and Commercial')
  );

  const servingSection = homePageData.sections.find(s => 
    s.title.includes('Serving San Leandro')
  );

  const quoteSection = homePageData.sections.find(s => 
    s.title.includes('Get a Free Gutter Cleaning Quote')
  );

  return (
    <div>
      {/* 1. HERO SECTION (Dark theme with Floating Quote Card & Trust Bar) */}
      <HeroSection
        badgeText="Bayview Gutter Cleaning San Leandro"
        headline="Gutter Cleaning"
        highlightText="San Leandro CA"
        subheadline={homePageData.introHtml}
        heroImage={images.heroHome}
        imageAlt="Bayview Gutter Cleaning San Leandro professional ladder work"
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/gutter-cleaning"
        defaultService="Gutter Cleaning"
        defaultLocation="San Leandro"
      />

      {/* Trust Badges Bar */}
      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* 2. IMAGE COLLAGE SECTION (White theme with staggered rounded photos) */}
      {whyChooseSection && (
        <ImageCollageSection
          badge="Local Expertise"
          title={whyChooseSection.title}
          descriptionHtml={whyChooseSection.content}
          checkmarks={whyChooseSection.listItems}
          ctaText="Explore All Gutter Services"
          ctaLink="/gutter-cleaning"
          images={images.collageHome}
        />
      )}

      {/* 3. INTERACTIVE SERVICE ACCORDION (Dark theme with background watermark) */}
      <ServiceAccordionSection
        badge="San Leandro & East Bay"
        title="Our Gutter Cleaning Packages & Services"
        description="Every section cleared by hand, every downspout tested, and zero debris left in your yard. Discover our specialized care options below."
        ctaText="Request Free Estimate"
        ctaLink="/contact"
      />

      {/* 4. PACKAGE COMPARISON CARDS (Light theme with highlighted dark card) */}
      <PackageCardsSection
        badge="Tailored Gutter Care"
        title="Find the Right Package for Your Home"
        subtitle="From routine seasonal clearing to downspout snaking and commercial properties, our pricing is honest, transparent, and firm."
      />

      {/* 5. DEEP DIVE CONTENT SECTIONS FROM SHEET */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Rainy Season Feature */}
          {rainySeasonSection && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold uppercase tracking-wider">
                  <CloudRain className="w-4 h-4" />
                  <span>Seasonal Protection</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {rainySeasonSection.title}
                </h2>
                <div
                  className="sheet-prose"
                  dangerouslySetInnerHTML={{ __html: rainySeasonSection.content }}
                />
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100">
                  <Image
                    src="/images/gutter-cleaning/rainwater-flowing-from-downspout-on-house-roof.webp"
                    alt="Rainwater flowing cleanly from downspout"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Thorough Process & Residential/Commercial Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {thoroughSection && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {thoroughSection.title}
                </h3>
                <div
                  className="sheet-prose text-sm text-slate-600"
                  dangerouslySetInnerHTML={{ __html: thoroughSection.content }}
                />
              </div>
            )}

            {resCommSection && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {resCommSection.title}
                </h3>
                <div
                  className="sheet-prose text-sm text-slate-600"
                  dangerouslySetInnerHTML={{ __html: resCommSection.content }}
                />
              </div>
            )}
          </div>

          {/* Serving Communities Section */}
          {servingSection && (
            <div className="bg-gradient-to-br from-blue-900 to-[#070C18] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="max-w-3xl relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>East Bay Coverage</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {servingSection.title}
                </h3>
                <div
                  className="sheet-prose sheet-prose-dark text-slate-200 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: servingSection.content }}
                />
                <div className="pt-2">
                  <Link
                    href="/areas-we-serve"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-bold text-sm underline underline-offset-4"
                  >
                    <span>View all East Bay service areas &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. TESTIMONIALS & TRUST GUARANTEE */}
      <TestimonialsTrustSection />

      {/* 7. VIBRANT BLUE PRE-FOOTER CTA BANNER */}
      <CtaBanner
        title={quoteSection ? quoteSection.title : "Get a Free Gutter Cleaning Quote in San Leandro"}
        description="Ready to stop worrying about your gutters before the next storm rolls in? Reliable, affordable, and always local — that is the Bayview difference."
        primaryText="Get Your Free Quote"
        primaryLink="/contact"
        secondaryText="View Gutter Services"
        secondaryLink="/gutter-cleaning"
        imageSrc="/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp"
      />
    </div>
  );
}
