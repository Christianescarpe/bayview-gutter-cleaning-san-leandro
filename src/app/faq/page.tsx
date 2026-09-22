import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageBySlug } from '@/data/siteContent';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CtaBanner from '@/components/CtaBanner';
import ContentRenderer from '@/components/ContentRenderer';
import { images } from '@/data/imageMap';
import FaqAccordionList from './FaqAccordionList';

const faqPageData = getPageBySlug('faq')!;

export const metadata: Metadata = {
  title: faqPageData.seoTitle,
  description: faqPageData.metaDescription,
  keywords: faqPageData.focusKeywords,
};

export default function FaqPage() {
  // Extract questions (all H2 sections)
  const faqSections = faqPageData.sections;

  return (
    <div>
      {/* Hero */}
      <HeroSection
        badgeText="Frequently Asked Questions"
        headline="Gutter Cleaning FAQ"
        highlightText="San Leandro, CA"
        subheadline={faqPageData.introHtml}
        heroImage={images.heroInspection}
        imageAlt="Gutter inspection and FAQ Bayview Gutter Cleaning San Leandro"
        primaryCtaText="Ask a Question"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/gutter-cleaning"
        defaultService="Gutter Inspection"
        defaultLocation="San Leandro"
      />

      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* Interactive FAQ Accordion List */}
      <section className="py-20 sm:py-28 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/50">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Gutter Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Everything you need to know about gutter cleaning schedules, pricing, downspouts, and DIY risks in San Leandro.
            </p>
          </div>

          <FaqAccordionList sections={faqSections} />
        </div>
      </section>

      {/* Pre-footer CTA */}
      <CtaBanner
        title="Still Have Questions About Your Roofline?"
        description="Browse our full gutter cleaning and repair services or contact our team directly for honest guidance specific to your home."
        primaryText="Contact Our Office"
        primaryLink="/contact"
        secondaryText="View Gutter Services"
        secondaryLink="/gutter-cleaning"
        imageSrc="/images/gutter-cleaning/male-technician-in-blue-uniform-climbing-ladder-on.webp"
      />
    </div>
  );
}
