import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          
          {/* Column 1: College Info & Logo */}
          <div className="footer-col">
            <div className="footer-logo-section">
              <img src={logo} alt="Vegha Junior College Logo" className="footer-logo" />
              <div className="footer-logo-text">
                <h3>Vegha <span>Junior College</span></h3>
              </div>
            </div>
            <div className="footer-quote">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H6C4.89543 11 4 11.8954 4 13V17C4 18.1046 4.89543 19 6 19H10C11.1046 19 12 18.1046 12 17V13C12 11.8954 11.1046 11 10 11ZM10 11V8C10 5.79086 11.7909 4 14 4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 11H16C14.8954 11 14 11.8954 14 13V17C14 18.1046 14.8954 19 16 19H20C21.1046 19 22 18.1046 22 17V13C22 11.8954 21.1046 11 20 11ZM20 11V8C20 5.79086 18.2091 4 16 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p>"Empowering minds, shaping futures — where excellence meets opportunity."</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="/contact">Admissions</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>123 Education Street,<br />Knowledge City, KA 560001</span>
              </li>
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
              </li>
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <a href="mailto:info@Veghajuniorcollege.edu" className="contact-link">info@Veghajuniorcollege.edu</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media & Development Credit */}
          <div className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 13.3c-.3.5-.8.9-1.4 1-.6.1-1.2-.1-1.7-.5a5.5 5.5 0 0 1-1.6-2.1c-.3-.6-.3-1.3 0-1.9.2-.4.6-.7 1-.8.3 0 .6 0 .8.3l.7 1.2c.2.3.2.7 0 1-.2.3-.5.6-.8.8.3.6.8 1.1 1.4 1.4.2.1.5.1.7-.1.2-.2.4-.5.6-.8.3-.2.7-.2 1 0l1.2.7c.3.2.4.6.3.9z" fill="currentColor"/>
                </svg>
              </a>
            </div>

            {/* Development Credit - Plain text with clickable link (no icon) */}
            <div className="development-credit">
              <div className="dev-divider"></div>
              <p className="dev-text">Developed by</p>
              <a 
                href="https://smyvisiontechnologies.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dev-link-plain"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Vegha Junior College. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #e2e8f0;
          padding: 3rem 0 0 0;
          margin-top: 4rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated gradient border on top */
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea);
          background-size: 200% 100%;
          animation: gradientMove 3s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        /* Column Styles */
        .footer-col {
          animation: fadeInUp 0.6s ease backwards;
        }

        .footer-col:nth-child(1) { animation-delay: 0.1s; }
        .footer-col:nth-child(2) { animation-delay: 0.2s; }
        .footer-col:nth-child(3) { animation-delay: 0.3s; }
        .footer-col:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Logo Section */
        .footer-logo-section {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          width: 55px;
          height: 55px;
          object-fit: contain;
          border-radius: 14px;
          transition: transform 0.3s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05) rotate(5deg);
        }

        .footer-logo-text h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-logo-text h3 span {
          background: linear-gradient(135deg, #a5b4fc 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Quote Section */
        .footer-quote {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 16px;
          border-left: 3px solid #667eea;
          position: relative;
        }

        .quote-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
          margin-bottom: 0.5rem;
          opacity: 0.7;
        }

        .footer-quote p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #cbd5e1;
          font-style: italic;
          margin: 0;
        }

        /* Titles */
        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        /* Links Lists */
        .footer-links, .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li, .footer-contact li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .footer-links a::before {
          content: '→';
          opacity: 0;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #a5b4fc;
          transform: translateX(5px);
        }

        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* Contact Items */
        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.85rem;
          line-height: 1.4;
          color: #cbd5e1;
        }

        .contact-icon {
          width: 18px;
          height: 18px;
          min-width: 18px;
          color: #667eea;
          margin-top: 2px;
        }

        /* Contact Links (Phone & Email) */
        .contact-link {
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .contact-link:hover {
          color: #a5b4fc;
          transform: translateX(3px);
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #cbd5e1;
        }

        .social-icon svg {
          width: 20px;
          height: 20px;
        }

        .social-icon:hover {
          transform: translateY(-5px);
        }

        .social-icon.instagram:hover {
          background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
          color: white;
          transform: translateY(-5px) scale(1.1);
        }

        .social-icon.youtube:hover {
          background: #ff0000;
          color: white;
          transform: translateY(-5px) scale(1.1);
        }

        .social-icon.facebook:hover {
          background: #1877f2;
          color: white;
          transform: translateY(-5px) scale(1.1);
        }

        .social-icon.whatsapp:hover {
          background: #25d366;
          color: white;
          transform: translateY(-5px) scale(1.1);
        }

        /* Development Credit - Plain Text Style (No Icons) */
        .development-credit {
          margin-top: 1rem;
          padding-top: 1rem;
        }

        .dev-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
          margin-bottom: 1rem;
        }

        .dev-text {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .dev-link-plain {
          display: inline-block;
          padding: 0.6rem 1rem;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 12px;
          text-decoration: none;
          color: #a5b4fc;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(102, 126, 234, 0.3);
          cursor: pointer;
        }

        .dev-link-plain:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
          margin-top: 1rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
        }

        .footer-bottom p {
          margin: 0;
          color: #94a3b8;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #a5b4fc;
        }

        .separator {
          color: #334155;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer {
            padding: 2rem 0 0 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-title {
            display: block;
            text-align: center;
          }

          .footer-links li {
            text-align: center;
          }

          .footer-links a {
            justify-content: center;
          }

          .footer-contact li {
            justify-content: center;
          }

          .footer-quote {
            text-align: center;
          }

          .footer-logo-section {
            justify-content: center;
          }

          .dev-link-plain {
            display: block;
            text-align: center;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;