import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const courses = [
    {
      id: 1,
      name: "MPC WITH MAINS",
      shortName: "MPC + MAINS",
      icon: <AtomIcon />,
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
      bgLight: "rgba(59,130,246,0.08)",
      duration: "2 Years (Intermediate + IIT Coaching)",
      eligibility: "10th Pass with Mathematics, Physical Sciences",
      examPattern: "JEE Mains + Board Exams",
      curriculum: [
        "Mathematics 1A, 1B & 2A, 2B",
        "Physics Volume 1 & 2",
        "Chemistry Volume 1 & 2",
        "IIT JEE Mains Special Modules",
        "Weekly Tests & Mock Exams",
        "Doubt Clearing Sessions"
      ],
      features: [
        "Experienced IIT Faculty",
        "Daily Practice Problems",
        "Chapter-wise Test Series",
        "Previous Year Papers Solving",
        "Rank Improvement Program"
      ],
      careerPaths: [
        "Engineering (IIT/NIT/BITS)",
        "Research & Development",
        "Data Science & Analytics",
        "Aerospace & Defence",
        "Software & IT Sector"
      ],
      description: "MPC with MAINS is a comprehensive 2-year integrated program designed for students aspiring to crack IIT JEE Mains while excelling in their Intermediate board exams. Our specialized curriculum combines intermediate syllabus with competitive exam preparation."
    },
    {
      id: 2,
      name: "MPC WITH EAPCET",
      shortName: "MPC + EAPCET",
      icon: <TargetIcon />,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669, #047857)",
      bgLight: "rgba(16,185,129,0.08)",
      duration: "2 Years (Intermediate + EAPCET Coaching)",
      eligibility: "10th Pass with Mathematics, Physical Sciences",
      examPattern: "TS/AP EAPCET + Board Exams",
      curriculum: [
        "Mathematics (All Chapters)",
        "Physics (Entire Syllabus)",
        "Chemistry (Complete Coverage)",
        "EAPCET Special Focus Topics",
        "State-wise Exam Pattern Training",
        "Rank Booster Sessions"
      ],
      features: [
        "EAPCET Experts Faculty",
        "State Rank Target Program",
        "Regional Language Support",
        "Regular Mock Tests",
        "Result Oriented Approach"
      ],
      careerPaths: [
        "Engineering (State Colleges)",
        "Pharmacy (B.Pharm)",
        "Agricultural Engineering",
        "B.Sc. Agriculture",
        "Diploma Programs"
      ],
      description: "MPC with EAPCET is specially designed for students targeting top ranks in TS/AP EAPCET examination. Our focused approach ensures comprehensive coverage of both intermediate syllabus and competitive exam patterns for state engineering and agriculture entrance tests."
    },
    {
      id: 3,
      name: "BIPC WITH NEET",
      shortName: "BIPC + NEET",
      icon: <HeartIcon />,
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)",
      bgLight: "rgba(239,68,68,0.08)",
      duration: "2 Years (Intermediate + NEET Coaching)",
      eligibility: "10th Pass with Biology, Physical Sciences",
      examPattern: "NEET + Board Exams",
      curriculum: [
        "Botany (Full Syllabus)",
        "Zoology (Complete Coverage)",
        "Physics (NEET Focus)",
        "Chemistry (Organic, Inorganic, Physical)",
        "NEET Special Practice Papers",
        "Biology Practical Sessions"
      ],
      features: [
        "NEET Specialist Faculty",
        "Biology Lab Facility",
        "Medical Entrance Focus",
        "NCERT Based Teaching",
        "All India Test Series"
      ],
      careerPaths: [
        "MBBS (Doctor)",
        "BDS (Dentistry)",
        "BAMS (Ayurveda)",
        "BHMS (Homeopathy)",
        "Nursing & Paramedical"
      ],
      description: "BIPC with NEET is a premier integrated program for medical aspirants. Our systematic approach covers entire NEET syllabus with special emphasis on NCERT, regular mock tests, and personalized mentoring to help students secure top ranks in NEET examination."
    },
    {
      id: 4,
      name: "BIPC WITH EAPCET",
      shortName: "BIPC + EAPCET",
      icon: <LeafIcon />,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706, #b45309)",
      bgLight: "rgba(245,158,11,0.08)",
      duration: "2 Years (Intermediate + EAPCET Coaching)",
      eligibility: "10th Pass with Biology, Physical Sciences",
      examPattern: "TS/AP EAPCET (Agriculture/Pharmacy) + Board Exams",
      curriculum: [
        "Botany & Zoology (Full)",
        "Physics & Chemistry (Complete)",
        "Agriculture Stream Topics",
        "Pharmacy Entrance Focus",
        "State EAPCET Pattern Training",
        "Practical Oriented Sessions"
      ],
      features: [
        "Dual Focus (Agri + Pharmacy)",
        "State Rank Guarantee Program",
        "Regional Medium Support",
        "Regular Assessment Tests",
        "Career Counseling"
      ],
      careerPaths: [
        "B.Sc. Agriculture",
        "B.Pharm (Pharmacy)",
        "B.Sc. Biotechnology",
        "B.V.Sc (Veterinary)",
        "B.Sc. Forestry/Horticulture"
      ],
      description: "BIPC with EAPCET is a specialized program for students aiming for agriculture and pharmacy courses through EAPCET. Our curriculum is tailored to cover both intermediate syllabus and specific topics required for state-level entrance examinations."
    },
    {
      id: 5,
      name: "CEC",
      shortName: "CEC",
      icon: <TrendIcon />,
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)",
      bgLight: "rgba(139,92,246,0.08)",
      duration: "2 Years (Intermediate)",
      eligibility: "10th Pass",
      examPattern: "Board Exams + Competitive Exams",
      curriculum: [
        "Economics (Micro & Macro)",
        "Commerce (Accountancy)",
        "Business Studies",
        "Mathematics (Basic)",
        "CA Foundation Preparation",
        "Computer Applications"
      ],
      features: [
        "CA Foundation Coaching",
        "Business Mathematics Focus",
        "Practical Accounting Training",
        "Industry Guest Lectures",
        "Commerce Lab Facility"
      ],
      careerPaths: [
        "Chartered Accountancy (CA)",
        "Company Secretary (CS)",
        "Cost Accountant (CMA)",
        "B.Com (Hons)",
        "MBA & Banking Careers",
        "Entrepreneurship"
      ],
      description: "CEC (Civics, Economics, Commerce) is a premium commerce program designed for students passionate about business, finance, and economics. Along with intermediate syllabus, we provide integrated coaching for CA Foundation and other commerce professional courses."
    }
  ];

  // Handle card click - opens modal
  const handleCardClick = (courseId) => {
    setActiveCourse(courseId);
  };

  // Motion Card Component - Only opens on click, not on hover
  const MotionCard = ({ course }) => {
    return (
      <div 
        className="course-card"
        style={{
          ...styles.courseCard,
          background: `linear-gradient(135deg, white, ${course.bgLight})`,
          borderBottom: `4px solid ${course.color}`
        }}
        onClick={() => handleCardClick(course.id)}
      >
        <div style={{ ...styles.courseIconWrapper, background: course.bgLight, color: course.color }}>
          {course.icon}
        </div>
        <h3 style={styles.courseName}>{course.name}</h3>
        <p style={styles.courseDesc}>{course.description.substring(0, 100)}...</p>
        <div style={styles.courseMeta}>
          <span style={styles.courseDuration}>
            <ClockSmall />
            {course.duration}
          </span>
        </div>
        <button 
          style={{ ...styles.knowMoreBtn, background: course.gradient }}
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick(course.id);
          }}
        >
          Know More
          <ArrowRightSmall />
        </button>
      </div>
    );
  };

  const activeCourseData = activeCourse ? courses.find(c => c.id === activeCourse) : null;

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Our Courses | MPC with MAINS, BIPC with NEET, CEC | Vegha Junior College Rajahmundry</title>
        <meta name="description" content="Explore our premium courses at the best junior college in Rajahmundry: MPC with MAINS, MPC with EAPCET, BIPC with NEET, BIPC with EAPCET, and CEC." />
        <meta name="keywords" content="MPC with MAINS, MPC with EAPCET, BIPC with NEET, BIPC with EAPCET, CEC course, best junior college rajahmundry" />
      </Helmet>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Our Academic Programs</div>
          <h1 style={styles.heroTitle}>
            Choose Your <span style={styles.gradientText}>Path to Success</span>
          </h1>
          <p style={styles.heroDescription}>
            Comprehensive intermediate courses with integrated competitive exam coaching
          </p>
        </div>
        <div style={styles.heroWave}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 64L60 74.7C120 85 240 107 360 106.7C480 107 600 85 720 74.7C840 64 960 64 1080 69.3C1200 75 1320 85 1380 90.7L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V64Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section style={styles.coursesSection}>
        <div style={styles.coursesGrid}>
          {courses.map((course) => (
            <MotionCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </section>

      {/* Course Detail Modal - Responsive with slide animations */}
      {activeCourse && activeCourseData && (
        <>
          <div style={styles.modalOverlay} onClick={() => setActiveCourse(null)} />
          <div className={`modal-container ${isMobile ? 'mobile-modal' : 'desktop-modal'}`} style={isMobile ? styles.mobileModal : styles.desktopModal}>
            <div style={styles.modalContent}>
              <button style={styles.closeBtn} onClick={() => setActiveCourse(null)}>✕</button>
              
              {/* Header Section */}
              <div style={styles.modalHeader}>
                <div style={{ ...styles.modalIcon, background: activeCourseData.bgLight, color: activeCourseData.color }}>
                  {activeCourseData.icon}
                </div>
                <h2 style={styles.modalTitle}>{activeCourseData.name}</h2>
                <p style={styles.modalSubtitle}>{activeCourseData.description}</p>
              </div>
              
              {/* Info Cards - Stack on mobile, grid on desktop */}
              <div style={styles.infoGrid}>
                <div style={styles.infoCard}>
                  <ClockIcon />
                  <h4>Duration</h4>
                  <p>{activeCourseData.duration}</p>
                </div>
                <div style={styles.infoCard}>
                  <GraduationIcon />
                  <h4>Eligibility</h4>
                  <p>{activeCourseData.eligibility}</p>
                </div>
                <div style={styles.infoCard}>
                  <ExamIcon />
                  <h4>Exam Pattern</h4>
                  <p>{activeCourseData.examPattern}</p>
                </div>
              </div>

              {/* Curriculum Section */}
              <div style={styles.detailSection}>
                <h3 style={styles.detailHeading}>
                  <BookIcon />
                  Curriculum
                </h3>
                <div style={styles.listGrid}>
                  {activeCourseData.curriculum.map((item, idx) => (
                    <div key={idx} style={styles.listItem}>
                      <CheckCircleSmall />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Section */}
              <div style={styles.detailSection}>
                <h3 style={styles.detailHeading}>
                  <StarIconSmall />
                  Key Features
                </h3>
                <div style={styles.listGrid}>
                  {activeCourseData.features.map((item, idx) => (
                    <div key={idx} style={styles.listItem}>
                      <SparkIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities Section */}
              <div style={styles.detailSection}>
                <h3 style={styles.detailHeading}>
                  <CareerIcon />
                  Career Opportunities
                </h3>
                <div style={styles.listGrid}>
                  {activeCourseData.careerPaths.map((item, idx) => (
                    <div key={idx} style={styles.listItem}>
                      <ArrowRightSmall />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Buttons */}
              <div style={styles.modalFooter}>
                <Link to="/contact" style={styles.enrollBtn} onClick={() => setActiveCourse(null)}>
                  Enroll Now
                  <ArrowRightIcon />
                </Link>
                <button style={styles.achievementBtn} onClick={() => setActiveCourse(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
          <p style={styles.ctaText}>Join the best junior college in Rajahmundry and secure your future</p>
          <Link to="/contact" style={styles.ctaBtn}>
            Get Admission Guidance
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .course-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          cursor: pointer;
        }
        .course-card:nth-child(1) { animation-delay: 0.1s; }
        .course-card:nth-child(2) { animation-delay: 0.2s; }
        .course-card:nth-child(3) { animation-delay: 0.3s; }
        .course-card:nth-child(4) { animation-delay: 0.4s; }
        .course-card:nth-child(5) { animation-delay: 0.5s; }
        
        /* Desktop Modal Animation */
        .desktop-modal {
          animation: slideInRight 0.3s ease-out;
        }
        
        /* Mobile Modal Animation */
        .mobile-modal {
          animation: slideInBottom 0.3s ease-out;
        }
        
        .modal-overlay {
          animation: fadeIn 0.2s ease-out;
        }
        
        /* Hover effects - only visual, no modal opening */
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        
        .course-card:hover .course-icon-wrapper {
          transform: scale(1.05);
        }
        
        .know-more-btn:hover {
          transform: scale(1.02);
          filter: brightness(1.05);
        }
        
        .close-btn:hover {
          background: #f1f5f9;
          transform: scale(1.05);
        }
        
        .enroll-btn:hover, .achievement-btn:hover, .cta-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.02);
        }
        
        .info-card:hover {
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .courses-grid { 
            grid-template-columns: 1fr !important; 
            padding: 0 16px; 
          }
          .hero-title { 
            font-size: 1.8rem !important; 
          }
          .hero-description {
            font-size: 0.9rem !important;
            padding: 0 16px;
          }
        }
        
        @media (max-width: 480px) {
          .modal-content {
            padding: 20px 16px !important;
          }
          .modal-title {
            font-size: 1.4rem !important;
          }
          .detail-heading {
            font-size: 1rem !important;
          }
          .list-item {
            font-size: 0.8rem !important;
            padding: 8px !important;
          }
          .info-card {
            padding: 12px !important;
          }
          .info-card h4 {
            font-size: 0.9rem !important;
            margin: 8px 0 4px !important;
          }
          .info-card p {
            font-size: 0.75rem !important;
          }
          .enroll-btn, .achievement-btn {
            padding: 10px 20px !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
};

// ==================== PREMIUM SVG ICONS ====================

const AtomIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C12 12 14 14 14 17C14 20 12 22 12 22C12 22 10 20 10 17C10 14 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12C12 12 10 10 10 7C10 4 12 2 12 2C12 2 14 4 14 7C14 10 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 9.5C7.5 9.5 5 10.5 2.5 9.5C0 8.5 1 6 1 6C1 6 3.5 5 5.5 6.5C7.5 8 7.5 9.5 7.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 9.5C16.5 9.5 19 10.5 21.5 9.5C24 8.5 23 6 23 6C23 6 20.5 5 18.5 6.5C16.5 8 16.5 9.5 16.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 14.5C7.5 14.5 5 13.5 2.5 14.5C0 15.5 1 18 1 18C1 18 3.5 19 5.5 17.5C7.5 16 7.5 14.5 7.5 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 14.5C16.5 14.5 19 13.5 21.5 14.5C24 15.5 23 18 23 18C23 18 20.5 19 18.5 17.5C16.5 16 16.5 14.5 16.5 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 2V4M22 12H20M12 20V22M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 8C12 10.2091 13.7909 12 16 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 22V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrendIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7H21V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GraduationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 12V17C6 19.2 8.7 21 12 21C15.3 21 18 19.2 18 17V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ExamIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const StarIconSmall = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CareerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V7M12 7L15 4M12 7L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 5L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 5L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CheckCircleSmall = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="1.5"/>
    <path d="M8 12L11 15L16 9" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#f59e0b" fillOpacity="0.8"/>
  </svg>
);

const ArrowRightSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
  coursesSection: {
    padding: '60px 24px 80px',
    background: '#f8fafc'
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    maxWidth: '1300px',
    margin: '0 auto'
  },
  courseCard: {
    borderRadius: '28px',
    padding: '32px 24px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden'
  },
  courseIconWrapper: {
    width: '90px',
    height: '90px',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '28px',
    transition: 'transform 0.3s ease'
  },
  courseName: {
    fontSize: '1.35rem',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#1e293b'
  },
  courseDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  courseMeta: {
    marginBottom: '20px'
  },
  courseDuration: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.75rem',
    color: '#667eea',
    background: 'rgba(102,126,234,0.1)',
    padding: '6px 14px',
    borderRadius: '50px'
  },
  knowMoreBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 24px',
    borderRadius: '40px',
    border: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: 1999
  },
  desktopModal: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    maxWidth: '550px',
    height: '100vh',
    background: 'white',
    zIndex: 2000,
    overflowY: 'auto',
    boxShadow: '-5px 0 30px rgba(0,0,0,0.1)'
  },
  mobileModal: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'white',
    zIndex: 2000,
    borderTopLeftRadius: '28px',
    borderTopRightRadius: '28px',
    maxHeight: '85vh',
    overflowY: 'auto',
    boxShadow: '0 -5px 30px rgba(0,0,0,0.15)'
  },
  modalContent: {
    padding: '28px 24px'
  },
  closeBtn: {
    position: 'absolute',
    top: '16px',
    right: '20px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid #e2e8f0',
    background: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    zIndex: 10
  },
  modalHeader: {
    textAlign: 'center',
    marginBottom: '28px',
    paddingRight: '20px'
  },
  modalIcon: {
    width: '70px',
    height: '70px',
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px'
  },
  modalTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '12px'
  },
  modalSubtitle: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.5'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '16px',
    marginBottom: '28px'
  },
  infoCard: {
    textAlign: 'center',
    padding: '16px 12px',
    background: '#f8fafc',
    borderRadius: '16px',
    transition: 'all 0.3s ease'
  },
  detailSection: {
    marginBottom: '28px'
  },
  detailHeading: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '14px'
  },
  listGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.85rem',
    color: '#334155',
    padding: '8px 12px',
    background: '#f8fafc',
    borderRadius: '12px'
  },
  modalFooter: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginTop: '28px',
    paddingTop: '20px',
    borderTop: '1px solid #e2e8f0',
    flexWrap: 'wrap'
  },
  enrollBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  },
  achievementBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'white',
    color: '#667eea',
    padding: '12px 28px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    border: '1px solid #667eea',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
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

export default Courses;