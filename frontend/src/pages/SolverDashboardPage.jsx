import React from 'react';
import { User, Trophy, DollarSign, UploadCloud, CheckCircle2, Clock } from 'lucide-react';
import { MOCK_CHALLENGES } from '../data/mockChallenges';

export const SolverDashboardPage = ({ user, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Profile Bar */}
      <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-lime text-slate-950 flex items-center justify-center text-2xl font-bold">
            {user?.name?.[0] || 'S'}
          </div>
          <div>
            <span className="text-xs font-bold text-brand-lime uppercase tracking-wider">Global Solver Hub</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{user?.name || 'Dr. Hans Weber'}</h1>
            <p className="text-xs text-slate-300">{user?.email || 'h.weber@institute.org'}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-white/10 px-4 py-2 rounded-xl text-center border border-white/15">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Prize Earnings</span>
            <span className="text-xl font-extrabold text-brand-lime">$12,500</span>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-xl text-center border border-white/15">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Submissions</span>
            <span className="text-xl font-extrabold text-white">3 Active</span>
          </div>
        </div>
      </div>

      {/* Submissions Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Your Active Challenge Submissions</h3>
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
          <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">Space & Aerospace</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">NASA Deep Space Carbon Capture & Recycling System</h4>
              <p className="text-xs text-slate-500">Submitted: Aug 22, 2026 • Receipt ID: SUB-2026-9812</p>
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded">Under Peer Review</span>
          </div>

          <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">CleanTech</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Global Clean Water Desalination Breakthrough Challenge</h4>
              <p className="text-xs text-slate-500">Submitted: Jul 14, 2026 • Receipt ID: SUB-2026-4410</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">2nd Place Winner ($12,500 Disbursed)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SolverDashboardPageComponent = SolverDashboardPage;
export default SolverDashboardPage;
