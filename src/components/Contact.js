import React, { useState, useEffect } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const phoneNumber = "+918500352005";
  
  // College location (Rajahmundry)
  const mapLocation = {
    lat: "16.9833",
    lng: "81.7833",
    address: "Vegha Junior College, Near Ramakrishna Theatre, Danavaipeta, Rajahmundry - 533103, Andhra Pradesh"
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello Vegha Junior College,%0A%0A*New Admission Enquiry*%0A%0A📝 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A📞 Phone: ${formData.phone}%0A📚 Course Interested: ${formData.course}%0A💬 Message: ${formData.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const openMap = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation.address)}`, '_blank');
  };

  const courses = ["MPC WITH MAINS", "MPC WITH EAPCET", "BIPC WITH NEET", "BIPC WITH EAPCET", "CEC"];

  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon />, url: "https://facebook.com/Veghajuniorcollege", color: "#1877f2" },
    { name: "Instagram", icon: <InstagramIcon />, url: "https://instagram.com/Veghajuniorcollege", color: "#e4405f" },
    { name: "YouTube", icon: <YouTubeIcon />, url: "https://youtube.com/@Veghajuniorcollege", color: "#ff0000" },
    { name: "Twitter", icon: <TwitterIcon />, url: "https://twitter.com/Veghajuniorcollege", color: "#1da1f2" },
    { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://linkedin.com/company/Vegha-junior-college", color: "#0077b5" }
  ];

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Contact Us | Best Junior College in Rajahmundry | Vegha Junior College</title>
        <meta name="description" content="Contact Vegha Junior College - Best junior college in Rajahmundry. Call us at 8500352005 or visit our campus. Enroll for MPC, BIPC, CEC courses with NEET, EAPCET coaching." />
        <meta name="keywords" content="contact Vegha junior college, best junior college rajahmundry, junior college phone number, Vegha junior college admission" />
      </Helmet>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Get in Touch</div>
          <h1 style={styles.heroTitle}>
            Contact <span style={styles.gradientText}>Us</span>
          </h1>
          <p style={styles.heroDescription}>
            Have questions? We're here to help you with admissions, courses, and any other inquiries
          </p>
        </div>
        <div style={styles.heroWave}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 64L60 74.7C120 85 240 107 360 106.7C480 107 600 85 720 74.7C840 64 960 64 1080 69.3C1200 75 1320 85 1380 90.7L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V64Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Section - Responsive Grid */}
      <section style={styles.contactInfoSection}>
        <div className="contact-info-grid" style={styles.contactInfoGrid}>
          <div className="info-card" style={styles.infoCard}>
            <div style={styles.infoIcon}>
              <PhoneIcon />
            </div>
            <h3 style={styles.infoTitle}>Call Us</h3>
            <p style={styles.infoDetail}>
              <a href={`tel:${phoneNumber}`} style={styles.infoLink}>+91 {phoneNumber}</a>
            </p>
            <p style={styles.infoText}>Mon-Sat, 9 AM to 6 PM</p>
            <button onClick={openWhatsApp} style={styles.whatsappBtn}>
              <WhatsAppIcon />
              WhatsApp Now
            </button>
          </div>

          <div className="info-card" style={styles.infoCard}>
            <div style={styles.infoIcon}>
              <EmailIcon />
            </div>
            <h3 style={styles.infoTitle}>Email Us</h3>
            <p style={styles.infoDetail}>
              <a href="mailto:info@Veghajuniorcollege.com" style={styles.infoLink}>info@Veghajuniorcollege.com</a>
            </p>
            <p style={styles.infoDetail}>
              <a href="mailto:admissions@Veghajuniorcollege.com" style={styles.infoLink}>admissions@Veghajuniorcollege.com</a>
            </p>
            <p style={styles.infoText}>We reply within 24 hours</p>
          </div>

          <div className="info-card" style={styles.infoCard}>
            <div style={styles.infoIcon}>
              <LocationIcon />
            </div>
            <h3 style={styles.infoTitle}>Visit Us</h3>
            <p style={styles.infoDetail}>{mapLocation.address}</p>
            <button onClick={openMap} style={styles.mapBtn}>
              <MapIcon />
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section - Responsive */}
      <section style={styles.formMapSection}>
        <div className="form-map-container" style={styles.formMapContainer}>
          {/* Contact Form */}
          <div className="form-container" style={styles.formContainer}>
            <div style={styles.formHeader}>
              <h2 style={styles.formTitle}>Send us a <span style={styles.gradientText}>Message</span></h2>
              <p style={styles.formSubtitle}>Fill out the form and we'll get back to you</p>
            </div>
            
            {formSubmitted && (
              <div style={styles.successMessage}>
                <CheckIcon />
                Message sent! You will be redirected to WhatsApp.
              </div>
            )}
            
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>
              
              <div className="input-row" style={styles.inputRow}>
                <div style={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
              </div>
              
              <div style={styles.inputGroup}>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  style={styles.select}
                >
                  <option value="">Select Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={styles.textarea}
                ></textarea>
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                <SendIcon />
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Google Map Preview */}
          <div className="map-container" style={styles.mapContainer}>
            <div style={styles.mapHeader}>
              <h3 style={styles.mapTitle}>Find Us Here</h3>
              <p style={styles.mapSubtitle}>Vegha Junior College, Rajahmundry</p>
            </div>
            <div style={styles.mapPreview}>
              <iframe
                title="Vegha Junior College Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Vegha+Junior+College+Rajahmundry"
                width="100%"
                height="100%"
                style={styles.mapIframe}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <button onClick={openMap} style={styles.openMapBtn}>
              <MapIcon />
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section - Responsive */}
      <section style={styles.socialSection}>
        <div style={styles.socialContainer}>
          <div style={styles.socialHeader}>
            <h2 style={styles.socialTitle}>Connect With <span style={styles.gradientText}>Us</span></h2>
            <p style={styles.socialSubtitle}>Follow us on social media for updates and announcements</p>
          </div>
          <div className="social-grid" style={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={styles.socialCard}
              >
                <div style={{ ...styles.socialIcon, color: social.color }}>
                  {social.icon}
                </div>
                <h4 style={styles.socialName}>{social.name}</h4>
                <span style={styles.followBtn}>Follow →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section style={styles.quickContactSection}>
        <div style={styles.quickContactContent}>
          <h2 style={styles.quickContactTitle}>Need Quick Assistance?</h2>
          <p style={styles.quickContactText}>Call us directly or send a WhatsApp message for immediate response</p>
          <div className="quick-contact-buttons" style={styles.quickContactButtons}>
            <a href={`tel:${phoneNumber}`} style={styles.callBtn}>
              <PhoneIcon />
              Call Now
            </a>
            <button onClick={openWhatsApp} style={styles.quickWhatsappBtn}>
              <WhatsAppIcon />
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .info-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .info-card:nth-child(1) { animation-delay: 0.1s; }
        .info-card:nth-child(2) { animation-delay: 0.2s; }
        .info-card:nth-child(3) { animation-delay: 0.3s; }
        
        .form-container {
          animation: slideInLeft 0.6s ease-out;
        }
        .map-container {
          animation: slideInRight 0.6s ease-out;
        }
        
        .social-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .social-card:nth-child(1) { animation-delay: 0.1s; }
        .social-card:nth-child(2) { animation-delay: 0.2s; }
        .social-card:nth-child(3) { animation-delay: 0.3s; }
        .social-card:nth-child(4) { animation-delay: 0.4s; }
        .social-card:nth-child(5) { animation-delay: 0.5s; }
        
        .info-card:hover, .social-card:hover {
          transform: translateY(-8px);
          transition: all 0.3s ease;
        }
        
        .input:focus, .select:focus, .textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
          outline: none;
        }
        
        .submit-btn:hover, .whatsapp-btn:hover, .map-btn:hover, .open-map-btn:hover, .call-btn:hover, .quick-whatsapp-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.02);
        }
        
        /* Desktop Styles */
        @media (min-width: 769px) {
          .contact-info-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 30px !important;
          }
          .form-map-container {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          .input-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 15px !important;
          }
          .social-grid {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            gap: 20px !important;
          }
          .quick-contact-buttons {
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            gap: 16px !important;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
          .contact-info-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
          .form-map-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .input-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 15px !important;
          }
          .social-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
          .quick-contact-buttons {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
          .hero-title {
            font-size: 1.8rem !important;
          }
          .hero-description {
            font-size: 0.9rem !important;
            padding: 0 16px;
          }
          .form-title {
            font-size: 1.5rem !important;
          }
          .social-title {
            font-size: 1.5rem !important;
          }
          .map-preview {
            height: 250px !important;
          }
          .info-card {
            padding: 24px !important;
          }
          .form-container, .map-container {
            padding: 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          .social-grid {
            grid-template-columns: 1fr !important;
          }
          .info-card {
            padding: 20px !important;
          }
          .input, .select, .textarea {
            font-size: 14px !important;
            padding: 12px !important;
          }
          .submit-btn, .call-btn, .quick-whatsapp-btn {
            padding: 10px 20px !important;
            font-size: 0.85rem !important;
          }
          .info-icon svg {
            width: 32px !important;
            height: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

// ==================== PREMIUM SVG ICONS ====================

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.352 21.4019C21.1467 21.5901 20.9041 21.7335 20.6398 21.8227C20.3756 21.9119 20.0954 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77302 17.3147 6.72533 15.267 5.19 12.85C3.49878 10.241 2.44651 7.27166 2.12 4.18C2.09506 3.9046 2.12813 3.62442 2.21729 3.36016C2.30645 3.09591 2.4499 2.8533 2.63812 2.64799C2.82635 2.44268 3.05547 2.27909 3.31061 2.1675C3.56575 2.05591 3.84149 1.99891 4.12 2H7.12C7.67354 1.99532 8.20946 2.1942 8.62481 2.55343C9.04017 2.91265 9.30157 3.40467 9.35 3.94C9.43737 4.81133 9.62687 5.67071 9.92 6.5C10.0331 6.81412 10.0369 7.15632 9.9308 7.47296C9.82468 7.7896 9.61616 8.05979 9.34 8.24L7.74 9.26C9.1067 11.8861 11.1039 13.8833 13.73 15.25L14.75 13.65C14.9302 13.3738 15.2004 13.1653 15.517 13.0592C15.8337 12.9531 16.1759 12.9569 16.49 13.07C17.3193 13.3631 18.1787 13.5526 19.05 13.64C19.5856 13.6886 20.0778 13.9502 20.437 14.3658C20.7962 14.7813 20.9948 15.3175 20.99 15.87L21 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21L4.65 16.05C3.6 14.25 3 12.2 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19C9.8 19 7.75 18.4 5.95 17.35L3 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 9H9.5C10.3 9 11 9.7 11 10.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 12H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 12C17.1 12 18 12.9 18 14V16H16V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8L12 13L21 8M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 20 15.5 20 10C20 5.5 16.5 2 12 2C7.5 2 4 5.5 4 10C4 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="10" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const MapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L3 3L21 15L12 13L9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11L15 21L12 13L21 15L9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" fillOpacity="0.5"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42C22.4218 5.94546 22.179 5.51058 21.8387 5.15941C21.4984 4.80824 21.0748 4.55306 20.61 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.39 4.46C2.92519 4.59306 2.50164 4.84824 2.16131 5.19941C1.82098 5.55058 1.57821 5.98546 1.46 6.46C1.14522 8.20556 0.991235 9.97631 1 11.75C0.991235 13.5237 1.14522 15.2944 1.46 17.04C1.57821 17.5145 1.82098 17.9494 2.16131 18.3006C2.50164 18.6518 2.92519 18.9069 3.39 19.04C5.12 19.5 12 19.5 12 19.5C12 19.5 18.88 19.5 20.61 19.04C21.0748 18.9069 21.4984 18.6518 21.8387 18.3006C22.179 17.9494 22.4218 17.5145 22.54 17.04C22.8548 15.2944 23.0088 13.5237 23 11.75C23.0088 9.97631 22.8548 8.20556 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90117 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18586 6.93101 7.39545C5.36074 6.60503 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
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
  contactInfoSection: {
    padding: '60px 24px',
    background: '#ffffff'
  },
  contactInfoGrid: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  infoCard: {
    background: '#f8fafc',
    borderRadius: '24px',
    padding: '32px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.03)'
  },
  infoIcon: {
    width: '60px',
    height: '60px',
    margin: '0 auto 20px',
    background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#667eea'
  },
  infoTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#1e293b'
  },
  infoDetail: {
    fontSize: '1rem',
    color: '#475569',
    marginBottom: '8px',
    lineHeight: '1.5'
  },
  infoLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500'
  },
  infoText: {
    fontSize: '0.85rem',
    color: '#94a3b8',
    marginTop: '8px'
  },
  whatsappBtn: {
    marginTop: '16px',
    background: '#25D366',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  mapBtn: {
    marginTop: '16px',
    background: 'white',
    color: '#667eea',
    border: '1px solid #667eea',
    padding: '10px 20px',
    borderRadius: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  formMapSection: {
    padding: '60px 24px',
    background: '#f8fafc'
  },
  formMapContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  formContainer: {
    background: 'white',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },
  formHeader: {
    textAlign: 'center',
    marginBottom: '28px'
  },
  formTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e293b'
  },
  formSubtitle: {
    fontSize: '0.9rem',
    color: '#64748b'
  },
  successMessage: {
    background: '#dcfce7',
    color: '#166534',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  inputGroup: {
    width: '100%'
  },
  inputRow: {
    gap: '15px'
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  },
  select: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    backgroundColor: 'white',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '40px',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  mapContainer: {
    background: 'white',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },
  mapHeader: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  mapTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e293b'
  },
  mapSubtitle: {
    fontSize: '0.85rem',
    color: '#64748b'
  },
  mapPreview: {
    width: '100%',
    height: '300px',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '16px'
  },
  mapIframe: {
    border: 'none'
  },
  openMapBtn: {
    width: '100%',
    background: 'white',
    color: '#667eea',
    border: '1px solid #667eea',
    padding: '12px 20px',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  socialSection: {
    padding: '60px 24px',
    background: '#ffffff'
  },
  socialContainer: {
    maxWidth: '1000px',
    margin: '0 auto'
  },
  socialHeader: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  socialTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e293b'
  },
  socialSubtitle: {
    fontSize: '0.9rem',
    color: '#64748b'
  },
  socialGrid: {
    gap: '20px'
  },
  socialCard: {
    background: '#f8fafc',
    borderRadius: '20px',
    padding: '24px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.03)',
    display: 'block'
  },
  socialIcon: {
    marginBottom: '12px'
  },
  socialName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1e293b'
  },
  followBtn: {
    fontSize: '0.75rem',
    color: '#667eea',
    fontWeight: '500'
  },
  quickContactSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '50px 24px',
    textAlign: 'center'
  },
  quickContactContent: {
    maxWidth: '700px',
    margin: '0 auto'
  },
  quickContactTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
    fontWeight: '700',
    marginBottom: '16px',
    color: 'white'
  },
  quickContactText: {
    fontSize: '1rem',
    marginBottom: '28px',
    color: 'rgba(255,255,255,0.9)'
  },
  quickContactButtons: {
    gap: '16px'
  },
  callBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'white',
    color: '#667eea',
    padding: '12px 28px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  quickWhatsappBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#25D366',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '40px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default Contact;