import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'services', label: 'Practice Areas' },
    { to: 'why-us', label: 'Why Us' },
    { to: 'testimonials', label: 'Reviews' },
    { to: 'faq', label: 'FAQ' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-inner section-container">
          <div className="top-bar-left">
            <span><FaPhone /> +94 11 234 5678</span>
            <span><FaEnvelope /> info@jayasekaralegal.com</span>
          </div>
          <div className="top-bar-right">
            <span>Ja-Ela, Sri Lanka | Serving Clients Island-Wide</span>
          </div>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner section-container">
          <Link to="home" smooth={true} duration={500} className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 50 50" width="42" height="42">
                <polygon points="25,2 3,48 25,38 47,48" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="25" y1="18" x2="25" y2="38" stroke="currentColor" strokeWidth="2"/>
                <line x1="14" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Jayasekara</span>
              <span className="logo-subtitle">Legal Associates</span>
            </div>
          </Link>

          <nav className={`nav ${isMobileOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="nav-link"
                onClick={() => setIsMobileOpen(false)}
                activeClass="active"
              >
                {link.label}
              </Link>
            ))}

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <span className={`toggle-icon ${theme === 'dark' ? 'sun' : 'moon'}`}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </span>
            </button>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-cta"
              onClick={() => setIsMobileOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle-mobile" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
