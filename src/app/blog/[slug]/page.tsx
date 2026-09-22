import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blogContent';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CtaBanner from '@/components/CtaBanner';
import ContentRenderer from '@/components/ContentRenderer';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.focusKeywords,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <HeroSection
        badgeText="Homeowner Gutter Guide"
        headline={post.parsedH1 || post.title}
        subheadline={post.introHtml || post.metaDescription}
        heroImage="/images/gutter-cleaning/man-cleans-leaves-from-gutters-in-autumn.webp"
        imageAlt={post.title}
        primaryCtaText="Request Free Quote"
        primaryCtaLink="/contact"
        secondaryCtaText="All Blog Guides"
        secondaryCtaLink="/blog"
        defaultService="Gutter Cleaning"
        defaultLocation="San Leandro"
      />

      <div className="bg-white pt-16 sm:pt-20">
        <TrustBar />
      </div>

      {/* Main Post Content */}
      <article className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all guides</span>
            </Link>
          </div>

          {/* Full content renderer from sheet */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm">
            <ContentRenderer html={post.contentHtml} />
          </div>

          {/* Bottom Author & Share Box */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                B
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">
                  Bayview Gutter Cleaning San Leandro
                </div>
                <div className="text-xs text-slate-500">
                  Local gutter care specialists serving San Leandro & East Bay
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all"
            >
              Get a Free Estimate
            </Link>
          </div>

        </div>
      </article>

      {/* Pre-footer CTA */}
      <CtaBanner
        title="Need Hands-On Help With Your Gutters?"
        description="Don't risk ladder falls or water overflow. Let our trained and insured crews take care of your gutters safely."
        primaryText="Schedule Service"
        primaryLink="/contact"
        secondaryText="View Gutter Services"
        secondaryLink="/gutter-cleaning"
        imageSrc="/images/gutter-cleaning/male-technician-in-blue-uniform-climbing-ladder-on.webp"
      />
    </div>
  );
}
