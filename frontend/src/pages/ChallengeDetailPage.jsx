import React, { useState } from 'react';
import { ArrowLeft, Trophy, Calendar, Users, ShieldCheck, UploadCloud, Building2, CheckCircle2, MessageSquare } from 'lucide-react';
import { MOCK_CHALLENGES } from '../data/mockChallenges';

export const ChallengeDetailPage = ({ challengeId, onBack, onSubmitEntry, onOpenAuth }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Dr. Marcus Vance', date: '2 days ago', text: 'Does the CO2 conversion efficiency calculation require a full electrochemical schematic or mass balance model?' },
    { id: 2, author: 'Sponsor Lead (NASA)', date: '1 day ago', text: 'Hi Marcus, a simplified mass balance model accompanied by chemical reaction pathways is acceptable for the preliminary phase.' }
  ]);

  const challenge = MOCK_CHALLENGES.find(c => c.id === Number(challengeId)) || MOCK_CHALLENGES[0];

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentText) return;
    setComments([...comments, {
      id: Date.now(),
      author: 'Global Solver',
      date: 'Just now',
      text: commentText
    }]);
    setCommentText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back link */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-navy transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Explore Challenges</span>
      </button>

      {/* Main Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-brand-lime text-slate-950 text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
              {challenge.category}
            </span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-md">
              Phase: {challenge.phase.toUpperCase()}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {challenge.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {challenge.summary}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm">
            <div>
              <span className="text-xs text-slate-400 block uppercase font-bold">Total Prize Pool</span>
              <span className="text-3xl font-extrabold text-brand-lime">${challenge.prize_amount.toLocaleString()}</span>
            </div>
            <div className="border-l border-white/20 pl-6">
              <span className="text-xs text-slate-400 block uppercase font-bold">Sponsor</span>
              <span className="text-base font-bold text-white">{challenge.sponsor_name}</span>
            </div>
            <div className="border-l border-white/20 pl-6">
              <span className="text-xs text-slate-400 block uppercase font-bold">Submissions</span>
              <span className="text-base font-bold text-white">{challenge.submissions_count} Proposals</span>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <button
              onClick={() => onSubmitEntry(challenge)}
              className="bg-brand-lime text-slate-950 font-bold px-8 py-3.5 rounded-xl hover:bg-lime-400 transition text-sm shadow-lg flex items-center gap-2"
            >
              <UploadCloud className="w-5 h-5" />
              <span>Submit Challenge Entry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Detail Navigation Tabs */}
      <div className="border-b border-slate-200 flex gap-8 text-sm font-semibold">
        {['overview', 'guidelines', 'discussion'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 capitalize border-b-2 transition ${
              activeTab === tab
                ? 'border-brand-navy text-brand-navy font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
              <h3 className="text-xl font-bold text-slate-900">Challenge Objective</h3>
              <p>{challenge.description}</p>

              <h4 className="text-base font-bold text-slate-900 pt-2">Key Deliverables</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comprehensive engineering report detailing system architecture and energy balance calculations.</li>
                <li>CAD models or validated software simulation files (.STEP, .SLDPRT, or COMSOL export).</li>
                <li>3-minute video presentation describing the innovation breakthrough.</li>
              </ul>

              <h4 className="text-base font-bold text-slate-900 pt-2">Prize Pool Breakdown</h4>
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xs text-slate-500 font-semibold">1st Place Grand Prize</p>
                  <p className="text-lg font-bold text-emerald-600">${(challenge.prize_amount * 0.6).toLocaleString()}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xs text-slate-500 font-semibold">2nd Place Runner Up</p>
                  <p className="text-lg font-bold text-blue-600">${(challenge.prize_amount * 0.25).toLocaleString()}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xs text-slate-500 font-semibold">3rd Place Finalist</p>
                  <p className="text-lg font-bold text-purple-600">${(challenge.prize_amount * 0.15).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guidelines' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 text-sm text-slate-700">
              <h3 className="text-xl font-bold text-slate-900">Submission & IP Guidelines</h3>
              <p>Solvers maintain all background IP. Upon payout confirmation, the sponsor receives non-exclusive licensing rights for commercial deployment.</p>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900">Judging Criteria Rubric</h4>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between font-semibold text-xs"><span>Technical Feasibility & Efficiency</span><span>35%</span></div>
                  <div className="flex justify-between font-semibold text-xs"><span>Innovativeness & Novelty</span><span>30%</span></div>
                  <div className="flex justify-between font-semibold text-xs"><span>Scalability & Manufacturing Cost</span><span>20%</span></div>
                  <div className="flex justify-between font-semibold text-xs"><span>Quality of Submission Package</span><span>15%</span></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'discussion' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-navy" />
                <span>Solver Discussion Forum</span>
              </h3>

              <form onSubmit={handlePostComment} className="space-y-3">
                <textarea
                  rows={3}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Ask a technical clarification question to the challenge sponsor..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-brand-navy text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-brand-navyDark transition"
                >
                  Post Public Question
                </button>
              </form>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                {comments.map((cm) => (
                  <div key={cm.id} className="bg-slate-50 p-4 rounded-xl space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>{cm.author}</span>
                      <span className="text-slate-400 font-normal">{cm.date}</span>
                    </div>
                    <p className="text-xs text-slate-700">{cm.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Challenge Metadata</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Status</span>
                <span className="font-bold text-emerald-600 uppercase">{challenge.phase}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Deadline</span>
                <span className="font-semibold text-slate-900">Nov 30, 2026</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Active Solvers</span>
                <span className="font-semibold text-slate-900">{challenge.solvers_count} Registered</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSubmitEntry(challenge)}
                className="w-full bg-brand-navy text-white font-semibold py-2.5 rounded-xl hover:bg-brand-navyDark transition text-xs shadow-sm flex items-center justify-center gap-2"
              >
                <span>Submit Entry Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChallengeDetailPageComponent = ChallengeDetailPage;
export default ChallengeDetailPage;
