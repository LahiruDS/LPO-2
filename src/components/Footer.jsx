import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 50 50" width="36" height="36">
                  <polygon points="25,2 3,48 25,38 47,48" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="25" y1="18" x2="25" y2="38" stroke="currentColor" strokeWidth="2"/>
                  <line x1="14" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <div>
                  <span className="footer-logo-name">Jayasekara</span>
                  <span className="footer-logo-sub">Legal Associates</span>
                </div>
              </div>
              <p className="footer-about">
                Trusted law firm in Ja-Ela, Sri Lanka. Providing expert legal
                services to individuals and businesses for over 20 years.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com/jayasekaralegal" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/nipun-chinthaka-8a95821a0/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://twitter.com/jayasekaralegal" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Practice Areas</h4>
              <ul className="footer-links">
                <li><a href="#services">Family Law</a></li>
                <li><a href="#services">Corporate Law</a></li>
                <li><a href="#services">Criminal Defense</a></li>
                <li><a href="#services">Property Law</a></li>
                <li><a href="#services">Civil Litigation</a></li>
                <li><a href="#services">Immigration</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#testimonials">Client Reviews</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Free Consultation</a></li>
                <li><a href="#">Legal Blog</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Ja-Ela Office</h4>
              <ul className="footer-links">
                <li>No.19, Market Building</li>
                <li>Ja-Ela</li>
                <li>Sri Lanka 11350</li>
                <li style={{ marginTop: '12px' }}>
                  <a href="tel:+94772566357">+94 77 256 6357</a>
                </li>
                <li>
                  <a href="mailto:jayasekaralawassociate@gmail.com">jayasekaralawassociate@gmail.com</a>
                </li>
                <li style={{ marginTop: '8px', color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>
                  Mon-Fri: 9AM-5:30PM<br/>Sat: 9AM-12PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container">
          <div className="footer-bottom-inner">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Jayasekara Legal Associates. All rights reserved. | Ja-Ela, Sri Lanka<br></br>
              Designed by <a href="https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/" target="_blank" rel="noopener noreferrer">Lahiru De Silva</a>
            </p>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
