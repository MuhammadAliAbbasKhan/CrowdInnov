import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Your contact inquiry has been dispatched to CrowdInnov Support!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Get in Touch</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Contact CrowdInnov Support</h1>
        <p className="text-slate-600 text-sm">Have questions about challenge creation, IP terms, or solver prize disbursements?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
        <div className="md:col-span-5 bg-brand-navy text-white p-8 rounded-3xl space-y-6">
          <h3 className="text-xl font-bold">Global Headquarters</h3>
          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
              <span>CrowdInnov Platform Inc.<br />100 Innovation Plaza, Suite 400<br />San Francisco, CA 94105</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-lime shrink-0" />
              <span>support@crowdinnov.org</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-lime shrink-0" />
              <span>+1 (800) 555-HEROX-8</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Message Dispatched!</h3>
              <p className="text-xs text-slate-600">Our customer success representative will respond within 4 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Hans Weber"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="h.weber@institute.org"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Inquiry regarding NASA Challenge"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Details of your inquiry..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-navy outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-navy text-white font-semibold py-2.5 rounded-lg hover:bg-brand-navyDark transition text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const ContactUsPageComponent = ContactUsPage;
export default ContactUsPage;
