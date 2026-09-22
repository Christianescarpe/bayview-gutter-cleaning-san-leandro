'use client';

import React, { useState } from 'react';
import { PageSection } from '@/data/siteContent';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import ContentRenderer from '@/components/ContentRenderer';

interface FaqAccordionListProps {
  sections: PageSection[];
}

export default function FaqAccordionList({ sections }: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredSections = sections.filter((s) => {
    const q = query.toLowerCase();
    return s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search gutter questions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
        />
      </div>

      {/* Accordion Cards */}
      <div className="space-y-3.5">
        {filteredSections.map((sec, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? 'bg-white border-brand-blue/50 shadow-lg shadow-blue-500/5'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                      isOpen
                        ? 'bg-brand-blue text-white'
                        : 'bg-blue-50 text-brand-blue'
                    }`}
                  >
                    Q
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {sec.title}
                  </h3>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? 'bg-brand-blue text-white border-brand-blue rotate-180'
                      : 'border-slate-200 text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base border-t border-slate-100">
                  <ContentRenderer html={sec.content} />
                </div>
              )}
            </div>
          );
        })}

        {filteredSections.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">
              No matching questions found for &ldquo;{query}&rdquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
