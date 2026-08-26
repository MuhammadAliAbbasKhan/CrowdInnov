import React from 'react';
import { Download, FileText, Image, Mail } from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const PressKitPage = () => {
  const { addToast } = useToast();

  const handleDownloadKit = () => {
    addToast('Downloading CrowdInnov official Brand & Press Kit Zip...', 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Media & Press Room</span>
        <h1 className="text-4xl font-extrabold text-slate-900">CrowdInnov Press Kit & Media Resources</h1>
        <p className="text-slate-600 text-sm">Download official logos, brand guidelines, leadership photos, and executive press releases.</p>
        <button
          onClick={handleDownloadKit}
          className="bg-brand-navy text-white font-semibold px-6 py-3 rounded-xl text-xs hover:bg-brand-navyDark transition inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Media Assets (.ZIP 45MB)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <Image className="w-6 h-6 text-brand-navy" />
          <h3 className="text-lg font-bold text-slate-900">Logo & Brand Assets</h3>
          <p className="text-xs text-slate-600">High-resolution PNG, SVG, and EPS vectors of the CrowdInnov spark logo in dark navy and white variations.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <FileText className="w-6 h-6 text-brand-navy" />
          <h3 className="text-lg font-bold text-slate-900">Press Releases & Fact Sheet</h3>
          <p className="text-xs text-slate-600">Access recent announcements regarding major prize challenges, partner milestones, and annual reports.</p>
        </div>
      </div>
    </div>
  );
};

export const PressKitPageComponent = PressKitPage;
export default PressKitPage;
