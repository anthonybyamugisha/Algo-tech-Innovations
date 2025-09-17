import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites tailored to your brand',
      features: [
        'SEO-optimized for higher Google ranking',
        'Fully responsive for mobile, tablet & desktop',
        'Fast loading and secure',
        'Content management systems'
      ]
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      features: [
        'Android & iOS mobile apps',
        'Business apps for sales & services',
        'Internal operations management',
        'Real-time data synchronization'
      ]
    },
    {
      title: 'Frontend & Backend Solutions',
      description: 'Complete full-stack development',
      features: [
        'User-friendly frontends with React',
        'Secure backend systems with Django',
        'RESTful API development',
        'Database design and optimization'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header text-center mb-4">
          <h2 className="text-white">What Makes Our Services Exceptional?</h2>
          <p className="section-subtitle text-white">
            Comprehensive digital solutions designed to transform your business and drive growth
          </p>
        </div>

        <div className="services-grid grid grid-2">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta text-center mt-4">
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss how our services can help you achieve your goals</p>
          <div className="cta-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Request a Quote
            </button>
            <button onClick={() => scrollToSection('why-website')} className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;