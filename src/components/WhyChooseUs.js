import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '💰',
      title: 'Affordable, Transparent Pricing',
      description: 'No hidden fees or surprise costs. Clear, upfront pricing that fits your budget.'
    },
    {
      icon: '👨‍💻',
      title: 'Experienced Developers & Designers',
      description: 'Our team combines technical expertise with creative vision to deliver exceptional results.'
    },
    {
      icon: '🎯',
      title: 'Customized Solutions for Your Business',
      description: 'Every solution is tailored specifically to your unique business needs and goals.'
    },
    {
      icon: '🔧',
      title: 'Ongoing Support & Maintenance',
      description: 'We provide continuous support to ensure your digital assets perform optimally.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery Without Compromising Quality',
      description: 'Quick turnaround times while maintaining the highest standards of quality and attention to detail.'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <div className="why-choose-header text-center mb-4">
          <h2>Why Choose Algo Tech Innovations?</h2>
          <p className="section-subtitle">
            We're committed to delivering exceptional results that drive your business forward
          </p>
        </div>

        <div className="reasons-grid grid grid-2">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content text-center">
            <h3 className="cta-title text-white">Ready to Grow Your Business?</h3>
            <p className="cta-subtitle text-white">
              Let's build something amazing together that will transform your business and drive real results.
            </p>
            <div className="cta-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn btn-accent">
                Request a Quote
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;