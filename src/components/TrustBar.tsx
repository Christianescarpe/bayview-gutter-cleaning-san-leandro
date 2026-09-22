import React from 'react';
import { Star, ShieldCheck, Sparkles, CheckCircle2, Clock, Camera } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 pt-6 pb-2 border-t border-slate-200/80">
      <div className="flex flex-wrap items-center justify-between gap-6 text-slate-600">
        
        {/* Star Rating */}
        <div className="flex items-center gap-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <div className="text-xs">
            <span className="font-bold text-slate-900 block">Rated 5.0 in San Leandro</span>
            <span className="text-slate-500 block">Insured Local Crews</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-slate-200"></div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>Fully Insured</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            <span>Downspouts Flushed</span>
          </div>

          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-brand-blue" />
            <span>Before & After Photos</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span>100% Debris Haul-Away</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-blue" />
            <span>Same-Week Service</span>
          </div>
        </div>

      </div>
    </div>
  );
}
