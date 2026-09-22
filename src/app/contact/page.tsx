import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageBySlug } from '@/data/siteContent';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CtaBanner from '@/components/CtaBanner';
import ContentRenderer from '@/components/ContentRenderer';
import { images } from '@/data/imageMap';
import ContactFormSection from './ContactFormSection';
import { MapPin, Clock, ShieldCheck, CheckCircle2, Phone, Mail, ExternalLink, PhoneCall } from 'lucide-react';

const contactPageData = getPageBySlug('contact')!;

export const metadata: Metadata = {
  title: contactPageData.seoTitle,
  description: contactPageData.metaDescription,
  keywords: contactPageData.focusKeywords,
};

export default function ContactPage() {
  const sections = contactPageData.sections;

  return (
    <div>
      {/* Hero */}
      <HeroSection
        badgeText="Get In Touch"
        headline="Contact Bayview"
        highlightText="Gutter Cleaning San Leandro"
        subheadline={contactPageData.introHtml}
        heroImage={images.heroTechnician}
        imageAlt="Contact Bayview Gutter Cleaning San Leandro team"
        primaryCtaText="Request Free Quote"
        primaryCtaLink="#quote-form"
        secondaryCtaText="View Service Areas"
        secondaryCtaLink="/areas-we-serve"
        defaultService="Gutter Cleaning"
        defaultLocation="San Leandro"
      />

      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* Main Contact & Form Section */}
      <section id="quote-form" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Guidelines from Sheet (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/50">
                  Local Response
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                  How to Reach Our Team
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                  We respond to most inquiries within one business day and can often schedule appointments the same week across San Leandro and the East Bay.
                </p>
              </div>

              {/* Prominent Call Box */}
              <div className="bg-gradient-to-tr from-brand-blue to-blue-600 text-white p-6 rounded-3xl shadow-xl shadow-blue-500/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-100">
                  <PhoneCall className="w-4 h-4" />
                  <span>Immediate Phone Assistance</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black">
                  {COMPANY_CONFIG.phone}
                </div>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Call or text our San Leandro office during business hours for same-week scheduling or pre-storm overflow assistance.
                </p>
                <div className="pt-2">
                  <a
                    href={COMPANY_CONFIG.phoneTel}
                    className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-slate-100 font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-slate-900">Hours of Operation</div>
                    <div className="text-slate-600">Monday – Saturday: Standard Business Hours</div>
                    <div className="text-xs text-slate-400 mt-0.5">Emergency storm overflow prioritized</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-slate-900">Service Coverage</div>
                    <div className="text-slate-600">San Leandro, San Lorenzo, Oakland, Hayward, Castro Valley, Alameda, Union City, Fremont, and Newark.</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-slate-900">Safety & Guarantee</div>
                    <div className="text-slate-600">Fully insured ladder-safe crews, itemized invoicing, and full debris haul-away.</div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-900">San Leandro Office Location</span>
                  <a
                    href="https://maps.app.goo.gl/w1PB7fvwjkCy7mZZ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-blue hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    title="Bayview Gutter Cleaning San Leandro Office Map"
                    src="https://maps.google.com/maps?q=Bayview+Gutter+Cleaning+San+Leandro&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Quote Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactFormSection />
            </div>

          </div>

          {/* Deep Dive Content from Sheet */}
          <div className="mt-20 pt-16 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.slice(1).map((sec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-3"
              >
                <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  {sec.title}
                </h3>
                <div
                  className="sheet-prose text-sm text-slate-600"
                  dangerouslySetInnerHTML={{ __html: sec.content }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pre-footer CTA */}
      <CtaBanner
        title="Get Your Free Gutter Cleaning Quote Today"
        description="Don't wait for the next storm to find out your gutters are clogged. Reach out today and let Bayview take gutter maintenance off your to-do list for good."
        primaryText="Request Free Quote"
        primaryLink="#quote-form"
        secondaryText="Explore Services"
        secondaryLink="/gutter-cleaning"
        imageSrc="/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp"
      />
    </div>
  );
}
