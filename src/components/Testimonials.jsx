import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Kamal Perera',
    role: 'Business Owner',
    company: 'Perera Trading Co., Colombo',
    text: 'Jayasekara Legal helped me resolve a complex business dispute that had been dragging on for years. Their team was professional, responsive, and got me a favorable settlement. I highly recommend them to any business owner in Sri Lanka.',
    rating: 5,
  },
  {
    name: 'Dilini Fernando',
    role: 'Client',
    company: 'Family Law Matter',
    text: 'Going through a divorce was the hardest time of my life, but the family law team at Jayasekara Legal made it so much easier. They handled my child custody case with empathy and secured the best outcome for my children. God bless them.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    company: 'Tech Solutions Lanka',
    text: 'We used Jayasekara Legal for our company registration and BOI approval process. Everything was handled smoothly and efficiently. Their corporate law expertise is top-notch. They\'ve been our trusted legal advisors ever since.',
    rating: 5,
  },
  {
    name: 'Nimal Silva',
    role: 'Property Developer',
    company: 'Silva Constructions',
    text: 'Every property transaction I do goes through Jayasekara Legal. Their conveyancing team is meticulous with title searches and documentation. They\'ve saved me from potential legal issues on multiple occasions. Absolutely reliable.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label center">
            <span className="label-line"></span>
            <span>Client Testimonials</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            What Our <span className="gold">Clients Say</span>
          </h2>
        </div>

        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className="testimonial-card">
            <div className="testimonial-quote">
              <FaQuoteLeft />
            </div>
            <div className="testimonial-stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                <span className="author-role">{testimonials[currentIndex].role}</span>
                <span className="author-company">{testimonials[currentIndex].company}</span>
              </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
