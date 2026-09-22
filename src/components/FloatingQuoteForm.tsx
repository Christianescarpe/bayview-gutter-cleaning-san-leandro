'use client';

import React, { useState } from 'react';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { CheckCircle2, Send, ArrowRight, Phone } from 'lucide-react';

interface FloatingQuoteFormProps {
  defaultService?: string;
  defaultLocation?: string;
}

export default function FloatingQuoteForm({
  defaultService = 'Gutter Cleaning',
  defaultLocation = 'San Leandro',
}: FloatingQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: defaultService,
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 transition-all">
      {submitted ? (
        <div className="text-center py-6">
          <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            Thank You for Your Quote Request!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Bayview Gutter Cleaning San Leandro responds within one business day. Need faster service? Call{' '}
            <a href={COMPANY_CONFIG.phoneTel} className="font-bold text-brand-blue hover:underline">
              {COMPANY_CONFIG.phone}
            </a>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-semibold text-brand-blue hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Request Your Free Gutter Cleaning Quote!
              </h3>
              <p className="text-xs text-slate-500">
                Insured local crews &bull; Same-week scheduling &bull; No obligation
              </p>
            </div>
            
            {/* Quick Call Direct Badge */}
            <a
              href={COMPANY_CONFIG.phoneTel}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-800 hover:text-brand-blue bg-slate-100 hover:bg-blue-50 px-3.5 py-1.5 rounded-full border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Call Us: {COMPANY_CONFIG.phone}</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone or Email
              </label>
              <input
                type="text"
                required
                placeholder="Phone or Email address"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-all"
              >
                <option value="Gutter Cleaning">Gutter Cleaning</option>
                <option value="Downspout Cleaning">Downspout Cleaning</option>
                <option value="Gutter & Downspout Cleaning">Gutter & Downspout Cleaning</option>
                <option value="Clogged Gutter Cleaning">Clogged Gutter Cleaning</option>
                <option value="Gutter Guard Installation">Gutter Guard Installation</option>
                <option value="Gutter Repair">Gutter Repair</option>
                <option value="Residential Gutter Cleaning">Residential Gutter Cleaning</option>
                <option value="Commercial Gutter Cleaning">Commercial Gutter Cleaning</option>
                <option value="Emergency Gutter Cleaning">Emergency Gutter Cleaning</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3 px-6 rounded-xl font-bold text-sm shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
