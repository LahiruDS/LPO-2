import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I book a consultation with Jayasekara Legal?',
    answer: 'You can book a free consultation by calling us at +94 11 234 5678, sending a WhatsApp message, or filling out the contact form on our website. We also welcome walk-in visits at our Ja-Ela office during business hours (Mon-Fri 9AM-5:30PM, Sat 9AM-12PM).',
  },
  {
    question: 'How much does a lawyer cost in Sri Lanka?',
    answer: 'Legal fees in Sri Lanka vary depending on the type and complexity of the case. At Jayasekara Legal Associates, we offer a free initial 30-minute consultation. After understanding your case, we provide a clear fee estimate before any work begins. We offer flexible payment plans for many types of cases.',
  },
  {
    question: 'What areas of law does Jayasekara Legal handle?',
    answer: 'We handle a wide range of legal matters including family law (divorce, custody, maintenance), corporate law, criminal defense, property and conveyancing, civil litigation, immigration law, labour and employment law, and insurance claims. We serve clients across all 25 districts in Sri Lanka.',
  },
  {
    question: 'Can you help with my divorce case in Sri Lanka?',
    answer: 'Yes, our family law team handles all divorce matters under Sri Lankan law, including both Sinhala Tamil Muslim Marriage and Divorce Acts. We handle contested and uncontested divorces, child custody disputes, maintenance claims, division of property, and domestic violence matters.',
  },
  {
    question: 'Do you handle cases outside Ja-Ela?',
    answer: 'Absolutely. While our office is in Ja-Ela, we represent clients at courts across Sri Lanka including Kandy, Galle, Matara, Jaffna, Kurunegala, Negombo, and all other districts. We have an island-wide network of legal professionals.',
  },
  {
    question: 'How long does a court case take in Sri Lanka?',
    answer: 'The duration depends on the type of case and the court. Simple matters may be resolved in a few months, while complex litigation can take 1-3 years. During your consultation, we will give you a realistic timeline for your specific case and work to expedite the process.',
  },
  {
    question: 'What documents should I bring for my first consultation?',
    answer: "For your first consultation, bring any documents related to your legal matter — contracts, court papers, correspondence, photographs, police reports, or any other relevant documentation. Don't worry if you don't have everything; we can guide you on what additional documents may be needed.",
  },
  {
    question: 'Do you provide legal services in Tamil and Sinhala?',
    answer: 'Yes, our team includes lawyers who are fluent in Sinhala, Tamil, and English. We can provide legal services and consultations in all three languages to ensure clear communication throughout your case.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label center">
            <span className="label-line"></span>
            <span>FAQ</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gold">Questions</span>
          </h2>
          <p className="section-subtitle">
            Common questions about legal services in Sri Lanka
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <FaChevronDown className={`faq-arrow ${openIndex === index ? 'rotated' : ''}`} />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
