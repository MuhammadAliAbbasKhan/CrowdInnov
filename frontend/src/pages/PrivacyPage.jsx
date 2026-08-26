import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-white rounded-3xl border border-slate-200 shadow-sm my-8">
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Legal Notice</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Privacy Policy & Data Rights</h1>
        <p className="text-xs text-slate-500 mt-1">Last Updated: August 26, 2026</p>
      </div>

      <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">1. Information Collection & Usage</h3>
        <p>CrowdInnov.org collects account registration data (name, work email, payment credentials via Stripe), submission packages, and platform analytics to deliver open innovation marketplace services.</p>

        <h3 className="text-base font-bold text-slate-900">2. Data Protection & GDPR Compliance</h3>
        <p>We strictly adhere to EU GDPR, California CCPA, and global data protection laws. Solvers may request data deletion or export their submission history at any time.</p>

        <h3 className="text-base font-bold text-slate-900">3. IP Confidentiality</h3>
        <p>Challenge submissions remain strictly confidential between the solver and the peer judging panel until prize selection is finalized.</p>
      </div>
    </div>
  );
};

export const PrivacyPageComponent = PrivacyPage;
export default PrivacyPage;
