'use client';

import React from 'react';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { Phone, PhoneCall, ShieldCheck, CheckCircle2, Clock, Calendar, MapPin } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span>Fast Phone Scheduling</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Call or Text Our San Leandro Office
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          We have streamlined our booking process to save you time. Simply call or text our local team with your address and home details for an instant quote and same-week booking.
        </p>
      </div>

      {/* Hero Phone Dial Block */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg border border-slate-800">
        <div className="text-xs uppercase tracking-wider font-extrabold text-blue-400">
          Direct Line & Customer Service
        </div>
        <div className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          {COMPANY_CONFIG.phone}
        </div>
        <p className="text-xs text-slate-400">
          Available Monday through Saturday during standard business hours. Active storm overflows are given priority dispatch.
        </p>
        <div className="pt-2">
          <a
            href={COMPANY_CONFIG.phoneTel}
            className="w-full inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-base sm:text-lg font-black py-4 px-8 rounded-xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <PhoneCall className="w-5 h-5 text-white" />
            <span>Tap to Call: {COMPANY_CONFIG.phone}</span>
          </a>
        </div>
      </div>

      {/* What to provide when calling */}
      <div className="space-y-3 pt-2">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
          What to Share When You Call:
        </h4>
        <ul className="space-y-2.5 text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span><strong>Your Street Address:</strong> Confirms your home is within our San Leandro & East Bay coverage area.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span><strong>Home Stories & Tree Cover:</strong> Single-story, two-story, or proximity to eucalyptus, pines, or oaks.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span><strong>Preferred Appointment Window:</strong> We offer convenient morning and afternoon time slots.</span>
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="w-4 h-4 text-brand-blue" />
        <span>No pushy sales. Upfront, transparent pricing provided before any work starts.</span>
      </div>
    </div>
  );
}
