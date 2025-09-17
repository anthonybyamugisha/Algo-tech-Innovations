import React from 'react';
import './WhyWebsite.css';

const WhyWebsite = () => {
  const stats = [
    {
      number: '75%',
      text: 'of customers judge credibility by website design'
    },
    {
      number: '40%',
      text: 'faster growth for businesses with websites'
    },
    {
      number: '24/7',
      text: 'your website works, generating leads while you sleep'
    }
  ];

  const benefits = [
    {
      icon: '🏆',
      title: 'Build Trust & Credibility',
      description: 'A professional website establishes your business as legitimate and trustworthy in the eyes of potential customers.'
    },
    {
      icon: '🌍',
      title: 'Expand Beyond Physical Location',
      description: 'Reach customers anywhere in the world, breaking geographical barriers and expanding your market reach.'
    },
    {
      icon: '🔍',
      title: 'Attract Customers Through Google',
      description: 'Get discovered by customers actively searching for your products or services online.'
    },
    {
      icon: '⚡',
      title: 'Automate Sales & Bookings',
      description: 'Let your website handle inquiries, bookings, and sales automatically, even when you\'re not available.'
    },
    {
      icon: '📈',
      title: 'Enhance Brand Visibility',
      description: 'Increase your brand awareness and stay top-of-mind with your target audience.'
    },
    {
      icon: '💡',
      title: 'Showcase Your Expertise',
      description: 'Demonstrate your knowledge and capabilities through case studies, portfolios, and testimonials.'
    }
  ];

  return (
    <section id="why-website" className="section section-alt">
      <div className="container">
        <div className="why-website-header text-center mb-4">
          <h2>Why Every Business Needs a Professional Website</h2>
          <p className="section-subtitle">
            In today's digital world, your website is your most powerful business tool
          </p>
        </div>

        <div className="stats-section">
          <h3 className="text-center mb-4">The Numbers Don't Lie</h3>
          <div className="stats-grid grid grid-3">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <p className="stat-text">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-section">
          <h3 className="text-center mb-4">Transform Your Business with a Website</h3>
          <div className="benefits-grid grid grid-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="promise-section text-center">
          <div className="promise-content">
            <h3 className="promise-title text-white">Our Promise to You</h3>
            <p className="promise-text text-white">
              We don't just build websites—we build business growth engines that work around the clock to attract, engage, and convert your ideal customers.
            </p>
            <div className="promise-features">
              <span className="promise-feature">Growth-Focused Design</span>
              <span className="promise-feature">Mobile-First Approach</span>
              <span className="promise-feature">SEO Optimized</span>
              <span className="promise-feature">Conversion Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;