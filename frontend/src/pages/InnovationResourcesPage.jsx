import React from 'react';
import { Download, FileCode, CheckCircle2 } from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const InnovationResourcesPage = () => {
  const { addToast } = useToast();

  const handleDownload = (resTitle) => {
    addToast(`Downloading '${resTitle}' template package...`, 'success');
  };

  const resources = [
    { title: 'Open Innovation Challenge Design Canvas', format: 'PDF & PPTX', desc: 'Step-by-step workbook for scoping high-impact prize challenges.' },
    { title: 'Standard IP Transfer Agreement Template', format: 'DOCX', desc: 'Legal contract template for non-exclusive or full IP assignment.' },
    { title: 'Solver Executive Pitch Deck Framework', format: 'KEY & PPTX', desc: '10-slide template for presenting technical proposal packages.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Free Downloads</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Innovation Templates & Toolkits</h1>
        <p className="text-slate-600 text-sm">Download free challenge canvases, legal frameworks, and solver presentation templates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((r, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-brand-navy bg-slate-100 px-2 py-0.5 rounded">{r.format}</span>
              <h3 className="text-base font-bold text-slate-900">{r.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
            <button
              onClick={() => handleDownload(r.title)}
              className="w-full bg-brand-navy text-white py-2 rounded-xl text-xs font-semibold hover:bg-brand-navyDark transition flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Template</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const InnovationResourcesPageComponent = InnovationResourcesPage;
export default InnovationResourcesPage;
