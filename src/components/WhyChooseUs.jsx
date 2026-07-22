import { FaMapMarkerAlt, FaMoneyBillAlt, FaUserTie, FaHandshake, FaClock, FaPhoneAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Conveniently Located in Ja-Ela',
    description: 'Our office at Market Building, Ja-Ela is conveniently located on the Colombo-Katunayake highway with easy access and parking.',
  },
  {
    icon: <FaMoneyBillAlt />,
    title: 'Free Initial Consultation',
    description: 'We offer a free 30-minute initial consultation to understand your legal matter and discuss the best course of action — no obligation.',
  },
  {
    icon: <FaUserTie />,
    title: 'Experienced Senior Advocates',
    description: 'Our team includes senior advocates with appearances at the Supreme Court, Court of Appeal, and all courts across Sri Lanka.',
  },
  {
    icon: <FaHandshake />,
    title: 'Personalized Attention',
    description: 'Every client matters. We handle each case personally — not passed to junior staff. Your case gets the attention it deserves.',
  },
  {
    icon: <FaClock />,
    title: 'Prompt & Responsive',
    description: 'We respond to all client queries within 24 hours. Regular case updates and transparent communication throughout your matter.',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Island-Wide Representation',
    description: 'While based in Ja-Ela, we represent clients at courts across all 25 districts in Sri Lanka including Kandy, Galle, Jaffna, and Matara.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="why-us-bg"></div>
      <div className="section-container">
        <div className="why-us-layout">
          <div className="why-us-left">
            <div className="section-label">
              <span className="label-line"></span>
              <span>Why Choose Us</span>
            </div>
            <h2 className="why-us-title">
              Why Sri Lanka <span className="gold">Trusts</span> Jayasekara Legal
            </h2>
            <p className="why-us-text">
              For over 20 years, thousands of Sri Lankan individuals and businesses
              have trusted Jayasekara Legal Associates with their most important
              legal matters. Here's why they choose us — and keep coming back.
            </p>
            <div className="why-us-cta">
              <a href="#contact" className="btn-outline">
                Speak to a Lawyer Today
              </a>
            </div>
          </div>

          <div className="why-us-grid">
            {reasons.map((reason, index) => (
              <div className="reason-card" key={index}>
                <div className="reason-icon">{reason.icon}</div>
                <h4 className="reason-title">{reason.title}</h4>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
