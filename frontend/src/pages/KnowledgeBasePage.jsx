import React, { useState } from 'react';
import { BookOpen, Search, FileText, ArrowRight } from 'lucide-react';

export const KnowledgeBasePage = () => {
  const [query, setQuery] = useState('');

  const articles = [
    { title: 'Standard Solver License Agreement (SSLA)', cat: 'Legal & IP', desc: 'Understanding your background IP rights and prize assignment terms.' },
    { title: 'Video Submission Encoding Guidelines', cat: 'Technical', desc: 'Formatting 1080p MP4 presentations for peer review panels.' },
    { title: 'Escrow Prize Payout Schedules', cat: 'Finance', desc: 'How prize funds are verified, held in escrow, and released within 5 days.' },
    { title: 'Peer Review Rubric Scoring Mechanics', cat: 'Judging', desc: 'Detailed breakdown of how judges score feasibility, novelty, and packaging.' }
  ];

  const filtered = articles.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">CrowdInnov Help Desk</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Knowledge Base & Documentation</h1>
        <p className="text-slate-600 text-sm">Search detailed guides on IP rights, submission requirements, and payout verification.</p>
        
        <div className="max-w-xl mx-auto relative pt-2">
          <Search className="w-4 h-4 absolute left-3 top-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation (e.g., Escrow, Video format, IP)..."
            className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none bg-white shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4">
        {filtered.map((art, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">{art.cat}</span>
            <h3 className="text-base font-bold text-slate-900">{art.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{art.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const KnowledgeBasePageComponent = KnowledgeBasePage;
export default KnowledgeBasePage;
