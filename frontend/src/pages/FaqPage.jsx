import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { MOCK_FAQS } from '../data/mockData';

export const FaqPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Got Questions?</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
        <p className="text-slate-600 text-sm">Everything you need to know about crowdsourcing on CrowdInnov.org.</p>
      </div>

      <div className="space-y-4">
        {MOCK_FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-slate-900 text-base"
              >
                <span>{faq.question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-brand-navy shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const FaqPageComponent = FaqPage;
export default FaqPage;
