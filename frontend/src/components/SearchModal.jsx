import React, { useState } from 'react';
import { Search, X, Trophy, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { MOCK_CHALLENGES } from '../data/mockChallenges';
import { MOCK_BLOG_POSTS, MOCK_EVENTS } from '../data/mockData';

export const SearchModal = ({ isOpen, onClose, onSelectChallenge, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredChallenges = MOCK_CHALLENGES.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    c.summary.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = MOCK_BLOG_POSTS.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200">
        {/* Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search challenges, carbon capture, AI diagnostics, articles..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 font-medium focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-200 rounded">
              Clear
            </button>
          )}
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results View */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 divide-y divide-slate-100">
          {/* Challenges Section */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <Trophy className="w-4 h-4 text-brand-lime" />
              <span>Challenges ({filteredChallenges.length})</span>
            </div>
            {filteredChallenges.length === 0 ? (
              <p className="text-xs text-slate-500 italic py-1">No matching active challenges found.</p>
            ) : (
              <div className="space-y-2">
                {filteredChallenges.map((ch) => (
                  <div
                    key={ch.id}
                    onClick={() => {
                      onSelectChallenge(ch.id);
                      onClose();
                    }}
                    className="p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition cursor-pointer flex justify-between items-center group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                          {ch.category}
                        </span>
                        <span className="text-xs text-emerald-600 font-bold">
                          ${ch.prize_amount.toLocaleString()} Prize
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-brand-navy mt-1">
                        {ch.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-navy transition transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Blogs Section */}
          <div className="pt-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>Articles & Insights ({filteredBlogs.length})</span>
            </div>
            {filteredBlogs.map((b) => (
              <div
                key={b.id}
                onClick={() => {
                  onNavigate('blog');
                  onClose();
                }}
                className="p-2.5 rounded-lg hover:bg-slate-50 transition cursor-pointer flex justify-between items-center group"
              >
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 group-hover:text-brand-navy">{b.title}</h5>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{b.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Search powered by CrowdInnov Instant Index</span>
          <span className="font-mono text-[11px]">ESC to exit</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
