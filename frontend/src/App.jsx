import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import SearchModal from './components/SearchModal';
import CheckoutModal from './components/CheckoutModal';
import SubmitEntryModal from './components/SubmitEntryModal';
import { ToastProvider } from './components/ToastContext';

// Pages
import HomePage from './pages/HomePage';
import ExploreChallengesPage from './pages/ExploreChallengesPage';
import ForBusinessPage from './pages/ForBusinessPage';
import ForStartupsPage from './pages/ForStartupsPage';
import WhoWeArePage from './pages/WhoWeArePage';
import ResultsPage from './pages/ResultsPage';
import PricingPage from './pages/PricingPage';
import ExplorePremiumFeaturesPage from './pages/ExplorePremiumFeaturesPage';
import AboutUsPage from './pages/AboutUsPage';
import PressKitPage from './pages/PressKitPage';
import PartnerWithUsPage from './pages/PartnerWithUsPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import BlogPage from './pages/BlogPage';
import EventsWebinarsPage from './pages/EventsWebinarsPage';
import ContactUsPage from './pages/ContactUsPage';
import HowCrowdInnovWorksPage from './pages/HowCrowdInnovWorksPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import FaqPage from './pages/FaqPage';
import InnovationResourcesPage from './pages/InnovationResourcesPage';
import ChallengeDetailPage from './pages/ChallengeDetailPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PostChallengePage from './pages/PostChallengePage';
import SolverDashboardPage from './pages/SolverDashboardPage';

