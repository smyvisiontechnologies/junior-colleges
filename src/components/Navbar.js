import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Handle logo click to navigate home
  const handleLogoClick = () => {
    navigate("/");
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Logo Section - Clickable */}
        <div className="logo-section" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <div className="logo-wrapper">
            <img src={logo} alt="Vegha Junior College Logo" className="logo" />
          </div>
          <div className="logo-text">
            <h2>Vegha <span>Junior College</span></h2>
            <p>Excellence in Education</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 3L21 9L19 10.5M5 10V19H19V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Home</span>
          </Link>

          <Link to="/about" className="nav-link" onClick={handleLinkClick}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M5 20V19C5 15.6863 7.68629 13 11 13H13C16.3137 13 19 15.6863 19 19V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>About</span>
          </Link>

          <Link to="/courses" className="nav-link" onClick={handleLinkClick}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span>Courses</span>
          </Link>

          <Link to="/achievements" className="nav-link" onClick={handleLinkClick}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="14" r="1" fill="currentColor"/>
            </svg>
            <span>Achievements</span>
          </Link>

          <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L12 13L21 8M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-header">
            <div className="mobile-logo-text">
              <h3>Vegha <span>Junior College</span></h3>
            </div>
          </div>
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={handleLinkClick}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 3L21 9L19 10.5M5 10V19H19V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Home</span>
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={handleLinkClick}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 20V19C5 15.6863 7.68629 13 11 13H13C16.3137 13 19 15.6863 19 19V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>About</span>
            </Link>
            <Link to="/courses" className="mobile-nav-link" onClick={handleLinkClick}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span>Courses</span>
            </Link>
            <Link to="/achievements" className="mobile-nav-link" onClick={handleLinkClick}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="14" r="1" fill="currentColor"/>
              </svg>
              <span>Achievements</span>
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L12 13L21 8M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 5%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          padding: 0.75rem 5%;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        /* Logo Section */
        .logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-section:hover {
          transform: scale(1.02);
        }

        .logo-section:active {
          transform: scale(0.98);
        }

        .logo-wrapper {
          position: relative;
          transition: transform 0.3s ease;
        }

        .logo-wrapper:hover {
          transform: scale(1.05);
        }

        .logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 12px;
        }

        .logo-text h2 {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-text h2 span {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-text p {
          font-size: 0.7rem;
          color: #667eea;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        /* Desktop Navigation Links */
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #2d3748;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 0.75rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .nav-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: #667eea;
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }

        .nav-link:hover .nav-icon {
          transform: translateY(-2px) scale(1.1);
        }

        /* Active link indicator */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 70%;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background: #2d3748;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .mobile-menu-btn.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }

        .mobile-menu-overlay.open {
          right: 0;
        }

        .mobile-menu-container {
          padding: 6rem 2rem 2rem;
        }

        .mobile-menu-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .mobile-logo-text h3 {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-logo-text h3 span {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          text-decoration: none;
          color: #2d3748;
          font-weight: 500;
          font-size: 1.1rem;
          border-radius: 16px;
          transition: all 0.3s ease;
          background: rgba(102, 126, 234, 0.05);
          animation: slideIn 0.3s ease backwards;
        }

        .mobile-nav-link:nth-child(1) { animation-delay: 0.05s; }
        .mobile-nav-link:nth-child(2) { animation-delay: 0.1s; }
        .mobile-nav-link:nth-child(3) { animation-delay: 0.15s; }
        .mobile-nav-link:nth-child(4) { animation-delay: 0.2s; }
        .mobile-nav-link:nth-child(5) { animation-delay: 0.25s; }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-nav-link:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
          transform: translateX(10px);
          color: #667eea;
        }

        .mobile-nav-link .nav-icon {
          width: 24px;
          height: 24px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .logo-text h2 {
            font-size: 1.1rem;
          }

          .logo-text p {
            font-size: 0.6rem;
          }

          .logo {
            width: 40px;
            height: 40px;
          }

          .navbar {
            padding: 0.75rem 5%;
          }
        }

        /* Tablet styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-links {
            gap: 1.2rem;
          }
          
          .nav-link span {
            font-size: 0.9rem;
          }
        }

        /* Ensure content below navbar has spacing */
        body {
          margin: 0;
          padding-top: 80px;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default Navbar;