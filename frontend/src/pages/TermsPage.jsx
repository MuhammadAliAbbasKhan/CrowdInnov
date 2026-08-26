import React from 'react';

export const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-white rounded-3xl border border-slate-200 shadow-sm my-8">
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Legal Terms</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Platform Terms of Service</h1>
        <p className="text-xs text-slate-500 mt-1">Effective Date: January 1, 2026</p>
      </div>

      <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h3>
        <p>By registering a solver account or hosting a challenge on CrowdInnov.org, you agree to comply with all challenge rules, IP assignment contracts, and platform code of conduct.</p>

        <h3 className="text-base font-bold text-slate-900">2. Prize Disbursement & Escrow</h3>
        <p>Challenge sponsors must deposit full prize funds into CrowdInnov escrow accounts prior to challenge launch. Payouts are guaranteed upon verified winner selection.</p>

        <h3 className="text-base font-bold text-slate-900">3. Intellectual Property Rights</h3>
        <p>Solvers retain background IP rights. Winning entry IP is transferred or licensed to the sponsor as explicitly specified in individual challenge guidelines.</p>
      </div>
    </div>
  );
};

export const TermsPageComponent = TermsPage;
export default TermsPage;
