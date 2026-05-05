import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import principalImg from '../assets/principal.png';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // State for animated counters
  const [counters, setCounters] = useState({
    students: 0,
    successRate: 0,
    faculty: 0,
    rankHolders: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for stats counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate counters
            const targets = { students: 2500, successRate: 95, faculty: 85, rankHolders: 50 };
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            
            let currentStep = 0;
            const interval = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              setCounters({
                students: Math.min(Math.floor(targets.students * progress), targets.students),
                successRate: Math.min(Math.floor(targets.successRate * progress), targets.successRate),
                faculty: Math.min(Math.floor(targets.faculty * progress), targets.faculty),
                rankHolders: Math.min(Math.floor(targets.rankHolders * progress), targets.rankHolders)
              });
              if (currentStep >= steps) {
                clearInterval(interval);
                setCounters(targets);
              }
            }, stepTime);
            
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Intersection Observer for timeline
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timelineVisible) {
            setTimelineVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => observer.disconnect();
  }, [timelineVisible]);

  const milestones = [
    { year: "2012", title: "Founded", description: "Started our journey in Rajahmundry", icon: <StarIcon />, delay: 0 },
    { year: "2015", title: "First Toppers", description: "District rank holders in MPC", icon: <TrophyIcon />, delay: 0.1 },
    { year: "2018", title: "NEET Success", description: "First medical seat achieved", icon: <HeartIconSmall />, delay: 0.2 },
    { year: "2020", title: "EAPCET Excellence", description: "100+ ranks in state EAPCET", icon: <TargetIconSmall />, delay: 0.3 },
    { year: "2023", title: "IIT Dream", description: "First IIT selection", icon: <AtomIconSmall />, delay: 0.4 },
    { year: "2024", title: "Top College", description: "Ranked #1 in Rajahmundry", icon: <CrownIcon />, delay: 0.5 }
  ];

  const features = [
    { icon: <UserGroupIcon />, title: "Experienced Faculty", desc: "18+ years of teaching experience" },
    { icon: <BookIcon />, title: "Smart Classes", desc: "Digital boards & modern teaching" },
    { icon: <TestIcon />, title: "Weekly Tests", desc: "Regular assessment & feedback" },
    { icon: <LibraryIcon />, title: "Digital Library", desc: "24/7 access to study materials" },
  ];

  // Styles based on screen size
  const principalContainerStyle = isMobile 
    ? { ...styles.principalContainer, ...styles.principalContainerMobile }
    : styles.principalContainer;

  const principalImageWrapperStyle = isMobile
    ? { ...styles.principalImageWrapper, ...styles.principalImageWrapperMobile }
    : styles.principalImageWrapper;

  const principalContentStyle = isMobile
    ? { ...styles.principalContent, ...styles.principalContentMobile }
    : styles.principalContent;

  return (
    <div style={styles.container}>
      <Helmet>
        <title>About Us | Best Junior College in Rajahmundry | Vegha Junior College</title>
        <meta name="description" content="Vegha Junior College - Led by Principal Chowdary, we are the #1 junior college in Rajahmundry offering MPC, BIPC, CEC with NEET, EAPCET, MAINS coaching. 18+ years of excellence." />
        <meta name="keywords" content="about Vegha junior college, best junior college rajahmundry, principal chowdary, top inter college rajahmundry" />
      </Helmet>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Our Story</div>
          <h1 style={styles.heroTitle}>
            About <span style={styles.gradientText}>Vegha Junior College</span>
          </h1>
          <p style={styles.heroDescription}>
            The premier destination for intermediate education in Rajahmundry, shaping future leaders since 2012
          </p>
        </div>
        <div style={styles.heroWave}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 64L60 74.7C120 85 240 107 360 106.7C480 107 600 85 720 74.7C840 64 960 64 1080 69.3C1200 75 1320 85 1380 90.7L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V64Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Principal Section */}
      <section style={styles.principalSection}>
        <div style={principalContainerStyle}>
          <div className="principal-image-wrapper" style={principalImageWrapperStyle}>
            <img 
              src={principalImg} 
              alt="Principal Chowdary - Vegha Junior College Rajahmundry" 
              style={styles.principalImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x500?text=Principal+Chowdary';
              }}
            />
            <div className="image-badge" style={styles.imageBadge}>
              <MedalIcon />
              <span>18+ Years of Excellence</span>
            </div>
          </div>
          <div className="principal-content" style={principalContentStyle}>
            <div style={styles.principalBadge}>Message from Principal</div>
            <h2 style={styles.principalName}>Sri. <span style={styles.gradientText}>Chowdary</span></h2>
            <p style={styles.principalDesignation}>M.Sc., M.Ed., PGDE | Principal</p>
            <p style={styles.principalMessage}>
              "At Vegha Junior College, we believe that education is not just about academic excellence but about nurturing 
              confident, compassionate, and capable individuals. Our mission is to provide the best possible learning environment 
              where every student can discover their potential and achieve their dreams.
            </p>
            <p style={styles.principalMessage}>
              With over 18 years of dedicated service in Rajahmundry, we have consistently produced top results in MPC, BIPC, 
              and CEC streams, along with outstanding achievements in NEET, EAPCET, and IIT MAINS examinations."
            </p>
            <div className="principal-signature" style={styles.principalSignature}>
              <div className="signature-line" style={styles.signatureLine}></div>
              <p style={styles.signatureName}>Chowdary</p>
              <p style={styles.signatureTitle}>Principal, Vegha Junior College</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section with Animated Counters */}
      <section style={styles.aboutSection} ref={statsRef}>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutText}>
            <div style={styles.sectionBadge}>Why Choose Us</div>
            <h2 style={styles.sectionTitle}>The <span style={styles.gradientText}>Best Junior College</span> in Rajahmundry</h2>
            <p style={styles.aboutDescription}>
              Vegha Junior College has established itself as the premier institution for intermediate education in Rajahmundry. 
              Our integrated approach combines rigorous academics with comprehensive competitive exam preparation, ensuring 
              our students excel not only in board examinations but also in national and state-level entrance tests.
            </p>
            <div className="stats-row" style={styles.statsRow}>
              <div className="stat-item" style={styles.statItem}>
                <span className="stat-value" style={styles.statValue}>{counters.students}+</span>
                <span className="stat-label" style={styles.statLabel}>Students Trained</span>
              </div>
              <div className="stat-item" style={styles.statItem}>
                <span className="stat-value" style={styles.statValue}>{counters.successRate}%</span>
                <span className="stat-label" style={styles.statLabel}>Success Rate</span>
              </div>
              <div className="stat-item" style={styles.statItem}>
                <span className="stat-value" style={styles.statValue}>{counters.faculty}+</span>
                <span className="stat-label" style={styles.statLabel}>Expert Faculty</span>
              </div>
              <div className="stat-item" style={styles.statItem}>
                <span className="stat-value" style={styles.statValue}>{counters.rankHolders}+</span>
                <span className="stat-label" style={styles.statLabel}>Rank Holders</span>
              </div>
            </div>
          </div>
          <div style={styles.aboutFeatures}>
            <div style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className="feature-card" style={{...styles.featureCard}}>
                  <div className="feature-icon" style={styles.featureIcon}>{feature.icon}</div>
                  <h4 style={styles.featureTitle}>{feature.title}</h4>
                  <p style={styles.featureDesc}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section style={styles.vmSection}>
        <div style={styles.vmContainer}>
          <div className="vm-card" style={styles.vmCard}>
            <div className="vm-icon" style={styles.vmIcon}>
              <EyeIcon />
            </div>
            <h3 style={styles.vmTitle}>Our Vision</h3>
            <p style={styles.vmText}>
              To be the most trusted and preferred junior college in Rajahmundry, setting benchmarks in academic excellence 
              and holistic student development, producing future leaders who contribute meaningfully to society.
            </p>
          </div>
          <div className="vm-card" style={styles.vmCard}>
            <div className="vm-icon" style={styles.vmIcon}>
              <TargetIcon />
            </div>
            <h3 style={styles.vmTitle}>Our Mission</h3>
            <p style={styles.vmText}>
              To provide quality education through innovative teaching methods, experienced faculty, and comprehensive 
              support systems that help every student achieve their academic and career goals successfully.
            </p>
          </div>
          <div className="vm-card" style={styles.vmCard}>
            <div className="vm-icon" style={styles.vmIcon}>
              <HeartIcon />
            </div>
            <h3 style={styles.vmTitle}>Our Values</h3>
            <p style={styles.vmText}>
              Excellence, Integrity, Innovation, and Student-Centric Approach - these core values drive everything we do 
              at Vegha Junior College, ensuring the highest standards of education.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Section - Animated Timeline */}
      <section style={styles.milestonesSection} ref={timelineRef}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>Our Journey</div>
          <h2 style={styles.sectionTitle}>Milestones of <span style={styles.gradientText}>Excellence</span></h2>
          <p style={styles.sectionSubtitle}>A journey of dedication and success since 2012</p>
        </div>
        
        {/* Desktop Timeline with animation */}
        <div className="desktop-timeline" style={styles.desktopTimeline}>
          <div className="timeline-line" style={styles.timelineLine}></div>
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`timeline-node ${timelineVisible ? 'timeline-node-visible' : ''}`} 
              style={{
                ...styles.timelineNode, 
                ...(index % 2 === 0 ? styles.timelineNodeLeft : styles.timelineNodeRight),
                animationDelay: `${milestone.delay}s`
              }}
            >
              <div className="timeline-dot" style={styles.timelineDot}>
                {milestone.icon}
              </div>
              <div className="timeline-card" style={styles.timelineCard}>
                <div className="timeline-year" style={styles.timelineYear}>{milestone.year}</div>
                <h4 style={styles.timelineTitle}>{milestone.title}</h4>
                <p style={styles.timelineDesc}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline with animation */}
        <div className="mobile-timeline" style={styles.mobileTimeline}>
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`mobile-timeline-item ${timelineVisible ? 'mobile-timeline-visible' : ''}`} 
              style={styles.mobileTimelineItem}
            >
              <div className="mobile-timeline-icon" style={styles.mobileTimelineIcon}>{milestone.icon}</div>
              <div style={styles.mobileTimelineContent}>
                <div className="mobile-timeline-year" style={styles.mobileTimelineYear}>{milestone.year}</div>
                <h4 style={styles.mobileTimelineTitle}>{milestone.title}</h4>
                <p style={styles.mobileTimelineDesc}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Join the Best Junior College in Rajahmundry</h2>
          <p style={styles.ctaText}>Limited seats available for 2025-26 academic year. Enroll now for MPC, BIPC, or CEC courses.</p>
          <Link to="/contact" className="cta-btn" style={styles.ctaBtn}>
            Contact Us Today
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <style>{`
        /* Base Keyframe Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes numberPop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(102,126,234,0.4);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(102,126,234,0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        /* Hero Section Animations */
        .hero-bg-glow {
          animation: float 6s ease-in-out infinite;
        }
        
        .principal-image-wrapper {
          animation: fadeInLeft 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .principal-content {
          animation: fadeInRight 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .image-badge {
          animation: slideUp 0.6s ease-out 0.5s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        /* Counter Number Animation */
        .stat-value {
          display: inline-block;
          animation: numberPop 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
        }
        
        .stat-item {
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
        }
        
        .stat-item:hover .stat-value {
          text-shadow: 0 0 15px rgba(102,126,234,0.5);
        }
        
        /* Feature Cards Animation */
        .feature-card {
          animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        
        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(102,126,234,0.12);
        }
        
        .feature-icon {
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Vision & Mission Cards */
        .vm-card {
          animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
          transition: all 0.4s ease;
        }
        
        .vm-card:nth-child(1) { animation-delay: 0.1s; }
        .vm-card:nth-child(2) { animation-delay: 0.2s; }
        .vm-card:nth-child(3) { animation-delay: 0.3s; }
        
        .vm-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .vm-icon svg {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .vm-card:hover .vm-icon svg {
          transform: scale(1.1);
          filter: drop-shadow(0 4px 8px rgba(102,126,234,0.3));
        }
        
        /* Timeline Animations - Desktop */
        .timeline-node {
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .timeline-node:nth-child(1) { animation-delay: 0.1s; }
        .timeline-node:nth-child(2) { animation-delay: 0.2s; }
        .timeline-node:nth-child(3) { animation-delay: 0.3s; }
        .timeline-node:nth-child(4) { animation-delay: 0.4s; }
        .timeline-node:nth-child(5) { animation-delay: 0.5s; }
        .timeline-node:nth-child(6) { animation-delay: 0.6s; }
        
        .timeline-dot {
          animation: glowPulse 2s infinite;
          transition: all 0.3s ease;
        }
        
        .timeline-node:hover .timeline-dot {
          transform: scale(1.2);
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        
        .timeline-card {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(102,126,234,0.12);
        }
        
        .timeline-year {
          transition: all 0.3s ease;
        }
        
        .timeline-card:hover .timeline-year {
          transform: scale(1.05);
        }
        
        /* Timeline Animations - Mobile */
        .mobile-timeline-item {
          opacity: 0;
          animation: fadeInRight 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .mobile-timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .mobile-timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .mobile-timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .mobile-timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .mobile-timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .mobile-timeline-item:nth-child(6) { animation-delay: 0.6s; }
        
        .mobile-timeline-item:hover {
          transform: translateX(8px);
          background: linear-gradient(135deg, #ffffff, #f8f4ff);
          border-color: rgba(102,126,234,0.3);
        }
        
        .mobile-timeline-icon {
          transition: all 0.3s ease;
        }
        
        .mobile-timeline-item:hover .mobile-timeline-icon {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(102,126,234,0.2), rgba(118,75,162,0.2));
        }
        
        .mobile-timeline-year {
          transition: all 0.3s ease;
        }
        
        .mobile-timeline-item:hover .mobile-timeline-year {
          transform: scale(1.05);
        }
        
        /* Timeline Line Animation */
        .timeline-line {
          animation: scaleIn 0.8s ease-out 0.3s forwards;
          opacity: 0;
          transform-origin: top;
          animation-fill-mode: forwards;
        }
        
        /* Signature Line Animation */
        .signature-line {
          transition: width 0.4s ease;
        }
        
        .principal-signature:hover .signature-line {
          width: 100px;
        }
        
        /* CTA Button Animation */
        .cta-btn {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          animation: scaleIn 0.6s ease-out 0.5s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        /* Section Badge Animation */
        .section-badge {
          transition: all 0.3s ease;
        }
        
        .section-badge:hover {
          transform: translateX(5px);
          background: rgba(102,126,234,0.2);
        }
        
        /* Gradient Text Animation */
        .gradient-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        /* Hero Image Animation */
        .principal-image-wrapper img {
          transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .principal-image-wrapper:hover img {
          transform: scale(1.03);
        }
        
        /* Timeline Dot SVG Animation */
        .timeline-dot svg {
          transition: transform 0.3s ease;
        }
        
        .timeline-node:hover .timeline-dot svg {
          transform: scale(1.15);
        }
        
        /* Feature Icon SVG Animation */
        .feature-icon svg {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        
        .feature-card:hover .feature-icon svg {
          transform: scale(1.15);
          filter: drop-shadow(0 4px 6px rgba(102,126,234,0.3));
        }
        
        /* Stats Row Animation */
        .stats-row {
          animation: fadeInUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        /* Responsive Styles */
        @media (min-width: 769px) {
          .mobile-timeline {
            display: none !important;
          }
          .desktop-timeline {
            display: block !important;
          }
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
          .vm-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          .stats-row {
            display: flex;
            flex-direction: row;
            gap: 40px;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-timeline {
            display: none !important;
          }
          .mobile-timeline {
            display: block !important;
          }
          .about-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          .about-text {
            text-align: center;
          }
          .stats-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .vm-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .hero-title {
            font-size: 1.8rem !important;
          }
          .hero-description {
            font-size: 0.9rem !important;
            padding: 0 16px;
          }
          .section-title {
            font-size: 1.8rem !important;
          }
          .cta-title {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .stat-item {
            min-width: 80px;
          }
          .stat-value {
            font-size: 1.3rem;
          }
          .stat-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

// ==================== PREMIUM SVG ICONS ====================

const MedalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8.5 14.5L7 23L12 20L17 23L15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9H3V12H6V9Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M18 9H21V12H18V9Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 3V15" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 15C9.23858 15 7 12.7614 7 10V3H17V10C17 12.7614 14.7614 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const HeartIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

const TargetIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.5"/>
  </svg>
);

const AtomIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C12 12 14 14 14 17C14 20 12 22 12 22C12 22 10 20 10 17C10 14 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 12C12 12 10 10 10 7C10 4 12 2 12 2C12 2 14 4 14 7C14 10 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CrownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 18L5 7L9 11L12 4L15 11L19 7L22 18H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 18H22V21H2V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const UserGroupIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 16.8 15.2 15 13 15H5C2.8 15 1 16.8 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M23 21V19C22.7 17.2 21.2 15.6 19.5 15M15 3.5C16.7 3.9 18 5.4 18 7.2C18 9 16.7 10.5 15 10.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TestIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

const LibraryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 6L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 6L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.5"/>
    <path d="M12 2V4M22 12H20M12 20V22M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Helmet Component
const Helmet = ({ children, title, meta }) => {
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

// Styles
const styles = {
  container: {
    fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
    overflowX: 'hidden',
    width: '100%'
  },
  hero: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #2e1065 100%)',
    padding: '120px 24px 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  heroBg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70%',
    background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)',
    borderRadius: '50%'
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
    backgroundSize: '40px 40px'
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto'
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(102,126,234,0.15)',
    backdropFilter: 'blur(10px)',
    padding: '6px 18px',
    borderRadius: '100px',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#a5b4fc',
    marginBottom: '24px',
    border: '1px solid rgba(102,126,234,0.3)'
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '20px',
    color: 'white',
    letterSpacing: '-0.02em'
  },
  gradientText: {
    background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 40%, #f0abfc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  heroDescription: {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    color: '#94a3b8',
    maxWidth: '600px',
    margin: '0 auto'
  },
  heroWave: {
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '100%',
    zIndex: 2
  },
  principalSection: {
    padding: '80px 24px',
    background: '#ffffff'
  },
  principalContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    gap: '50px',
    alignItems: 'center'
  },
  principalContainerMobile: {
    flexDirection: 'column',
    gap: '30px'
  },
  principalImageWrapper: {
    position: 'relative',
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    maxWidth: '400px',
    margin: '0 auto'
  },
  principalImageWrapperMobile: {
    maxWidth: '280px',
    margin: '0 auto'
  },
  principalImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block'
  },
  imageBadge: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(10px)',
    padding: '8px 16px',
    borderRadius: '40px',
    color: 'white',
    fontSize: '0.8rem'
  },
  principalContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  principalContentMobile: {
    textAlign: 'center'
  },
  principalBadge: {
    display: 'inline-block',
    background: 'rgba(102,126,234,0.1)',
    color: '#667eea',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '16px'
  },
  principalName: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e293b'
  },
  principalDesignation: {
    fontSize: '1rem',
    color: '#667eea',
    fontWeight: '500',
    marginBottom: '24px'
  },
  principalMessage: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#475569',
    marginBottom: '20px'
  },
  principalSignature: {
    marginTop: '30px'
  },
  signatureLine: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    marginBottom: '12px'
  },
  signatureName: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '4px'
  },
  signatureTitle: {
    fontSize: '0.85rem',
    color: '#64748b'
  },
  aboutSection: {
    padding: '80px 24px',
    background: '#f8fafc'
  },
  aboutGrid: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  aboutText: {},
  sectionBadge: {
    display: 'inline-block',
    background: 'rgba(102,126,234,0.1)',
    color: '#667eea',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '16px'
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#1e293b'
  },
  aboutDescription: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#475569',
    marginBottom: '30px'
  },
  statsRow: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#667eea',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#64748b'
  },
  aboutFeatures: {},
  featuresGrid: {
    display: 'grid',
    gap: '20px'
  },
  featureCard: {
    background: 'white',
    padding: '24px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
    border: '1px solid rgba(0,0,0,0.03)'
  },
  featureIcon: {
    marginBottom: '12px',
    color: '#667eea'
  },
  featureTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e293b'
  },
  featureDesc: {
    fontSize: '0.8rem',
    color: '#64748b'
  },
  vmSection: {
    padding: '80px 24px',
    background: '#ffffff'
  },
  vmContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  vmCard: {
    textAlign: 'center',
    padding: '40px 24px',
    background: '#f8fafc',
    borderRadius: '28px',
    transition: 'all 0.3s ease'
  },
  vmIcon: {
    marginBottom: '20px',
    color: '#667eea'
  },
  vmTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#1e293b'
  },
  vmText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#475569'
  },
  milestonesSection: {
    padding: '80px 24px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)'
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 50px'
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: '#64748b'
  },
  // Desktop Timeline Styles
  desktopTimeline: {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    padding: '40px 0'
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '3px',
    height: '100%',
    background: 'linear-gradient(180deg, #667eea, #764ba2, #667eea)',
    borderRadius: '3px'
  },
  timelineNode: {
    position: 'relative',
    marginBottom: '60px',
    display: 'flex',
    alignItems: 'center'
  },
  timelineNodeLeft: {
    justifyContent: 'flex-start'
  },
  timelineNodeRight: {
    justifyContent: 'flex-end'
  },
  timelineDot: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px',
    height: '50px',
    background: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#667eea',
    boxShadow: '0 0 0 4px rgba(102,126,234,0.2), 0 10px 20px rgba(0,0,0,0.1)',
    zIndex: 2
  },
  timelineCard: {
    width: 'calc(50% - 50px)',
    background: 'white',
    borderRadius: '20px',
    padding: '20px 24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102,126,234,0.1)'
  },
  timelineYear: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '12px'
  },
  timelineTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e293b'
  },
  timelineDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.5'
  },
  // Mobile Timeline Styles
  mobileTimeline: {
    maxWidth: '500px',
    margin: '0 auto'
  },
  mobileTimelineItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102,126,234,0.1)'
  },
  mobileTimelineIcon: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#667eea',
    flexShrink: 0
  },
  mobileTimelineContent: {
    flex: 1
  },
  mobileTimelineYear: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '600',
    marginBottom: '8px'
  },
  mobileTimelineTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '6px',
    color: '#1e293b'
  },
  mobileTimelineDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.4'
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '60px 24px',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: 'clamp(1.6rem, 4vw, 2rem)',
    fontWeight: '700',
    marginBottom: '16px',
    color: 'white'
  },
  ctaText: {
    fontSize: '1rem',
    marginBottom: '28px',
    color: 'rgba(255,255,255,0.9)'
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'white',
    color: '#667eea',
    padding: '12px 32px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  }
};

export default About;