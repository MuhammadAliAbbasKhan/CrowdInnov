import React, { useState } from 'react';
import { Mail, Sparkles, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useToast } from './ToastContext';

export const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }
    addToast('Thank you for subscribing to CrowdInnov project alerts!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-hero-navy text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Left Column: Logo & Email Subscribe Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Brand Logo in White */}
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 cursor-pointer select-none group"
            >
              <span className="text-3xl font-extrabold text-white tracking-tight">
                crowd
              </span>
              <span className="text-3xl font-extrabold text-white tracking-tight flex items-center">
                innov
                <Sparkles className="w-5 h-5 text-brand-cyan fill-brand-cyan inline-block ml-0.5 transform -rotate-12 group-hover:scale-110 transition" />
              </span>
            </div>

            {/* Email Subscribe Glass Card (Exact design from screenshot) */}
            <div className="footer-newsletter-card p-5 rounded-2xl max-w-md">
              <p className="text-sm font-medium text-white mb-3 leading-snug">
                Be the first to know when new crowdsourcing projects are posted
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#112347] text-white placeholder-slate-400 italic px-3.5 py-2 rounded-lg border border-slate-700/80 text-sm focus:outline-none focus:border-brand-accent transition"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-slate-100 text-brand-navy font-semibold px-4 py-2 rounded-lg text-sm transition flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-brand-navy" />
                  <span>subscribe</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Columns: Links matching HeroX footer screenshot */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* COLUMN 1: ABOUT CROWDINNOV */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                ABOUT CROWDINNOV
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => onNavigate('about-us')} className="hover:text-white transition">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('press-kit')} className="hover:text-white transition">
                    Press Kit
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('partner-with-us')} className="hover:text-white transition">
                    Partner With Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('partners')} className="hover:text-white transition">
                    Partners
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('privacy')} className="hover:text-white transition">
                    Privacy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('terms')} className="hover:text-white transition">
                    Terms
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('cookie-policy')} className="hover:text-white transition">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: COMMUNITY */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                COMMUNITY
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => onNavigate('blog')} className="hover:text-white transition">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('events-webinars')} className="hover:text-white transition">
                    Events & Webinars
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: SUPPORT */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                SUPPORT
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => onNavigate('contact-us')} className="hover:text-white transition">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition">
                    How CrowdInnov Works
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('knowledge-base')} className="hover:text-white transition">
                    Knowledge Base
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('innovation-resources')} className="hover:text-white transition">
                    Innovation Resources
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Social Bar & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons Bar */}
          <div className="flex items-center gap-2">
            <a
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-lg bg-[#112347] hover:bg-[#1b3464] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-lg bg-[#112347] hover:bg-[#1b3464] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#twitter"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-lg bg-[#112347] hover:bg-[#1b3464] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition"
              aria-label="X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#linkedin"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-lg bg-[#112347] hover:bg-[#1b3464] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-lg bg-[#112347] hover:bg-[#1b3464] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright notice matching screenshot */}
          <div className="text-xs text-slate-400 font-medium">
            © Copyright CrowdInnov 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
