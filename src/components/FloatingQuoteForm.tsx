'use client';

import React from 'react';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { Phone, PhoneCall, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface FloatingQuoteFormProps {
  defaultService?: string;
  defaultLocation?: string;
}

export default function FloatingQuoteForm({
  defaultService = 'Gutter Cleaning',
  defaultLocation = 'San Leandro',
}: FloatingQuoteFormProps) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 transition-all">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Information */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            <span>Fast Same-Week Scheduling</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Ready to Clean Your Gutters in {defaultLocation}?
          </h3>

          <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
            Call or text our San Leandro office for instant pricing, ladder-safe scheduling, and same-week appointments. No forms, no waiting.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span>Mon – Sat Standard Hours</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
              <span>Fully Insured Crews</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
              <span>100% Debris Haul-Away</span>
            </span>
          </div>
        </div>

        {/* Right Phone Action Button */}
        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3">
          <a
            href={COMPANY_CONFIG.phoneTel}
            className="inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-base sm:text-lg font-black px-8 py-4 rounded-2xl shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <span>Call {COMPANY_CONFIG.phone}</span>
          </a>

          <span className="text-xs text-center text-slate-400 font-medium">
            Tap to call directly from your device
          </span>
        </div>

      </div>
    </div>
  );
}
