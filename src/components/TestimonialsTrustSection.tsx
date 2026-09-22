import React from 'react';
import Image from 'next/image';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TestimonialsTrustSection() {
  const reviews = [
    {
      name: 'Michael T.',
      neighborhood: 'Estudillo Estates, San Leandro',
      stars: 5,
      text: 'Bayview cleared our two-story roofline after heavy eucalyptus debris built up. The crew arrived right on time, flushed every downspout, and left our yard spotless with zero mess.',
    },
    {
      name: 'Sarah K.',
      neighborhood: 'Broadmoor, San Leandro',
      stars: 5,
      text: 'Having photos of before and after what came out of our gutters gave us complete peace of mind. Truly professional, insured ladder work, and fair pricing without surprises.',
    },
    {
      name: 'David R.',
      neighborhood: 'San Leandro Marina',
      stars: 5,
      text: 'We set up an automatic standing fall appointment for our rental property. Prompt communication, itemized invoicing, and great service year after year.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual with quotation badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-square bg-slate-900">
              <Image
                src="/images/gutter-cleaning/man-working-on-gutter-wearing-gloves-and-cap.webp"
                alt="Bayview Gutter Cleaning San Leandro technician on ladder"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C18]/80 via-[#070C18]/20 to-transparent"></div>

              {/* Floating Quote Badge */}
              <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-xl">
                <Quote className="w-8 h-8" />
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#070C18]/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Service Guarantee</span>
                </div>
                <p className="text-xs text-slate-300">
                  If we miss any gutter section or downspout during your scheduled cleaning, let us know and we will return to make it right.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Reviews & Feedback Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span>Customer Satisfaction</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Real Results, Real Satisfaction
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                San Leandro homeowners choose Bayview Gutter Cleaning for prompt communication, ladder safety, and thorough downspout flushing.
              </p>
            </div>

            {/* Testimonials List */}
            <div className="space-y-4">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6 hover:shadow-md transition-shadow relative"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.stars)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-slate-300" />
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                    <span className="font-bold text-slate-900">{rev.name}</span>
                    <span className="text-slate-500">{rev.neighborhood}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
