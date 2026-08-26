import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, ArrowRight, UserPlus, LogIn } from 'lucide-react';
import { useToast } from './ToastContext';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState('solver'); // 'solver' or 'sponsor'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { addToast } = useToast();

  if (!isOpen) return null;

  // Helper to retrieve registered users from localStorage
  const getRegisteredUsers = () => {
    try {
      const stored = localStorage.getItem('crowdinnov_registered_users');
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      return [];
    }
  };

  // Helper to save registered users to localStorage
  const saveRegisteredUsers = (users) => {
    try {
      localStorage.setItem('crowdinnov_registered_users', JSON.stringify(users));
    } catch (err) {
      console.error('Failed to save user database:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password || (isSignUp && !name.trim())) {
      addToast('Please complete all required fields.', 'error');
      return;
    }

    const registeredUsers = getRegisteredUsers();
    const existingUserIndex = registeredUsers.findIndex(u => u.email === cleanEmail);

    if (isSignUp) {
      // 1. SIGN UP FLOW
      if (existingUserIndex !== -1) {
        addToast(`An account with ${cleanEmail} already exists. Please log in!`, 'error');
        setIsSignUp(false);
        return;
      }

      const newUser = {
        id: `user_${Date.now()}`,
        name: name.trim(),
        email: cleanEmail,
        password: password,
        role: role,
        is_paid: false,
        paidUntil: null,
        planTier: 'free',
        registeredAt: new Date().toISOString()
      };

      registeredUsers.push(newUser);
      saveRegisteredUsers(registeredUsers);

      addToast(`Account created for ${newUser.name}! You are now signed up and logged in.`, 'success');
      onLoginSuccess(newUser);
      onClose();

    } else {
      // 2. LOG IN FLOW: STRICT SIGNUP CHECK
      if (existingUserIndex === -1) {
        addToast(`No account found for "${cleanEmail}". Please SIGN UP first to create your account!`, 'error');
        setIsSignUp(true); // Switch to sign up view
        return;
      }

      const foundUser = registeredUsers[existingUserIndex];
      if (foundUser.password !== password) {
        addToast('Incorrect password. Please check your password and try again.', 'error');
        return;
      }

      // Check monthly subscription expiration status
      if (foundUser.is_paid && foundUser.paidUntil && Date.now() > foundUser.paidUntil) {
        foundUser.is_paid = false;
        registeredUsers[existingUserIndex] = foundUser;
        saveRegisteredUsers(registeredUsers);
        addToast('Welcome back! Note: Your 30-day monthly subscription has expired. Please renew to access premium features.', 'info');
      } else {
        addToast(`Welcome back, ${foundUser.name}! Logged in successfully.`, 'success');
      }

      onLoginSuccess(foundUser);
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 relative">
        {/* Header bar */}
        <div className="bg-brand-navy p-6 text-white flex justify-between items-center relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10">
            <ShieldCheck className="w-40 h-40" />
          </div>
          <div className="relative z-10">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-lime">
              CrowdInnov Authentication
            </span>
            <h3 className="text-2xl font-extrabold mt-0.5 flex items-center gap-2">
              {isSignUp ? (
                <>
                  <UserPlus className="w-6 h-6 text-brand-lime" />
                  <span>Create Account (Sign Up)</span>
                </>
              ) : (
                <>
                  <LogIn className="w-6 h-6 text-brand-lime" />
                  <span>Member Log In</span>
                </>
              )}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {isSignUp 
                ? 'Sign up to submit challenges and manage subscriptions' 
                : 'Log in with your registered email address'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/20 transition relative z-20 cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role selector */}
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button
                type="button"
                onClick={() => setRole('solver')}
                className={`py-2.5 rounded-lg transition ${
                  role === 'solver'
                    ? 'bg-white text-brand-navy shadow-sm font-extrabold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Solver / Innovator
              </button>
              <button
                type="button"
                onClick={() => setRole('sponsor')}
                className={`py-2.5 rounded-lg transition ${
                  role === 'sponsor'
                    ? 'bg-white text-brand-navy shadow-sm font-extrabold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Challenge Sponsor
              </button>
            </div>

            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Hans Weber"
                    className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@organization.com"
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password *</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-navy outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy hover:bg-slate-900 text-white font-extrabold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-lg"
            >
              <span>{isSignUp ? 'Complete Free Sign Up' : 'Log In to Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle register / signin */}
          <div className="text-center pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-600">
              {isSignUp ? 'Already registered an account?' : "Don't have an account yet?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-extrabold text-brand-navy hover:underline ml-1"
              >
                {isSignUp ? 'Log In Here' : 'Sign Up Free First'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
