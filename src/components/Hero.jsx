import { Link } from 'react-scroll';
import { FaArrowRight, FaBalanceScale, FaUsers, FaShieldAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-pattern"></div>

      <div className="hero-content section-container">
        <div className="hero-badge">
          <span className="badge-line"></span>
          <span>Sri Lanka's Trusted Law Firm</span>
          <span className="badge-line"></span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">Your Trusted Legal</span>
          <span className="title-line gold">Partners in Sri Lanka</span>
        </h1>

        <p className="hero-description">
          Jayasekara Legal Associates provides expert legal representation
          for individuals and businesses across Sri Lanka. From family disputes
          to corporate matters, we fight for your rights with dedication and integrity.
        </p>

        <div className="hero-actions">
          <Link to="contact" smooth={true} duration={500} className="btn-primary">
            <span>Book Free Consultation</span>
            <FaArrowRight />
          </Link>
          <Link to="services" smooth={true} duration={500} className="btn-secondary">
            <span>Our Practice Areas</span>
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon"><FaBalanceScale /></div>
            <div className="stat-content">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Practice</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon"><FaUsers /></div>
            <div className="stat-content">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Clients Served</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon"><FaShieldAlt /></div>
            <div className="stat-content">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
