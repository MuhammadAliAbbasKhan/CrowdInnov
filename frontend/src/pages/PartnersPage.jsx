import React from 'react';
import { MOCK_PARTNERS } from '../data/mockData';

export const PartnersPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Our Global Network</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Featured CrowdInnov Partners</h1>
        <p className="text-slate-600 text-sm">Empowering government agencies, corporate labs, non-profits, and research institutes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_PARTNERS.map((pt, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <img src={pt.logo} alt={pt.name} className="w-16 h-16 rounded-xl mx-auto object-cover border border-slate-200" />
            <h3 className="text-lg font-bold text-slate-900">{pt.name}</h3>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
              {pt.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PartnersPageComponent = PartnersPage;
export default PartnersPage;
