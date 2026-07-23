import { FaCheck, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    'Sri Lanka Bar Association Registered',
    '10+ Years of Legal Excellence in Sri Lanka',
    'Serving Clients Across All 25 Districts',
    'Free Initial Legal Consultation',
  ];

  return (
    <section id="about" className="about">
      <div className="about-top-border"></div>
      <div className="section-container">
        <div className="about-grid">
          <div className="about-left">
            <div className="section-label">
              <span className="label-line"></span>
              <span>About Our Firm</span>
            </div>
            <h2 className="about-title">
              Defending <span className="gold">Your Rights</span> Across Sri Lanka
            </h2>
            <p className="about-text">
              Founded in 2016 in Ja-Ela, Jayasekara Legal Associates has been
              a pillar of legal excellence in Sri Lanka for over two decades. Our
              team of experienced advocates and attorneys provides personalized
              legal representation to individuals, families, and businesses
              throughout the island.
            </p>
            <p className="about-text">
              We understand that every legal matter is unique. Whether you're
              facing a family dispute, a corporate challenge, a criminal charge,
              or a property matter — our team is committed to protecting your
              interests and achieving the best possible outcome for you.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="highlight-item" key={index}>
                  <div className="highlight-check">
                    <FaCheck />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-visual">
              <div className="visual-card card-1">
                <FaAward />
                <span>Award Winning<br/>Legal Team</span>
              </div>
              <div className="visual-card card-2">
                <FaUsers />
                <span>30+ Expert<br/>Attorneys</span>
              </div>
              <div className="visual-card card-3">
                <FaHandshake />
                <span>5000+ Happy<br/>Clients</span>
              </div>
              <div className="visual-center">
                <div className="center-icon">
                  <svg viewBox="0 0 80 80" width="80" height="80">
                    <polygon points="40,4 6,76 40,60 74,76" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="40" y1="24" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="24" y1="48" x2="56" y2="48" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
