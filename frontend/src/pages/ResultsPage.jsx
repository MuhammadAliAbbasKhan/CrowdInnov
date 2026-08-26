// src/pages/ResultsPage.jsx
import React, { useState, useEffect } from 'react';

export default function ResultsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSort, setActiveSort] = useState('-date');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Categories for filter
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'arts-design', label: 'Arts & Design' },
    { id: 'covid-19', label: 'COVID-19' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'drones', label: 'Drones' },
    { id: 'education', label: 'Education' },
    { id: 'energy-environment-resources', label: 'Energy, Environment & Resources' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'finances', label: 'Finances' },
    { id: 'government', label: 'Government' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'non-profit-social-impact', label: 'Non-Profit & Social Impact' },
    { id: 'space', label: 'Space' },
    { id: 'technology', label: 'Technology' }
  ];

  // Sort options
  const sortOptions = [
    { id: '-date', label: 'New' },
    { id: '-rank', label: 'Popular' },
    { id: 'prize', label: 'Prize: Low to High' },
    { id: '-prize', label: 'Prize: High to Low' }
  ];

  // Results data
  const allResults = [
    {
      id: 1,
      title: 'The Buidl Web3 with Coinbase Cloud Challenge',
      description: 'The Buidl Web3 with Coinbase Cloud Challenge asked aspiring developers to create a prototype for the next great dapp (decentralized app).',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/92ac7ee01ca011ee8521e6a92efebcda.jpeg',
      categories: ['Engineering', 'Technology'],
      duration: '7 months',
      prize: '$15K USDC',
      ideas: 4,
      slug: 'BuidlwithCoinbaseCloud',
      rank: 95,
      date: '2024-06-15'
    },
    {
      id: 2,
      title: 'Catalytic Converter Theft Challenge',
      description: 'This challenge is seeking new sustainable solutions to deter or prevent catalytic converter thefts.',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/c048ddbe358811f0bba4c29427f7fbd0.jpeg',
      categories: ['Engineering', 'Government'],
      duration: '6 months',
      prize: '$50K',
      ideas: 209,
      slug: '19-catalytic-converter-theft-challenge',
      rank: 88,
      date: '2024-05-20'
    },
    {
      id: 3,
      title: "Airbus' Metaverse and the Future of Flight",
      description: 'Help Airbus imagine the travel experience of the future through the use of the metaverse!',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/7c1ffe5a8d2f11edba4bde4d1f7f3494.jpeg',
      categories: ['Arts & Design', 'Engineering'],
      duration: '5 months',
      prize: '$30K',
      ideas: 65,
      slug: 'AirbusMetaverse',
      rank: 92,
      date: '2024-04-10'
    },
    {
      id: 4,
      title: 'The Autism Employment Connector Challenge',
      description: 'Increase accessibility for autistic job seekers to find employment and navigate the application process to connect with employers.',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/c9dfc5a4596211ed9512ee9a2fe3eeb8.jpeg',
      categories: ['Education', 'Non-Profit & Social Impact'],
      duration: '4 months',
      prize: '$30K',
      ideas: 26,
      slug: 'autismemploymentconnectorchallenge',
      rank: 78,
      date: '2024-03-05'
    },
    {
      id: 5,
      title: 'Monitoring Electrical Cable Challenge',
      description: 'Solutions for monitoring the health of Paper-insulated and Solid Dielectric based cables for underground electrical networks',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/4a69d15e8d2c11edabe9ae91e300b56f.jpeg',
      categories: ['Energy, Environment & Resources', 'Infrastructure'],
      duration: '3 months',
      prize: '$50K',
      ideas: 24,
      slug: 'DLCCableChallenge',
      rank: 82,
      date: '2024-02-15'
    },
    {
      id: 6,
      title: 'Flexible Pipes Lifecycle Challenge',
      description: "Figuring out how Australia's Oil and Gas Industry might repurpose flexible pipes from depleted fields to reduce waste and emissions.",
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/1e1363e4556011edb6b6ba2c1656379f.jpeg',
      categories: ['Data Science', 'Engineering'],
      duration: '7 months',
      prize: '$19K',
      ideas: 123,
      slug: 'flexiblepipes',
      rank: 90,
      date: '2024-01-20'
    },
    {
      id: 7,
      title: 'NASA Space Apps Challenge',
      description: 'Develop innovative solutions to real-world problems facing space exploration and Earth science.',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/7c1ffe5a8d2f11edba4bde4d1f7f3494.jpeg',
      categories: ['Space', 'Technology'],
      duration: '8 months',
      prize: '$100K',
      ideas: 450,
      slug: 'nasa-space-apps',
      rank: 96,
      date: '2023-12-10'
    },
    {
      id: 8,
      title: 'Clean Energy Innovation Challenge',
      description: 'Seeking breakthrough solutions for renewable energy storage and distribution.',
      image: 'https://d253pvgap36xx8.cloudfront.net/pages/results/detail_images/4a69d15e8d2c11edabe9ae91e300b56f.jpeg',
      categories: ['Energy, Environment & Resources', 'Technology'],
      duration: '6 months',
      prize: '$75K',
      ideas: 180,
      slug: 'clean-energy-challenge',
      rank: 85,
      date: '2023-11-15'
    }
  ];

  // Filter and sort results
  const filteredResults = allResults.filter(result => {
    const matchesCategory = activeCategory === 'all' || result.categories.some(cat => 
      cat.toLowerCase().replace(/[&\s]+/g, '-') === activeCategory
    );
    const matchesSearch = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort results
  const sortedResults = [...filteredResults].sort((a, b) => {
    switch(activeSort) {
      case '-date':
        return new Date(b.date) - new Date(a.date);
      case '-rank':
        return b.rank - a.rank;
      case 'prize':
        const prizeA = parseInt(a.prize.replace(/[$,K]/g, ''));
        const prizeB = parseInt(b.prize.replace(/[$,K]/g, ''));
        return prizeA - prizeB;
      case '-prize':
        const prizeA2 = parseInt(a.prize.replace(/[$,K]/g, ''));
        const prizeB2 = parseInt(b.prize.replace(/[$,K]/g, ''));
        return prizeB2 - prizeA2;
      default:
        return 0;
    }
  });

  // Paginate results
  const displayedResults = sortedResults.slice(0, visibleCount);
  const hasMore = visibleCount < sortedResults.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: 'When the American Society of Echocardiography (ASE) decided to launch an innovation competition to foster advances in cardiovascular ultrasound, we knew we would need some external support to help us achieve our goals. HeroX was a fantastic partner, providing not only a user-friendly online platform but also outstanding expertise and guidance in designing and executing our inaugural Echovation Challenge. We\'re excited to work with them again as we launch Echovation Challenge 2017!',
      author: 'Robin Wiegerink',
      title: 'CEO',
      company: 'American Society of Echocardiography',
      avatar: 'https://d253pvgap36xx8.cloudfront.net/pages/results/client_avatars/91b43eb0379911ee97e10a051eeee87c.jpeg'
    },
    {
      id: 2,
      text: 'The Integra Gold Rush challenge has surpassed our expectations on many levels and is certainly generating quite a buzz in our industry. HeroX helped us to build a community of over 1,200 innovators focused on finding the gold in our mine. We\'re excited to see the final results and we recommend using a HeroX challenge to achieve your organization\'s goals!',
      author: 'Steve de Jong',
      title: 'CEO & President',
      company: 'Integra Gold Corp',
      avatar: 'https://d253pvgap36xx8.cloudfront.net/pages/results/client_avatars/6ea18e4a379a11eea9fafaa50df06e42.jpeg'
    },
    {
      id: 3,
      text: 'The Healthy Behaviour Data Challenge was aimed at identifying novel sources of data that can be leveraged to gain a better understanding of the health and wellness of Canadians. HeroX provided the critical infrastructure and supports necessary for the management of a successful challenge that sourced creative concepts, prototypes and methodologies from a wide range of innovators.',
      author: 'Shahab Shahnazari, Ph.D',
      title: 'Senior Manager, Health Systems and Innovation Challenges',
      company: 'MaRS Discovery District',
      avatar: 'https://d253pvgap36xx8.cloudfront.net/pages/results/client_avatars/521207a0532411ee81b08258e0eb7a8d.jpeg'
    }
  ];

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div style={{ 
      fontFamily: 'Poppins, system-ui, sans-serif', 
      background: 'white',
      minHeight: '100vh'
    }}>
      
      {/* ========== TOP BANNER ========== */}
      <div className="top-banner-full-width-wrapper" style={{ background: 'white' }}>
        <div className="top-banner-container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '3rem 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div className="text-column">
            <div className="tagline" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/images/x-logo-blue.svg" 
                alt="X" 
                style={{ height: '24px', width: 'auto' }}
              />
              <span style={{ color: '#3319FF', fontWeight: '600', fontSize: '0.9rem' }}>
                HeroX starts where AI stops.
              </span>
            </div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              We Help You Run Better Challenges
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#666668',
              lineHeight: '1.6'
            }}>
              We connect your challenge to the right community and give them the tools and incentives to deliver solutions that matter.
            </div>
          </div>
          <div className="image-column">
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/pages/results/top-image-3.jpeg" 
                alt="Results"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== RESULTS DARK SECTION ========== */}
      <div className="results-dark-section" style={{ background: '#1a1a2e' }}>
        
        {/* ========== FILTER SECTION ========== */}
        <div className="filter-container" style={{
          maxWidth: '1070px',
          margin: '0 auto',
          padding: '2rem',
          color: 'white'
        }}>
          <div className="filter-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'white',
              margin: 0
            }}>
              Client Success Stories
            </h2>
            <button 
              onClick={toggleFilter}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <span>⚙️</span>
              <span>{filterOpen ? 'Close' : 'Filter & Sort'}</span>
            </button>
          </div>

          {filterOpen && (
            <div className="filter-content" style={{
              marginTop: '1rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '8px'
            }}>
              {/* Search */}
              <div className="filter-search" style={{ marginBottom: '1.5rem' }}>
                <form className="results-filter-form" style={{ position: 'relative' }}>
                  <div className="search-input-wrapper" style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <span style={{ padding: '0 0.75rem', color: 'rgba(255,255,255,0.5)' }}>🔍</span>
                    <input 
                      type="search" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search success stories..."
                      style={{
                        flex: 1,
                        padding: '0.6rem 0.75rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        outline: 'none',
                        fontSize: '0.9rem'
                      }}
                    />
                    <button 
                      type="submit"
                      style={{
                        padding: '0.6rem 1.5rem',
                        background: '#3319FF',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600'
                      }}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              <div className="filter-groups">
                {/* Industry Filter */}
                <div className="filter-group" style={{ marginBottom: '1.5rem' }}>
                  <h6 style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Industry
                  </h6>
                  <div className="filter-pills" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                          padding: '0.35rem 1rem',
                          background: activeCategory === cat.id ? '#3319FF' : 'rgba(255,255,255,0.08)',
                          color: activeCategory === cat.id ? 'white' : 'rgba(255,255,255,0.8)',
                          border: activeCategory === cat.id ? '1px solid #3319FF' : '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '9999px',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: activeCategory === cat.id ? '600' : '400',
                          transition: 'all 0.3s',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}
                        onMouseEnter={(e) => {
                          if (activeCategory !== cat.id) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeCategory !== cat.id) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                          }
                        }}
                      >
                        {activeCategory === cat.id && <span>✓</span>}
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div className="filter-group">
                  <h6 style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Sort by
                  </h6>
                  <div className="filter-pills" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {sortOptions.map((sort) => (
                      <button
                        key={sort.id}
                        onClick={() => setActiveSort(sort.id)}
                        style={{
                          padding: '0.35rem 1rem',
                          background: activeSort === sort.id ? '#3319FF' : 'rgba(255,255,255,0.08)',
                          color: activeSort === sort.id ? 'white' : 'rgba(255,255,255,0.8)',
                          border: activeSort === sort.id ? '1px solid #3319FF' : '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '9999px',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: activeSort === sort.id ? '600' : '400',
                          transition: 'all 0.3s',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}
                        onMouseEnter={(e) => {
                          if (activeSort !== sort.id) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeSort !== sort.id) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                          }
                        }}
                      >
                        {activeSort === sort.id && <span>✓</span>}
                        <span>{sort.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========== RESULTS CARDS ========== */}
        <div className="results-container" style={{
          maxWidth: '1070px',
          margin: '0 auto',
          padding: '0 2rem 2rem 2rem'
        }}>
          <div className="results-loadmore">
            {displayedResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'rgba(255,255,255,0.6)' }}>
                <p style={{ fontSize: '1.1rem' }}>No results found matching your criteria.</p>
              </div>
            ) : (
              displayedResults.map((result) => (
                <article key={result.id} className="result-card" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '1.5rem',
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  transition: 'box-shadow 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
                >
                  <div className="card-image" style={{
                    position: 'relative',
                    paddingTop: '75%',
                    background: '#f6f6f6'
                  }}>
                    <img 
                      src={result.image} 
                      alt={result.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body" style={{
                    padding: '1.5rem 1.5rem 1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div className="card-top">
                      <div className="categories" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        {result.categories.map((cat, idx) => (
                          <span key={idx} style={{
                            padding: '0.15rem 0.6rem',
                            background: '#f6f6f6',
                            borderRadius: '9999px',
                            fontSize: '0.7rem',
                            color: '#666668',
                            fontWeight: '500'
                          }}>
                            {cat}
                          </span>
                        ))}
                      </div>

                      <a 
                        href={`/${result.slug}`} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: '#3D3A46',
                          textDecoration: 'none',
                          display: 'block',
                          marginBottom: '0.5rem'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#3319FF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#3D3A46'}
                      >
                        {result.title}
                      </a>

                      <p className="card-description" style={{
                        fontSize: '0.95rem',
                        color: '#666668',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {result.description}
                      </p>
                    </div>

                    <div className="card-bottom" style={{
                      marginTop: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid #e9ecef',
                      paddingTop: '1rem'
                    }}>
                      <div className="card-meta" style={{
                        display: 'flex',
                        gap: '1.5rem',
                        fontSize: '0.85rem',
                        color: '#666668'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span>🕐</span>
                          <span>{result.duration}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span>🏆</span>
                          <span>{result.prize}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span>💡</span>
                          <span>{result.ideas} ideas</span>
                        </div>
                      </div>

                      <a 
                        href={`/results-${result.slug}`} 
                        className="read-more-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#3319FF',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0052cc'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#3319FF'}
                      >
                        Read Story
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="load-more-wrapper" style={{
              textAlign: 'center',
              padding: '1rem 0'
            }}>
              <button 
                className="btn btn-load-more"
                onClick={loadMore}
                style={{
                  padding: '0.6rem 2rem',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="client-reviews-section" style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div className="client-reviews-container" style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <span className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3319FF',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.5rem'
            }}>
              <span>💬</span> Testimonials
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              margin: 0
            }}>
              What our clients have to say
            </h2>
          </div>

          <div className="reviews-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="review-card" style={{
                background: '#f6f6f6',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'box-shadow 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="quote-icon" style={{
                  fontSize: '2.5rem',
                  color: '#3319FF',
                  marginBottom: '1rem',
                  opacity: 0.3
                }}>
                  "
                </div>
                <blockquote className="review-text" style={{
                  fontSize: '0.95rem',
                  color: '#3D3A46',
                  lineHeight: '1.7',
                  flex: 1,
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  {testimonial.text}
                </blockquote>
                <div className="review-author" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e9ecef'
                }}>
                  <div className="author-avatar" style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name" style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#3D3A46',
                      margin: 0
                    }}>
                      {testimonial.author}
                    </h4>
                    <p className="author-title" style={{
                      fontSize: '0.8rem',
                      color: '#666668',
                      margin: 0
                    }}>
                      {testimonial.title}
                    </p>
                    <p className="author-company" style={{
                      fontSize: '0.8rem',
                      color: '#3319FF',
                      fontWeight: '500',
                      margin: 0
                    }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER BANNER ========== */}
      <div className="footer-banner-wrapper" style={{
        background: '#f6f6f6',
        padding: '3rem 2rem'
      }}>
        <div className="footer-banner-container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div className="text-column">
            <div className="tagline" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/images/x-logo-blue.svg" 
                alt="X" 
                style={{ height: '24px', width: 'auto' }}
              />
              <span style={{ color: '#3319FF', fontWeight: '600', fontSize: '0.9rem' }}>
                Ready to innovate?
              </span>
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3D3A46',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              Let HeroX guide<br /> you to success
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666668',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Launch your challenge today and tap into a global community of solvers ready to tackle your toughest problems.
            </p>
            <a 
              href="/how-it-works" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: '#3319FF',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0052cc'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#3319FF'}
            >
              Get Started
            </a>
          </div>
          <div className="image-column">
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://d253pvgap36xx8.cloudfront.net/static/pages/results/top-image-2.jpeg" 
                alt="Get Started"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ResultsPage };