export const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [selectedChallengeId, setSelectedChallengeId] = useState(101);
  const [user, setUser] = useState(null);
  const [isPaidUser, setIsPaidUser] = useState(false);

  // Modals
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPlanTier, setCheckoutPlanTier] = useState('pro_tier');
  const [isSubmitEntryOpen, setIsSubmitEntryOpen] = useState(false);
  const [targetChallengeForSubmission, setTargetChallengeForSubmission] = useState(null);

  // Restore active user & check subscription expiration on mount
  useEffect(() => {
    try {
      const storedActiveUser = localStorage.getItem('crowdinnov_active_user');
      if (storedActiveUser) {
        const parsed = JSON.parse(storedActiveUser);
        // Check if monthly subscription is expired
        if (parsed.is_paid && parsed.paidUntil && Date.now() > parsed.paidUntil) {
          parsed.is_paid = false;
          localStorage.setItem('crowdinnov_active_user', JSON.stringify(parsed));
          setIsPaidUser(false);
        } else if (parsed.is_paid) {
          setIsPaidUser(true);
        }
        setUser(parsed);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChallenge = (id) => {
    setSelectedChallengeId(id);
    setActivePage('challenge-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  const handleOpenCheckout = (tier = 'pro_tier') => {
    setCheckoutPlanTier(tier);
    setIsCheckoutOpen(true);
  };

  const handleSubmitEntry = (challenge) => {
    setTargetChallengeForSubmission(challenge);
    setIsSubmitEntryOpen(true);
  };

  const handleLoginSuccess = (loggedInUser) => {
    const isPaid = Boolean(loggedInUser.is_paid && loggedInUser.paidUntil && Date.now() <= loggedInUser.paidUntil);
    setIsPaidUser(isPaid);
    setUser(loggedInUser);
    localStorage.setItem('crowdinnov_active_user', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    setIsPaidUser(false);
    localStorage.removeItem('crowdinnov_active_user');
  };

  const handlePaymentSuccess = (tier, paidUntil) => {
    setIsPaidUser(true);
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    const expirationTime = paidUntil || (Date.now() + thirtyDaysMs);

    const updatedUser = user ? {
      ...user,
      is_paid: true,
      planTier: tier,
      paidUntil: expirationTime
    } : {
      id: `user_${Date.now()}`,
      name: 'Paid Member',
      email: 'member@crowdinnov.org',
      is_paid: true,
      planTier: tier,
      paidUntil: expirationTime
    };

    setUser(updatedUser);
    localStorage.setItem('crowdinnov_active_user', JSON.stringify(updatedUser));

    // Update in registered users database
    try {
      const registered = JSON.parse(localStorage.getItem('crowdinnov_registered_users') || '[]');
      const idx = registered.findIndex(u => u.email === updatedUser.email);
      if (idx !== -1) {
        registered[idx] = updatedUser;
        localStorage.setItem('crowdinnov_registered_users', JSON.stringify(registered));
      }
    } catch (e) {
      console.error(e);
    }

    handleNavigate('explore-premium');
  };

  const handleSimulateExpire = () => {
    if (!user) return;
    const expiredUser = { ...user, is_paid: false, paidUntil: Date.now() - 1000 };
    setUser(expiredUser);
    setIsPaidUser(false);
    localStorage.setItem('crowdinnov_active_user', JSON.stringify(expiredUser));
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900 selection:bg-brand-lime selection:text-slate-950">
        {/* Header */}
        <Header
          activePage={activePage}
          onNavigate={handleNavigate}
          onOpenAuth={handleOpenAuth}
          onOpenSearch={() => setIsSearchOpen(true)}
          user={user}
          onLogout={handleLogout}
          isPaidUser={isPaidUser}
        />

        {/* Main Route Switcher */}
        <main className="flex-grow">
          {activePage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectChallenge={handleSelectChallenge}
              onOpenAuth={handleOpenAuth}
              onOpenCheckout={handleOpenCheckout}
            />
          )}

          {activePage === 'explore-challenges' && (
            <ExploreChallengesPage
              onSelectChallenge={handleSelectChallenge}
              onNavigate={handleNavigate}
            />
          )}

          {activePage === 'challenge-detail' && (
            <ChallengeDetailPage
              challengeId={selectedChallengeId}
              onBack={() => handleNavigate('explore-challenges')}
              onSubmitEntry={handleSubmitEntry}
              onOpenAuth={handleOpenAuth}
            />
          )}

          {activePage === 'for-business' && (
            <ForBusinessPage
              onNavigate={handleNavigate}
              onOpenCheckout={handleOpenCheckout}
            />
          )}

          {activePage === 'for-startups' && (
            <ForStartupsPage
              onNavigate={handleNavigate}
              onOpenAuth={handleOpenAuth}
            />
          )}

          {activePage === 'pricing' && (
            <PricingPage
              onNavigate={handleNavigate}
              onOpenCheckout={handleOpenCheckout}
              user={user}
              isPaidUser={isPaidUser}
              setIsPaidUser={setIsPaidUser}
            />
          )}

          {activePage === 'explore-premium' && (
            <ExplorePremiumFeaturesPage
              user={user}
              onNavigate={handleNavigate}
              onOpenCheckout={handleOpenCheckout}
              isPaidUser={isPaidUser}
              onSimulateExpire={handleSimulateExpire}
            />
          )}

          {activePage === 'who-we-are' && (
            <WhoWeArePage onNavigate={handleNavigate} />
          )}

          {activePage === 'results' && (
            <ResultsPage onSelectChallenge={handleSelectChallenge} />
          )}

          {activePage === 'about-us' && (
            <AboutUsPage onNavigate={handleNavigate} />
          )}

          {activePage === 'press-kit' && (
            <PressKitPage />
          )}

          {activePage === 'partner-with-us' && (
            <PartnerWithUsPage />
          )}

          {activePage === 'partners' && (
            <PartnersPage />
          )}

          {activePage === 'privacy' && (
            <PrivacyPage />
          )}

          {activePage === 'terms' && (
            <TermsPage />
          )}

          {activePage === 'cookie-policy' && (
            <CookiePolicyPage />
          )}

          {activePage === 'blog' && (
            <BlogPage />
          )}

          {activePage === 'events-webinars' && (
            <EventsWebinarsPage />
          )}

          {activePage === 'contact-us' && (
            <ContactUsPage />
          )}

          {activePage === 'how-it-works' && (
            <HowCrowdInnovWorksPage onNavigate={handleNavigate} />
          )}

          {activePage === 'knowledge-base' && (
            <KnowledgeBasePage />
          )}

          {activePage === 'faq' && (
            <FaqPage />
          )}

          {activePage === 'innovation-resources' && (
            <InnovationResourcesPage />
          )}

          {activePage === 'admin' && (
            <AdminDashboardPage />
          )}

          {activePage === 'post-challenge' && (
            <PostChallengePage onNavigate={handleNavigate} />
          )}

          {activePage === 'solver-dashboard' && (
            <SolverDashboardPage user={user} onNavigate={handleNavigate} />
          )}
        </main>

        {/* Single Footer Instance for the SPA */}
        <Footer onNavigate={handleNavigate} />

        {/* Modals */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectChallenge={handleSelectChallenge}
          onNavigate={handleNavigate}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          planTier={checkoutPlanTier}
          onPaymentSuccess={handlePaymentSuccess}
        />

        <SubmitEntryModal
          isOpen={isSubmitEntryOpen}
          onClose={() => setIsSubmitEntryOpen(false)}
          challenge={targetChallengeForSubmission}
        />
      </div>
    </ToastProvider>
  );
};

export default App;
