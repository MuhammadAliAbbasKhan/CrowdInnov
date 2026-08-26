import React, { useState } from 'react';
import { Handshake, Building2, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const PartnerWithUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [partnerType, setPartnerType] = useState('co-sponsor');
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Partnership request submitted! Our strategic team will contact you.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Ecosystem Collaboration</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Partner With CrowdInnov</h1>
        <p className="text-slate-600 text-sm">Join universities, accelerators, and global trusts in co-sponsoring breakthrough innovation challenges.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">Thank You for Partnering!</h3>
            <p className="text-xs text-slate-600">We will follow up with your organization within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Elena Rostova"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.rostova@partner-org.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Organization Name</label>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Global CleanTech Alliance"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Partnership Model</label>
              <select
                value={partnerType}
                onChange={(e) => setPartnerType(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-semibold focus:ring-2 focus:ring-brand-navy outline-none"
              >
                <option value="co-sponsor">Challenge Co-Sponsor</option>
                <option value="academic">Academic & University Affiliate</option>
                <option value="accelerator">Startup Accelerator & Incubator</option>
                <option value="media">Media & Outreach Partner</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy text-white font-semibold py-2.5 rounded-lg hover:bg-brand-navyDark transition text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Partnership Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const PartnerWithUsPageComponent = PartnerWithUsPage;
export default PartnerWithUsPage;
