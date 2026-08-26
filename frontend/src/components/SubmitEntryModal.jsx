import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle } from 'lucide-react';
import { useToast } from './ToastContext';

export const SubmitEntryModal = ({ isOpen, onClose, challenge }) => {
  const [solverName, setSolverName] = useState('');
  const [solverEmail, setSolverEmail] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [abstractSummary, setAbstractSummary] = useState('');
  const [attachmentUrl, setAttachmentUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  if (!isOpen || !challenge) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!solverName || !solverEmail || !projectTitle || !abstractSummary) {
      addToast('Please fill out all required submission fields.', 'error');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      addToast(`Submission '${projectTitle}' successfully uploaded for judging!`, 'success');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-brand-navy p-5 text-white flex justify-between items-center">
          <div>
            <span className="text-[11px] font-semibold text-brand-lime uppercase tracking-wider">
              Submit Challenge Entry
            </span>
            <h3 className="text-lg font-bold line-clamp-1 mt-0.5">{challenge.title}</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-bold text-slate-900">Proposal Submitted!</h3>
            <p className="text-xs text-slate-600">
              Your submission has been logged and assigned receipt ID <span className="font-mono bg-slate-100 px-2 py-1 rounded">SUB-2026-{Math.floor(Math.random()*9000+1000)}</span>. You will receive judging status updates via email.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-brand-navy text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-navyDark transition"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name / Lead Innovator</label>
              <input
                type="text"
                value={solverName}
                onChange={(e) => setSolverName(e.target.value)}
                placeholder="Dr. Hans Weber"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Email</label>
              <input
                type="email"
                value={solverEmail}
                onChange={(e) => setSolverEmail(e.target.value)}
                placeholder="h.weber@institute.org"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Project / Innovation Title</label>
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Regenerative Electrochemical CO2 Reactor Matrix"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Executive Summary & Technical Methodology</label>
              <textarea
                rows={4}
                value={abstractSummary}
                onChange={(e) => setAbstractSummary(e.target.value)}
                placeholder="Provide a detailed technical description of your solution, expected performance metrics, and validation testing..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none resize-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">CAD Models / PDF Report Link (Optional)</label>
              <div className="relative">
                <FileText className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="url"
                  value={attachmentUrl}
                  onChange={(e) => setAttachmentUrl(e.target.value)}
                  placeholder="https://drive.google.com/your-submission-package.pdf"
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-3">
              <UploadCloud className="w-6 h-6 text-brand-navy shrink-0" />
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Standard IP Protection</span>
                <p>By submitting, you agree to CrowdInnov solver terms and challenge rules.</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-navy text-white font-semibold py-2.5 rounded-lg hover:bg-brand-navyDark transition text-sm shadow-md flex justify-center items-center gap-2"
            >
              {submitting ? 'Uploading & Logging Entry...' : 'Submit Entry for Review'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubmitEntryModal;
