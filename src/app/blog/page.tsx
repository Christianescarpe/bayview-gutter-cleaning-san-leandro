import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogContent';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CtaBanner from '@/components/CtaBanner';
import { images } from '@/data/imageMap';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Blog & Homeowner Guides | Bayview San Leandro',
  description: 'Expert gutter maintenance guides, storm prep checklists, and advice for San Leandro and East Bay homeowners from Bayview Gutter Cleaning.',
};

export default function BlogIndexPage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        badgeText="Guides & Advice"
        headline="Gutter Maintenance"
        highlightText="Blog & Local Guides"
        subheadline="Expert tips, seasonal weather prep, and practical gutter guides designed specifically for homeowners in San Leandro and the surrounding East Bay communities."
        heroImage={images.heroDownspout}
        imageAlt="Bayview Gutter Cleaning San Leandro blog articles"
        primaryCtaText="Request Free Quote"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/gutter-cleaning"
        defaultService="Gutter Cleaning"
        defaultLocation="San Leandro"
      />

      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* Blog Cards Grid */}
      <section className="py-20 sm:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/50">
              San Leandro Gutter Knowledge
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Essential Articles for East Bay Homeowners
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Learn how to protect your roofline, downspouts, and foundation from seasonal rainstorms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={
                      idx % 4 === 0
                        ? '/images/gutter-cleaning/man-cleans-leaves-from-gutters-in-autumn.webp'
                        : idx % 4 === 1
                        ? '/images/gutter-cleaning/rainwater-flowing-from-downspout-on-house-roof.webp'
                        : idx % 4 === 2
                        ? '/images/gutter-cleaning/rooftop-gutter-protection-system-on-a-residential.webp'
                        : '/images/gutter-cleaning/gutters-clogged-with-leaves-and-small-branches.webp'
                    }
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#070C18]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Gutter Guide
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-blue transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mt-2.5 leading-relaxed">
                      {post.metaDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-brand-blue flex items-center gap-1 group-hover:underline">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                    <span>Bayview Gutter Care</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Pre-footer CTA */}
      <CtaBanner
        title="Ready to Protect Your Home Before the Rain?"
        description="Schedule a fast, friendly gutter cleaning visit with our insured San Leandro crew."
        primaryText="Get Free Quote"
        primaryLink="/contact"
        secondaryText="Explore Services"
        secondaryLink="/gutter-cleaning"
        imageSrc="/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp"
      />
    </div>
  );
}
