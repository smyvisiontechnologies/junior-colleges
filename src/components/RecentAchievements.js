import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const RecentAchievements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('snr');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState(null);
  const [, setIsDragging] = useState(false);
  
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
      setIsFullscreen(!!fullscreenElement);
      
      if (fullscreenElement && isMobile) {
        if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
          window.screen.orientation.lock('landscape').catch(err => {
            console.log('Orientation lock not supported:', err);
          });
        }
      } else if (!fullscreenElement && isMobile) {
        if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
          window.screen.orientation.unlock();
        }
      }
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleMouseMove = () => {
    if (!isMobile) {
      setShowControls(true);
      if (controlsTimeout) clearTimeout(controlsTimeout);
      const timeout = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 2000);
      setControlsTimeout(timeout);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = async () => {
    if (videoContainerRef.current) {
      if (!isFullscreen) {
        try {
          if (videoContainerRef.current.requestFullscreen) {
            await videoContainerRef.current.requestFullscreen();
          } else if (videoContainerRef.current.webkitRequestFullscreen) {
            await videoContainerRef.current.webkitRequestFullscreen();
          } else if (videoContainerRef.current.msRequestFullscreen) {
            await videoContainerRef.current.msRequestFullscreen();
          }
        } catch (err) {
          console.log('Fullscreen error:', err);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
      }
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x;
    if (e.touches) {
      x = e.touches[0].clientX - rect.left;
    } else {
      x = e.clientX - rect.left;
    }
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    const newTime = percentage * duration;
    if (videoRef.current && !isNaN(newTime)) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSeekStart = () => {
    setIsDragging(true);
  };

  const handleSeekEnd = () => {
    setIsDragging(false);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const newVolume = volume === 0 ? 1 : 0;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  const handleVideoTouch = (e) => {
    e.stopPropagation();
    togglePlay();
  };

  const handleVideoTap = () => {
    if (isMobile) {
      setShowControls(true);
      if (controlsTimeout) clearTimeout(controlsTimeout);
      const timeout = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 3000);
      setControlsTimeout(timeout);
    }
  };

  const snrRanks = [
    {
      id: 1,
      position: '1st Rank',
      title: 'District Topper - MPC',
      studentName: 'D. Vijaya Syamala',
      marks: '985/1000',
      percentage: '98.5%',
      course: 'MPC WITH MAINS',
      image: '/images/rank1.png',
      color: '#FFD700',
      description: 'Secured 1st Rank in District with outstanding performance in MPC stream'
    },
    {
      id: 2,
      position: '2nd Rank',
      title: 'State Level Achiever',
      studentName: 'B.Yuva Sri',
      marks: '984/1000',
      percentage: '98.4%',
      course: 'BIPC WITH NEET',
      image: '/images/rank2.jpg',
      color: '#C0C0C0',
      description: 'Secured 2nd Rank in State EAPCET examination'
    }
  ];

  const jnrRanks = [
    {
      id: 1,
      position: '1st Rank',
      title: 'Junior MPC Topper',
      studentName: 'D.Angala Jahnavi',
      marks: '465/470',
      percentage: '98.94%',
      course: 'MPC',
      image: '/images/jnr-rank1.jpg',
      color: '#FFD700',
      description: 'Secured 1st Rank in Junior MPC with exceptional performance'
    },
    {
      id: 2,
      position: '2nd Rank',
      title: 'Junior BIPC Achiever',
      studentName: 'D. Bhargavi Satya Sri',
      marks: '464/470',
      percentage: '98.72%',
      course: 'MPC',
      image: '/images/jnr-rank2.jpg',
      color: '#C0C0C0',
      description: 'Secured 2nd Rank in Junior BIPC with NEET focus'
    }
  ];

  const currentRanks = activeTab === 'snr' ? snrRanks : jnrRanks;

  const openLightbox = (imageSrc, studentName) => {
    setLightboxImage({ src: imageSrc, alt: studentName });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div style={styles.container}>
      <Helmet
        title="Achievements | Best Junior College in Rajahmundry | Megha Junior College Results 2026"
        meta={[
          {
            name: 'description',
            content: 'Megha Junior College achievements - SNR and JNR results 2025-26 batch. Top ranks in MPC, BIPC.'
          },
          {
            name: 'keywords',
            content: 'megha junior college achievements, inter college results rajahmundry, snr results, jnr results'
          }
        ]}
      />

      <section style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Our Pride</div>
          <h1 style={styles.heroTitle}>
            Our <span style={styles.gradientText}>Achievements</span>
          </h1>
          <p style={styles.heroDescription}>
            Celebrating the success of our talented students who made us proud
          </p>
        </div>
        <div style={styles.heroWave}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 64L60 74.7C120 85 240 107 360 106.7C480 107 600 85 720 74.7C840 64 960 64 1080 69.3C1200 75 1320 85 1380 90.7L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V64Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      <section style={styles.tabSection}>
        <div className="tab-container" style={styles.tabContainer}>
          <button
            className={`tab-btn ${activeTab === 'snr' ? 'active' : ''}`}
            style={{ ...styles.tabBtn, ...(activeTab === 'snr' ? styles.tabBtnActive : {}) }}
            onClick={() => setActiveTab('snr')}
          >
            <span style={styles.tabIcon}>🎓</span>
            SNR Results 2025-26
          </button>
          <button
            className={`tab-btn ${activeTab === 'jnr' ? 'active' : ''}`}
            style={{ ...styles.tabBtn, ...(activeTab === 'jnr' ? styles.tabBtnActive : {}) }}
            onClick={() => setActiveTab('jnr')}
          >
            <span style={styles.tabIcon}>📚</span>
            JNR Results 2025-26
          </button>
        </div>
      </section>

      <section style={styles.resultsSection}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>2025-26 Batch</div>
          <h2 style={styles.sectionTitle}>
            {activeTab === 'snr' ? 'Senior' : 'Junior'} <span style={styles.gradientText}>Toppers</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            {activeTab === 'snr' 
              ? 'Outstanding performance by our Senior batch students' 
              : 'Exceptional results achieved by our Junior batch students'}
          </p>
        </div>

        <div className="stamp-grid" style={styles.stampGrid}>
          {currentRanks.map((rank, index) => (
            <div 
              key={rank.id} 
              className="stamp-card"
              style={{ 
                ...styles.stampCard,
                animationDelay: `${index * 0.15}s`,
                borderTop: `4px solid ${rank.color}`
              }}
            >
              <div className="stamp-badge" style={{ ...styles.stampBadge, background: rank.color }}>
                <span style={styles.stampNumber}>#{rank.id}</span>
              </div>
              
              <div 
                className="stamp-image-wrapper" 
                style={styles.stampImageWrapper}
                onClick={() => openLightbox(rank.image, rank.studentName)}
              >
                <img 
                  src={rank.image} 
                  alt={rank.studentName}
                  style={styles.stampImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/200x200?text=${rank.position}+Rank`;
                  }}
                />
                <div style={styles.stampOverlay}>
                  <span>🔍 View</span>
                </div>
              </div>
              
              <h3 style={styles.stampName}>{rank.studentName}</h3>
              <p style={styles.stampPosition}>{rank.position}</p>
              <p style={styles.stampCourse}>{rank.course}</p>
              <div className="stamp-stats" style={styles.stampStats}>
                <span style={styles.stampMarks}>{rank.marks}</span>
                <span style={styles.stampPercentage}>{rank.percentage}</span>
              </div>
              <p style={styles.stampDescription}>{rank.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.videoSection}>
        <div style={styles.videoContainer}>
          <div style={styles.videoHeader}>
            <h2 style={styles.videoTitle}>Success <span style={styles.gradientText}>Highlights</span></h2>
            <p style={styles.videoSubtitle}>Watch our journey of excellence and student success stories</p>
          </div>
          
          <div 
            ref={videoContainerRef} 
            className="video-wrapper"
            style={styles.videoWrapper}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            onTouchStart={isMobile ? handleVideoTap : undefined}
          >
            <video
              ref={videoRef}
              style={styles.videoPlayer}
              poster="/images/video-poster.jpg"
              onClick={isMobile ? handleVideoTouch : togglePlay}
              playsInline
              webkit-playsinline="true"
            >
              <source src="/vedios/vedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="video-controls" style={{ ...styles.videoControls, opacity: showControls ? 1 : 0, pointerEvents: showControls ? 'auto' : 'none' }}>
              <div 
                style={styles.progressContainer} 
                onClick={handleSeek}
                onTouchStart={handleSeekStart}
                onTouchMove={handleSeek}
                onTouchEnd={handleSeekEnd}
                ref={progressBarRef}
              >
                <div style={{ ...styles.progressBar, width: `${progressPercentage}%` }}></div>
                <div className="progress-handle" style={{ ...styles.progressHandle, left: `${progressPercentage}%` }}></div>
              </div>
              
              <div className="controls-row" style={styles.controlsRow}>
                <button onClick={togglePlay} style={styles.controlBtn} className="control-btn">
                  {isPlaying ? <PauseIconSvg /> : <PlayIconSvg />}
                </button>
                
                <div className="time-display" style={styles.timeDisplay}>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                
                {!isMobile && (
                  <div style={styles.volumeContainer}>
                    <button onClick={toggleMute} style={styles.controlBtn}>
                      {volume === 0 ? <MuteIconSvg /> : <VolumeIconSvg />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      style={styles.volumeSlider}
                    />
                  </div>
                )}
                
                <button onClick={toggleFullscreen} style={styles.controlBtn} className="control-btn">
                  {isFullscreen ? <CompressIconSvg /> : <ExpandIconSvg />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div className="stats-grid" style={styles.statsGrid}>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statIcon}>🏆</div>
              <div style={styles.statNumber}>100+</div>
              <div style={styles.statLabel}>Rank Holders</div>
            </div>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statIcon}>📚</div>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Pass Percentage</div>
            </div>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statIcon}>🎯</div>
              <div style={styles.statNumber}>350+</div>
              <div style={styles.statLabel}>EAPCET Selections</div>
            </div>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statIcon}>🩺</div>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>NEET Selections</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Be the Next Success Story</h2>
          <p style={styles.ctaText}>Join Megha Junior College and achieve your dreams with us</p>
          <Link to="/contact" style={styles.ctaBtn}>
            Enroll Now
            <ArrowRightIconSvg />
          </Link>
        </div>
      </section>

      {lightboxImage && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.lightboxClose} onClick={closeLightbox}>✕</button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} style={styles.lightboxImg} />
            <p style={styles.lightboxCaption}>{lightboxImage.alt}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes stampDrop {
          0% { opacity: 0; transform: translateY(-100px) rotate(-15deg); }
          60% { opacity: 0.8; transform: translateY(10px) rotate(2deg); }
          100% { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .stamp-card {
          animation: stampDrop 0.6s ease-out forwards;
          opacity: 0;
        }
        .stamp-card:nth-child(1) { animation-delay: 0.1s; }
        .stamp-card:nth-child(2) { animation-delay: 0.2s; }
        
        .stat-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }
        
        .tab-btn { transition: all 0.3s ease; }
        .tab-btn:hover { transform: translateY(-2px); }
        
        .stamp-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 40px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }
        
        .stamp-image-wrapper:hover .stamp-overlay { opacity: 1; }
        .stat-card:hover { transform: translateY(-5px); transition: all 0.3s ease; }
        .video-wrapper:hover .video-controls { opacity: 1 !important; }
        
        .video-wrapper:-webkit-full-screen {
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
        
        .video-wrapper:fullscreen {
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
        
        .video-wrapper:-webkit-full-screen video {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
        
        .video-wrapper:fullscreen video {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
        
        @media (min-width: 769px) {
          .stamp-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
            max-width: 800px !important;
            margin: 0 auto;
          }
          .stats-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 40px !important;
          }
          .tab-container { display: flex; justify-content: center; gap: 20px; }
        }
        
        @media (max-width: 768px) {
          .stamp-grid { display: flex !important; flex-direction: column !important; gap: 25px !important; padding: 0 16px; }
          .stats-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
          .tab-container { display: flex; flex-direction: column; gap: 12px; padding: 0 20px; }
          .tab-btn { width: 100%; justify-content: center; }
          .hero-title { font-size: 1.8rem !important; }
          .section-title { font-size: 1.5rem !important; }
          .video-title { font-size: 1.5rem !important; }
          .controls-row { gap: 12px !important; flex-wrap: wrap; justify-content: center; }
          .video-controls { padding: 12px 12px 8px !important; }
          .control-btn { width: 32px !important; height: 32px !important; }
          .progress-container { margin-bottom: 8px !important; }
          .progress-handle { width: 10px !important; height: 10px !important; }
        }
        
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stamp-stats { flex-direction: column; align-items: center; gap: 5px; }
          .stamp-image { width: 150px !important; height: 150px !important; }
          .lightbox-img { max-width: 95% !important; max-height: 80vh !important; }
          .time-display { font-size: 0.75rem !important; }
        }
        
        @media (orientation: landscape) and (max-width: 768px) {
          .video-wrapper:fullscreen .video-controls {
            bottom: 0;
            padding: 15px 20px 10px !important;
          }
          .video-wrapper:fullscreen .control-btn {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

const PlayIconSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3L19 12L5 21V3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const PauseIconSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="4" height="16" fill="white" rx="1"/>
    <rect x="14" y="4" width="4" height="16" fill="white" rx="1"/>
  </svg>
);

const VolumeIconSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H8L13 4V20L8 15H3V9Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 8C17.5 9.5 17.5 14.5 16 16M19 5C22 8 22 16 19 19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MuteIconSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H8L13 4V20L8 15H3V9Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M18 9L22 13M22 9L18 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ExpandIconSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompressIconSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3V8H3M21 8H16V3M16 21V16H21M3 16H8V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIconSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Helmet = ({ title, meta }) => {
  React.useEffect(() => {
    if (title) document.title = title;
    const tags = [];
    if (meta) {
      meta.forEach(m => {
        const tag = document.createElement('meta');
        if (m.name) tag.name = m.name;
        if (m.property) tag.setAttribute('property', m.property);
        if (m.content) tag.content = m.content;
        document.head.appendChild(tag);
        tags.push(tag);
      });
    }
    return () => tags.forEach(tag => tag.remove());
  }, [title, meta]);
  return null;
};

const styles = {
  container: { fontFamily: "'Inter', 'Poppins', system-ui, sans-serif", overflowX: 'hidden', width: '100%' },
  hero: { background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #2e1065 100%)', padding: '120px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)', borderRadius: '50%' },
  heroPattern: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' },
  heroContent: { position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' },
  badge: { display: 'inline-block', background: 'rgba(102,126,234,0.15)', backdropFilter: 'blur(10px)', padding: '6px 18px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '500', color: '#a5b4fc', marginBottom: '24px', border: '1px solid rgba(102,126,234,0.3)' },
  heroTitle: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '20px', color: 'white', letterSpacing: '-0.02em' },
  gradientText: { background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 40%, #f0abfc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  heroDescription: { fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' },
  heroWave: { position: 'absolute', bottom: '-2px', left: 0, width: '100%', zIndex: 2 },
  tabSection: { padding: '40px 24px 0', background: '#ffffff' },
  tabContainer: { maxWidth: '500px', margin: '0 auto' },
  tabBtn: { padding: '14px 28px', borderRadius: '50px', border: '2px solid #e2e8f0', background: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease' },
  tabBtnActive: { background: 'linear-gradient(135deg, #667eea, #764ba2)', borderColor: 'transparent', color: 'white' },
  tabIcon: { fontSize: '1.2rem' },
  resultsSection: { padding: '60px 24px', background: '#f8fafc' },
  sectionHeader: { textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' },
  sectionBadge: { display: 'inline-block', background: 'rgba(102,126,234,0.1)', color: '#667eea', padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '16px' },
  sectionTitle: { fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '16px', color: '#1e293b' },
  sectionSubtitle: { fontSize: '1rem', color: '#64748b' },
  stampGrid: { maxWidth: '1200px', margin: '0 auto' },
  stampCard: { background: 'white', borderRadius: '24px', padding: '28px 20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', position: 'relative' },
  stampBadge: { position: 'absolute', top: '-12px', right: '20px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' },
  stampNumber: { color: 'white', fontSize: '1.3rem', fontWeight: '800' },
  stampImageWrapper: { width: '160px', height: '160px', margin: '10px auto 16px', borderRadius: '50%', overflow: 'hidden', cursor: 'pointer', position: 'relative', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
  stampImage: { width: '100%', height: '100%', objectFit: 'cover' },
  stampOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease', color: 'white', fontSize: '0.85rem', fontWeight: '500' },
  stampName: { fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px', color: '#1e293b' },
  stampPosition: { fontSize: '0.85rem', color: '#667eea', fontWeight: '600', marginBottom: '8px' },
  stampCourse: { fontSize: '0.8rem', color: '#64748b', marginBottom: '12px' },
  stampStats: { display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '12px' },
  stampMarks: { fontSize: '0.85rem', fontWeight: '600', color: '#1e293b', background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px' },
  stampPercentage: { fontSize: '0.85rem', fontWeight: '600', color: '#10b981', background: '#dcfce7', padding: '4px 12px', borderRadius: '20px' },
  stampDescription: { fontSize: '0.8rem', color: '#64748b', lineHeight: '1.4', marginTop: '8px' },
  videoSection: { padding: '60px 24px', background: '#ffffff' },
  videoContainer: { maxWidth: '900px', margin: '0 auto' },
  videoHeader: { textAlign: 'center', marginBottom: '32px' },
  videoTitle: { fontSize: '1.8rem', fontWeight: '700', marginBottom: '8px', color: '#1e293b' },
  videoSubtitle: { fontSize: '1rem', color: '#64748b' },
  videoWrapper: { position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#000', WebkitOverflowScrolling: 'touch' },
  videoPlayer: { width: '100%', height: 'auto', display: 'block', cursor: 'pointer' },
  videoControls: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', padding: '20px 16px 12px', transition: 'opacity 0.3s ease' },
  progressContainer: { width: '100%', height: '5px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', cursor: 'pointer', marginBottom: '12px', position: 'relative' },
  progressBar: { height: '100%', background: '#667eea', borderRadius: '3px', position: 'relative' },
  progressHandle: { position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', width: '12px', height: '12px', background: '#667eea', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' },
  controlsRow: { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
  controlBtn: { background: 'rgba(255,255,255,0.2)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s ease', backdropFilter: 'blur(5px)' },
  timeDisplay: { color: 'white', fontSize: '0.85rem', fontWeight: '500' },
  volumeContainer: { display: 'flex', alignItems: 'center', gap: '8px' },
  volumeSlider: { width: '60px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', cursor: 'pointer', accentColor: '#667eea' },
  statsSection: { padding: '60px 24px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  statsContainer: { maxWidth: '1000px', margin: '0 auto' },
  statsGrid: { gap: '40px' },
  statCard: { textAlign: 'center', color: 'white' },
  statIcon: { fontSize: '2.5rem', marginBottom: '12px' },
  statNumber: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '8px' },
  statLabel: { fontSize: '0.9rem', opacity: '0.9' },
  ctaSection: { background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)', padding: '60px 24px', textAlign: 'center' },
  ctaContent: { maxWidth: '600px', margin: '0 auto' },
  ctaTitle: { fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: '700', marginBottom: '16px', color: '#1e293b' },
  ctaText: { fontSize: '1rem', marginBottom: '28px', color: '#64748b' },
  ctaBtn: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '12px 32px', borderRadius: '40px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' },
  lightbox: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  lightboxContent: { position: 'relative', maxWidth: '90vw', maxHeight: '90vh', textAlign: 'center' },
  lightboxClose: { position: 'absolute', top: '-40px', right: '-40px', width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: 'none', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' },
  lightboxImg: { maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '12px' },
  lightboxCaption: { color: 'white', marginTop: '16px', fontSize: '1rem', fontWeight: '500' }
};

export default RecentAchievements;
