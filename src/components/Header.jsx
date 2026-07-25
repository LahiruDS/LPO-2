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


      <header className="">
        <div className="header-inner section-container">
          <Link to="home" smooth={true} duration={500} className="logo">
<div className="logo-icon w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
  <Link to="home" smooth={true} duration={500}>
  <img
    src="/Logo2.png"
    alt="Jayasekara Legal Associates Logo"
    className="w-full h-full object-contain"
  /></Link>
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
