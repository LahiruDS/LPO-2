import { FaHome, FaBuilding, FaGavel, FaUsers, FaUserShield, FaFileContract, FaCar, FaBalanceScale } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaUsers />,
    title: 'Family Law',
    description: 'Compassionate legal support for divorce, child custody, maintenance claims, domestic violence cases, and adoption matters under Sri Lankan family law.',
    features: ['Divorce & Separation', 'Child Custody', 'Maintenance Claims'],
  },
  {
    icon: <FaBuilding />,
    title: 'Corporate & Business Law',
    description: 'Complete business legal solutions including company registration at the Registrar General, BOI approvals, partnership agreements, and corporate compliance.',
    features: ['Company Registration', 'BOI Approval', 'Contracts'],
  },
  {
    icon: <FaGavel />,
    title: 'Criminal Defense',
    description: 'Aggressive criminal defense representation at all courts in Sri Lanka — from Magistrate Courts to the Supreme Court. Bail applications, appeals, and trials.',
    features: ['Bail Applications', 'Criminal Trials', 'Appeals'],
  },
  {
    icon: <FaHome />,
    title: 'Property & Conveyancing',
    description: 'Expert property legal services including land registry searches, title verification, sale agreements, lease agreements, and stamp duty matters.',
    features: ['Title Verification', 'Sale Agreements', 'Land Registry'],
  },
  {
    icon: <FaBalanceScale />,
    title: 'Civil Litigation',
    description: 'Strong civil litigation representation for contract disputes, debt recovery, defamation, tort claims, and commercial disputes at all courts.',
    features: ['Contract Disputes', 'Debt Recovery', 'Tort Claims'],
  },
  {
    icon: <FaUserShield />,
    title: 'Immigration Law',
    description: 'Complete immigration support including Sri Lankan visa applications, work permits, citizenship matters, and emigration assistance.',
    features: ['Visa Applications', 'Work Permits', 'Citizenship'],
  },
  {
    icon: <FaFileContract />,
    title: 'Labour & Employment Law',
    description: 'Expert advice on wrongful termination, workplace disputes, EPF/ETF compliance, employment contracts, and Industrial Court proceedings.',
    features: ['Wrongful Termination', 'EPF/ETF', 'Industrial Court'],
  },
  {
    icon: <FaCar />,
    title: 'Insurance & Motor Claims',
    description: 'Motor accident claims, insurance disputes, third-party claims, and vehicle damage compensation. We handle negotiations and litigation on your behalf.',
    features: ['Accident Claims', 'Insurance Disputes', 'Third Party Claims'],
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label center">
            <span className="label-line"></span>
            <span>Our Practice Areas</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            Expert Legal Services <span className="gold">Across Sri Lanka</span>
          </h2>
          <p className="section-subtitle">
            From Ja-Ela to Jaffna, we provide comprehensive legal representation
            for all your personal and business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span className="service-tag" key={i}>{feature}</span>
                ))}
              </div>
              <div className="service-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
