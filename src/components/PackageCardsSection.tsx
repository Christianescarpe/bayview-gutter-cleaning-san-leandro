import React from 'react';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { Check, Phone, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

interface PackageCardsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function PackageCardsSection({
  badge = 'Packages',
  title = 'Find the Right Gutter Package for Your Property',
  subtitle = 'Every service includes ladder-safe hand removal, thorough downspout flushing, and 100% debris haul-away with zero surprises.',
}: PackageCardsSectionProps) {
  const packages = [
    {
      name: 'Residential Gutter Cleaning',
      badge: 'Single & Multi-Story Homes',
      highlight: false,
      priceDescription: 'Instant Phone Estimate',
      description: 'Ideal for standard residential homes needing pre-storm seasonal leaf and debris clearance.',
      features: [
        'Full hand-clearing of leaves, twigs & sediment',
        'Roof valley clearing & flow check',
        'Downspout visual & flow testing',
        'Visual check for loose brackets & rust',
        '100% debris haul-away from property',
        'Before-and-after photo confirmation',
      ],
      ctaText: `Call to Book: ${COMPANY_CONFIG.phone}`,
    },
    {
      name: 'Gutter & Downspout Deep Clean',
      badge: 'Most Popular / Full Care',
      highlight: true,
      priceDescription: 'Complete System Service',
      description: 'Our complete standard care package: comprehensive channel clearance plus deep downspout snaking and water flushing.',
      features: [
        'Complete channel hand-clearing & scrubbing',
        'High-flow downspout water flushing',
        'Mechanical snaking for stubborn downspout clogs',
        'Full gutter pitch & bracket inspection',
        'Before-and-after photographic report',
        'Full cleanup and bagging of all debris',
        'Priority same-week scheduling',
      ],
      ctaText: `Call to Book: ${COMPANY_CONFIG.phone}`,
    },
    {
      name: 'Commercial & Recurring Care',
      badge: 'Commercial & Multi-Unit',
      highlight: false,
      priceDescription: 'Standing Service Plans',
      description: 'Designed for commercial buildings, HOAs, retail properties, and homeowners seeking automatic seasonal renewals.',
      features: [
        'Custom maintenance schedule (Fall & Spring)',
        'Multi-story & flat roof drainage management',
        'Itemized invoices & property manager billing',
        'Dedicated account priority response',
        'Roofline debris & drainpipe clearing',
        'Pre-storm emergency overflow check',
      ],
      ctaText: `Call to Book: ${COMPANY_CONFIG.phone}`,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue border border-blue-200/80 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Need help picking? Call: {COMPANY_CONFIG.phone}</span>
            </div>
          </div>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-[#070C18] text-white shadow-2xl shadow-blue-900/20 lg:-translate-y-4 border-2 border-brand-blue/80'
                  : 'bg-white text-slate-900 shadow-xl border border-slate-200/80 hover:-translate-y-1'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Recommended Package
                </div>
              )}

              <div>
                {/* Package Header */}
                <div className="mb-6">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                      pkg.highlight ? 'text-blue-400' : 'text-brand-blue'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <h3
                    className={`text-2xl font-black tracking-tight ${
                      pkg.highlight ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <div
                    className={`text-lg font-extrabold mt-3 ${
                      pkg.highlight ? 'text-slate-200' : 'text-slate-700'
                    }`}
                  >
                    {pkg.priceDescription}
                  </div>
                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      pkg.highlight ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px my-6 ${
                    pkg.highlight ? 'bg-slate-800' : 'bg-slate-100'
                  }`}
                ></div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.highlight
                            ? 'bg-brand-blue text-white'
                            : 'bg-blue-100 text-brand-blue'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span
                        className={
                          pkg.highlight ? 'text-slate-300' : 'text-slate-700'
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Pure Phone CTA */}
              <div className="pt-2">
                <a
                  href={COMPANY_CONFIG.phoneTel}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2.5 transition-all shadow-md ${
                    pkg.highlight
                      ? 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-[1.01]'
                      : 'bg-slate-900 hover:bg-black text-white hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          * Pricing is determined by roof square footage, stories, pitch, and gutter condition. Call{' '}
          <a href={COMPANY_CONFIG.phoneTel} className="text-brand-blue font-bold hover:underline">
            {COMPANY_CONFIG.phone}
          </a>{' '}
          for an instant, firm phone quote before any work begins.
        </div>

      </div>
    </section>
  );
}
