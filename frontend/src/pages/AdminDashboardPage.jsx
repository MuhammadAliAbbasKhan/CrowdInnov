import React from 'react';
import { ShieldCheck, Database, Users, Trophy, DollarSign, Activity, CheckCircle2 } from 'lucide-react';

export const AdminDashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white p-8 rounded-3xl flex flex-wrap justify-between items-center shadow-xl gap-4">
        <div>
          <span className="text-xs font-bold text-brand-lime uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-brand-lime" /> Executive Console
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">CrowdInnov Platform Control Center</h1>
        </div>
        <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Open Public Access Active</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-semibold uppercase">Total Prize Fund</span>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">$52,450,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-semibold uppercase">Active Challenges</span>
          <p className="text-2xl sm:text-3xl font-extrabold text-brand-navy">1,240</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-semibold uppercase">Global Solvers</span>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">485,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-semibold uppercase">MongoDB Cloud</span>
          <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">SYNCED</p>
        </div>
      </div>

      {/* Sync Status Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Database className="w-5 h-5 text-brand-navy" />
          Real-Time Dual Database Sync & Admin Controls
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          The CrowdInnov.org platform maintains automated dual-sync persistence. All challenges, submissions, and newsletter subscriptions written to SQLite are synchronized in real-time to MongoDB Cloud.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-700">Primary Relational Engine</span>
            <p className="text-xs text-slate-500">SQLite3 Local Cluster persistent backend (django.db)</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-700">Cloud NoSQL Sync Engine</span>
            <p className="text-xs text-slate-500">MongoDB Atlas Cloud Production Driver (db_mongo.py)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
