import React, { useState } from 'react';
import { 
  Crown, Sparkles, Zap, Check, Send, CheckCircle2, 
  FileText, Download, ShieldCheck, Lock, Unlock, MessageSquare, Award, Clock, RefreshCw
} from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const ExplorePremiumFeaturesPage = ({ user, onNavigate, onOpenCheckout, isPaidUser = false, onSimulateExpire }) => {
  const { addToast } = useToast();

  const isExpired = user?.paidUntil && Date.now() > user.paidUntil;
  const hasPaidAccess = (isPaidUser || user?.is_paid) && !isExpired;

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    organization: '',
    selectedFeatures: ['ai_optimizer', 'private_grants'],
    projectDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [aiScore, setAiScore] = useState(null);
  const [proposalText, setProposalText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 1. EXPIRED SUBSCRIPTION LOCK SCREEN
  if (isExpired) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-rose-200 shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-rose-200">
            <Clock className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
              Monthly Subscription Expired
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              30-Day Monthly Pass Ended
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your 30-day monthly subscription has completed its billing cycle. To continue exploring premium features, AI proposal tools, and private grant dossiers, please renew your monthly payment.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => onOpenCheckout(user?.planTier || 'pro_tier')}
              className="w-full bg-brand-navy hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4 text-brand-lime" />
              <span>Renew Monthly Subscription ($100 / $200 / $300)</span>
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition text-xs"
            >
              View All Plans
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. UNPAID LOCK SCREEN
  if (!hasPaidAccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-amber-200">
            <Lock className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
              Paid Members Only
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Access Restricted
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              The <strong>Explore Premium Features</strong> portal and custom feature exploration form are exclusively available to paid monthly subscribers. Please subscribe to a plan ($100, $200, or $300) to unlock instant access.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => onOpenCheckout('pro_tier')}
              className="w-full bg-brand-navy hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
            >
              <Crown className="w-4 h-4 text-brand-lime fill-brand-lime" />
              <span>Subscribe & Unlock Pass ($100 / $200 / $300)</span>
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition text-xs"
            >
              Compare Plans
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate days remaining on 30-day monthly pass
  const daysLeft = user?.paidUntil 
    ? Math.max(1, Math.ceil((user.paidUntil - Date.now()) / (1000 * 60 * 60 * 24)))
    : 30;

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => {
      const current = prev.selectedFeatures;
      if (current.includes(featureId)) {
        return { ...prev, selectedFeatures: current.filter(f => f !== featureId) };
      } else {
        return { ...prev, selectedFeatures: [...current, featureId] };
      }
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) {
      addToast('Please complete all required fields.', 'error');
      return;
    }

    setSubmitted(true);
    addToast('Premium feature request submitted! Your VIP manager will process it shortly.', 'success');
  };

  const handleRunAiAnalysis = () => {
    if (!proposalText.trim()) {
      addToast('Please enter your proposal draft text to run AI analysis.', 'error');
      return;
    }

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiScore({
        overall: 94,
        feasibility: 96,
        sponsorAlignment: 92,
        clarity: 95,
        suggestions: [
          'High alignment with NASA carbon capture thermodynamics requirements.',
          'Add quantitative timeline for stage 2 prototype testing.',
          'Include IP licensing terms in section 4.'
        ]
      });
      addToast('AI Proposal Optimizer analysis complete!', 'success');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* 1. VIP Banner */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-slate-950 via-brand-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 p-8 opacity-10 pointer-events-none">
            <Crown className="w-64 h-64 text-amber-400" />
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold tracking-wider uppercase">
                <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>VIP Paid Member Portal</span>
              </div>

              {/* Expiration simulator button for testing */}
              {onSimulateExpire && (
                <button
                  onClick={onSimulateExpire}
                  className="text-[11px] font-bold bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 px-3 py-1 rounded-lg transition flex items-center gap-1"
                  title="Test monthly subscription expiration"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Simulate 30-Day Expiration</span>
                </button>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Explore Premium Features & Solvers Hub
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Welcome to your paid member portal! Fill out the feature exploration form below to activate custom tools, access NASA/corporate grant dossiers, and run AI proposal scoring.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5">
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                Monthly Pass Active ({daysLeft} Days Remaining)
              </span>
              <span className="bg-white/10 text-slate-200 border border-white/15 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
                Verified VIP Solver Access
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Unlocked Member Tools Row */}
      <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tool 1 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">NASA Deep Space Dossier</h3>
            <p className="text-xs text-slate-500 mt-1">42-page technical specifications & scoring rubric for $250,000 NASA life-support challenge.</p>
          </div>
          <button
            onClick={() => addToast('Downloading NASA Deep Space Grant Dossier PDF...', 'info')}
            className="w-full py-2.5 bg-brand-navy hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <Download className="w-4 h-4 text-brand-lime" />
            <span>Download PDF Dossier</span>
          </button>
        </div>

        {/* Tool 2 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-800">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">AI Proposal Optimizer</h3>
            <p className="text-xs text-slate-500 mt-1">Evaluate your challenge entry against 10,000+ winning proposals before submission.</p>
          </div>
          <a
            href="#ai-optimizer-tool"
            className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition text-center"
          >
            <Sparkles className="w-4 h-4 text-sky-200 fill-sky-200" />
            <span>Launch AI Optimizer</span>
          </a>
        </div>

        {/* Tool 3 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">0% Commission Fast Payout</h3>
            <p className="text-xs text-slate-500 mt-1">Priority ACH & USDC prize disbursement channel processed within 24 hours.</p>
          </div>
          <div className="w-full py-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold text-center">
            VIP Channel Enabled
          </div>
        </div>
      </div>

      {/* 3. EXPLORE PREMIUM FEATURES FORM (PAID USER FORM) */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <span className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-lime" />
              Paid Member Feature Explorer
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Explore & Request Premium Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Fill out this form to request custom premium tools, private sponsor introductions, or custom challenge setups included with your paid pass.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Premium Request Received!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>! Your feature exploration request for <strong>{formData.organization || 'your organization'}</strong> has been assigned to your dedicated VIP Account Manager. We will contact <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-navy text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-900 transition"
              >
                Submit Another Feature Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitForm} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Hans Weber"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Account / Business Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="innovator@organization.org"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. BioPolymer Labs / MIT Innovation Hub"
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>

              {/* Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Premium Features to Explore / Unlock:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'ai_optimizer', label: 'AI Proposal & Pitch Deck Optimizer' },
                    { id: 'private_grants', label: 'Private NASA / Defense Grant Briefings' },
                    { id: 'investor_match', label: '1-on-1 Investor & Sponsor Matchmaking' },
                    { id: 'ip_escrow', label: 'Custom Legal NDA & IP Escrow Vault' },
                    { id: 'managed_hackathon', label: 'Managed Challenge / Solver Hackathon' },
                    { id: 'vip_payouts', label: '0% Platform Fee Instant Payout Channel' }
                  ].map((feat) => {
                    const isChecked = formData.selectedFeatures.includes(feat.id);
                    return (
                      <div
                        key={feat.id}
                        onClick={() => handleFeatureToggle(feat.id)}
                        className={`p-3 rounded-xl border cursor-pointer select-none text-xs font-medium flex items-center gap-2.5 transition ${
                          isChecked
                            ? 'bg-brand-navy/5 border-brand-navy text-brand-navy font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-brand-navy border-brand-navy text-white' : 'border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Explain Your Project / Custom Premium Requirements</label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Describe your innovation goals, target challenge domain, or specific custom tools you want enabled for your account..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-navy hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4 text-brand-lime" />
                <span>Submit Premium Feature Request</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 4. AI PROPOSAL OPTIMIZER TOOL SECTION */}
      <div id="ai-optimizer-tool" className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-sky-100 rounded-2xl text-sky-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">AI Proposal Scoring Tool (Live Member Preview)</h3>
              <p className="text-xs text-slate-500">Paste your challenge entry draft to receive instant scoring against sponsor criteria.</p>
            </div>
          </div>

          <div className="space-y-3">
            <textarea
              rows={5}
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              placeholder="Paste your proposal abstract, methodology, and technical milestones here..."
              className="w-full p-4 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 outline-none font-sans"
            ></textarea>

            <button
              onClick={handleRunAiAnalysis}
              disabled={isAnalyzing}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition shadow-sm flex items-center gap-2"
            >
              {isAnalyzing ? (
                <span>Analyzing Proposal with AI...</span>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-sky-200 fill-sky-200" />
                  <span>Run AI Proposal Analysis</span>
                </>
              )}
            </button>
          </div>

          {aiScore && (
            <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900 uppercase tracking-wider">AI Evaluation Score</span>
                <span className="text-2xl font-extrabold text-sky-700">{aiScore.overall} / 100</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold">
                <div className="bg-white p-3 rounded-xl border border-sky-100">
                  <div className="text-slate-500 text-[10px]">Feasibility</div>
                  <div className="text-sky-900 font-bold text-base">{aiScore.feasibility}%</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sky-100">
                  <div className="text-slate-500 text-[10px]">Alignment</div>
                  <div className="text-sky-900 font-bold text-base">{aiScore.sponsorAlignment}%</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sky-100">
                  <div className="text-slate-500 text-[10px]">Clarity</div>
                  <div className="text-sky-900 font-bold text-base">{aiScore.clarity}%</div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-sky-950 mb-2">Key Improvement Recommendations:</p>
                <ul className="space-y-1 text-xs text-sky-900">
                  {aiScore.suggestions.map((sug, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>{sug}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePremiumFeaturesPage;
