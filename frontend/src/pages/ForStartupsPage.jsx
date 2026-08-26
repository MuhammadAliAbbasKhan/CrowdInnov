// src/pages/StartupPage.jsx
import React, { useState } from 'react';

export default function StartupPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Startups' },
    { id: 'tech', label: 'Technology' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'energy', label: 'Energy' },
    { id: 'education', label: 'Education' },
    { id: 'environment', label: 'Environment' },
    { id: 'food', label: 'Food & Finances' }
  ];

  // Startup data
  const startups = [
    {
      id: 1,
      name: 'EcoTech Solutions',
      category: 'Energy',
      region: 'North America',
      description: 'Developing sustainable energy storage solutions for renewable power grids.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2023',
      status: 'Active',
      followers: 234
    },
    {
      id: 2,
      name: 'HealthAI Innovations',
      category: 'Health & Wellness',
      region: 'Europe',
      description: 'AI-powered diagnostic tools for early disease detection and prevention.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2022',
      status: 'Active',
      followers: 456
    },
    {
      id: 3,
      name: 'EduFuture',
      category: 'Education',
      region: 'Asia',
      description: 'Personalized learning platforms using adaptive AI technology.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2024',
      status: 'New',
      followers: 123
    },
    {
      id: 4,
      name: 'GreenCycle',
      category: 'Environment',
      region: 'North America',
      description: 'Waste-to-energy conversion technology for urban environments.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2021',
      status: 'Active',
      followers: 789
    },
    {
      id: 5,
      name: 'AgriSmart',
      category: 'Food & Finances',
      region: 'Africa',
      description: 'Precision farming solutions for smallholder farmers.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2023',
      status: 'Active',
      followers: 345
    },
    {
      id: 6,
      name: 'Quantum Computing Labs',
      category: 'Technology',
      region: 'North America',
      description: 'Quantum computing solutions for complex optimization problems.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2022',
      status: 'Active',
      followers: 567
    },
    {
      id: 7,
      name: 'BioMed Innovations',
      category: 'Health & Wellness',
      region: 'Europe',
      description: 'Revolutionary biomedical devices for minimally invasive surgery.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2021',
      status: 'Active',
      followers: 678
    },
    {
      id: 8,
      name: 'SolarTech',
      category: 'Energy',
      region: 'Asia',
      description: 'High-efficiency solar panel technology for residential and commercial use.',
      logo: 'https://d253pvgap36xx8.cloudfront.net/static/images/startup-placeholder.png',
      founded: '2023',
      status: 'New',
      followers: 234
    }
  ];

  // Filtered startups
  const filteredStartups = startups.filter(startup => {
    const matchesCategory = activeTab === 'all' || startup.category === categories.find(c => c.id === activeTab)?.label;
    const matchesRegion = selectedRegion === 'all' || startup.region === selectedRegion;
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          startup.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  // Regions for filter
  const regions = ['all', 'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Oceania'];

  // Statistics
  const stats = [
    { value: '450+', label: 'Startups Registered' },
    { value: '75+', label: 'Countries Represented' },
    { value: '$850M+', label: 'Funding Secured' },
    { value: '94%', label: 'Success Rate' }
  ];

  return (
    <div style={{ 
      fontFamily: 'Poppins, system-ui, sans-serif', 
      background: 'white',
      minHeight: '100vh',
      paddingTop: '2rem'
    }}>
      
      {/* ========== HERO SECTION ========== */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #3319FF 100%)',
        padding: '4rem 2rem',
        marginBottom: '3rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 1rem', borderRadius: '9999px', marginBottom: '1rem' }}>
            <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '500' }}>
              <span style={{ color: '#ffc107' }}>●</span> Open Call for Startups
            </span>
          </div>
          
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            color: 'white', 
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            HeroX's Open Call for Startups
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.85)', 
            maxWidth: '700px', 
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Connect with innovative startups and solve challenges together.
            Join our global network of problem solvers.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="/sign-up" 
              style={{
                padding: '0.75rem 2rem',
                background: '#ffc107',
                color: '#1a1a2e',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ffd84d'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ffc107'}
            >
              Join as Startup
            </a>
            <a 
              href="/crowdsourcing-projects" 
              style={{
                padding: '0.75rem 2rem',
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
              Explore Challenges
            </a>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 3rem 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.5rem',
          '@media (max-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }
        }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              style={{ 
                textAlign: 'center', 
                padding: '1.5rem',
                background: '#f6f6f6',
                borderRadius: '8px'
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3319FF' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666668' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FILTERS ========== */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 2rem 2rem' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.75rem',
          marginBottom: '1.5rem',
          justifyContent: 'center'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '0.5rem 1.25rem',
                background: activeTab === cat.id ? '#3319FF' : 'transparent',
                color: activeTab === cat.id ? 'white' : '#3D3A46',
                border: activeTab === cat.id ? '1px solid #3319FF' : '1px solid #ced4da',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: activeTab === cat.id ? '600' : '500',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.borderColor = '#3319FF';
                  e.currentTarget.style.background = '#f0edff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.borderColor = '#ced4da';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <label style={{ fontSize: '0.85rem', color: '#666668' }}>Region:</label>
            <select 
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              style={{
                padding: '0.4rem 0.75rem',
                border: '1px solid #ced4da',
                borderRadius: '4px',
                background: 'white',
                fontSize: '0.85rem',
                color: '#3D3A46'
              }}
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region === 'all' ? 'All Regions' : region}
                </option>
              ))}
            </select>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search startups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #ced4da',
                borderRadius: '4px',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3319FF'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#ced4da'}
            />
          </div>
        </div>
      </section>

      {/* ========== STARTUPS GRID ========== */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 3rem 2rem' }}>
        {filteredStartups.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p style={{ fontSize: '1.1rem', color: '#666668' }}>No startups found matching your criteria.</p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {filteredStartups.map((startup) => (
              <div 
                key={startup.id}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  transition: 'box-shadow 0.3s',
                  padding: '1.5rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#3319FF' }}>
                      {startup.name.charAt(0)}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#3D3A46', margin: 0 }}>
                      {startup.name}
                    </h3>
                    <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: '#666668' }}>
                      <span>{startup.category}</span>
                      <span>•</span>
                      <span>{startup.region}</span>
                    </div>
                  </div>
                  {startup.status === 'New' && (
                    <span style={{
                      padding: '0.15rem 0.5rem',
                      background: '#ffc107',
                      color: '#1a1a2e',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      fontWeight: '600'
                    }}>
                      NEW
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.85rem', color: '#666668', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                  {startup.description}
                </p>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #e9ecef',
                  paddingTop: '0.75rem'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#666668' }}>
                    Founded {startup.founded}
                    <span style={{ marginLeft: '0.75rem' }}>
                      <span role="img" aria-label="followers">⭐</span> {startup.followers}
                    </span>
                  </div>
                  <a 
                    href={`/startup/${startup.id}`}
                    style={{
                      padding: '0.25rem 1rem',
                      background: '#3319FF',
                      color: 'white',
                      borderRadius: '0.375rem',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      transition: 'background 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#0052cc'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#3319FF'}
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ========== WHY JOIN SECTION ========== */}
      <section style={{ background: '#f6f6f6', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#3D3A46', textAlign: 'center', marginBottom: '2rem' }}>
            Why Join HeroX as a Startup?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {[
              { title: 'Global Exposure', desc: 'Get visibility from a worldwide network of innovators and investors.' },
              { title: 'Solve Real Problems', desc: 'Connect with organizations that need your innovative solutions.' },
              { title: 'Win Prizes & Funding', desc: 'Compete for prize money and investment opportunities.' },
              { title: 'Build Your Network', desc: 'Connect with mentors, partners, and fellow entrepreneurs.' }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '0.5rem'
                }}>
                  {['🌍', '💡', '🏆', '🤝'][index]}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3D3A46', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666668', lineHeight: '1.5', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="/sign-up" 
              style={{
                padding: '0.75rem 2rem',
                background: '#3319FF',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0052cc'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#3319FF'}
            >
              Register Your Startup Now
            </a>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section style={{ padding: '3rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#3D3A46', textAlign: 'center', marginBottom: '2rem' }}>
            Success Stories
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {[
              { 
                quote: 'HeroX helped us connect with investors who believed in our vision. We raised our seed round through a challenge!',
                author: 'Sarah Chen',
                company: 'EcoTech Solutions'
              },
              { 
                quote: 'The platform gave us access to problems we never knew existed. Our solution won a $500K prize.',
                author: 'Michael Rodriguez',
                company: 'HealthAI Innovations'
              },
              { 
                quote: 'We built our first customer base through HeroX. It\'s been instrumental to our growth.',
                author: 'Aisha Patel',
                company: 'AgriSmart'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                style={{
                  background: '#f6f6f6',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #3319FF'
                }}
              >
                <p style={{ fontSize: '0.95rem', color: '#3D3A46', lineHeight: '1.6', fontStyle: 'italic', margin: '0 0 1rem 0' }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: '600', color: '#3D3A46' }}>{testimonial.author}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666668' }}>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #3319FF 100%)',
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Ready to Take Your Startup to the Next Level?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Join HeroX today and start solving challenges that matter.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="/sign-up" 
              style={{
                padding: '0.75rem 2rem',
                background: '#ffc107',
                color: '#1a1a2e',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ffd84d'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ffc107'}
            >
              Get Started
            </a>
            <a 
              href="/how-it-works" 
              style={{
                padding: '0.75rem 2rem',
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
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export const ForStartupsPage = StartupPage;