// src/pages/AboutPage.jsx
import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ 
      fontFamily: 'Poppins, system-ui, sans-serif', 
      background: 'white',
      minHeight: '100vh'
    }}>
      
      {/* ========== HERO SECTION ========== */}
      <section className="hero" style={{
        position: 'relative',
        background: '#3319FF',
        padding: '4rem 2rem',
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1 }}>
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" opacity="0.3"/>
            <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="2" opacity="0.2"/>
            <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="2" opacity="0.1"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.1 }}>
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="200" height="200" stroke="white" strokeWidth="2" opacity="0.3"/>
            <rect x="100" y="100" width="100" height="100" stroke="white" strokeWidth="2" opacity="0.2"/>
          </svg>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: '800px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 1rem',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '9999px',
              color: 'white',
              fontSize: '0.85rem',
              fontWeight: '500',
              marginBottom: '1.5rem'
            }}>
              <span>ⓘ</span>
              About HeroX
            </span>

            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Where Organizations and Innovators Solve Big Problems Together
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              maxWidth: '650px'
            }}>
              We help organizations crowdsource solutions from a global community of innovators — faster, more diverse, and more cost-effective than traditional approaches.
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                <span style={{ color: '#ffc107' }}>⚡</span>
                Create prize challenges in days, not months
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                <span style={{ color: '#ffc107' }}>🌍</span>
                Reach innovators in 200+ countries
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                <span style={{ color: '#ffc107' }}>🏆</span>
                Pay only for winning solutions
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="/i-want-to-launch-challenge" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  color: '#3319FF',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f0edff'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
              >
                🏢 For Organizations
              </a>
              <a 
                href="/crowdsourcing-projects" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: 'white',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                💡 For Innovators
              </a>
            </div>
          </div>
        </div>

        {/* Wave decoration at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          overflow: 'hidden'
        }}>
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0,60 L0,30 C300,60 600,0 900,30 C1050,45 1150,30 1200,20 L1200,60 L0,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ========== WHO WE ARE SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3319FF',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.75rem'
            }}>
              👥 Who we are
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Empowering global problem-solving
            </h2>
            <p style={{ color: '#666668', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              HeroX is a global crowdsourcing platform where anyone can post a challenge or contribute a solution.
            </p>
            <p style={{ color: '#666668', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              We connect people who have problems with people who love solving them. By opening problems to the world, organizations gain access to a wider range of ideas, perspectives, and skills than any single team or network can provide on its own.
            </p>
            <p style={{ color: '#666668', fontSize: '1rem', lineHeight: '1.7' }}>
              We believe that breakthrough solutions can come from anywhere. Whether you are an established organization, a growing startup, or an individual innovator, HeroX makes it simple to tap into the creativity of a global community.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/pages/about/image-3.jpeg" 
                alt="HeroX Community"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              opacity: 0.15
            }}>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="10" cy="10" r="8" fill="#3319FF"/>
                <circle cx="30" cy="10" r="8" fill="#3319FF"/>
                <circle cx="50" cy="10" r="8" fill="#3319FF"/>
                <circle cx="10" cy="30" r="8" fill="#3319FF"/>
                <circle cx="30" cy="30" r="8" fill="#3319FF"/>
                <circle cx="50" cy="30" r="8" fill="#3319FF"/>
                <circle cx="10" cy="50" r="8" fill="#3319FF"/>
                <circle cx="30" cy="50" r="8" fill="#3319FF"/>
                <circle cx="50" cy="50" r="8" fill="#3319FF"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: '#f6f6f6', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05 }}>
          <svg width="300" height="300" viewBox="0 0 300 300">
            <line x1="0" y1="0" x2="300" y2="300" stroke="#3319FF" strokeWidth="2"/>
            <line x1="100" y1="0" x2="300" y2="200" stroke="#3319FF" strokeWidth="2"/>
            <line x1="200" y1="0" x2="300" y2="100" stroke="#3319FF" strokeWidth="2"/>
            <line x1="0" y1="100" x2="200" y2="300" stroke="#3319FF" strokeWidth="2"/>
            <line x1="0" y1="200" x2="100" y2="300" stroke="#3319FF" strokeWidth="2"/>
          </svg>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/pages/about/image-1.jpeg" 
                alt="Our Story"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3319FF',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.75rem'
            }}>
              📖 Our story
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Centuries of innovation, modernized
            </h2>
            <p style={{ color: '#666668', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              Crowdsourcing may sound modern, but prize challenges have been shaping human progress for centuries. Reward-based competitions helped us learn how to navigate the open seas, preserve food safely through canning, and even accelerate the commercial space industry.
            </p>
            <p style={{ color: '#666668', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              HeroX was founded in 2013 to bring this powerful model of open innovation to the world in a more accessible, digital form. Our goal is to make it easy for anyone, anywhere, to launch a challenge, participate in one, or build a community of solvers around the problems they care about most.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3319FF' }}>2013</div>
                <div style={{ fontSize: '0.85rem', color: '#666668' }}>Founded</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3319FF' }}>200+</div>
                <div style={{ fontSize: '0.85rem', color: '#666668' }}>Countries</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3319FF' }}>1M+</div>
                <div style={{ fontSize: '0.85rem', color: '#666668' }}>Innovators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TODAY SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: '#3319FF', color: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#ffc107',
            fontWeight: '600',
            fontSize: '0.9rem',
            marginBottom: '0.75rem'
          }}>
            ⚡ What we do
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'white',
            lineHeight: '1.2',
            marginBottom: '2rem'
          }}>
            Today, organizations use HeroX to:
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { icon: '🎯', title: 'Define challenges', desc: 'Define clear, outcome-based challenges' },
              { icon: '🌍', title: 'Reach solvers', desc: 'Reach diverse problem-solvers around the globe' },
              { icon: '💡', title: 'Discover solutions', desc: 'Discover unexpected, high-quality solutions' },
              { icon: '👥', title: 'Build communities', desc: 'Build lasting communities around innovation' }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255,255,255,0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            margin: 0
          }}>
            ✨ Whether you're here to post a challenge or to solve one, HeroX is open to everyone.
          </p>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3319FF',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.75rem'
            }}>
              ⚙️ How it works
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Simple, transparent, rewarding
            </h2>
            <p style={{ color: '#666668', fontSize: '1rem', lineHeight: '1.7' }}>
              On HeroX, challenges are created around real problems, with clearly defined goals and rewards. Challenge sponsors describe what success looks like; the global community brings the ideas, insights, and prototypes that move those goals forward.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/pages/about/image-2.jpeg" 
                alt="How HeroX Works"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              background: '#3319FF',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(51,25,255,0.3)'
            }}>
              <span>✅</span> Easy to use
            </div>
          </div>
        </div>
      </section>

      {/* ========== ROLES SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: '#f6f6f6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Creator Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#3319FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem'
                }}>
                  🚩
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  As a challenge creator
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#3D3A46' }}>
                  <span style={{ color: '#3319FF', fontWeight: '700' }}>✓</span>
                  Design and launch challenges that match your objectives
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#3D3A46' }}>
                  <span style={{ color: '#3319FF', fontWeight: '700' }}>✓</span>
                  Set criteria, timelines, and rewards
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#3D3A46' }}>
                  <span style={{ color: '#3319FF', fontWeight: '700' }}>✓</span>
                  Engage directly with solvers and review submissions
                </li>
              </ul>
            </div>

            {/* Solver Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#3319FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem'
                }}>
                  🚀
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  As a solver
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#3D3A46' }}>
                  <span style={{ color: '#3319FF', fontWeight: '700' }}>✓</span>
                  Discover challenges that match your skills and interests
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#3D3A46' }}>
                  <span style={{ color: '#3319FF', fontWeight: '700' }}>✓</span>
                  Work independently or collaborate with others
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#3D3A46' }}>
                  <span style={{ color: '#3319FF', fontWeight: '700' }}>✓</span>
                  Earn recognition, rewards, and new opportunities
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#3D3A46',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              margin: 0
            }}>
              <span style={{ color: '#3319FF' }}>🛡️</span>
              Everything happens on a transparent, user-friendly platform designed to make participation simple, fair, and rewarding for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: 'white', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, opacity: 0.03 }}>
          <svg width="400" height="400" viewBox="0 0 400 400">
            <rect x="20" y="20" width="360" height="360" stroke="#3319FF" strokeWidth="2"/>
            <rect x="40" y="40" width="320" height="320" stroke="#3319FF" strokeWidth="2"/>
            <rect x="60" y="60" width="280" height="280" stroke="#3319FF" strokeWidth="2"/>
            <rect x="80" y="80" width="240" height="240" stroke="#3319FF" strokeWidth="2"/>
            <rect x="100" y="100" width="200" height="200" stroke="#3319FF" strokeWidth="2"/>
          </svg>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3319FF',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.75rem'
            }}>
              ❤️ Our values
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              What drives us
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666668',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              The HeroX team is united by a shared belief: the world becomes better when more people can participate in solving meaningful problems. Our culture and values guide how we work with each other, with our community, and with our partners.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {/* Value 1 */}
            <div style={{
              background: '#f6f6f6',
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: '4px solid #3319FF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📈</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  Hungry to Learn and Grow
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: '#666668',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Hungry to Learn and Grow</strong> – We are curious, always looking for better questions and better answers.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Discover over Create</strong> – We search for what already works before we reinvent it.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>You grow by learning and applying</strong> – Insight matters only when it is put into action.</li>
                <li><strong>ShuHaRi</strong> – We honor the path from student to master: first follow the rules, then adapt them, then create new ones.</li>
              </ul>
            </div>

            {/* Value 2 */}
            <div style={{
              background: '#f6f6f6',
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: '4px solid #3319FF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🔄</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  Abundance and Continuous Improvement
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: '#666668',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Abundance Mindset</strong> – We believe the future can be bigger than the past, for ourselves and for our community.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Continual Improvement</strong> – We capture our discoveries in systems so that learning compounds over time.</li>
                <li><strong>Manage Systems, not People</strong> – If it isn't a system and it isn't measured, it effectively didn't happen.</li>
              </ul>
            </div>

            {/* Value 3 */}
            <div style={{
              background: '#f6f6f6',
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: '4px solid #3319FF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  Courage, Ownership, and Action
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: '#666668',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Courage Precedes Growth</strong> – We say "yes" to challenges that stretch us and help others do the same.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Bring it on!</strong> – We embrace ambitious goals, knowing progress often begins with unreasonable expectations.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Honesty</strong> – We say what we really think, even when it's uncomfortable, and we invite others to do the same.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Ownership</strong> – We question actions that are inconsistent with our values and take responsibility for improving them.</li>
                <li><strong>Do it Anyways</strong> – Amateurs wait for inspiration; professionals show up and do the work, even on hard days.</li>
              </ul>
            </div>

            {/* Value 4 */}
            <div style={{
              background: '#f6f6f6',
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: '4px solid #3319FF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>😊</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  Happiness and Fun
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: '#666668',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Be Happy and Have Fun</strong> – We treat work and life as a game best played with genuine enjoyment.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Happiness First</strong> – We know that sustainable success grows from well-being, not the other way around.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Enjoy the Journey</strong> – The process matters as much as the outcome.</li>
                <li><strong>Make it Fun</strong> – We look for ways to make collaboration lighter, more creative, and more energizing.</li>
              </ul>
            </div>

            {/* Value 5 */}
            <div style={{
              background: '#f6f6f6',
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: '4px solid #3319FF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  Simplicity and Focus
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: '#666668',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Be &gt; Do &gt; Have</strong> – We focus on who we are becoming, then what we do, and only then what we have.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Do it the Easy Way</strong> – We prefer elegant, simple solutions over unnecessary complexity.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Unique Ability</strong> – We strive to spend most of our time where we are naturally strongest and create space for others to do the same.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>KISS</strong> – We remove what's unnecessary, while keeping what truly matters.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>ROWE</strong> – We keep activities and collaboration tightly aligned with clear outcomes.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Law of Least Effort</strong> – We work in a calm, focused way and allow others to do the same.</li>
                <li><strong>Progress, not Perfection</strong> – We can always move forward; perfection is rarely required to create value.</li>
              </ul>
            </div>

            {/* Value 6 */}
            <div style={{
              background: '#f6f6f6',
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: '4px solid #3319FF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>👥</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                  Humility, Service, and Teamwork
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: '#666668',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Be Humble</strong> – We know we don't have all the answers and are open to being surprised and corrected.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>We Serve</strong> – We create value for others first; it's about their results, not our ego.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Be Wrong</strong> – We treat being wrong as an opportunity: you can either be right or get results.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Team First</strong> – We succeed and fail together; no one wins alone.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Listen First</strong> – We listen to understand before we speak to be understood.</li>
                <li><strong>Be a Multiplier</strong> – We bring out the best in each other so that the whole community is greater than the sum of its parts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CLOSING SECTION ========== */}
      <section style={{ padding: '4rem 2rem', background: '#f6f6f6', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03 }}>
          <svg width="400" height="400" viewBox="0 0 400 400">
            <text x="200" y="200" fontSize="300" textAnchor="middle" dominantBaseline="central" fill="#3319FF" fontFamily="Poppins, sans-serif" fontWeight="bold">✕</text>
          </svg>
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '2rem',
            fontWeight: '300',
            color: '#3D3A46',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            <span style={{ fontSize: '3rem', color: '#3319FF', fontStyle: 'normal' }}>"</span>
            HeroX exists because we believe that when more people are invited into the problem-solving process, better solutions emerge—and everyone wins.
            <span style={{ fontSize: '3rem', color: '#3319FF', fontStyle: 'normal' }}>"</span>
          </p>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{
        padding: '4rem 2rem',
        background: '#3319FF',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1 }}>
          <svg width="300" height="300" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="2" opacity="0.3"/>
            <circle cx="150" cy="150" r="90" stroke="white" strokeWidth="2" opacity="0.2"/>
            <circle cx="150" cy="150" r="40" stroke="white" strokeWidth="2" opacity="0.1"/>
          </svg>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 1rem',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '9999px',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: '500',
            marginBottom: '1rem'
          }}>
            🚀 Join our community
          </span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            lineHeight: '1.2',
            marginBottom: '0.5rem'
          }}>
            Ready to make an impact?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '2rem'
          }}>
            Start your innovation journey today
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="/how-it-works" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#3319FF',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f0edff'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              ▶️ Get Started
            </a>
            <a 
              href="/crowdsourcing-projects" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '600',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              🔍 Explore Challenges
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export const WhoWeArePage = AboutPage;