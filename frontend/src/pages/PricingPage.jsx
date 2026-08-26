import React, { useState } from 'react';
import { 
  Check, X, Crown, Shield, Zap, Sparkles, HelpCircle, 
  ArrowRight, Send, FileText, CheckCircle2, MessageSquare
} from 'lucide-react';
import { useToast } from '../components/ToastContext';

export const PricingPage = ({ onNavigate, onOpenCheckout, user, isPaidUser = false }) => {
  const [annualBilling, setAnnualBilling] = useState(false);
  const { addToast } = useToast();

  // Custom Pro Services Request Form state
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    organization: '',
    selectedFeatures: ['ai_pitch', 'private_grants'],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      id: 'basic_tier',
      name: 'Starter Innovator',
      priceMonthly: 100,
      priceAnnual: 80,
      description: 'Essential platform membership for individual solvers & student innovators.',
      features: [
        'Explore 1,200+ global challenges',
        'Standard challenge entry submissions',
        'Community solver profile & rank',
        'Public challenge discussion boards'
      ],
      notIncluded: [
        'AI proposal & pitch deck optimizer',
        'Access to private corporate briefings',
        'Zero-fee fast-track prize payouts'
      ],
      ctaText: 'Get Starter Pass ($100)',
      ctaVariant: 'secondary',
      popular: false
    },
    {
      id: 'pro_tier',
      name: 'Pro Innovator Pass',
      priceMonthly: 200,
      priceAnnual: 160,
      description: 'Supercharge your solver win-rate with AI pitch tools & private corporate briefings.',
      features: [
        'Everything in Starter ($100) Plan',
        'AI-Powered Proposal & Pitch Deck Review',
        'Access to Private Corporate & NASA Briefings',
        'Zero-Fee Fast-Track Prize Disbursements',
        'Verified PRO Innovator Badge on Profile'
      ],
      notIncluded: [],
      ctaText: 'Get Pro Pass ($200)',
      ctaVariant: 'primary',
      popular: true
    },
    {
      id: 'enterprise_tier',
      name: 'Enterprise Challenge Sponsor',
      priceMonthly: 300,
      priceAnnual: 240,
      description: 'Full enterprise suite for corporate sponsors launching global open challenges.',
      features: [
        'Host 1 Custom Global Open Challenge',
        'Reach 485,000+ Solvers Worldwide',
        'Dedicated Challenge Architect Assistance',
        'Custom Judging Dashboard & Scoring Rubric',
        'Legal NDA & IP Escrow Enforcement'
      ],
      notIncluded: [],
      ctaText: 'Sponsor Challenge ($300)',
      ctaVariant: 'navy',
      popular: false
    }
  ];

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!(isPaidUser || user?.is_paid)) {
      addToast('Please subscribe to a plan ($100, $200, or $300) first to explore custom premium features.', 'error');
      onOpenCheckout('pro_tier');
      return;
    }

    if (!formData.name || !formData.email || !formData.organization) {
      addToast('Please fill out your name, email, and organization.', 'error');
      return;
    }

    setSubmitted(true);
    addToast('Pro Services feature request submitted! Redirecting to your Premium Portal...', 'success');
    setTimeout(() => {
      onNavigate('explore-premium');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* 1. Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
          <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
          CrowdInnov Pricing & Pro Services
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Simple, Transparent Pricing ($100, $200, $300)
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Choose your plan or submit a custom Pro Services request for premium features tailored to your team.
        </p>

        {/* Monthly vs Annual Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3 select-none">
          <span className={`text-sm font-semibold ${!annualBilling ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setAnnualBilling(!annualBilling)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
              annualBilling ? 'bg-brand-navy' : 'bg-slate-300'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                annualBilling ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${annualBilling ? 'text-slate-900' : 'text-slate-500'}`}>
            Annual Billing
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
              20% OFF
            </span>
          </span>
        </div>
      </div>

      {/* 2. Pricing Cards Grid ($100, $200, $300) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => {
          const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl border ${
                plan.popular
                  ? 'border-brand-navy ring-2 ring-brand-navy ring-offset-2'
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  Most Popular ($200/mo)
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[36px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${price}</span>
                  <span className="text-xs text-slate-500 font-medium">/month</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features:</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 line-through">
                        <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="pt-8">
                <button
                  onClick={() => onOpenCheckout(plan.id)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition shadow-sm flex items-center justify-center gap-2 ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-brand-navy text-white hover:bg-slate-900'
                      : plan.ctaVariant === 'navy'
                      ? 'bg-slate-950 text-white hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. PRO SERVICES & PREMIUM CUSTOM FEATURE REQUEST FORM */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <span className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-lime" />
              Pro Custom Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ask for Custom Premium Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Need dedicated AI pitch tools, private defense/NASA grants, custom IP escrow, or a managed hackathon? Fill out the form below to request premium features.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Feature Request Submitted!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>! Our Pro Services team has received your custom request for <strong>{formData.organization || 'your team'}</strong>. We will reach out to <strong>{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-navy text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-900 transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Mercer"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@organization.org"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Organization / Company Name *</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. SpaceTech Labs / Stanford Research"
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>

              {/* Feature checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Desired Premium Features:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'ai_pitch', label: 'AI Pitch & Proposal Scoring Assistant' },
                    { id: 'private_grants', label: 'Private NASA / Corporate Grant Access' },
                    { id: 'ip_escrow', label: 'Custom Legal NDA & IP Escrow System' },
                    { id: 'managed_hackathon', label: 'Fully Managed Solver Hackathon' },
                    { id: 'investor_match', label: 'Direct 1-on-1 Investor & Sponsor Match' },
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Additional Project Details / Requirements</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your challenge goals, required timeline, or specific custom integrations..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-navy hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4 text-brand-lime" />
                <span>Submit Pro Custom Feature Request</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 4. FAQs Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            { q: 'What is included in the Pro Services request?', a: 'Our Pro Services team provides custom platform setups, custom AI prompt training on your sponsor criteria, dedicated IP escrow, and targeted innovator recruitment.' },
            { q: 'How does billing work for $100, $200, and $300 plans?', a: 'All plans are billed monthly with no lock-in contract. You can upgrade or switch plans at any time.' },
            { q: 'Is my intellectual property protected?', a: 'Yes! All submissions and Pro feature requests are protected under CrowdInnov standard legal NDA terms.' }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-navy" />
                {faq.q}
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
