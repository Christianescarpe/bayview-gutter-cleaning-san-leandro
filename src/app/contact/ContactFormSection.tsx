'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { services, locations } from '@/data/siteContent';

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    service: 'Gutter Cleaning',
    stories: 'Single Story',
    lastCleaned: 'Over 1 Year Ago',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || (!formData.email && !formData.phone)) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Quote Request Received!
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, {formData.fullName}. Our San Leandro office will review your address and property details and reply within one business day with a firm estimate.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm font-semibold text-brand-blue hover:underline"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Request Your Free, No-Obligation Quote
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Provide your address and home details so we can give you an accurate quote before we even arrive.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(510) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Street Address & City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1234 Estudillo Ave, San Leandro"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                >
                  {services.map((s) => (
                    <option key={s.url} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Stories on Home
                </label>
                <select
                  value={formData.stories}
                  onChange={(e) => setFormData({ ...formData, stories: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                >
                  <option value="Single Story">Single Story</option>
                  <option value="Two Story">Two Story</option>
                  <option value="Three+ Story / Split Level">Three+ Story / Split Level</option>
                  <option value="Commercial Building">Commercial Building</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Last Cleaned
                </label>
                <select
                  value={formData.lastCleaned}
                  onChange={(e) => setFormData({ ...formData, lastCleaned: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
                >
                  <option value="Within 6 Months">Within 6 Months</option>
                  <option value="6-12 Months Ago">6-12 Months Ago</option>
                  <option value="Over 1 Year Ago">Over 1 Year Ago</option>
                  <option value="Never / Unknown">Never / Unknown</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Special Notes or Problem Areas
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific concerns, e.g. overflowing downspout, steep roof, pine trees overhead..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-brand-blue/25 hover:shadow-brand-blue/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Submit Free Quote Request</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Your privacy is protected. We do not sell or share contact details.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
