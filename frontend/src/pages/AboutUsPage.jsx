import React from 'react';
import { Building2, Globe, Shield, Rocket, CheckCircle2 } from 'lucide-react';

export const AboutUsPage = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">About CrowdInnov.org</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Accelerating Human Progress Through Open Crowdsourcing</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Founded in 2018, CrowdInnov has grown to become the world's most trusted open innovation infrastructure provider.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <Globe className="w-8 h-8 text-brand-navy" />
          <h3 className="text-lg font-bold text-slate-900">Global Reach</h3>
          <p className="text-xs text-slate-600">Connecting problem solvers across 175 countries with leading corporate & governmental sponsors.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <Shield className="w-8 h-8 text-brand-navy" />
          <h3 className="text-lg font-bold text-slate-900">IP Security</h3>
          <p className="text-xs text-slate-600">Standardized legal contracts ensure 100% compliant IP transfer and prize disbursement.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <Rocket className="w-8 h-8 text-brand-navy" />
          <h3 className="text-lg font-bold text-slate-900">Proven Execution</h3>
          <p className="text-xs text-slate-600">Over 1,240 challenges successfully completed with a 94% solver satisfaction rating.</p>
        </div>
      </div>
    </div>
  );
};

export const AboutUsPageComponent = AboutUsPage;
export default AboutUsPage;
