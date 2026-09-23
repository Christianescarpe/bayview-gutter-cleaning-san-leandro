'use client';

import React from 'react';
import { COMPANY_CONFIG } from '@/data/companyConfig';
import { PhoneCall, ShieldCheck } from 'lucide-react';

export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070C18]/95 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl">
      <div className="max-w-md mx-auto">
        <a
          href={COMPANY_CONFIG.phoneTel}
          className="w-full flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 px-4 rounded-xl font-black text-sm sm:text-base shadow-lg shadow-brand-blue/30 transition-all active:scale-[0.98]"
        >
          <PhoneCall className="w-5 h-5 text-white animate-bounce" />
          <span>Tap to Call: {COMPANY_CONFIG.phone}</span>
        </a>
      </div>
    </div>
  );
}
