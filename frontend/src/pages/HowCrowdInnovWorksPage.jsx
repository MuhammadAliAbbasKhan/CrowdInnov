import React, { useState } from 'react';
import { Lightbulb, Trophy, CheckCircle, UploadCloud, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowCrowdInnovWorksPage = ({ onNavigate }) => {
  const [roleTab, setRoleTab] = useState('sponsor');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Crowdsourcing Guide</span>
        <h1 className="text-4xl font-extrabold text-slate-900">How CrowdInnov Works</h1>
        <p className="text-slate-600 text-sm">Step-by-step architecture powering open innovation competitions.</p>
      </div>

      {/* Role Toggle */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1 rounded-xl flex gap-2 text-xs font-bold">
          <button
            onClick={() => setRoleTab('sponsor')}
            className={`px-6 py-2.5 rounded-lg transition ${
              roleTab === 'sponsor' ? 'bg-brand-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Challenge Sponsors
          </button>
          <button
            onClick={() => setRoleTab('solver')}
            className={`px-6 py-2.5 rounded-lg transition ${
              roleTab === 'solver' ? 'bg-brand-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Global Solvers
          </button>
        </div>
      </div>

      {roleTab === 'sponsor' ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-brand-lime">01</span>
            <h3 className="text-base font-bold text-slate-900">Define the Problem</h3>
            <p className="text-xs text-slate-600">Work with CrowdInnov challenge architects to scope problem guidelines, judging criteria, and prize tier.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-brand-lime">02</span>
            <h3 className="text-base font-bold text-slate-900">Launch Challenge</h3>
            <p className="text-xs text-slate-600">Deposit escrow prize funds and publish your challenge to 485,000+ targeted global innovators.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-brand-lime">03</span>
            <h3 className="text-base font-bold text-slate-900">Peer Review & Judging</h3>
            <p className="text-xs text-slate-600">Evaluate anonymized solver technical packages via standardized peer rubrics.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-brand-lime">04</span>
            <h3 className="text-base font-bold text-slate-900">Award & Transfer IP</h3>
            <p className="text-xs text-slate-600">Disburse prize awards and receive full legal assignment of winning solution IP.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-sky-500">01</span>
            <h3 className="text-base font-bold text-slate-900">Browse & Register</h3>
            <p className="text-xs text-slate-600">Explore challenges matching your technical expertise (aerospace, AI, clean energy, bio).</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-sky-500">02</span>
            <h3 className="text-base font-bold text-slate-900">Develop & Upload Proposal</h3>
            <p className="text-xs text-slate-600">Submit engineering designs, code, or experimental data packages before the deadline.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-sky-500">03</span>
            <h3 className="text-base font-bold text-slate-900">Win Cash & Recognition</h3>
            <p className="text-xs text-slate-600">Receive cash prize payouts directly to your bank wire or Stripe account upon winning selection.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const HowCrowdInnovWorksPageComponent = HowCrowdInnovWorksPage;
export default HowCrowdInnovWorksPage;
