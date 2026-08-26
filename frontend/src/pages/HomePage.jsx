// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Star, Calendar, Play, Award, 
  Briefcase, Compass, Rocket, Users as People, Trophy,
  Instagram, Facebook, Twitter, Linkedin, Youtube,
  X, Mail as Envelope, CheckCircle, ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const [counts, setCounts] = useState({
    prizes: 0,
    challenges: 0,
    countries: 0,
    success: 0
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Stats data
  const stats = [
    { label: 'In prizes awarded', value: 420, suffix: 'M+', prefix: '$' },
    { label: 'Challenges powered by HeroX', value: 350, suffix: '+' },
    { label: 'Countries represented', value: 175, suffix: '' },
    { label: 'Success rate', value: 94, suffix: '%' }
  ];

  // Featured challenges data
  const challenges = [
    {
      id: 1,
      title: 'Connecting the Community for Maternal Health 2.0',
      creator: 'Eunice Kennedy Shriver National Institute of Child Health and Human Development',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/4b6af1de297a11edbfa86607da0b0bfc/a0d6ce82297911edae537e5bb5e42e91.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/1bae7afc86b311f1a38d6600efde8474/18f6bafe86b311f1a73ad6a8fc913ac8.jpeg',
      description: 'U.S. nonprofits and Tribes building research capacity in maternity care deserts',
      stage: 'Enter',
      daysRemaining: 29,
      prize: '$3.1M',
      followers: 54,
      isFeatured: true
    },
    {
      id: 2,
      title: 'Viasat: Space for Good Australia 2026',
      creator: 'Viasat: Space for Good',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/f2c00b982e7311f1a82e9ef96c9efef1/988e6a8e2e7311f1a9c83e4d2822be16.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/fdac9f8c3d8a11f1949d0a86688acdda/fb5130723d8a11f1a7f242f038e8eb38.jpeg',
      description: "Australia's STEM innovation challenge for university and TAFE students.",
      stage: 'Judging',
      daysRemaining: null,
      prize: null,
      followers: 799,
      hasVideo: true
    },
    {
      id: 3,
      title: 'Blaise xTech Competition',
      creator: 'Forward Edge-Al',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/6ed0de58897611f184d20aa4f7e1cd50/d64be380897511f18720d250d5601cb2.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/1eaaddd2807c11f1a49a7e684c4fe49f/1e27baec807c11f1b601869d10e905b1.jpeg',
      description: 'Phase I: AI-Powered Raman App Ideas. Shape the Future of AI-Driven Raman Spectroscopy!',
      stage: 'Enter',
      daysRemaining: 67,
      prize: '$50K',
      followers: 95
    },
    {
      id: 4,
      title: 'Storage Design Strategies to Ease Production (STEP) Prize',
      creator: 'American-Made Program',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/e765846c171d11f098575a6fe05379a5/11f8d264163e11f098244a388b8f8fab.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/7b675d84489611f1b54fa6dd3493a407/7b1eb0e8489611f1baa94e26a1c6ad32.jpeg',
      description: 'Prize competition integrating supply chain and manufacturability innovations into novel energy storage.',
      stage: 'Enter',
      daysRemaining: 44,
      prize: '$500K',
      followers: 251
    },
    {
      id: 5,
      title: 'Rock and Roll with NASA Challenge',
      creator: 'NASA Tournament Lab',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/8ff6a6301eb911e7a4680242ac110003/96def06c9bd111e6a1940242ac110002.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/8757d8b6505e11f095b14aae2df273c1/8695aa7a505e11f0998296921e0c9b02.jpeg',
      description: 'Create a lightweight, flexible, long service-life wheel and tire to help rovers navigate the harsh environment of the Moon',
      stage: 'Enter',
      daysRemaining: null,
      prize: '$155K',
      followers: 1100
    },
    {
      id: 6,
      title: 'GoAERO Prize',
      creator: 'GoAERO Prize',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/avatars/f2a81580bbaa11eebb135a381d1e73fd/f28a692cbbaa11eebb135a381d1e73fd.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/video_thumbnail/7657296cd05211f09066e66e6a26153f.jpeg',
      description: 'Design and build a safe, portable, robust, autonomy-enabled Emergency Response Flyer.',
      stage: 'Enter',
      daysRemaining: null,
      prize: '$2M',
      followers: 1900,
      hasVideo: true
    }
  ];

  // Filter tags
  const filterTags = [
    'Education, learning, schools, training, knowledge, skills.',
    'Energy, power generation, renewables, electricity, efficiency.',
    'Human rights, equality, justice, civil liberties, social protection.',
    'Animal welfare, animal protection, humane treatment, ethical care.',
    'Food, cost of living, personal finances, budgeting, economic stability.',
    'Physical health, mental health, well-being, healthcare, lifestyle.',
    'Technology, innovation, software, hardware, digital tools, AI.',
    'Water, natural resources, access to water, conservation, management.',
    'Environment, climate, pollution, sustainability, conservation.'
  ];

  // Brand logos
  const brandLogos = [
    { name: 'Booz Allen', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/booz-allen.png' },
    { name: 'Facebook', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/facebook.png' },
    { name: 'Forbes', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/forbes.png' },
    { name: 'Lululemon', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/lululemon.png' },
    { name: 'NASA Tournament Lab', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/nasa-tournament-lab.png' },
    { name: 'National Geographic', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/national-geographic.png' },
    { name: 'NBC', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/nbc.png' },
    { name: 'XPRIZE', image: 'https://d253pvgap36xx8.cloudfront.net/static/images/brand-logos/xprize.png' }
  ];

  // Animate counters on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stats.forEach((stat, index) => {
            let current = 0;
            const target = stat.value;
            const increment = Math.ceil(target / 60);
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              setCounts(prev => {
                const key = Object.keys(prev)[index];
                return { ...prev, [key]: current };
              });
            }, 20);
          });
        }
      });
    }, { threshold: 0.5 });

    const container = document.querySelector('[data-count-container]');
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <div style={{ fontFamily: 'Poppins, system-ui, sans-serif', background: 'white' }}>
   
      {/* ========== HERO HEADER ========== */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            color: '#3D3A46',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
          }}>
            A global stage for <strong>challenges</strong>,
            <strong> ideas</strong>,
            and <strong>rewards</strong>.
          </h3>

          {/* Featured Posts - Speaker Series */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
            }}>
              {/* Featured Post 1 */}
              <a href="/speaker_series_028_Christianson-Industries" target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
              >
                <div style={{ position: 'relative', paddingTop: '56.25%', background: '#f6f6f6' }}>
                  <img 
                    src="https://d253pvgap36xx8.cloudfront.net/blog/home-image/9983ea82845811f18603d20431ffbac3.jpeg" 
                    alt="From Boat Manufacturers to Murphy Beds"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    background: 'rgba(0,0,0,0.7)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Play size={20} fill="white" />
                  </div>
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: '#666668', margin: '0 0 0.25rem 0' }}>July 2026</p>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#3D3A46', margin: '0 0 0.25rem 0' }}>
                    From Boat Manufacturers to Murphy Beds: How One Engineer Turned a Rotational Fellowship into a Career of Rapid Innovation
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#666668', lineHeight: '1.5', margin: '0 0 0.5rem 0' }}>
                    How do you turn a rotational fellowship into a career of high-speed product design?...
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#3319FF' }}>
                    <span>▸</span>
                    <span>Engineering</span>
                  </span>
                </div>
              </a>

              {/* Featured Post 2 */}
              <a href="/speaker_series_028_Muru" target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
              >
                <div style={{ position: 'relative', paddingTop: '56.25%', background: '#f6f6f6' }}>
                  <img 
                    src="https://d253pvgap36xx8.cloudfront.net/blog/home-image/8834dcc483f311f1ae0cbabe66091751.jpeg" 
                    alt="From Finger-Wagging to Human-Centered"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    background: 'rgba(0,0,0,0.7)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Play size={20} fill="white" />
                  </div>
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: '#666668', margin: '0 0 0.25rem 0' }}>July 2026</p>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#3D3A46', margin: '0 0 0.25rem 0' }}>
                    From Finger-Wagging to Human-Centered: Carla Lopez on Innovation Where It Matters Most
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#666668', lineHeight: '1.5', margin: '0 0 0.5rem 0' }}>
                    In the latest episode of the HeroX Innovation Leadership Speaker Series...
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#3319FF' }}>
                    <span>▸</span>
                    <span>Healthcare</span>
                  </span>
                </div>
              </a>

              {/* Featured Post 3 */}
              <a href="/speaker_series_027_InoCrowd" target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
              >
                <div style={{ position: 'relative', paddingTop: '56.25%', background: '#f6f6f6' }}>
                  <img 
                    src="https://d253pvgap36xx8.cloudfront.net/blog/home-image/4ca42380833111f1b022a64302d2aae0.jpeg" 
                    alt="When the Answer Already Exists Somewhere Else"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    background: 'rgba(0,0,0,0.7)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Play size={20} fill="white" />
                  </div>
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: '#666668', margin: '0 0 0.25rem 0' }}>July 2026</p>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#3D3A46', margin: '0 0 0.25rem 0' }}>
                    When the Answer Already Exists Somewhere Else: Lessons from InoCrowd's Soraya Gadit
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#666668', lineHeight: '1.5', margin: '0 0 0.5rem 0' }}>
                    Soraya Gadit, Founder and CEO of InoCrowd, argues that organizations' toughest technical problems...
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#3319FF' }}>
                    <span>▸</span>
                    <span>COVID-19</span>
                  </span>
                </div>
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <a href="/blog/article_type/speaker-series" style={{
                color: '#3319FF',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                View More Speakers Series
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Featured Challenge */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e, #3319FF)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '40%',
              background: 'url(https://d253pvgap36xx8.cloudfront.net/challenges/image_detail/1985508486b311f1a77b6600efde8474/18f6bafe86b311f1a73ad6a8fc913ac8.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '@media (max-width: 768px)': { display: 'none' }
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '60%', '@media (max-width: 768px)': { maxWidth: '100%' } }}>
              <h4 style={{ color: '#ffc107', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Star size={16} fill="#ffc107" />
                Featured Challenge
              </h4>
              
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', margin: '0.5rem 0' }}>
                <a href="/CommunityMaternalHealth2.0" style={{ color: 'white', textDecoration: 'none' }}>
                  Connecting the Community for Maternal Health 2.0
                </a>
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
                <img 
                  src="https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/4b6af1de297a11edbfa86607da0b0bfc/a0d6ce82297911edae537e5bb5e42e91.png" 
                  alt="NICHD"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                  Eunice Kennedy Shriver National Institute of Child Health and Human Development
                </span>
              </div>
              
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', margin: '0.5rem 0' }}>
                U.S. nonprofits and Tribes building research capacity in maternity care deserts
              </p>
              
              <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '1rem 0' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>stage:</span>
                      <span style={{ color: 'white', fontWeight: '600', marginLeft: '0.5rem' }}>Enter</span>
                    </div>
                    <div>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>prize:</span>
                      <span style={{ color: '#ffc107', fontWeight: '600', marginLeft: '0.5rem' }}>$3.1M</span>
                    </div>
                  </div>
                </div>
                <a 
                  href="/CommunityMaternalHealth2.0" 
                  style={{
                    padding: '0.4rem 1.5rem',
                    background: '#3319FF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  Solve Challenge
                </a>
              </div>
            </div>
          </div>

          {/* Find a challenge header */}
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '300',
            color: '#3D3A46',
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}>
            <strong>Find</strong> a challenge, <strong>solve</strong> it, <strong>make a difference</strong>.
          </h3>

          {/* Filter Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}>
            {filterTags.slice(0, 9).map((tag, index) => (
              <a 
                key={index}
                href={`/crowdsourcing-projects?search=${encodeURIComponent(tag)}`}
                style={{
                  padding: '0.25rem 0.75rem',
                  border: '1px solid #ced4da',
                  borderRadius: '9999px',
                  color: '#3D3A46',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#3319FF';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#3319FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#3D3A46';
                  e.currentTarget.style.borderColor = '#ced4da';
                }}
              >
                {tag.split(',')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CHALLENGES GRID ========== */}
      <section style={{ padding: '0 0 3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }, '@media (max-width: 992px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
            {challenges.map((challenge) => (
              <a 
                key={challenge.id}
                href={`/${challenge.title.replace(/\s+/g, '')}?from=home`}
                style={{ textDecoration: 'none', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
              >
                <div style={{ position: 'relative', paddingTop: '56.25%', background: '#f6f6f6' }}>
                  <img 
                    src={challenge.image} 
                    alt={challenge.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {challenge.isFeatured && (
                    <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem' }}>
                      <div style={{ background: 'rgba(0,0,0,0.8)', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src="https://d253pvgap36xx8.cloudfront.net/static/images/powered-by-text.svg" alt="Powered by" style={{ height: '12px' }} />
                        <img src="https://d253pvgap36xx8.cloudfront.net/static/images/logo-white.svg" alt="HeroX" style={{ height: '16px' }} />
                      </div>
                    </div>
                  )}
                  {challenge.hasVideo && (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.7)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={24} fill="white" color="white" />
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem' }}>
                    <img 
                      src={challenge.creatorLogo} 
                      alt={challenge.creator}
                      style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white' }}
                    />
                  </div>
                </div>
                
                <div style={{ padding: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#666668' }}>by {challenge.creator}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#666668' }}>
                      <span>{challenge.followers}</span>
                      <Star size={14} />
                    </div>
                  </div>
                  
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#3D3A46', margin: '0.25rem 0', lineHeight: '1.3' }}>
                    {challenge.title}
                  </h4>
                  
                  <p style={{ fontSize: '0.85rem', color: '#666668', margin: '0.25rem 0 0.5rem 0', lineHeight: '1.4' }}>
                    {challenge.description}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', borderTop: '1px solid #e9ecef', paddingTop: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#666668' }}>
                      <Calendar size={14} />
                      <span>{challenge.stage}</span>
                      {challenge.daysRemaining && (
                        <span> - {challenge.daysRemaining} Days Remaining</span>
                      )}
                    </div>
                    {challenge.prize && (
                      <div style={{ fontWeight: '600', color: '#3319FF' }}>
                        {challenge.prize} Prize
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="/crowdsourcing-projects?sort=newest" 
              style={{
                padding: '0.5rem 1.5rem',
                background: '#3319FF',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              <Compass size={16} />
              Explore More Challenges
            </a>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section style={{ background: '#f6f6f6', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', '@media (max-width: 768px)': { gridTemplateColumns: '1fr' } }}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: '600', color: '#3D3A46', margin: '0 0 1rem 0' }}>
                Source breakthrough solutions using the power of the crowd
              </h3>
              <p style={{ fontSize: '1rem', color: '#666668', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Tapping into the HeroX network extends your reach beyond your organization, bringing new talent with ideas outside traditional channels.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['identify your problem', 'design a challenge', 'publicize an open call for solutions', 'fund the best ones'].map((step, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#3319FF' }}>
                      <CheckCircle size={20} />
                    </span>
                    <span style={{ fontSize: '0.95rem', color: '#3D3A46' }}>{step}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/i-want-to-launch-challenge" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  padding: '0.5rem 1.5rem',
                  background: '#3319FF',
                  color: 'white',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                <Calendar size={16} />
                Book a Call
              </a>
            </div>
            
            <div style={{ position: 'relative', paddingTop: '56.25%', background: '#e9ecef', borderRadius: '8px', overflow: 'hidden' }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/pages/video_thumbnail/24ef2760cc7311f08d5726a9befeb611.jpeg" 
                alt="HeroX Video"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button 
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.7)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '70px',
                  height: '70px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
              >
                <Play size={30} fill="white" color="white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ICONS / WHY CROWDSOURCING ========== */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#3319FF', fontWeight: '600', fontSize: '0.9rem', margin: 0 }}>
              Why crowdsourcing with HeroX
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#3D3A46', margin: '0.5rem 0' }}>
              Use crowdsourcing for reliable and continual innovation
            </h2>
            <p style={{ fontSize: '1rem', color: '#666668', maxWidth: '600px', margin: '0 auto' }}>
              Our crowd of problem solvers have contributed solutions and ideas to over 200 different challenge projects.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', '@media (max-width: 768px)': { gridTemplateColumns: '1fr' } }}>
            {[
              { step: '01', title: 'Pay for success', text: 'You only pay when your challenge has been successfully solved—a low-risk way to achieve concrete outcomes.', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/crowdsourcing-icon-trans-1.png' },
              { step: '02', title: 'Build a Crowd', text: 'An open platform with no barriers to participation. Our CrowdBuild methodology helps you grow a loyal solver community.', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/crowdsourcing-icon-trans-2.png' },
              { step: '03', title: 'One stop shop', text: 'HeroX is the central hub for registration, submissions, team formation, and judging—end-to-end challenge management.', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/crowdsourcing-icon-trans-3.png' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <img src={item.icon} alt={item.title} style={{ width: '80px', height: '80px' }} />
                </div>
                <span style={{ color: '#3319FF', fontWeight: '600', fontSize: '0.8rem' }}>{item.step}</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#3D3A46', margin: '0.5rem 0' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666668', lineHeight: '1.5' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW WE WORK ========== */}
      <section style={{ padding: '3rem 0', background: '#f6f6f6', borderTop: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#3D3A46', textAlign: 'center', marginBottom: '2rem' }}>
            How we work with you
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }, '@media (max-width: 992px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
            {[
              { step: '1. Identify your challenge', text: 'Ideas, products, designs, proofs of concepts or prototypes. Big or small, there\'s a solution. Start your own or let us help.', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/how-we-work-1.png' },
              { step: '2. Set the guidelines', text: 'Decide what success means to your project. Who owns the IP, the length of the challenge, budget etc.', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/how-we-work-2.png' },
              { step: '3. Share your challenge', text: 'Broadcast your challenge out to a global network of problem solvers. Build your own crowd for future projects too!', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/how-we-work-3.png' },
              { step: '4. Pick your winners', text: 'You decide which ideas will lead to a break-through or let the crowd decide with public voting.', icon: 'https://d253pvgap36xx8.cloudfront.net/static/pages/home/how-we-work-4.png' }
            ].map((item, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ padding: '0.5rem', background: '#f6f6f6' }}>
                  <img src={item.icon} alt={item.step} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontWeight: '600', color: '#3D3A46', margin: '0 0 0.25rem 0' }}>{item.step}</p>
                  <p style={{ fontSize: '0.85rem', color: '#666668', margin: 0, lineHeight: '1.5' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="/how-it-works" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.5rem',
                background: '#3319FF',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              <Rocket size={16} />
              How to Launch a Challenge
            </a>
          </div>
        </div>
      </section>

      {/* ========== BRANDS & STATS ========== */}
      <section data-count-container style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#3D3A46', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Award size={28} color="#3319FF" />
              HeroX scales down or up to the size of the problem
            </h2>
            <p style={{ fontSize: '1rem', color: '#666668', maxWidth: '700px', margin: '0.5rem auto' }}>
              Your business, organization or association can use the same platform as these world class brands, no matter your industry.
            </p>
            <p style={{ fontSize: '1rem', color: '#666668' }}>Why do innovative companies from around the world choose us?</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem', '@media (max-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ background: '#f6f6f6', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3319FF' }}>
                  {stat.prefix}{counts[Object.keys(counts)[index]] || 0}{stat.suffix}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666668' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', padding: '1rem 0', borderTop: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}>
            {brandLogos.map((brand, index) => (
              <img 
                key={index}
                src={brand.image} 
                alt={brand.name}
                style={{ height: '40px', width: 'auto', opacity: 0.6 }}
              />
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="/results" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.5rem',
                background: '#3319FF',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              <Briefcase size={16} />
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer style={{ background: '#1a1a2e', color: 'rgba(255,255,255,0.8)', padding: '3rem 0 1.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem', '@media (max-width: 768px)': { gridTemplateColumns: '1fr' } }}>
            <div>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/images/herox-logo-white-new.png" 
                alt="HeroX"
                style={{ height: '40px', marginBottom: '1rem' }}
              />
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Be the first to know</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem' }}>when new crowdsourcing projects are posted</div>
                <form style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      padding: '0.4rem 0.75rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      padding: '0.4rem 1rem',
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '4px',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.8rem'
                    }}
                  >
                    <Envelope size={14} />
                    subscribe
                  </button>
                </form>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', '@media (max-width: 768px)': { gridTemplateColumns: '1fr' } }}>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', opacity: 0.7 }}>about herox</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['about us', 'press kit', 'partner with us', 'partners', 'privacy', 'terms', 'cookie policy'].map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.4rem' }}>
                      <a href={`/${item.replace(/\s+/g, '-')}`} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', opacity: 0.7 }}>community</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['blog', 'events & webinars'].map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.4rem' }}>
                      <a href={`/${item.replace(/[&\s]+/g, '-')}`} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', opacity: 0.7 }}>support</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['contact us', 'how HeroX works', 'knowledge base', 'FAQ', 'innovation resources'].map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.4rem' }}>
                      <a href={`/${item.replace(/\s+/g, '-').toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.instagram.com/beherox/" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/IamHeroX" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/iamherox" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com/company/herox" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCzvAiGkFmx1JqomRoM71buw" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Youtube size={18} />
              </a>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
              © Copyright HeroX 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { HomePage };