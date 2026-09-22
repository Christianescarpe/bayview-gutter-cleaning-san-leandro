'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { Phone, Calendar } from 'lucide-react';

export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070C18]/95 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={COMPANY_CONFIG.phoneTel}
          className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call {COMPANY_CONFIG.phone}</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4 text-blue-400" />
          <span>Get Free Quote</span>
        </Link>
      </div>
    </div>
  );
}
