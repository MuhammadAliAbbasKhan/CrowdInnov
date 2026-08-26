import React from 'react';

export const CookiePolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-white rounded-3xl border border-slate-200 shadow-sm my-8">
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Cookie Governance</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Cookie Policy & Preference Settings</h1>
      </div>

      <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">1. Essential Cookies</h3>
        <p>Required for secure authentication, session management, and Stripe checkout processing.</p>

        <h3 className="text-base font-bold text-slate-900">2. Performance & Analytics Cookies</h3>
        <p>Anonymized telemetry to help CrowdInnov optimize challenge search performance and solver page load speeds.</p>
      </div>
    </div>
  );
};

export const CookiePolicyPageComponent = CookiePolicyPage;
export default CookiePolicyPage;
