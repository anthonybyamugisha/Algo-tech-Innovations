import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: 'Uganda',
      link: null
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+256 751632871 / +256 76986402',
      link: 'tel:+256751632871'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'byamugishanthony@gmail.com',
      link: 'mailto:byamugishanthony@gmail.com'
    }
  ];

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-header text-center mb-4">
          <h2>Let's Build Something Amazing Together</h2>
          <p className="section-subtitle">
            Ready to transform your business? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-description">
              We're here to help bring your vision to life. Whether you need a website, 
              mobile app, or complete digital solution, we're ready to make it happen.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.details}
                      </a>
                    ) : (
                      <p>{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send Us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+256 xxx xxx xxx"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-content text-center">
            <div className="footer-logo">
              <span className="logo-text">Algo Tech</span>
              <span className="logo-subtitle">Innovations</span>
            </div>
            <p className="footer-text">
              Transforming businesses with innovative tech solutions. 
              Built with passion by Byamugisha Anthony.
            </p>
            <p className="footer-copyright">
              © 2024 Algo Tech Innovations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;