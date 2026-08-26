import React, { useState } from 'react';
import { Building2, Trophy, DollarSign, Calendar, UploadCloud, CheckCircle } from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const PostChallengePage = ({ onNavigate }) => {
  const [title, setTitle] = useState('');
  const [sponsorName, setSponsorName] = useState('');
  const [category, setCategory] = useState('CleanTech & Environment');
  const [prizeAmount, setPrizeAmount] = useState(100000);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !sponsorName || !summary || !description) {
      addToast('Please complete all challenge creation fields.', 'error');
      return;
    }

    setSubmitted(true);
    addToast(`Challenge '${title}' successfully created and sent for escrow verification!`, 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Sponsor Portal</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Launch a Crowdsourced Challenge</h1>
        <p className="text-slate-600 text-sm">Fill out the challenge specification details to invite global solvers.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-bold text-slate-900">Challenge Draft Created!</h3>
            <p className="text-xs text-slate-600">
              Your challenge <span className="font-semibold text-slate-900">"{title}"</span> is currently pending escrow funding verification.
            </p>
            <button
              onClick={() => onNavigate('explore-challenges')}
              className="bg-brand-navy text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-navyDark transition"
            >
              View in Challenge Marketplace
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Challenge Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., NextGen High-Capacity Thermal Energy Storage"
                className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Sponsor Organization</label>
                <input
                  type="text"
                  value={sponsorName}
                  onChange={(e) => setSponsorName(e.target.value)}
                  placeholder="e.g., CleanEnergy Global Foundation"
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-brand-navy outline-none"
                >
                  <option value="Space & Aerospace">Space & Aerospace</option>
                  <option value="CleanTech & Environment">CleanTech & Environment</option>
                  <option value="Healthcare & AI">Healthcare & AI</option>
                  <option value="Automotive & Energy">Automotive & Energy</option>
                  <option value="Sustainability">Sustainability</option>
                  <option value="Robotics & AgTech">Robotics & AgTech</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Total Prize Pool ($ USD)</label>
              <input
                type="number"
                value={prizeAmount}
                onChange={(e) => setPrizeAmount(Number(e.target.value))}
                className="w-full p-3 border border-slate-300 rounded-xl text-sm font-bold focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Short Executive Summary</label>
              <textarea
                rows={2}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Brief 2-sentence description of the problem statement and desired outcome..."
                className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none resize-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Technical Requirements & Deliverables</label>
              <textarea
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Detailed technical specifications, performance constraints, and required submission files..."
                className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy text-white font-bold py-3.5 rounded-xl hover:bg-brand-navyDark transition text-sm shadow-md flex justify-center items-center gap-2"
            >
              <UploadCloud className="w-5 h-5" />
              <span>Submit Challenge Specification</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const PostChallengePageComponent = PostChallengePage;
export default PostChallengePage;
