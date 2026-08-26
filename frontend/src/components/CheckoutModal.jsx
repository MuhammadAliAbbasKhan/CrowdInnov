import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { useToast } from './ToastContext';

export const CheckoutModal = ({ isOpen, onClose, planTier = 'pro_tier', onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('123');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const planDetails = {
    basic_tier: { name: 'Starter Innovator Membership', price: 100, desc: 'Essential platform access & challenge entry (30-Day Monthly Pass)' },
    pro_tier: { name: 'Pro Innovator Membership', price: 200, desc: 'Includes AI pitch reviewer & private briefings (30-Day Monthly Pass)' },
    enterprise_tier: { name: 'Enterprise Challenge Sponsor', price: 300, desc: 'Full custom open challenge hosting & solver portal (30-Day Monthly Pass)' }
  }[planTier] || { name: 'Pro Innovator Membership', price: 200, desc: 'Includes AI pitch reviewer & private briefings (30-Day Monthly Pass)' };

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);

    // 30-day monthly subscription expiration
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
    const paidUntil = Date.now() + thirtyDaysInMs;

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      if (onPaymentSuccess) {
        onPaymentSuccess(planTier, paidUntil);
      }
      addToast(`Monthly payment of $${planDetails.price} processed via Stripe! Valid for 30 days.`, 'success');
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 relative">
        {/* Header */}
        <div className="bg-brand-navy p-5 text-white flex justify-between items-center relative z-10">
          <div>
            <span className="text-[11px] font-bold text-brand-lime uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-lime" />
              Stripe 30-Day Monthly Checkout
            </span>
            <h3 className="text-xl font-bold mt-0.5">{planDetails.name}</h3>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition focus:outline-none"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {success ? (
          <div className="p-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-bold text-slate-900">30-Day Monthly Pass Active!</h3>
            <p className="text-xs text-slate-600">
              Your monthly subscription reference <span className="font-mono bg-slate-100 px-2 py-1 rounded">STRIPE-MONTHLY-8849</span> is now active for 30 days.
            </p>
            <button
              onClick={() => { setSuccess(false); onClose(); }}
              className="bg-brand-navy text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-900 transition"
            >
              Explore Premium Features Now
            </button>
          </div>
        ) : (
          <form onSubmit={handlePayment} className="p-6 space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-700">{planDetails.name}</p>
                <p className="text-[11px] text-slate-500">{planDetails.desc}</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-slate-900">${planDetails.price}</span>
                <div className="text-[10px] text-slate-500 font-semibold">/month</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Card Number</label>
              <div className="relative">
                <CreditCard className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Expiration</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">CVC Code</label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-navy text-white font-bold py-3 rounded-xl hover:bg-slate-900 transition flex items-center justify-center gap-2 text-sm shadow-md"
            >
              {loading ? (
                <span>Processing Payment...</span>
              ) : (
                <span>Pay ${planDetails.price} / Month via Stripe</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
