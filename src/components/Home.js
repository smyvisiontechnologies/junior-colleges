import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // State for count-up animation
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Hero background image state
  const [bgImage, setBgImage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  // Testimonials data
  const testimonials = [
    { id: 1, name: "Mrs. Lakshmi Devi", text: "My son secured a rank in EAPCET after joining this college. The MPC with EAPCET coaching is outstanding!", rating: 5, relation: "Parent of S. Ramesh" },
    { id: 2, name: "Mr. Venkata Raju", text: "Best junior college in Rajahmundry for BIPC with NEET. The faculty supported my daughter throughout her preparation.", rating: 5, relation: "Parent of K. Priya" },
    { id: 3, name: "Dr. Surya Prakash", text: "I recommend this inter college to every parent. The CEC course helped my daughter get into a top commerce college.", rating: 5, relation: "Parent of N. Divya" },
    { id: 4, name: "Mrs. Anitha Reddy", text: "Excellent coaching for MPC with MAINS. My son cracked JEE Mains with flying colors.", rating: 5, relation: "Parent of P. Vikram" },
    { id: 5, name: "Mr. Rama Krishna", text: "The BIPC with EAPCET program is well-structured. My daughter got a good rank.", rating: 5, relation: "Parent of G. Sirisha" },
    { id: 6, name: "Mrs. Padmavathi", text: "Best decision we made! The faculty, infrastructure, and results are exceptional.", rating: 5, relation: "Parent of B. Sravan" }
  ];

  // Courses data
  const courses = [
    { name: "MPC WITH MAINS", icon: <AtomIcon />, link: "/courses", description: "IIT JEE Mains preparation with integrated coaching" },
    { name: "MPC WITH EAPCET", icon: <TargetIcon />, link: "/courses", description: "Engineering entrance focused program" },
    { name: "BIPC WITH NEET", icon: <HeartIcon />, link: "/courses", description: "Medical entrance coaching with NEET focus" },
    { name: "BIPC WITH EAPCET", icon: <LeafIcon />, link: "/courses", description: "Agriculture & Pharmacy entrance preparation" },
    { name: "CEC", icon: <TrendIcon />, link: "/courses", description: "Commerce & Economics stream with CA foundation" }
  ];

  // Fetch random Unsplash image for hero background
  useEffect(() => {
    const educationImages = [
      'https://images.unsplash.com/photo-1523050854058-8df90110e9c2?w=1920&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
      'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1920&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1920&q=80'
    ];
    
    const randomImage = educationImages[Math.floor(Math.random() * educationImages.length)];
    setBgImage(randomImage);
    
    // Preload image
    const img = new Image();
    img.src = randomImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Count-up animation
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection && !hasAnimated) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        if (isVisible) {
          setHasAnimated(true);
          animateNumbers();
        }
      }
    };

    const animateNumbers = () => {
      const duration = 2000;
      const targets = { students: 2500, courses: 5, teachers: 85, years: 18 };
      let startTime = null;
      
      const updateCounts = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setStudentsCount(Math.floor(progress * targets.students));
        setCoursesCount(Math.floor(progress * targets.courses));
        setTeachersCount(Math.floor(progress * targets.teachers));
        setYearsCount(Math.floor(progress * targets.years));
        if (progress < 1) requestAnimationFrame(updateCounts);
      };
      requestAnimationFrame(updateCounts);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => {
    if (isMobile) return [testimonials[currentTestimonial]];
    const total = testimonials.length;
    return [
      testimonials[(currentTestimonial - 1 + total) % total],
      testimonials[currentTestimonial],
      testimonials[(currentTestimonial + 1) % total]
    ];
  };

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Best Junior College in Rajahmundry | Vegha Junior College | Top Inter College for MPC, BIPC, CEC</title>
        <meta name="description" content="Vegha Junior College is the best junior college in Rajahmundry offering MPC with MAINS, MPC with EAPCET, BIPC with NEET, BIPC with EAPCET, and CEC courses." />
        <meta name="keywords" content="best junior college in rajahmundry, inter colleges in rajahmundry, best inter college in rajahmundry, junior colleges in rajahmundry, top junior college rajahmundry" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Rajahmundry" />
      </Helmet>

      {/* Hero Section with Unsplash Background Image */}
      <section style={styles.hero}>
        {/* Unsplash Background Image */}
        <div 
          style={{
            ...styles.heroBgImage,
            backgroundImage: `url(${bgImage})`,
            opacity: imageLoaded ? 1 : 0,
          }}
        />
        
        {/* Dark Overlay Only - No Blue Shade */}
        <div style={styles.heroOverlay} />
        
        {/* Content */}
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <MedalIcon />
            <span>#1 Ranked Junior College in Rajahmundry</span>
          </div>
          <h1 style={styles.heroTitle}>
            Best Junior College in{' '}
            <span style={styles.gradientText}>Rajahmundry</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Top Rated Inter College for MPC, BIPC, CEC • Premier NEET & EAPCET Coaching
          </p>
          <p style={styles.heroDescription}>
            Ranked #1 among inter colleges in Rajahmundry. Exceptional results, experienced faculty, 
            and proven track record for IIT MAINS, NEET, and EAPCET examinations.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/courses" style={styles.primaryBtn}>
              <SparkleIcon />
              Explore Courses
              <ArrowRightIcon />
            </Link>
            <Link to="/contact" style={styles.secondaryBtn}>
              <ContactIcon />
              Contact Us
            </Link>
          </div>
          <div style={styles.trustBadges}>
            <div style={styles.trustItem}>
              <CheckCircleIcon />
              <span>10,000+ Students Trained</span>
            </div>
            <div style={styles.trustItem}>
              <CheckCircleIcon />
              <span>95% Results Record</span>
            </div>
            <div style={styles.trustItem}>
              <CheckCircleIcon />
              <span>18+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section style={styles.coursesSection}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>Our Programs</div>
          <h2 style={styles.sectionTitle}>Choose Your <span style={styles.gradientText}>Path to Success</span></h2>
          <p style={styles.sectionSubtitle}>Comprehensive courses designed for competitive exams and academic excellence</p>
        </div>
        <div style={styles.coursesGrid}>
          {courses.map((course, index) => (
            <Link to={course.link} key={index} style={styles.courseCard}>
              <div style={styles.courseIconWrapper}>
                {course.icon}
              </div>
              <h3 style={styles.courseName}>{course.name}</h3>
              <p style={styles.courseDesc}>{course.description}</p>
              <span style={styles.courseLink}>
                Learn More
                <SmallArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" style={styles.statsSection}>
        <div style={styles.statsOverlay}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}><UsersIcon /></div>
              <div style={styles.statNumber}>{studentsCount}+</div>
              <div style={styles.statLabel}>Happy Students</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}><CoursesIcon /></div>
              <div style={styles.statNumber}>{coursesCount}+</div>
              <div style={styles.statLabel}>Expert Courses</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}><TeachersIcon /></div>
              <div style={styles.statNumber}>{teachersCount}+</div>
              <div style={styles.statLabel}>Expert Faculty</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}><YearsIcon /></div>
              <div style={styles.statNumber}>{yearsCount}+</div>
              <div style={styles.statLabel}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>Testimonials</div>
          <h2 style={styles.sectionTitle}>What <span style={styles.gradientText}>Parents Say</span></h2>
          <p style={styles.sectionSubtitle}>Words of appreciation from our beloved parents</p>
        </div>
        
        <div style={styles.testimonialsContainer}>
          <button onClick={prevTestimonial} style={styles.arrowBtn} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          
          <div style={styles.testimonialsWrapper}>
            <div style={styles.testimonialsGrid}>
              {getVisibleTestimonials().map((testimonial) => (
                <div key={testimonial.id} style={styles.testimonialCard}>
                  <div style={styles.quoteIcon}>"</div>
                  <p style={styles.testimonialText}>"{testimonial.text}"</p>
                  <div style={styles.starsRow}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.rating} />
                    ))}
                  </div>
                  <h4 style={styles.parentName}>{testimonial.name}</h4>
                  <p style={styles.parentRelation}>
                    <UserIconSmall />
                    {testimonial.relation}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={nextTestimonial} style={styles.arrowBtn} aria-label="Next">
            <ChevronRightIcon />
          </button>
        </div>
        
        <div style={styles.dotsContainer}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTestimonial(idx)}
              style={{ ...styles.dot, backgroundColor: idx === currentTestimonial ? '#667eea' : '#e2e8f0' }}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <div style={styles.ctaIcon}><AdmissionIcon /></div>
          <h2 style={styles.ctaTitle}>Admissions Open for 2026-27</h2>
          <p style={styles.ctaText}>Limited seats available for MPC, BIPC, and CEC courses. Join the best junior college in Rajahmundry today!</p>
          <Link to="/contact" style={styles.ctaBtn}>
            Apply Now
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bgZoomIn {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
          font-family: 'Inter', 'Poppins', system-ui, sans-serif;
        }
        
        @media (max-width: 768px) {
          .hero-buttons { flex-direction: column; align-items: center; width: 100%; }
          .primary-btn, .secondary-btn { width: 100%; justify-content: center; }
          .trust-badges { flex-direction: column; align-items: center; gap: 12px !important; }
          .stats-grid { gap: 30px !important; }
          .courses-grid { grid-template-columns: 1fr !important; }
          .testimonials-container { gap: 10px !important; }
          .arrow-btn { width: 38px !important; height: 38px !important; }
        }
        
        @media (max-width: 480px) {
          .hero-title { font-size: 1.8rem !important; }
          .hero-subtitle { font-size: 0.9rem !important; }
          .section-title { font-size: 1.6rem !important; }
          .badge span { font-size: 0.7rem; }
        }
        
        .primary-btn, .secondary-btn, .arrow-btn, .course-card, .stat-card, .testimonial-card, .cta-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .primary-btn:hover, .secondary-btn:hover, .cta-btn:hover {
          transform: translateY(-3px);
        }
        
        .hero-bg-image {
          animation: bgZoomIn 8s ease-out;
        }
      `}</style>
    </div>
  );
};

// ==================== PREMIUM SVG ICONS ====================

const AtomIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C12 12 14 14 14 17C14 20 12 22 12 22C12 22 10 20 10 17C10 14 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12C12 12 10 10 10 7C10 4 12 2 12 2C12 2 14 4 14 7C14 10 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 9.5C7.5 9.5 5 10.5 2.5 9.5C0 8.5 1 6 1 6C1 6 3.5 5 5.5 6.5C7.5 8 7.5 9.5 7.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 9.5C16.5 9.5 19 10.5 21.5 9.5C24 8.5 23 6 23 6C23 6 20.5 5 18.5 6.5C16.5 8 16.5 9.5 16.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 14.5C7.5 14.5 5 13.5 2.5 14.5C0 15.5 1 18 1 18C1 18 3.5 19 5.5 17.5C7.5 16 7.5 14.5 7.5 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 14.5C16.5 14.5 19 13.5 21.5 14.5C24 15.5 23 18 23 18C23 18 20.5 19 18.5 17.5C16.5 16 16.5 14.5 16.5 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 2V4M22 12H20M12 20V22M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 8C12 10.2091 13.7909 12 16 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 22V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrendIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7H21V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MedalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8.5 14.5L7 23L12 20L17 23L15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.8"/>
    <path d="M19 3L19.5 6.5L23 7L19.5 7.5L19 11L18.5 7.5L15 7L18.5 6.5L19 3Z" fill="currentColor" fillOpacity="0.6"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SmallArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8L12 13L21 8M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 16.8 15.2 15 13 15H5C2.8 15 1 16.8 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M23 21V19C22.7 17.2 21.2 15.6 19.5 15M15 3.5C16.7 3.9 18 5.4 18 7.2C18 9 16.7 10.5 15 10.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CoursesIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const TeachersIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 12V17C6 19.2 8.7 21 12 21C15.3 21 18 19.2 18 17V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const YearsIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 3H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#fbbf24" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const UserIconSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 20V19C5 15.6863 7.68629 13 11 13H13C16.3137 13 19 15.6863 19 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AdmissionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6.5L12 2L2 6.5L12 11L22 6.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 9.5L6 16.5C6 18.7 8.7 20.5 12 20.5C15.3 20.5 18 18.7 18 16.5V9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="9" r="2" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
  </svg>
);

// Helmet Component
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

// Styles
const styles = {
  container: {
    fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
    overflowX: 'hidden',
    width: '100%'
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: '#000',
    overflow: 'hidden'
  },
  heroBgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 1,
    transition: 'opacity 1.5s ease-in-out',
    animation: 'bgZoomIn 8s ease-out'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.65)',
    zIndex: 2
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 32px',
    textAlign: 'center',
    animation: 'slideUp 0.8s ease-out'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '8px 20px',
    borderRadius: '100px',
    marginBottom: '28px',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#e0e0e0',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  heroTitle: {
    fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
    fontWeight: '800',
    marginBottom: '24px',
    lineHeight: '1.2',
    color: 'white',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 20px rgba(0,0,0,0.5)'
  },
  gradientText: {
    background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 40%, #f0abfc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    fontWeight: '500',
    marginBottom: '16px',
    color: '#e0e0e0',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
  },
  heroDescription: {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
    maxWidth: '700px',
    margin: '0 auto 32px',
    color: '#b0b0b0',
    lineHeight: '1.6',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '48px'
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '14px 34px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(102,126,234,0.3)'
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '14px 34px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  trustBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.15)'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    color: '#e0e0e0',
    textShadow: '0 1px 5px rgba(0,0,0,0.5)'
  },
  coursesSection: {
    padding: '100px 24px',
    background: '#f8fafc',
    textAlign: 'center'
  },
  sectionHeader: {
    maxWidth: '700px',
    margin: '0 auto 60px'
  },
  sectionBadge: {
    display: 'inline-block',
    background: 'rgba(102,126,234,0.1)',
    color: '#667eea',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '16px',
    letterSpacing: '1px'
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#1e293b'
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6'
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  courseCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px 24px',
    textDecoration: 'none',
    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
    textAlign: 'center',
    display: 'block',
    border: '1px solid rgba(0,0,0,0.03)'
  },
  courseIconWrapper: {
    width: '85px',
    height: '85px',
    margin: '0 auto 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))',
    borderRadius: '28px',
    color: '#667eea'
  },
  courseName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#1e293b'
  },
  courseDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginBottom: '20px',
    lineHeight: '1.5'
  },
  courseLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#667eea',
    fontWeight: '600',
    fontSize: '0.9rem'
  },
  statsSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '80px 24px',
    position: 'relative'
  },
  statsOverlay: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '50px',
    textAlign: 'center'
  },
  statCard: {
    color: 'white'
  },
  statIcon: {
    marginBottom: '16px'
  },
  statNumber: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '1rem',
    opacity: '0.9',
    letterSpacing: '1px'
  },
  testimonialsSection: {
    padding: '100px 24px',
    background: '#ffffff'
  },
  testimonialsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px',
    position: 'relative'
  },
  arrowBtn: {
    background: 'white',
    color: '#667eea',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  testimonialsWrapper: {
    flex: 1,
    overflow: 'hidden'
  },
  testimonialsGrid: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center'
  },
  testimonialCard: {
    background: '#ffffff',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
    flex: 1,
    minWidth: '280px',
    maxWidth: '360px',
    margin: '0 auto',
    border: '1px solid #f1f5f9'
  },
  quoteIcon: {
    fontSize: '4rem',
    color: '#667eea',
    opacity: '0.2',
    marginBottom: '-20px',
    fontFamily: 'Georgia, serif'
  },
  testimonialText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#334155',
    marginBottom: '20px',
    fontStyle: 'italic'
  },
  starsRow: {
    display: 'flex',
    gap: '4px',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  parentName: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '6px'
  },
  parentRelation: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    justifyContent: 'center'
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '50px',
    flexWrap: 'wrap'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '80px 24px',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  ctaIcon: {
    marginBottom: '24px'
  },
  ctaTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    color: 'white'
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: '32px',
    color: 'rgba(255,255,255,0.9)',
    lineHeight: '1.6'
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'white',
    color: '#667eea',
    padding: '14px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem'
  }
};

// Hover styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    .primary-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(102,126,234,0.4); }
    .secondary-btn:hover { background: rgba(255,255,255,0.2); transform: translateY(-3px); }
    .course-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(102,126,234,0.12); }
    .course-card:hover .course-icon-wrapper { transform: scale(1.05); }
    .course-card:hover .course-link { gap: 10px; }
    .arrow-btn:hover { background: #667eea; color: white; border-color: #667eea; transform: scale(1.05); }
    .stat-card:hover { transform: translateY(-5px); }
    .stat-card:hover .stat-number { transform: scale(1.02); display: inline-block; }
    .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); gap: 14px; }
    .testimonial-card:hover { transform: translateY(-5px); box-shadow: 0 25px 50px rgba(102,126,234,0.08); }
  `;
  document.head.appendChild(styleSheet);
}

export default Home;