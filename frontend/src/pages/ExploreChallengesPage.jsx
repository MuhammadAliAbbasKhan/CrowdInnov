// src/pages/ExploreChallengesPage.jsx
import React, { useState, useEffect } from 'react';
import { Search, Star, Calendar, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ExploreChallengesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStage, setActiveStage] = useState('All');
  const [sortBy, setSortBy] = useState('Popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Stages for filtering
  const stages = ['All', 'Open for Submissions', 'Judging', 'Voting', 'Successful', 'Coming Soon'];

  // Challenges data
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
      description: "Australia's STEM innovation challenge for university and TAFE students. Follow this challenge to be notified when it launches.",
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
    },
    {
      id: 7,
      title: 'Connecting the Community for Maternal Health',
      creator: 'Eunice Kennedy Shriver National Institute of Child Health and Human Development',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/4b6af1de297a11edbfa86607da0b0bfc/a0d6ce82297911edae537e5bb5e42e91.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/c7d3d4369b8411f1a6417e5b36dcf52c/c57365769b8411f1a0abbe639b0856e5.jpeg',
      description: 'Join Connecting the Community for Maternal Health 2.0 that launched August 2026.',
      stage: 'Enter',
      daysRemaining: null,
      prize: '$3M',
      followers: 515
    },
    {
      id: 8,
      title: 'Artificial Intelligence + Origin of Life Prize, $10 Million USD',
      creator: 'Evolution 2.0 Prize',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/avatars/b135106a151711e988d50242ac110002/b11528e0151711e988d50242ac110002.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/0e7365ecaa6411e9ba64aa4c01411664/0e48c620aa6411e9a24986e948180ee6.jpg',
      description: 'Where did life and the genetic code come from? Can the answer build superior AI? The #1 mystery in science now has a $10 million prize.',
      stage: 'Enter',
      daysRemaining: null,
      prize: '$10M',
      followers: 3200,
      hasVideo: true
    },
    {
      id: 9,
      title: 'Viasat: Space for Good India 2026',
      creator: 'Viasat: Space for Good',
      creatorLogo: 'https://d253pvgap36xx8.cloudfront.net/groups/logo_thumbnail/f2c00b982e7311f1a82e9ef96c9efef1/988e6a8e2e7311f1a9c83e4d2822be16.png',
      image: 'https://d253pvgap36xx8.cloudfront.net/challenges/thumbnail/dae5099437c711f1a9520a86688acdda/daaf937237c711f1a7ad42f038e8eb38.jpeg',
      description: 'India\'s STEM innovation challenge for students. Tackle real-world challenges with space technology.',
      stage: 'Judging',
      daysRemaining: null,
      prize: null,
      followers: 2100,
      hasVideo: true
    }
  ];

  // Filter challenges based on search and stage
  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = activeStage === 'All' || challenge.stage === activeStage;
    return matchesSearch && matchesStage;
  });

  // Sort challenges
  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    if (sortBy === 'Popularity') return b.followers - a.followers;
    if (sortBy === 'Newest') return b.id - a.id;
    if (sortBy === 'Ending soon') {
      if (a.daysRemaining === null) return 1;
      if (b.daysRemaining === null) return -1;
      return a.daysRemaining - b.daysRemaining;
    }
    return 0;
  });

  // Pagination
  const itemsPerPage = 9;
  const totalPages = Math.ceil(sortedChallenges.length / itemsPerPage);
  const paginatedChallenges = sortedChallenges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Format follower count
  const formatFollowers = (count) => {
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count;
  };

  return (
    <div style={{ 
      fontFamily: 'Poppins, system-ui, sans-serif', 
      background: 'white',
      minHeight: '100vh'
    }}>
      {/* ========== MAIN CONTENT ========== */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#3D3A46', margin: '0 0 0.25rem 0' }}>
            Explore Challenges
          </h1>
          <div style={{ color: '#666668', fontSize: '0.95rem' }}>
            Find your perfect innovation challenge on HeroX.
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{
          position: 'sticky',
          top: '12px',
          zIndex: 2,
          marginBottom: '1rem',
          padding: '0.875rem',
          border: '1px solid rgba(61,58,70,0.12)',
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 6px 18px rgba(61,58,70,0.14)'
        }}>
          {/* Search */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{
              display: 'flex',
              flex: '1 1 auto',
              alignItems: 'center',
              border: '1px solid rgba(61,58,70,0.22)',
              background: 'white',
              borderRadius: '8px',
              height: '42px',
              overflow: 'hidden',
              transition: 'border-color 150ms ease, box-shadow 150ms ease'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '100%',
                color: 'rgba(61,58,70,0.65)',
                fontSize: '0.9rem'
              }}>
                <Search size={18} />
              </div>
              <input
                type="search"
                placeholder="Try &quot;sustainable energy for rural communities&quot;"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
                style={{
                  width: '100%',
                  height: '100%',
                  border: '0',
                  outline: '0',
                  padding: '0 0.25rem 0 0',
                  fontSize: '0.9rem',
                  background: 'transparent',
                  fontWeight: '500',
                  color: '#3D3A46'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '100%',
                    border: 0,
                    background: 'transparent',
                    color: 'rgba(61,58,70,0.4)',
                    cursor: 'pointer',
                    transition: 'color 120ms ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF4A33'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(61,58,70,0.4)'}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Bottom */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.75rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(61,58,70,0.08)',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {/* Stages */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{
                lineHeight: '1.6rem',
                color: 'rgba(61,58,70,0.5)',
                whiteSpace: 'nowrap',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                fontSize: '0.7rem'
              }}>
                Stage
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => {
                      setActiveStage(stage);
                      setCurrentPage(1);
                    }}
                    style={{
                      border: '1px solid transparent',
                      background: activeStage === stage ? '#3319FF' : 'rgba(61,58,70,0.08)',
                      borderRadius: '6px',
                      padding: '0.45rem 0.875rem',
                      fontSize: '0.875rem',
                      lineHeight: '1',
                      color: activeStage === stage ? 'white' : 'rgba(61,58,70,0.8)',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 120ms ease',
                      boxShadow: activeStage === stage ? '0 2px 6px rgba(51,25,255,0.25)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (activeStage !== stage) {
                        e.currentTarget.style.background = 'rgba(61,58,70,0.12)';
                        e.currentTarget.style.color = '#3D3A46';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeStage !== stage) {
                        e.currentTarget.style.background = 'rgba(61,58,70,0.08)';
                        e.currentTarget.style.color = 'rgba(61,58,70,0.8)';
                      }
                    }}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
              {['Popularity', 'Newest', 'Ending soon'].map((sortOption) => (
                <React.Fragment key={sortOption}>
                  <button
                    onClick={() => {
                      setSortBy(sortOption);
                      setCurrentPage(1);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontSize: '0.75rem',
                      color: sortBy === sortOption ? '#3319FF' : 'rgba(61,58,70,0.75)',
                      cursor: 'pointer',
                      transition: 'color 120ms ease',
                      fontWeight: sortBy === sortOption ? '600' : '400'
                    }}
                    onMouseEnter={(e) => {
                      if (sortBy !== sortOption) {
                        e.currentTarget.style.color = '#3D3A46';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (sortBy !== sortOption) {
                        e.currentTarget.style.color = 'rgba(61,58,70,0.75)';
                      }
                    }}
                  >
                    {sortOption}
                  </button>
                  {sortOption !== 'Ending soon' && (
                    <span style={{ fontSize: '0.7rem', color: 'rgba(61,58,70,0.35)' }}>/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pagination */}
        <div style={{ padding: '0.5rem 0' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '40px',
                height: '40px',
                padding: '0 0.6rem',
                borderRadius: '12px',
                border: '1px solid rgba(61,58,70,0.12)',
                background: 'white',
                color: currentPage === 1 ? 'rgba(61,58,70,0.45)' : '#3D3A46',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: currentPage === 1 ? 'default' : 'pointer',
                opacity: currentPage === 1 ? 0.45 : 1
              }}
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '40px',
                  height: '40px',
                  padding: '0 0.6rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(61,58,70,0.12)',
                  background: currentPage === page ? 'rgba(51,25,255,0.12)' : 'white',
                  color: currentPage === page ? '#3319FF' : '#3D3A46',
                  textDecoration: 'none',
                  fontWeight: currentPage === page ? '600' : '400',
                  cursor: 'pointer'
                }}
              >
                {page}
              </button>
            ))}
            {totalPages > 6 && (
              <>
                <span style={{
                  height: '40px',
                  padding: '0 0.25rem',
                  color: 'rgba(61,58,70,0.6)',
                  display: 'flex',
                  alignItems: 'center'
                }}>…</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '40px',
                    height: '40px',
                    padding: '0 0.6rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(61,58,70,0.12)',
                    background: 'white',
                    color: '#3D3A46',
                    textDecoration: 'none',
                    fontWeight: '400',
                    cursor: 'pointer'
                  }}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '40px',
                height: '40px',
                padding: '0 0.6rem',
                borderRadius: '12px',
                border: '1px solid rgba(61,58,70,0.12)',
                background: 'white',
                color: currentPage === totalPages || totalPages === 0 ? 'rgba(61,58,70,0.45)' : '#3D3A46',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: currentPage === totalPages || totalPages === 0 ? 'default' : 'pointer',
                opacity: currentPage === totalPages || totalPages === 0 ? 0.45 : 1
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div style={{ position: 'relative' }}>
          <div style={{ opacity: isLoading ? 0.5 : 1, transition: 'opacity 120ms ease' }}>
            <div style={{ padding: '1.5rem 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {paginatedChallenges.map((challenge) => (
                  <a
                    key={challenge.id}
                    href={`/${challenge.title.replace(/\s+/g, '')}?from=explore`}
                    style={{
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
                        src={challenge.image}
                        alt={challenge.title}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      
                      {/* Powered by HeroX */}
                      <div style={{
                        position: 'absolute',
                        bottom: '0.5rem',
                        left: '0.5rem',
                        background: 'rgba(0,0,0,0.8)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <img
                          src="https://d253pvgap36xx8.cloudfront.net/static/images/powered-by-text.svg"
                          alt="Powered by"
                          style={{ height: '12px' }}
                        />
                        <img
                          src="https://d253pvgap36xx8.cloudfront.net/static/images/logo-white.svg"
                          alt="HeroX"
                          style={{ height: '16px' }}
                        />
                      </div>

                      {/* Featured Badge */}
                      {challenge.isFeatured && (
                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          zIndex: 5,
                          background: 'rgba(0,0,0,0.75)',
                          backdropFilter: 'blur(2px)',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          lineHeight: '1',
                          pointerEvents: 'none'
                        }}>
                          <Star size={14} fill="#ffc107" color="#ffc107" />
                          <span>Featured</span>
                        </div>
                      )}

                      {/* Video Play Icon */}
                      {challenge.hasVideo && (
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          background: 'rgba(0,0,0,0.7)',
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Play size={24} fill="white" color="white" />
                        </div>
                      )}

                      {/* Creator Logo */}
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
                          <span>{formatFollowers(challenge.followers)}</span>
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
            </div>
          </div>
        </div>

        {/* Bottom Pagination */}
        <nav style={{ marginTop: '1.25rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '40px',
                height: '40px',
                padding: '0 0.6rem',
                borderRadius: '12px',
                border: '1px solid rgba(61,58,70,0.12)',
                background: 'white',
                color: currentPage === 1 ? 'rgba(61,58,70,0.45)' : '#3D3A46',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: currentPage === 1 ? 'default' : 'pointer',
                opacity: currentPage === 1 ? 0.45 : 1
              }}
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '40px',
                  height: '40px',
                  padding: '0 0.6rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(61,58,70,0.12)',
                  background: currentPage === page ? 'rgba(51,25,255,0.12)' : 'white',
                  color: currentPage === page ? '#3319FF' : '#3D3A46',
                  textDecoration: 'none',
                  fontWeight: currentPage === page ? '600' : '400',
                  cursor: 'pointer'
                }}
              >
                {page}
              </button>
            ))}
            {totalPages > 6 && (
              <>
                <span style={{
                  height: '40px',
                  padding: '0 0.25rem',
                  color: 'rgba(61,58,70,0.6)',
                  display: 'flex',
                  alignItems: 'center'
                }}>…</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '40px',
                    height: '40px',
                    padding: '0 0.6rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(61,58,70,0.12)',
                    background: 'white',
                    color: '#3D3A46',
                    textDecoration: 'none',
                    fontWeight: '400',
                    cursor: 'pointer'
                  }}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '40px',
                height: '40px',
                padding: '0 0.6rem',
                borderRadius: '12px',
                border: '1px solid rgba(61,58,70,0.12)',
                background: 'white',
                color: currentPage === totalPages || totalPages === 0 ? 'rgba(61,58,70,0.45)' : '#3D3A46',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: currentPage === totalPages || totalPages === 0 ? 'default' : 'pointer',
                opacity: currentPage === totalPages || totalPages === 0 ? 0.45 : 1
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { ExploreChallengesPage };