import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="section-container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">
              <Link to="home" smooth duration={500} className="footer-logo">
                <div className="logo-icon">
                  <img
                    src="/Logo2.png"
                    alt="Jayasekara Legal Associates Logo"
                    className="logo-image"
                  />
                </div>

                <div className="footer-logo-text">
                  <span className="footer-logo-name">Jayasekara</span>
                  <span className="footer-logo-sub">
                    Legal Associates
                  </span>
                </div>
              </Link>

              <p className="footer-about">
                Trusted law firm in Ja-Ela, Sri Lanka. Providing expert legal
                services to individuals and businesses for over 10 years.
              </p>

              <div className="footer-social">
                <a
                  href="https://facebook.com/jayasekaralegal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/in/nipun-chinthaka-8a95821a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://twitter.com/jayasekaralegal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="footer-links-group">
              <h4 className="footer-heading">Practice Areas</h4>

              <ul className="footer-links">
                <li><Link to="services" smooth duration={500}>Family Law</Link></li>
                <li><Link to="services" smooth duration={500}>Corporate Law</Link></li>
                <li><Link to="services" smooth duration={500}>Criminal Defense</Link></li>
                <li><Link to="services" smooth duration={500}>Property Law</Link></li>
                <li><Link to="services" smooth duration={500}>Civil Litigation</Link></li>
                <li><Link to="services" smooth duration={500}>Immigration</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-links-group">
              <h4 className="footer-heading">Quick Links</h4>

              <ul className="footer-links">
                <li><Link to="about" smooth duration={500}>About Us</Link></li>
                <li><Link to="why-us" smooth duration={500}>Why Choose Us</Link></li>
                <li><Link to="testimonials" smooth duration={500}>Client Reviews</Link></li>
                <li><Link to="faq" smooth duration={500}>FAQ</Link></li>
                <li><Link to="contact" smooth duration={500}>Free Consultation</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-links-group">
              <h4 className="footer-heading">Ja-Ela Office</h4>

              <ul className="footer-links">
                <li>No.19, Market Building</li>
                <li>Ja-Ela</li>
                <li>Sri Lanka 11350</li>

                <li style={{ marginTop: "12px" }}>
                  <a href="tel:+94772566357">
                    +94 77 256 6357
                  </a>
                </li>

                <li>
                  <a href="mailto:jayasekaralawassociate@gmail.com">
                    jayasekaralawassociate@gmail.com
                  </a>
                </li>

                <li
                  style={{
                    marginTop: "8px",
                    color: "rgba(255,255,255,.35)",
                    fontSize: ".82rem",
                  }}
                >
                  Mon - Fri : 9.00 AM - 5.30 PM
                  <br />
                  Sat : 9.00 AM - 12.00 PM
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="section-container">
          <div className="footer-bottom-inner">
            <p className="copyright">
              © {new Date().getFullYear()} Jayasekara Legal Associates.
              All Rights Reserved.
              <br />
              Designed by{" "}
              <a
                href="https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lahiru De Silva
              </a>
            </p>

            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to Top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;