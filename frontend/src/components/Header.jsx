import React, { useState } from 'react';
import { Search, Sparkles, User, LogOut, Menu, X, Crown, ShieldCheck, ArrowRight } from 'lucide-react';

export const Header = ({
  activePage,
  onNavigate,
  onOpenAuth,
  onOpenSearch,
  user,
  onLogout,
  isPaidUser = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'explore-challenges', label: 'Explore Challenges' },
    { id: 'for-business', label: 'For Business' },
    { id: 'for-startups', label: 'For Startups' },
    { id: 'pricing', label: 'Pricing & Pro', badge: '$100+' },
    ...((isPaidUser || user?.is_paid) ? [{ id: 'explore-premium', label: 'Explore Premium Features', badge: 'VIP' }] : []),
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'results', label: 'Results' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* 1. Signature Lime Accent Border */}
      <div className="top-lime-stripe"></div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group select-none py-2"
        >
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
              crowd
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy flex items-center">
              innov
              <Sparkles className="w-5 h-5 text-brand-lime fill-brand-lime inline-block ml-0.5 transform -rotate-12 group-hover:rotate-12 group-hover:scale-125 transition duration-300" />
            </span>
          </div>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activePage === item.id
                  ? 'bg-brand-navy text-white shadow-sm font-bold scale-[1.02]'
                  : item.isSpecial
                  ? 'text-brand-navy bg-slate-200/80 hover:bg-slate-300/80 font-bold'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-1.5 py-0.2 rounded-full uppercase tracking-tight">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-slate-600 hover:text-brand-navy hover:bg-slate-100 rounded-full transition touch-manipulation"
            title="Search challenges"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* User Auth or Profile Buttons */}
          {user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('solver-dashboard')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-200 transition"
              >
                <User className="w-3.5 h-3.5 text-brand-navy" />
                <span className="max-w-[100px] truncate">{user.name}</span>
              </button>
              <button
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-rose-600 rounded-full hover:bg-rose-50 transition"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('signup')}
                className="btn-get-started text-xs sm:text-sm px-3.5 py-1.5 sm:py-2"
              >
                Get Started
              </button>
              <button
                onClick={() => onOpenAuth('login')}
                className="btn-login-navy text-xs sm:text-sm px-4 py-1.5 sm:py-2 shadow-sm"
              >
                Log In
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-brand-navy text-white font-bold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
