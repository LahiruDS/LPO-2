import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheck, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Visit Our Office',
    lines: ['No.19, Market Building', 'Ja-Ela, Sri Lanka 11350'],
  },
  {
    icon: <FaPhone />,
    title: 'Call Us',
    lines: [ '+94 11 222 5626', '+94 77 256 6357' ],
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Us',
    lines: ['jayasekaralawassociate@gmail.com'],
  },
  {
    icon: <FaClock />,
    title: 'Office Hours',
    lines: ['Mon - Fri: 9:00 AM - 5:30 PM', 'Saturday: 9:00 AM - 12:00 PM'],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_0xvbhyw",
      "template_2cu75y9",
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      "3vbomHScAhXc6LhTO"
    )
    .then(
      () => {
        setSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        console.log(error);
        alert("Failed to send consultation request.");
      }
    );
};

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label center">
            <span className="label-line"></span>
            <span>Contact Us</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            Get Your <span className="gold">Free Consultation</span> Today
          </h2>
          <p className="section-subtitle">
            Facing a legal issue? Talk to our experienced lawyers in Ja-Ela.
            First consultation is completely free.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div className="info-card" key={index}>
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4 className="info-title">{info.title}</h4>
                    {info.lines.map((line, i) => (
                      <p className="info-line" key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63193.54882184965!2d79.8167!3d7.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2578f5e5e5e5e%3A0x1234567890!2sJa-Ela%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jayasekara Legal Associates - Ja-Ela Office"
              ></iframe>
            </div>

            <a
              href="https://wa.me/94772566357?text=Hello%20Jayasekara%20Legal%20Associates,%20I%20would%20like%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp /> Chat with Us on WhatsApp
            </a>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Book Your Free Consultation</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07X XXX XXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Type of Legal Issue *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="family">Family Law (Divorce/Custody)</option>
                    <option value="corporate">Corporate / Business Law</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="property">Property / Conveyancing</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="immigration">Immigration</option>
                    <option value="labour">Labour / Employment</option>
                    <option value="insurance">Insurance / Motor Claims</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group full">
                <label htmlFor="message">Brief Description of Your Issue *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your legal matter..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className={`submit-btn ${submitted ? 'submitted' : ''}`}>
                {submitted ? (
                  <>
                    <FaCheck /> Request Sent! We'll Call You Soon
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Get Free Consultation
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
