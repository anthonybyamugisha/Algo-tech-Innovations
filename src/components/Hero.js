import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="company-logo">
              <div className="logo-circle">
                <span className="logo-initials">AT</span>
              </div>
              <div className="logo-text-hero">
                <h1 className="company-name">Algo Tech</h1>
                <p className="company-tagline">Innovations</p>
              </div>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title text-white">
              Transforming Businesses with <span className="accent-text">Innovative Tech Solutions</span>
            </h1>
            <p className="hero-subtitle text-white">
              We help businesses grow by building professional websites, mobile apps, and stunning digital designs tailored to their brand.
            </p>
            
            <div className="hero-actions">
              <button onClick={() => scrollToSection('contact')} className="btn btn-accent">
                Get Started
              </button>
              <button onClick={() => scrollToSection('services')} className="btn btn-outline-white">
                Our Services
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-highlights">
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🌐</div>
              <h3>Professional Website Development</h3>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📱</div>
              <h3>Mobile App Development</h3>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🎨</div>
              <h3>Creative Graphic Design</h3>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">⚙️</div>
              <h3>Reliable Backend Solutions</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;