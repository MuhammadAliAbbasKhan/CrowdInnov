// src/pages/ForBusinessPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, Play, Search, Globe, Users, Award, 
  Briefcase, Building, Landmark as Bank, GraduationCap,
  Lightbulb, Megaphone, Layers, Trophy, Star,
  Zap, PiggyBank, Workflow as Diagram, Quote, Handshake,
  ArrowRight, CheckCircle, Inbox, Calendar,
  Compass, User, Settings
} from 'lucide-react';

export default function ForBusinessPage() {
  const [counts, setCounts] = useState({
    prizes: 0,
    challenges: 0,
    countries: 0,
    success: 0,
    submissions: 0,
    countriesSub: 0,
    topRated: 0
  });
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef(null);

  // Stats data
  const stats = [
    { label: 'In prizes awarded', value: 420, suffix: 'M+', prefix: '$', key: 'prizes' },
    { label: 'Challenges powered', value: 350, suffix: '+', prefix: '', key: 'challenges' },
    { label: 'Countries represented', value: 175, suffix: '', prefix: '', key: 'countries' },
    { label: 'Success rate', value: 94, suffix: '%', prefix: '', key: 'success' }
  ];

  // Steps data
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Define Your Challenge',
      description: 'Identify the problem you want to solve. Whether it\'s improving a product, optimizing a process, or discovering breakthrough innovations, our community of global experts can tackle it all.',
      features: [
        'Work with our experts to frame your challenge',
        'Set clear goals and success criteria',
        'Define prize structure and timeline'
      ],
      image: 'https://d253pvgap36xx8.cloudfront.net/static/pages/how-it-works/image-challenge-0.jpeg',
      iconText: 'Your Challenge'
    },
    {
      number: '02',
      icon: Megaphone,
      title: 'Launch & Promote',
      description: 'Share your challenge with the world. Tap into our network of over 1 million innovators, or bring your own community. We\'ll help you reach the right solvers with targeted promotion strategies.',
      features: [
        'Access our global network of problem solvers',
        'Multi-channel promotion support',
        'Build your own innovation community'
      ],
      image: 'https://d253pvgap36xx8.cloudfront.net/static/pages/how-it-works/image-share-1.jpeg',
      iconText: '195+ Countries'
    },
    {
      number: '03',
      icon: Layers,
      title: 'Collect Solutions',
      description: 'Watch as creative solutions pour in from around the world. Our platform manages the entire submission process, making it easy to track, organize, and communicate with participants.',
      features: [
        'Streamlined submission management',
        'Built-in communication tools',
        'Real-time progress tracking'
      ],
      isDashboard: true
    },
    {
      number: '04',
      icon: Trophy,
      title: 'Select Winners',
      description: 'Evaluate submissions with our powerful judging tools. Assemble your expert panel, use community voting, or combine both. Only pay when you find solutions that meet your criteria.',
      features: [
        'Flexible judging options',
        'Expert panel management',
        'Pay only for results'
      ],
      image: 'https://d253pvgap36xx8.cloudfront.net/static/pages/how-it-works/image-winners-2.jpeg',
      iconText: 'Winner Selected'
    }
  ];

  // Value cards data
  const valueCards = [
    {
      icon: Globe,
      title: 'Global Talent Pool',
      description: 'Access over 1 million innovators from 195+ countries. Find experts you never knew existed.'
    },
    {
      icon: Zap,
      title: 'Faster Results',
      description: 'Get solutions in weeks, not years. Parallel problem-solving accelerates your innovation timeline.'
    },
    {
      icon: PiggyBank,
      title: 'Pay for Results',
      description: 'Only award prizes when you receive solutions that meet your criteria. No results, no cost.'
    },
    {
      icon: Diagram,
      title: 'Diverse Perspectives',
      description: 'Break free from groupthink. Fresh eyes see solutions that internal teams might miss.'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      videoId: 'H29YgZvT5mw',
      name: 'Josh Everett',
      company: 'Ameritas',
      title: 'Vice President, Strategic Initiatives',
      logo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/6045d25803a511e9b2330242ac110005/eac72d2603a211e9a4610242ac110002.png'
    },
    {
      id: 2,
      videoId: '7oxlyk1dxkM',
      name: 'Keith Lynn',
      company: 'Lockheed Martin',
      title: 'General Manager - Microelectronics Research & Development Laboratory',
      logo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/b18bdd3ce2ae11e882ab0242ac11000a/b15d8b8ae2ae11e881320242ac110002.png'
    }
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
                const key = stats[index].key;
                return { ...prev, [key]: current };
              });
            }, 20);
          });
        }
      });
    }, { threshold: 0.3 });

    const container = document.querySelector('[data-count-container]');
    if (container) observer.observe(container);

    // Also animate submissions dashboard
    const subContainer = document.querySelector('.submissions-preview');
    if (subContainer) {
      const subObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const subTargets = [
              { key: 'submissions', target: 247 },
              { key: 'countriesSub', target: 89 },
              { key: 'topRated', target: 12 }
            ];
            subTargets.forEach((item, index) => {
              let current = 0;
              const increment = Math.ceil(item.target / 60);
              const interval = setInterval(() => {
                current += increment;
                if (current >= item.target) {
                  current = item.target;
                  clearInterval(interval);
                }
                setCounts(prev => ({ ...prev, [item.key]: current }));
              }, 20);
            });
          }
        });
      }, { threshold: 0.3 });
      subObserver.observe(subContainer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Poppins, system-ui, sans-serif', 
      background: 'white'
    }}>
      {/* ========== HERO SECTION ========== */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0B0F1F 0%, #1A1A2E 50%, #2D1B69 100%)',
        color: 'white',
        padding: '6rem 2rem 4rem',
        overflow: 'hidden',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Orbs */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(51,25,255,0.3) 0%, transparent 70%)',
          animation: 'pulseOrb 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(51,25,255,0.2) 0%, transparent 70%)',
          animation: 'pulseOrb 10s ease-in-out infinite 2s'
        }}></div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            marginBottom: '1.5rem'
          }}>
            <Zap size={16} fill="#FFD700" color="#FFD700" />
            <span style={{ fontSize: '0.85rem' }}>Crowdsourcing for real-world challenges</span>
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            maxWidth: '800px'
          }}>
            Solve Your Hardest Problems with<br />
            <span style={{ color: '#6C5CE7' }}>Global Experts</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            HeroX connects you with a worldwide community of problem solvers. Run prize challenges and get
            practical, high-quality solutions from people you'd never reach on your own.
          </p>

          {/* Stats */}
          <div data-count-container style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {stats.map((stat, index) => (
              <React.Fragment key={stat.key}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#6C5CE7' }}>
                    {stat.prefix}{counts[stat.key] || 0}{stat.suffix}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
                </div>
                {index < stats.length - 1 && (
                  <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/i-want-to-launch-challenge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#1A1A2E',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Rocket size={18} />
              Talk to our team
            </a>
            <a
              href="#how-it-works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 2rem',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <Play size={18} />
              See How It Works
            </a>
          </div>
        </div>

        {/* Wave Divider */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px'
        }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,37 1440,30 L1440,60 L0,60 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ========== TRUSTED SECTION ========== */}
      <section style={{ padding: '3rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#666668', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Trusted by industry leaders worldwide
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            padding: '1rem 0'
          }}>
            {brandLogos.map((brand, index) => (
              <img
                key={index}
                src={brand.image}
                alt={brand.name}
                style={{ height: '40px', width: 'auto', opacity: 0.6 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section id="how-it-works" style={{ padding: '4rem 2rem', background: '#f8faff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#6C5CE7',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              <Settings size={16} />
              The Process
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1A1A2E', margin: '0.5rem 0' }}>
              How HeroX Works
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666668', maxWidth: '600px', margin: '0 auto' }}>
              With almost a decade of enterprise delivery through crowdsourcing, HeroX makes implementing
              crowdsourcing simple, effective, and transformative.
            </p>
          </div>

          {/* Steps Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isReverse = index % 2 === 1;
              
              return (
                <div key={index} style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  flexDirection: isReverse ? 'row-reverse' : 'row',
                  '@media (max-width: 768px)': { flexDirection: 'column' }
                }}>
                  {/* Step Number */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '60px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#6C5CE7',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: '700'
                    }}>
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div style={{
                        width: '2px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, #6C5CE7, transparent)',
                        marginTop: '0.5rem'
                      }}></div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isReverse ? '1fr 1fr' : '1fr 1fr',
                    gap: '2rem',
                    flex: 1,
                    alignItems: 'center',
                    '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
                  }}>
                    <div style={{ order: isReverse ? 1 : 0 }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#1A1A2E',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}>
                        <Icon size={24} color="#6C5CE7" />
                        {step.title}
                      </h3>
                      <p style={{ color: '#666668', lineHeight: '1.6', marginBottom: '1rem' }}>
                        {step.description}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {step.features.map((feature, fi) => (
                          <li key={fi} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            color: '#4B5563'
                          }}>
                            <CheckCircle size={18} color="#6C5CE7" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ order: isReverse ? 0 : 1 }}>
                      {step.isDashboard ? (
                        // Submissions Dashboard
                        <div className="submissions-preview" style={{
                          background: 'white',
                          borderRadius: '16px',
                          padding: '1.5rem',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                          border: '1px solid #e9ecef'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                          }}>
                            <Inbox size={20} color="#6C5CE7" />
                            <span style={{ fontWeight: '600' }}>Submissions Dashboard</span>
                          </div>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1rem',
                            marginBottom: '1rem'
                          }}>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#6C5CE7' }}>
                                {counts.submissions || 0}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666668' }}>Total Submissions</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#6C5CE7' }}>
                                {counts.countriesSub || 0}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666668' }}>Countries</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#6C5CE7' }}>
                                {counts.topRated || 0}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666668' }}>Top Rated</div>
                            </div>
                          </div>
                          <div style={{
                            width: '100%',
                            height: '6px',
                            background: '#f0f0f0',
                            borderRadius: '3px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: '75%',
                              height: '100%',
                              background: 'linear-gradient(to right, #6C5CE7, #a29bfe)',
                              borderRadius: '3px'
                            }}></div>
                          </div>
                        </div>
                      ) : (
                        <div style={{
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                          position: 'relative'
                        }}>
                          <img
                            src={step.image}
                            alt={step.title}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                          <div style={{
                            position: 'absolute',
                            bottom: '1rem',
                            left: '1rem',
                            right: '1rem',
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(10px)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'white'
                          }}>
                            {step.number === '02' ? (
                              <Globe size={16} />
                            ) : step.number === '04' ? (
                              <Trophy size={16} />
                            ) : (
                              <Lightbulb size={16} />
                            )}
                            <span style={{ fontSize: '0.85rem' }}>{step.iconText}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== VALUE SECTION ========== */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #0B0F1F 0%, #1A1A2E 50%, #2D1B69 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFD700',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              <Star size={16} />
              Why HeroX
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: '0.5rem 0' }}>
              The Smarter Way to Innovate
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
              Traditional R&amp;D is expensive, slow, and limited. Crowdsourcing opens the door to unlimited possibilities.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            '@media (max-width: 768px)': { gridTemplateColumns: '1fr' },
            '@media (max-width: 992px)': { gridTemplateColumns: 'repeat(2, 1fr)' }
          }}>
            {valueCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(108,92,231,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(108,92,231,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto'
                  }}>
                    <Icon size={28} color="#6C5CE7" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#6C5CE7',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              <Quote size={16} />
              Success Stories
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1A1A2E', margin: '0.5rem 0' }}>
              Hear what our clients have to say
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666668', maxWidth: '700px', margin: '0 auto' }}>
              We work with leading consultancies, solution providers, crowdsourcing platforms, incubators, and marketing agencies worldwide to make crowdsourcing available, viable and successful for their clients.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
          }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} style={{
                background: '#f8faff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'relative', paddingTop: '56.25%', background: '#1A1A2E' }}>
                  <iframe
                    src={`//www.youtube.com/embed/${testimonial.videoId}?rel=0&iv_load_policy=3&wmode=opaque&enablejsapi=1`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0
                    }}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope"
                    allowFullScreen
                    title={testimonial.name}
                  ></iframe>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                  />
                  <div>
                    <div style={{ fontWeight: '600', color: '#1A1A2E' }}>{testimonial.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#6C5CE7' }}>{testimonial.company}</div>
                    <div style={{ fontSize: '0.75rem', color: '#666668' }}>{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNERS SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: '#f8faff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#6C5CE7',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                <Handshake size={16} />
                Partnership
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1A1A2E', margin: '0.5rem 0' }}>
                Partner with HeroX
              </h2>
              <p style={{ color: '#666668', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                We work with a variety of organizations worldwide to make crowdsourcing available, viable and successful for their clients. As a trusted HeroX partner, we work with you to help your team identify crowdsourcing value for any business.
              </p>
              <a
                href="/partnerships"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 2rem',
                  border: '2px solid #6C5CE7',
                  color: '#6C5CE7',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#6C5CE7';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6C5CE7';
                }}
              >
                Learn about being a partner
                <ArrowRight size={18} />
              </a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {[Building, Bank, GraduationCap, Briefcase].map((Icon, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                }}
                >
                  <Icon size={36} color="#6C5CE7" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #0B0F1F 0%, #1A1A2E 50%, #2D1B69 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            marginBottom: '1.5rem'
          }}>
            <Rocket size={16} color="#FFD700" />
            <span style={{ fontSize: '0.85rem' }}>Ready to Innovate?</span>
          </div>

          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            Invite the World Into<br />Your Boardroom
          </h2>

          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Join thousands of organizations transforming how they solve problems
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/i-want-to-launch-challenge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#1A1A2E',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Rocket size={18} />
              Launch a Challenge
            </a>
            <a
              href="/crowdsourcing-projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 2rem',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <Search size={18} />
              Explore Challenges
            </a>
          </div>
        </div>
      </section>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(20px, -20px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 768px) {
          .step-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export { ForBusinessPage };